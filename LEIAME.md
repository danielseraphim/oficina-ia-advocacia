# Como esta pasta funciona

Tudo é texto puro, editável à mão em qualquer editor. Nada depende de abrir
programa pesado. Se você quiser reaproveitar o tema, o roteiro ou os
documentos fictícios numa aula sua, é só mexer nos arquivos.

```
referencias.md               as normas e os julgados citados, com o link de cada um
LEIAME.md                    este arquivo

roteiro/
  bloco-8-demo.md            um arquivo por bloco: o que eu falo

slides/
  tema.css                   o design system — mexeu aqui, mudou o deck todo
  fontes.css                 as fontes embutidas — o deck não depende de internet
  animacao-llm.html          a animação do bloco 2, o sorteio (abre sozinha no navegador)
  animacao-harness.html      a segunda animação do bloco 2, o harness (idem)
  animacao-oraculo.html      a animação do bloco 9, o oráculo por aplicativo (idem)
  blocos/
    00-capa.md               um arquivo por bloco: os slides daquele bloco
    08-demo.md
  build.mjs                  monta e renderiza
  embutir-fontes.mjs         regera fontes.css (só se mudar fonte do tema)
  gera-qr.mjs                regera os dois QR do slide 24 (precisa `npm i qrcode`)
  qr-whatsapp.svg            o código do WhatsApp, com o emblema no miolo
  qr-repo.svg                o código deste repositório
  oficina.html               a saída — é isso que eu abro para apresentar

materiais/
  contrato-ficticio.md       o contrato da demo, em texto (fonte editável)
  Contrato - ... .docx       o mesmo contrato em Word, para subir no app
  Distrato - ... .docx       o documento do momento-ganho do bloco 3
  ementas.md                 as duas ementas do bloco 1 (a real e a fabricada)
  paragrafo-anonimizacao.md  o parágrafo fictício da demo de anonimização (bloco 5)
```

A numeração dos blocos pula o 7: era "a noite em sete frases", e ele foi
cortado antes da oficina — decálogo de máximas é exatamente a fórmula que o
resto do material recusa. Os slides e o roteiro dele ficaram de fora daqui
junto com o bloco.

Os gabaritos das armadilhas plantadas no contrato e no distrato também não
subiram. Quem quiser usar os documentos numa aula própria acha as armadilhas
lendo — que é o exercício.

## Gerar o deck

```bash
node slides/build.mjs
```

Monta todos os arquivos de `slides/blocos/` na ordem alfabética do nome e
escreve `slides/oficina.html`. Abra esse HTML no navegador: setas navegam,
`F` põe em tela cheia, `P` abre a visão do apresentador.

Para iterar rápido em um bloco só, sem montar o resto:

```bash
node slides/build.mjs 08
```

Gera `slides/previa-08.html` com apenas aquele bloco.

## Editar slides

Cada arquivo em `slides/blocos/` é markdown. `---` numa linha sozinha separa
um slide do outro. A ordem dos blocos é o prefixo numérico do nome do
arquivo — para reordenar, renomeie.

Os componentes visuais estão comentados dentro de `tema.css`. Os principais:

| O que | Como escrever |
|---|---|
| Título corrente no alto da página | `<div class="cabeca">texto</div>` |
| Nota de rodapé (filete curto + texto pequeno) | `<div class="rodape">texto</div>` |
| Prompt ou saída da IA | bloco de código cercado com ``` |
| Trecho de contrato, ementa, peça | `<div class="peca">texto</div>` |
| O mesmo, em coluna estreita (duas ementas lado a lado) | `<div class="peca compacta">` |
| Linha que identifica o julgado (número, relator, data) | `<div class="fonte-peca">` — com `riscada` junto, sai cortada em rubrica. É o texto mais forte da coluna, de propósito — ver abaixo |
| Fotografia sangrando na margem, texto ao lado | `<!-- _class: retrato -->` + `<div class="foto"><img src="arquivo.jpeg"></div>` + `<div class="fala"><p>…</p></div>` |
| Sumário com pontilhado | `<div class="indice">` com `<div class="linha"><span class="item">…</span><span class="pontos"></span><span class="desc">…</span></div>` |
| Item numerado | `<div class="sumula"><div class="n">1</div><div class="t">…</div></div>` |
| Duas colunas com fio central | `<div class="duas"><div>…</div><div>…</div></div>` |
| Afirmação grande centrada | `<!-- _class: center -->` + `<div class="destaque">texto</div>` |
| Cartaz de abertura | `<!-- _class: cartaz -->` — ver `blocos/00-capa.md` |
| Capa em frontispício (não usada hoje) | `<!-- _class: cover -->` — o CSS continua no tema, caso você queira voltar atrás |

**O slide 1 é o cartaz do evento, não uma capa.** Ele reproduz a arte oficial
da divulgação adaptada de retrato (4:5) para paisagem (16:9), para quem chegou
pelo Instagram reconhecer a peça na tela. É o único slide fora do tema de
página impressa, de propósito — ele é o cartaz, não o livro.

Dois arquivos foram extraídos da arte de divulgação e vivem em `slides/`:

- `retrato-daniel.png` — o retrato circular, com fundo transparente. O círculo
  foi localizado por detecção do maior componente conectado (deu 380×380 px
  exatos), e os pontinhos vermelhos que a arte desenha por cima do ombro
  saíram por inpainting (OpenCV/Telea) com máscara restrita ao vermelho
  saturado — uma máscara larga demais come tom de pele e destrói o rosto.
- `logos-oab-esa.png` — a faixa OAB-VR + ESA, com fundo transparente, para
  assentar tanto no branco do cartaz quanto no papel do resto do deck.

A grade de bolinhas vermelhas da arte **não** é imagem: é desenhada em CSS
(`.pontos`, um `radial-gradient` repetido), então escala sem perder nitidez e
acompanha a cor do cartaz.

As cores foram amostradas da própria arte e depois **escurecidas para
projeção** — cor saturada demais floresce no projetor e come o contraste do
texto branco. Ficam em `--cartaz-azul`, `--cartaz-vermelho` e
`--cartaz-amarelo`, no `:root` do tema, com os valores originais anotados ao
lado.

A tipografia é Poppins (geométrica, próxima da original, que não é distribuída
publicamente) — e por isso ela entrou na lista do `embutir-fontes.mjs`.

**Cuidado ao editar CSS por script no Windows:** o `Out-File -Encoding utf8`
do PowerShell 5.1 grava BOM, e o BOM impede o Marp de ler a diretiva
`/* @theme oficina */` — o deck sai em branco, sem erro nenhum. Use Node ou o
editor para escrever CSS.

As imagens do deck ficam soltas em `slides/`, ao lado dos HTML — é a mesma
pasta em que o `build.mjs` escreve o markdown montado, e por isso o caminho
relativo funciona tanto no render quanto no HTML final.

**Imagens:** ponha o arquivo em `slides/` e cite só o nome
(`<img src="foto-hackaton.jpeg">`). O markdown montado é gravado em
`slides/.deck.md`, na mesma pasta do HTML de saída — é o que faz o caminho
valer tanto na hora de renderizar quanto dentro do deck pronto.

**Uma regra que evita dor de cabeça:** não deixe linha em branco dentro de uma
`<div>`. O markdown interpreta a linha em branco como fim do bloco e o layout
desmonta. Se o conteúdo precisa de linhas em branco (um prompt, por exemplo),
use bloco de código cercado em vez de `<div>`.

O conceito do tema: **a página impressa jurídica, com a luz da tela caindo
nela.** Capa como frontispício de livro, título corrente em versalete no alto,
filetes finos, nota de rodapé de verdade, fólio no canto — e o vermelho de
rubrica usado onde o impresso jurídico antigo usava, em títulos e números.

Duas texturas foram desenhadas, uma para cada lado — mas só uma está no deck
de hoje, e vale saber disso antes de mexer:

- **Vidro**, no lado da máquina, é a que está em cena. O slide com
  `<!-- _class: maquina -->` acende atrás da página uma luz fria, e o painel
  do prompt é translúcido sobre ela. São sete slides: 2 (a foto, com luz
  quente em vez de fria), 9, 10, 14, 20 e dois que não são `maquina` mas
  carregam a mesma luz em pontos menores — o 13 (a gravura do espelho, onde
  ela acende dentro do vidro, que ali faz as vezes de tela) e o 17 (o diagrama
  da nuvem, na tela do notebook e nos leds do datacenter). Os stops do
  gradiente são compartilhados no tema (`g-luz-*`): mexeu neles, mudou os três
  lugares coerentes.
- **Relevo seco**, no lado do papel, foi desenhado e hoje não aparece em slide
  nenhum. Os carregadores dele — o número prensado (`.sumula .n`), o ornamento
  (`.selo`), a superfície elevada (`.cartao`) e a capa em frontispício
  (`section.cover`) — saíram do deck junto com o bloco 7 e a capa antiga. O
  CSS continua no tema, íntegro, e o botão `--relevo` continua funcionando;
  simplesmente não há o que ele controle enquanto nada usar essas classes.

**A luz do vidro foi refeita duas vezes.** A original pintava três manchas de
cor no fundo do slide; nos slides de duas colunas cada painel saía de uma cor
— desmentindo o "mesmo modelo, só muda X" — e a mancha azul vazava para a
margem como sujeira. A primeira correção (uma mancha só, centrada) resolveu a
assimetria e deixou o que sobrava: um borrão solto no papel, sem fonte. A
versão final inverte a lógica — **a luz mora no objeto que a emite, não na
página.** O fundo dos slides voltou a ser papel puro, e a luz virou
propriedade de quem brilha:

- No slide de máquina, cada painel de prompt carrega um halo azul-frio que
  vaza por trás da borda (retroiluminação — a fumaça atrás do vidro) e um
  interior branco-azulado, da mesma fonte. Dois painéis lado a lado ganham
  duas luzes idênticas por construção, e onde não há painel não há luz.
- No slide da foto, a mesma regra: o brilho quente é `box-shadow` da própria
  imagem, empurrado só para a direita, derramando da borda para dentro do
  papel. O filete de encontro segue sendo a borda; a luz começa depois dele.

**As três animações receberam o mesmo tratamento.** Elas são documentos
separados, com CSS próprio — não herdam `tema.css` —, e por isso tinham ficado
atrás: carregavam as três manchas antigas no `body`, o `saturate()` e as duas
tintas claras. Agora o fundo delas é papel puro, o painel (`.painel` na do
sorteio, `#chat` nas outras duas) tem o mesmo vidro frio com reflexo e halo, e
as variáveis de tinta estão nos valores novos. Na do harness e na do oráculo
isso ficou ainda mais literal: o painel **é** a tela do aplicativo, e as
ferramentas em volta ficam no papel.

**Se você mexer no `tema.css`, os três arquivos de animação não mudam
sozinhos** — é o único lugar do deck onde a mesma decisão precisa ser aplicada
quatro vezes.

A regra, para quem for mexer: luz sem fonte é mancha. Se um slide novo
precisar de luz, ela sai do elemento que brilha — nunca do `background` da
`section`.

A monoespaçada (JetBrains Mono) aparece apenas quando a máquina fala: prompt
ou saída. Nunca como decoração.

**Os dois efeitos têm botão de volume**, no topo de `tema.css`:

```css
--relevo: 1;   /* relevo seco no lado do papel — sem portador hoje */
--vidro:  1;   /* painel translúcido e campo de luz */
```

O vidro depende de diferenças sutis de contraste — a primeira coisa que um
projetor fraco come. Se a sala estiver clara ou a projeção ruim, **baixe
`--vidro` para `0.5`**, rode o build de novo, e nada mais muda: o halo e o tom
frio do painel se apagam juntos, e sobra o painel de borda e sombra discretas
sobre papel liso — que é como esses slides se comportam melhor em tela ruim.

O tema evita de propósito os cacoetes de deck gerado por IA (barra colorida à
esquerda, etiqueta uppercase em mono, notas com `//`, separador `·`, itálico
de floreio). Se for criar componente novo, manter essa disciplina.

## A voz dos textos do slide

O pouco texto que vai na tela segue o mesmo tom da fala:

- **Parênteses fazem o trabalho pesado**: traduzir o termo técnico, ressalvar
  uma afirmação forte demais, ou fazer a piada. Não é ênfase dramática.
- **Autoatenuação**: nada que ponha o palestrante como autoridade. A
  competência aparece no que ele fez, nunca em adjetivo sobre ele.
- **Português no lugar do corporativês.** Fora: impactar, potencializar,
  otimizar, insight, mindset. O estrangeirismo fica só onde não há palavra
  nossa (prompt, harness) — sem itálico e sem pedir desculpa.
- **Respiro na sintaxe**: uma ou duas frases longas, depois uma curta que não
  carrega informação nova, só deixa a anterior assentar.
- **Corte os conectores de vestibular**: "Por fim", "Dessa forma", "Nesse
  sentido", "Vale ressaltar". O parágrafo novo já anuncia a mudança.
- **Sem negrito para grifar dentro da frase.** A frase curta já tem a ênfase;
  o negrito por cima soa a slide de palestra motivacional, que é o registro
  que o deck todo evita. Se uma ideia precisa de destaque, ela vai sozinha na
  página (`.destaque`).
- **Sem vírgula antes do "e" que fecha enumeração.** "Internet, a pasta do
  caso, o e-mail e você" — não "o e-mail, e você". A vírgula antes do "e"
  continua certa entre orações de sujeitos diferentes ("o relator é nome
  inventado, e a escolha é minha"). O risco é de ritmo: quando três linhas
  seguidas terminam com o mesmo par vírgula-mais-rabicho, o paralelismo vira
  maneirismo — e a sala é de gente que lê texto com pontuação para viver.
- **Nunca**: emoji, superlativo sobre a própria experiência, moral da história
  dirigida ao leitor, pergunta retórica de fecho, frase de efeito
  paralelística ("não é X, é Y").
- Travessão para intercalar; primeira pessoa no verbo, com "eu" quase ausente.

A nota de rodapé é dimensionada para ser **lida da última fileira**: 21px,
peso médio e tinta cheia, não cinza. É nela que moram as ressalvas que
importam, e texto pequeno em cinza claro é a primeira coisa que um projetor
fraco come.

**A rodada de contraste, aplicada ao deck todo.** Foi medida a razão de
contraste de cada tinta sobre o papel, e as duas de apoio subiram: `--tinta-2`
de 8,5:1 para 11,4:1 e `--apagado` de 3,5:1 para 5,2:1. O `--apagado` era o
ponto pior e o mais mal colocado — é a cor da `.fonte-peca`, a linha com
número de processo, relator e data, que é justamente o dado que a noite manda
conferir e que a sala fotografa. Junto com isso, a transcrição em coluna
estreita (`.peca.compacta`, 20px) passou ao peso 500, porque o corpo não pode
crescer sem quebrar as duas colunas.

**E a `.fonte-peca` mudou de papel, não só de cor.** Estava desenhada como
legenda — 18px, cinza claro, o texto mais fraco da página. Mas a tese da noite
é que o texto da ementa não tem sinal de falsidade nenhum; o que se confere é
justamente essa linha. Projetar em cinza pequeno o único dado falsificável do
slide era o tema contradizendo a fala. Agora ela é 22px, peso 600, tinta
cheia — a informação dominante da coluna, mais forte que a transcrição
embaixo. A inversão é proposital: o que a sala precisa ler da última fileira é
o número, não o latinório.

O espaço veio de três cortes que não custam leitura (entrelinha da
transcrição, respiro entre blocos, margem do título corrente nessas páginas).
Quem acrescentar parágrafo de ementa a essas páginas refaz a conta — o fólio
fica a 24px do pé, e é nele que a coluna esbarra primeiro.

Para mudar cores ou tamanhos, o topo de `tema.css` tem as variáveis. Se o
auditório for grande e a projeção fraca, aumente `--fs-body`.

**As fontes moram em `fontes.css`, embutidas** (Spectral e JetBrains Mono, em
base64): o deck e as animações abrem com a cara certa sem internet nenhuma — a
sala pode estar offline que nada muda. O arquivo é gerado, não se edita à mão;
para trocar as fontes do tema, rode `node slides/embutir-fontes.mjs "<caminho
da pasta slides>"` com internet, e ele reescreve o `fontes.css` com as
famílias que estiverem listadas no topo do próprio script.

## O roteiro

Um arquivo por bloco em `roteiro/`. A convenção: o que está **em citação**
(`>`) é onde a formulação importa; o resto é tópico, para falar solto. Não é
script — a citação é um alvo, não uma coleira, e trocar uma palavra no palco
não quebra nada.

Os roteiros trazem também os planos B (o que fazer se a internet cair, se o
app mudar de tela, se a demo não devolver o que devia) e as notas de
conferência de cada afirmação. Está tudo aqui inteiro porque a oficina é sobre
conferir fonte, e a minha fonte é esta.

Inteiro quer dizer inteiro, inclusive as remissões a papéis que ficaram de
fora: os roteiros citam de vez em quando o caderno de produção
(`PRODUCAO.md`), os gabaritos e o plano geral, que são anotações minhas com
pendências de ensaio. O que eles guardam de útil para quem lê daqui já está
nos próprios roteiros e no [`referencias.md`](referencias.md).

Roteiro e slides são arquivos separados de propósito: o roteiro é o que eu
ensaio e imprimo como folha de cola; os slides são o que a sala vê. Cada um
fica bom no que faz, e um se edita sem tocar no outro.
