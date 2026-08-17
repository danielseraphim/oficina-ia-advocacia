<!--
PASSO 1 — A máquina de escolher palavras (3 min 30) · entra 19h06
Animação do sorteio nesta tela. Se ensaiou, F5 antes: o R
guarda o histórico das rodadas. Conduzir pelos botões, com o
mouse — espaço fora da animação pula o slide. Plano B: o
arquivo abre sozinho no navegador, Alt+Tab.
Ler a pergunta da tela em voz alta e anunciar o que vem:
"Ele vai responder. Uma palavra por vez, devagar."
Três ou quatro cliques em "próxima palavra", comentando lista,
recorte e sorteio. "Ele não foi procurar a resposta em lugar
nenhum. Ele está escolhendo a próxima palavra."
"automático": falar por cima enquanto a frase termina.
"gerar de novo" e depois "automático", uma ou duas vezes. Não
citar número de frases. "Se a resposta estivesse guardada,
sairia igual toda vez. Cada palavra foi sorteada agora."
Se sair a segunda candidata, ler o número da legenda e usar.
"pesos", 30 s: nomear o que acende agora, não o do ensaio.
-->

<!--
  BLOCO 2 — Fundamentos: o modelo e o escritório em volta (14 min)
  Roteiro: ../../roteiro/bloco-2-fundamentos.md

  Quatro slides, dois deles animações em página inteira (iframe). Os
  arquivos animacao-llm.html e animacao-harness.html vivem nesta mesma
  pasta e abrem sozinhos no navegador — o que é também o plano B, se o
  iframe engasgar no dia.

  ATENÇÃO NO PALCO: para o teclado comandar uma animação (espaço, A, P,
  R), é preciso CLICAR uma vez dentro dela. Sem o clique, o espaço avança
  o slide do Marp. Os botões na base de cada animação fazem tudo por
  clique, e é assim que o roteiro manda conduzir.

  A ordem é show-then-name, a mesma do bloco inteiro: a máquina primeiro,
  o nome depois. O slide do mapa fecha o bloco porque ele resume o que a
  sala já viu — não é introdução de conceito.
-->

<!-- _class: animacao -->

<iframe src="animacao-llm.html" title="Como um modelo de linguagem escolhe a próxima palavra"></iframe>

---

<!--
PASSO 2 — A ponte: dois nomes (1 min 30)
Desarma o "mas o meu busca na internet" que a animação plantou.
"O que vocês viram é o modelo. Só isso: prever a próxima
palavra. O aplicativo não é só o modelo — em volta tem
ferramenta ligada, e o conjunto tem nome: harness."
Gênero e espécie, vale palavra por palavra: "IA é gênero. Isso
é uma espécie — o modelo de linguagem, LLM. A mesma confusão
de chamar todo tributo de imposto. Quando eu disser IA hoje,
é dessa espécie."
Extensão, se der (20 s): IA é nome dos anos 1950; a ideia que
fez funcionar é de 2017; no celular no fim de 2022. Não dizer
que o LLM foi inventado em 2017.
"Sozinho, ele redige de cabeça. Quem busca é o escritório em
volta — e é o que eu vou mostrar agora."
Ressalva do Google por último: dois verbos, não duas empresas.
Se estourar, ela é a primeira a cair; gênero e espécie fica.
-->

<!-- _class: center -->

<div class="destaque">O Google busca.<br>O modelo redige de cabeça.</div>

<div class="rodape">Modelo de linguagem — LLM, a sigla que você vai encontrar por aí.</div>

---

<!--
PASSO 3 — O escritório trabalhando (4 min)
Harness; R reinicia. 11 etapas por clique; não ler a legenda.
Etapa 1: "Nada acontece antes de eu escrever. Quem puxa o
gatilho sou eu." Disparo automático, só se perguntarem: "dá,
e existe — só que alguém montou e ligou antes."
Etapa 2, nenhuma ferramenta acesa: "saiu inteira da memória —
e saiu certa." Gancho: "ele recomenda confirmar. Vamos."
Etapa 3: meio segundo de silêncio. "Sumiu. Não lembra de nada."
Etapa 4: ler o pedido. "Quem define o rigor é o pedido."
Etapas 5 a 8, deixar rodar; o mecanismo, uma vez: "ele não
abre o Gmail. Escreve um pedido, a ferramenta executa, o que
ela leu volta como texto." No Google: "o número veio da página
do tribunal, não do sorteio."
Etapa 9: comparar com a conversa 1 — quem confirmou foi ele.
Etapas 10 e 11: vira arquivo; "isso aqui embaixo sou eu. Nada
dessa tela assina petição." Se estourar, ir de automático.
-->

<!-- _class: animacao -->

<iframe src="animacao-harness.html" title="O que acontece depois que você aperta enter: o modelo e as ferramentas em volta"></iframe>

---

<!--
PASSO 4 — O mapa (2 min) · analogia narrada, não encenada
"O modelo é o estagiário; o treinamento, a faculdade — leu
tudo até se formar e parou; quem sabe de cabeça confunde. O
harness é o escritório em volta." Fecho: cada aplicativo
monta o seu; "qual IA é melhor?" é pergunta incompleta.
PASSO 5 — A janela de contexto (1 min 30), sem slide novo
"A coluna da direita tem nome: janela de contexto. O que está
fora não existe para ele." (A) não sabe o que você não
entregou; (B) conversa longa degrada — primeiro corte. Fecho:
"anexar o arquivo, ligar a busca, apontar a pasta; engenharia
de prompt é instrução clara de estagiário."
PASSO 6 — Onde a analogia quebra (90 s) · sai 19h20 · não cai
Quatro: não aprende (bilhete na mesa, dá para ler e rasgar);
não sabe quando não sabe; não quer nada; não há segundo
responsável — "daqui a dois blocos um tribunal diz isso".
Emenda: "agora eu ligo as ferramentas de verdade."
-->

<!-- _class: meio -->

<div class="cabeca">Os três nomes que valem a noite inteira</div>

## O estagiário, a faculdade e o escritório

<div class="indice largo">
<div class="linha"><span class="item">Modelo</span><span class="pontos"></span><span class="desc">o estagiário — responde de cabeça, uma palavra por vez</span></div>
<div class="linha"><span class="item">Treinamento</span><span class="pontos"></span><span class="desc">a faculdade dele — leu tudo até uma data e parou</span></div>
<div class="linha"><span class="item">Harness</span><span class="pontos"></span><span class="desc">o escritório — internet, a pasta do caso, o e-mail e você</span></div>
</div>

<div class="rodape">Harness não tem tradução consagrada: é o andaime de ferramentas montado em volta do modelo.</div>
