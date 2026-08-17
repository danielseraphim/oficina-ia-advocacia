/* Gera os dois códigos do slide 24.
   O do WhatsApp leva o logo no miolo: correção de erro H (recupera ~30% do
   código), e o emblema tapa ~5% da área — folga enorme. Mesmo assim, o
   arquivo só entra no deck depois de decodificar.

   Precisa da biblioteca: `npm i qrcode` na pasta antes de rodar. */
import QR from 'qrcode';
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// os SVG saem na pasta do próprio script, que é onde o deck os procura
const DEST = dirname(fileURLToPath(import.meta.url));
const TINTA = '#1B1B1F';
const PAPEL = '#FDFCF7';

/* O emblema do WhatsApp, desenhado aqui: bolha de conversa com a cauda no
   canto inferior esquerdo e o fone dentro. Monocromático na tinta do tema —
   o verde da marca brigaria com o deck inteiro, e o que a sala precisa
   reconhecer é a silhueta, que é o que identifica o aplicativo. */
const EMBLEMA = `
<g transform="translate(CX,CY) scale(SC)">
  <path fill="${TINTA}" d="M12 0.6C5.7 0.6 0.6 5.7 0.6 12c0 2.05 0.55 4.02 1.58 5.74L0.4 23.6l6.02-1.72A11.36 11.36 0 0 0 12 23.4c6.3 0 11.4-5.1 11.4-11.4S18.3 0.6 12 0.6z"/>
  <path fill="${PAPEL}" d="M8.62 6.35c-0.23-0.52-0.44-0.5-0.66-0.51h-0.56c-0.2 0-0.51 0.07-0.78 0.36-0.27 0.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.02c0.15 0.19 2.03 3.25 5.02 4.42 2.48 0.98 2.99 0.78 3.53 0.73 0.54-0.05 1.73-0.71 1.98-1.39 0.24-0.68 0.24-1.27 0.17-1.39-0.07-0.12-0.27-0.19-0.56-0.34-0.29-0.14-1.73-0.85-2-0.95-0.27-0.1-0.46-0.15-0.66 0.15-0.19 0.29-0.75 0.95-0.92 1.14-0.17 0.19-0.34 0.22-0.63 0.07-0.29-0.14-1.24-0.46-2.36-1.46-0.87-0.78-1.46-1.74-1.63-2.03-0.17-0.29-0.02-0.45 0.13-0.6 0.13-0.13 0.29-0.34 0.44-0.51 0.15-0.17 0.19-0.29 0.29-0.49 0.1-0.19 0.05-0.36-0.02-0.51-0.07-0.15-0.65-1.58-0.89-2.16z"/>
</g>`;

function comEmblema(svg, modulos) {
  // um quadrado de papel de 7x7 módulos no centro, e o emblema dentro dele
  const c = modulos / 2;
  const lado = 7.6;
  const knockout =
    `<rect x="${(c - lado / 2).toFixed(2)}" y="${(c - lado / 2).toFixed(2)}" ` +
    `width="${lado}" height="${lado}" rx="1.1" fill="${PAPEL}"/>`;
  const escala = 5.6 / 24;                 // o emblema ocupa 5.6 módulos
  const g = EMBLEMA
    .replace('CX', (c - 5.6 / 2).toFixed(3))
    .replace('CY', (c - 5.6 / 2).toFixed(3))
    .replace('SC', escala.toFixed(5));
  return svg.replace('</svg>', knockout + g + '</svg>');
}

(async () => {
  const opts = { errorCorrectionLevel: 'H', margin: 0, type: 'svg',
                 color: { dark: TINTA + 'FF', light: '#00000000' } };

  let wa = await QR.toString('https://wa.me/5524999815783', opts);
  wa = comEmblema(wa, 29);
  writeFileSync(join(DEST, 'qr-whatsapp.svg'), wa);

  const repo = await QR.toString('https://github.com/danielseraphim/oficina-ia-advocacia', opts);
  writeFileSync(join(DEST, 'qr-repo.svg'), repo);

  console.log('qr-whatsapp.svg (29 módulos, H, com emblema) e qr-repo.svg (41 módulos, H) gerados');
})();
