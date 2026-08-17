<!--
PASSO 1 — As duas cenas (35 s) · entra 20h18
Emenda direto no balanço da demo, colada em "a tarefa se
delega; a responsabilidade, não". Primeira fala ainda no
slide 21; este slide entra na segunda:
"É a mesma máquina nas duas cenas. Ela não sabe qual das
duas estava fazendo — quem sabia era eu. E eu só sabia
porque conferi."
Um segundo de pausa, não três — pausa longa pede aplauso.
PASSO 2 — entrada, ainda neste slide:
"Consultar às cegas uma voz que responde tudo com a mesma
segurança tem nome antigo. Deixa eu mostrar como era a
consulta."
Deixa: avança para a animação.
-->

<!--
  BLOCO 9 — Fechamento (6 min 20)
  Roteiro: ../../roteiro/bloco-9-fechamento.md

  Slide 22 — a frase da noite, sozinha na página.

  Por que ela pode ir para a tela sem virar o decálogo que já morreu duas
  vezes: é observação de cena, não enunciado de conduta. O sujeito é a
  máquina e o que aconteceu hoje, não o que a plateia deve fazer amanhã. E
  ela sustenta os dois passos falados por cima dela: o oráculo (consultar às
  cegas quem não distingue acerto de invenção) e o "quem sabia era eu".
  A Grécia fica na boca, não no telão.

  Sem título corrente e sem rodapé, de propósito. É o único slide-destaque da
  noite que não carrega informação nova no pé — aqui o pé vazio é o efeito: a
  sala tem cinco minutos de fôlego e a página inteira é uma frase.

  O slide 23 é a animação do oráculo (aprovada em 16/08) — o apanhado da
  noite em cinco cenas, conduzidas por espaço, na mesma mecânica das duas
  animações do bloco 2. O arquivo abre sozinho no navegador (plano B).

  O slide 24 são os dois códigos, montado e conferido: os SVG saem de
  gera-qr.mjs e foram decodificados antes de entrar.
-->

<!-- _class: center -->

<div class="destaque">Ela não sabe qual das duas cenas<br>estava fazendo.</div>

---

<!--
PASSO 2 — O oráculo, na tela (3 min)
Clique uma vez dentro da animação antes do espaço — sem
foco no iframe o espaço avança o deck. R reinicia.
Cena 0: "Delfos, atendendo por aplicativo."
Cena 1, Creso: digitação em silêncio. "É o 'estou certo?'
com dois mil e quinhentos anos de idade."
Cena 2: "'A IA concordou comigo' não é parecer."
Cena 3: "O peso é o quanto agrada quem pergunta. Sicofantia."
Cena 4, Ulisses: a sala lê o prompt, cinco segundos calado.
"A decisão de aceitar ou recusar não vem no aplicativo."
Fecho, tela parada: "Quem sabe onde ela erra tem a que
dura." Nunca leia as legendas em voz alta.
PASSO 3 — As sereias e o mastro (1 min 25), mesma tela
"Se fez amarrar no mastro e ouviu o canto inteiro." O mastro
é o caso encerrado: risco zero. Dois exemplos, ditos rápido.
Easter egg: "repara no nome do relator." Não diga o nome.
-->

<!-- _class: animacao -->

<iframe src="animacao-oraculo.html" title="Por dentro do oráculo: Delfos atendendo por aplicativo — Creso, a auditoria do acerto, o sorteio revelado e o prompt que vence o sicofante"></iframe>

---

<!--
PASSO 4 — Os dois códigos (40 s)
"O da esquerda é o meu WhatsApp. Me escrevam se der errado;
se der certo, também."
"O da direita é o material. E tem mais Grécia escondida lá
dentro. Quem achar, me escreve por ali mesmo."
Sem repositório no ar: um código só e a fala curta.
Oferta opcional: "Se ficou pergunta, eu respondo duas ou
três agora." Dois segundos olhando a sala; sem mão
levantada, emenda no passo 5 sem comentar o silêncio.
PASSO 5 — Agradecimento e saída (40 s) · sai 20h24
Nominal: OAB-VR, ESA e quem convidou, pelo nome. Serviço:
onde fica a lista de presença.
"Eu fico mais um pouco aqui na frente. Obrigado por terem
ficado até as oito da noite de uma segunda-feira. Boa noite."
Nada depois disso — sem frase de efeito.
-->

<!--
  Slide 24 — os dois códigos, e nada mais.

  Os SVG são gerados por script (qrcode, npm) e CONFERIDOS por decodificação
  antes de entrar aqui: qr-whatsapp.svg devolve https://wa.me/5524999815783 e
  qr-repo.svg devolve https://github.com/danielseraphim/oficina-ia-advocacia.
  Se algum endereço mudar, regenerar E redecodificar — código errado
  projetado ninguém percebe até cinquenta pessoas escanearem.

  O do WhatsApp leva o emblema do aplicativo no miolo. Isso só é possível
  porque os dois são gerados em correção de erro H (recupera ~30% da área) e
  o emblema tapa ~5%. Testado reduzido: o do WhatsApp ainda decodifica a 68px
  e o do repositório a 94px — os dois sobrevivem à última fileira e a câmera
  ruim. Se mexer no tamanho do emblema, refazer os dois testes.

  O endereço do repositório aparece escrito embaixo do código de propósito:
  quem estiver sem bateria, sem câmera ou na última fileira ainda consegue
  anotar. O número do WhatsApp, pelo mesmo motivo.
-->

<!-- _class: contato -->

<div class="codigos">
<div class="codigo"><div class="quadro"><img src="qr-whatsapp.svg" alt="Código QR que abre uma conversa comigo no WhatsApp"></div><div class="rotulo">Meu WhatsApp</div><div class="endereco">(24) 99981-5783</div></div>
<div class="codigo"><div class="quadro"><img src="qr-repo.svg" alt="Código QR do repositório com o material da oficina"></div><div class="rotulo">O material da oficina</div><div class="endereco">github.com/danielseraphim/oficina-ia-advocacia</div></div>
</div>

<div class="assinatura">DANIEL M. SERAPHIM</div>

<div class="logos"><img src="logos-oab-esa.png" alt="OAB Volta Redonda e Escola Superior de Advocacia"></div>
