/*
  Baixa as fontes do deck do Google Fonts e escreve slides/fontes.css com os
  woff2 embutidos em base64 — o deck deixa de depender de internet.

  Uso: node embutir-fontes.mjs "<pasta slides>"

  Famílias:
    Spectral        — o texto do deck (o direito fala em serifada)
    JetBrains Mono  — a voz da máquina (prompt e saída da IA)
    Poppins         — só o cartaz de abertura, que reproduz a arte oficial
                      do evento e usa uma geométrica, não a serifada

  Só os subconjuntos latin e latin-ext entram (os outros — cirílico, grego,
  vietnamita — só engordariam o arquivo). As três famílias são licenciadas em
  OFL, que permite embutir.
*/

import { writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dirSlides = process.argv[2];
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
           '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const URL_CSS = 'https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;500;600;800' +
                '&family=JetBrains+Mono:wght@400;500' +
                '&family=Poppins:wght@500;700;800&display=swap';
const SUBCONJUNTOS = ['latin', 'latin-ext'];

const log = (...a) => console.log(...a);

log('Buscando o CSS do Google Fonts...');
const resp = await fetch(URL_CSS, { headers: { 'User-Agent': UA } });
if (!resp.ok) { console.error('Falhou:', resp.status, resp.statusText); process.exit(1); }
const css = await resp.text();
log(`CSS recebido: ${css.length} caracteres`);

// O CSS vem em blocos precedidos de um comentário com o nome do subconjunto:
//   /* latin-ext */
//   @font-face { ... }
const blocos = [];
const re = /\/\*\s*([a-z0-9-]+)\s*\*\/\s*(@font-face\s*\{[^}]*\})/g;
let m;
while ((m = re.exec(css)) !== null) blocos.push({ subconjunto: m[1], regra: m[2] });
log(`Blocos @font-face encontrados: ${blocos.length}`);

const escolhidos = blocos.filter((b) => SUBCONJUNTOS.includes(b.subconjunto));
log(`Depois de filtrar por ${SUBCONJUNTOS.join(' e ')}: ${escolhidos.length}`);
if (escolhidos.length === 0) { console.error('Nada a embutir — abortado.'); process.exit(1); }

let total = 0;
const partes = [];
for (const [i, b] of escolhidos.entries()) {
  const familia = /font-family:\s*'([^']+)'/.exec(b.regra)?.[1] ?? '?';
  const peso = /font-weight:\s*([^;]+);/.exec(b.regra)?.[1].trim() ?? '400';
  const estilo = /font-style:\s*([^;]+);/.exec(b.regra)?.[1].trim() ?? 'normal';
  const faixa = /unicode-range:\s*([^;]+);/.exec(b.regra)?.[1].trim();
  const url = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/.exec(b.regra)?.[1];
  if (!url) { console.error('Sem URL em um bloco — pulando'); continue; }

  const r = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!r.ok) { console.error('Falhou o download de', url, r.status); process.exit(1); }
  const buf = Buffer.from(await r.arrayBuffer());
  total += buf.length;
  log(`  ${i + 1}/${escolhidos.length}  ${familia} ${peso} (${b.subconjunto}) — ${(buf.length / 1024).toFixed(0)} kB`);

  partes.push(
    `/* ${familia} ${peso} — ${b.subconjunto} */\n` +
    `@font-face {\n` +
    `  font-family: '${familia}';\n` +
    `  font-style: ${estilo};\n` +
    `  font-weight: ${peso};\n` +
    `  font-display: swap;\n` +
    `  src: url(data:font/woff2;base64,${buf.toString('base64')}) format('woff2');\n` +
    (faixa ? `  unicode-range: ${faixa};\n` : '') +
    `}`
  );
}

const cabecalho = `/*
  Fontes do deck, embutidas — o deck não depende de internet.

  Gerado a partir do Google Fonts (Spectral e JetBrains Mono, ambas OFL),
  subconjuntos latin e latin-ext, formato woff2 em base64.

  Quem usa este arquivo: tema.css (o deck) e animacao-llm.html (a animação,
  que é um documento separado e por isso precisa importar por conta própria).

  Não edite à mão. Para regerar, rode o script que está descrito no LEIAME.
*/

`;

const saida = join(dirSlides, 'fontes.css');
writeFileSync(saida, cabecalho + partes.join('\n\n') + '\n', 'utf8');
const tamanho = readFileSync(saida).length;
log(`\nEscrito: ${saida}`);
log(`woff2 baixados: ${(total / 1024).toFixed(0)} kB · fontes.css: ${(tamanho / 1024).toFixed(0)} kB`);
