/*
  Monta o deck a partir dos arquivos em blocos/ e renderiza em HTML.

    node build.mjs           deck inteiro   -> oficina.html
    node build.mjs 08        só o bloco 08  -> previa-08.html
    node build.mjs 03 08     alguns blocos  -> previa-03-08.html

  A ordem é a ordem alfabética dos arquivos em blocos/ — por isso o
  prefixo numérico. Para reordenar, renomeie os arquivos.
*/

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = dirname(fileURLToPath(import.meta.url));
const dirBlocos = join(raiz, 'blocos');

const CABECALHO = `---
marp: true
theme: oficina
size: 16:9
paginate: true
lang: pt-BR
---
`;

const filtros = process.argv.slice(2);

const arquivos = readdirSync(dirBlocos)
  .filter((f) => f.endsWith('.md'))
  .sort()
  .filter((f) => filtros.length === 0 || filtros.some((p) => f.startsWith(p)));

if (arquivos.length === 0) {
  console.error(`Nenhum bloco encontrado em blocos/${filtros.length ? ` com prefixo ${filtros.join(', ')}` : ''}.`);
  process.exit(1);
}

const partes = arquivos.map((f) => readFileSync(join(dirBlocos, f), 'utf8').trim());
const deck = CABECALHO + '\n' + partes.join('\n\n---\n\n') + '\n';

// O markdown montado fica NESTA pasta (não em .build/) de propósito: assim
// o caminho de uma imagem é o mesmo na hora de renderizar e dentro do HTML
// gerado. Com o fonte em .build/, "foto.jpeg" resolveria em duas pastas
// diferentes e a imagem sumiria do deck final.
const fonte = join(raiz, '.deck.md');
writeFileSync(fonte, deck, 'utf8');

const saida = join(raiz, filtros.length ? `previa-${filtros.join('-')}.html` : 'oficina.html');

console.log(`Blocos: ${arquivos.join(', ')}`);
console.log(`Renderizando -> ${saida}`);

// shell: true é necessário no Windows (Node recusa spawn direto de .cmd).
// Os caminhos vão entre aspas por causa dos espaços e acentos em "Área de Trabalho".
const q = (s) => `"${s}"`;
const comando = [
  'npx', '-y', '@marp-team/marp-cli@latest',
  q(fonte),
  '--theme-set', q(join(raiz, 'tema.css')),
  '--html', '--allow-local-files',
  '-o', q(saida),
].join(' ');

execSync(comando, { stdio: 'inherit', cwd: raiz, shell: true });

console.log('Pronto.');
