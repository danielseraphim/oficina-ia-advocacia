# Bloco 2 — Fundamentos: o modelo e o escritório em volta

**14 min** · slides 5 a 8 (animação do sorteio, "o Google busca", animação do
harness, o mapa dos três nomes) · arquivos próprios:
`slides/animacao-llm.html` e `slides/animacao-harness.html`

**Relógio (largada 19h00, teto 20h30):** entra 19h06 · sai 19h20 · entrada-limite
sem corte: 19h11

---

## Antes de começar

- As duas animações **no estado inicial**. Se você ensaiou, recarregue a do
  sorteio (F5): o `R` guarda o histórico das rodadas de propósito, e ele é a
  prova que o passo 1 constrói ao vivo. Na do harness o `R` basta
- **Conduza pelos botões, com o mouse.** As teclas só funcionam depois de
  clicar dentro da animação, e um espaço fora dela pula o slide
- Plano B: os dois arquivos abrem sozinhos no navegador, com Alt+Tab

---

## Passo 1 — A máquina de escolher palavras (3 min 30)

**Slide 5 — a animação do sorteio.** Emenda na retomada do bloco 1, já andando
para o computador.

> "A ferramenta escreve julgado falso com a mesma cara de julgado verdadeiro.
> Eu vou mostrar por quê — e não é opinião minha, dá para ver na tela."

Leia a pergunta da tela em voz alta e diga o que vai acontecer, para ninguém
gastar os primeiros segundos entendendo a interface:

> "Ele vai responder. Só que uma palavra por vez, devagar, para a gente ver a
> escolha acontecendo."

**Três ou quatro cliques em `próxima palavra`**, comentando:

- A lista da esquerda são as candidatas a próxima palavra, com a probabilidade
  que ele deu a cada uma
- A linha tracejada é o recorte: as de baixo não entram no sorteio
- O destaque que gira é o sorteio; ele desacelera e para na sorteada

> "Repare no que ele não está fazendo. Ele não foi procurar a resposta em lugar
> nenhum. Ele está escolhendo a próxima palavra."

**`automático`**, e a frase termina sozinha enquanto você fala por cima:

> "É isso que está por trás de qualquer resposta que você já recebeu de uma
> ferramenta dessas. Uma palavra, a próxima, a próxima. O texto sai inteiro e
> pronto, e por isso parece que ele sabia a resposta desde o começo. Ele não
> sabia. Ele foi descobrindo junto com a gente."

**`gerar de novo` e, em seguida, `automático`** — uma ou duas vezes; é o momento
do passo. O `gerar de novo` sozinho limpa a tela e para ali; quem produz a
frase nova é o `automático`.

> "Mesma pergunta. Nenhuma palavra mudou na minha pergunta."

Com as anteriores listadas embaixo, você não argumenta: aponta. A fala serve
para duas ou três frases na tela, então não cita número:

> "Respostas diferentes para a mesma pergunta — e todas certas, aliás. É o
> artigo 413 do Código Civil, e a redução da multa tem mais de uma hipótese. Se
> a resposta estivesse guardada em algum lugar, ela sairia igual toda vez. Ela
> não está guardada em lugar nenhum. Cada palavra dessas foi sorteada agora, na
> frente de vocês."

Se o sorteio pegar uma que não era a primeira, a legenda diz qual e com quanto —
**use**, lendo o número da tela: *"olha, aqui ele pegou a segunda, que tinha
tantos por cento, e a frase inteira mudou de rumo por causa disso."*

**Botão `pesos`, 30 segundos:**

> "Ele não trata todas as palavras da conversa do mesmo jeito. As que acendem
> em azul são as que mais pesaram nesta escolha."

Nomeie o que estiver aceso na tela, não o que você lembra do ensaio: o par muda
conforme o ponto da frase, e logo depois do `gerar de novo` quem acende é
"Responda" e "frase.", não as palavras do pedido.

---

## Passo 2 — A ponte: dois nomes (1 min 30)

**Slide 6.** Este passo existe para desarmar a objeção que a animação plantou —
metade da sala está pensando "mas o meu busca na internet".

> "Duas palavras técnicas, e depois eu largo o jargão. O que vocês acabaram de
> ver é o modelo. É só isso que o modelo faz: prever a próxima palavra. Só que
> o aplicativo que você abre no celular não é só o modelo — em volta dele tem
> um monte de ferramenta ligada, e esse conjunto também tem nome: harness."

**Gênero e espécie** — a distinção que faltava na noite inteira, e ela cabe
aqui porque é aqui que a sigla LLM aparece pela primeira vez (está no rodapé do
slide). Vale palavra por palavra, porque a analogia é o passo todo:

> "E já que eu estou distribuindo jargão, uma correção que vale para tudo que
> eu disser hoje. 'Inteligência artificial' é gênero. É nome de um monte de
> coisa diferente: o reconhecimento facial da portaria, o sistema que escolhe o
> próximo vídeo, o filtro de spam do seu e-mail, o robô que separa processo por
> assunto no tribunal. O que está nessa tela é uma espécie dentro disso — o
> modelo de linguagem, que vocês vão encontrar abreviado como LLM. É a mesma
> confusão de chamar todo tributo de imposto. Imposto é espécie, e a gente
> corrige o cliente sem nem pensar. Então fica combinado: quando eu disser IA
> hoje à noite, eu estou falando dessa espécie aqui, não do gênero."

**Extensão, se o relógio deixar (20 s)** — a idade das duas coisas, que é o que
faz a distinção grudar:

> "E as duas nem são da mesma época. Inteligência artificial é nome dos anos
> 1950 — tem gente pesquisando isso desde antes de existir computador em mesa
> de escritório. O que está nessa tela é bem mais novo: a ideia que fez isso
> funcionar é de 2017, e só chegou no celular de vocês no fim de 2022. Quando o
> jornal disser que 'a IA avançou', vale a pergunta: qual delas?"

> "Quem usa ChatGPT ou Claude está pensando agora: 'mas o meu busca na
> internet, o meu lê PDF'. Busca mesmo. Só que não era isso que estava na tela:
> aquilo era o modelo sozinho. Sozinho, ele redige de cabeça. Quem busca é o
> escritório em volta — e é o que eu vou mostrar agora."

**A ressalva do Google** — entra depois da frase acima, porque metade da sala
já reparou que o slide está atrasado em relação ao Google que ela usa:

> "E uma ressalva sobre a palavra Google aí no slide. O Google de hoje também
> te devolve um resumo escrito por um modelo em cima do resultado da busca —
> ele faz as duas coisas na mesma tela. Justamente por isso o contraste vale:
> não é entre duas empresas, é entre dois verbos. Buscar é ir a algum lugar
> procurar. Redigir é escrever de cabeça. Quando os dois chegam juntos, fica
> difícil saber qual dos dois você está recebendo — e daqui a dois blocos eu
> conto uma vez em que eu não soube."

**Se o bloco estiver estourando**, a ressalva do Google é a primeira a cair, e
a extensão dos anos 1950 nem entra — a distinção gênero/espécie não cai, porque
ela recalibra tudo que vem depois.

---

## Passo 3 — O escritório trabalhando (4 min)

**Slide 7 — a animação do harness.** São 11 etapas, em duas conversas. Você
conduz clicando; a legenda embaixo acompanha cada etapa, então **não leia a
legenda em voz alta** — ela é para quem está lendo, você fala outra coisa.

**Etapa 1 — você digita.** Deixe a sala ver o texto sendo escrito.

> "Primeira coisa, e é a mais importante da tela: nada acontece antes de eu
> escrever. Enquanto eu durmo, ele não está lendo a minha caixa de entrada nem
> mexendo nos meus arquivos. Quem puxa o gatilho sou eu, e o que ele enxerga é
> o que eu abrir para ele. Repare no que virou a primeira ficha da coluna da
> direita: o meu próprio pedido."

*A fala está escrita para o aplicativo que a sala usa, e nesse a afirmação é
exata. **Dá para montar sistema que dispara sozinho** — ligado a um horário, à
chegada de um e-mail, a um evento no sistema do escritório. Se alguém
perguntar, a resposta cabe em uma linha: "dá, e existe — só que aí alguém
montou e ligou antes; o gatilho continua sendo humano, só que mais cedo e uma
vez só." Não puxe esse assunto por conta própria: ele abre a porta dos agentes,
que é do bloco 3.*

**Etapa 2 — a resposta do treinamento.** Chame atenção para a coluna da
esquerda **antes** de a resposta sair:

> "Olha as ferramentas aqui do lado. Nenhuma acendeu. Essa resposta saiu
> inteira da memória dele — e saiu certa, porque é matéria de manual, artigo do
> Código Civil que está em qualquer apostila. Isso acontece muito, e é por isso
> que a gente se acostuma a confiar."

E o gancho, que é dele mesmo:

> "Só que repare em como ele termina: recomendando que eu confirme a cláusula e
> a jurisprudência. Ele está certo. Então vamos confirmar."

**Etapa 3 — conversa nova.** A janela limpa e o contexto zera na frente de
todos. Vale meio segundo de silêncio, e uma frase:

> "Conversa nova. Olha o que aconteceu com tudo que a gente tinha conversado —
> sumiu. Ele não lembra de nada. O que ficou, ficou comigo."

**Etapa 4 — o pedido com ordem de conferir.** Leia o pedido em voz alta, é
curto:

> "Mesmo caso, pedido diferente: agora eu mando ele olhar o e-mail, abrir o
> contrato e confirmar na internet. Quem define o rigor da resposta é o pedido."

**Extensão, se o relógio deixar (20 s)** — emenda direto:

> "E pedir não é garantir. Ele pode pular um passo, pode dizer que conferiu sem
> ter conferido. Por isso, quando o meu pedido tem passo a passo, metade do meu
> trabalho é olhar se ele fez mesmo cada um. Aqui dá para ver, porque as
> ferramentas acendem — e no aplicativo de verdade também dá, é a linha que
> aparece dizendo o que ele foi buscar."

**Etapas 5 a 8 — o raciocínio e as três ferramentas.** Deixe rodar. A única
coisa que você precisa falar, e vale palavra por palavra, é o mecanismo — dá
para dizer uma vez, na primeira ferramenta, e depois só apontar:

> "Presta atenção no que ele faz: ele não abre o Gmail. Ele escreve um pedido,
> e quem abre é a ferramenta. O que ela leu volta para a conversa como texto —
> é essa a ficha nova ali na direita. Daqui em diante o e-mail está dentro da
> conversa, e aí sim ele consegue ler."

Na etapa do Google, a frase que o bloco 4 vai cobrar:

> "Agora o número do processo não saiu do sorteio. Ele veio da página do
> tribunal: o modelo leu o que estava escrito lá, quer dizer, foi na fonte.
> Continua sendo trabalho meu abrir e conferir, porque ele continua sendo uma
> máquina de escolher palavra — mas deixou de ser coisa puxada de memória."

**Etapa 9 — a resposta ancorada.** Aqui você faz a comparação, que é o ganho de
ter duas conversas:

> "Compara com a primeira. Lá ele me pediu para confirmar a cláusula e a
> jurisprudência. Aqui quem confirmou foi ele: a cláusula nona veio do contrato
> que estava na pasta, o 'quase tudo cumprido' veio do e-mail do cliente, o
> artigo e o julgado vieram do site. Cada frase dessa tem origem naquela coluna
> — nenhuma veio da memória."

**Etapa 10 — a minuta vira arquivo.**

> "E o resultado sai do chat: vira arquivo na pasta do caso, para eu abrir no
> editor de sempre."

**Etapa 11 — você.** Na tela, o cartão de baixo fica separado por um filete,
com o rótulo "não é ferramenta" em cima — a diferença é o ponto do passo:

> "E tem uma coisa aqui embaixo que não é ferramenta nenhuma: sou eu. O
> escritório trabalha até aqui; daqui em diante é advogado. Nada dessa tela
> assina petição, e nada dessa tela responde por ela."

---

## Passo 4 — O mapa (2 min)

**Slide 8.** Agora, e só agora, a analogia — para arrumar na cabeça o que a
sala já viu funcionar. Narrada, não encenada.

> "Deixa eu arrumar isso em três nomes, que são os que vocês vão encontrar
> quando forem pesquisar."

> "O modelo é o estagiário. O treinamento dele é a faculdade — e é uma
> faculdade estranha: um aluno absurdamente dedicado, que leu tudo que existia
> até a data em que se formou, e aí parou. Não fez pós, não assina informativo
> de tribunal, não lê jornal. Tudo que ele sabe, sabe de cabeça. E quem sabe de
> cabeça confunde: mistura um caso com outro, jura que leu, responde com a
> maior segurança. Isso tem nome técnico — alucinação —, e é o bloco depois do
> próximo."

> "E o harness é o escritório em volta dele. É o computador com internet, é a
> pasta do caso, é o e-mail, é o telefone. Sem o escritório, ele é um estagiário
> brilhante trancado numa sala sem janela, respondendo tudo de memória. Com o
> escritório, ele vai conferir."

**Cada aplicativo monta um escritório diferente** — a frase que faltava, e que
é o fecho do passo:

> "E não existe um escritório só. Cada aplicativo monta o dele: um lê PDF,
> outro não; um abre o seu e-mail, outro nem sabe que ele existe; um busca na
> internet, outro só responde de cabeça. Duas telas parecidíssimas podem ter
> escritórios completamente diferentes atrás — e é por isso que 'qual IA é
> melhor?' é pergunta incompleta. A pergunta certa é: que escritório existe em
> volta dela, e eu sei mandar nele? Não basta contratar o estagiário que
> estudou mais. Ele precisa de um escritório equipado, e de alguém que saiba
> dizer o que usar, quando usar e o que trazer de volta."

---

## Passo 5 — A janela de contexto (1 min 30)

Sem slide novo, o mapa fica na tela. A coluna da direita da animação já fez o
trabalho pesado; aqui você só nomeia e tira as consequências.

> "Aquela coluna da direita, que encheu e depois zerou, tem nome técnico:
> janela de contexto. É tudo que ele enxerga. E o que está fora dela não existe
> para ele."

Duas consequências, contadas nos dedos:

**(A) Ele não sabe nada do seu caso que você não entregou** — ou que ele não
tenha ido buscar com uma ferramenta. Não abriu o PJe, não leu os autos, não
sabe quem é o cliente.

**(B) Conversa muito longa degrada.** Ele repete, se enrola, perde o começo de
vista. Quando começar, abra conversa nova e leve para lá o que importa. —
*primeiro corte do bloco; hoje ele está gasto (ver o registro no fim).*

E o que fecha o passo, que é o conselho mais aproveitável do bloco:

> "O que mais muda o resultado não é a palavra que você escolhe na pergunta. É
> o que está no contexto na hora em que ele responde. Antes de perguntar
> qualquer coisa, vale saber o que ele está enxergando: o documento entrou? o
> e-mail entrou? ou ele está respondendo de cabeça, como na primeira conversa
> que vocês viram? Quando falta material, o caminho não é caprichar mais na
> frase — é anexar o arquivo, ligar a busca, apontar a pasta. E o que chamam de
> engenharia de prompt é bem menos glamouroso do que o nome: é instrução clara,
> igual à que a gente dá para um estagiário. O que fazer, com qual material, em
> que formato, e o que não inventar. Não é fórmula mágica — e quem vende
> fórmula mágica está vendendo outra coisa."

---

## Passo 6 — Onde a analogia quebra (90 s)

Cronometrar. É o que impede a personificação de virar o próximo mal-entendido.

> "A analogia do estagiário é boa e eu vou usar ela a noite inteira. Só que ela
> mente em quatro lugares, e é melhor eu dizer agora."

> "Um: ele não aprende com a sua correção. Você corrige, ele conserta ali, e na
> conversa seguinte erra igual — a correção não volta para a faculdade dele. E
> aqui tem uma pegadinha nova, porque os aplicativos de hoje tomam nota: eles
> guardam num arquivinho o que você disse que prefere, e releem isso no começo
> de cada conversa. Parece aprendizado, e não é. Quem estudou continua o mesmo;
> o que mudou é que o escritório passou a deixar um bilhete na mesa dele. E,
> como todo bilhete, dá para ler e dá para rasgar — vale saber onde o seu
> aplicativo guarda isso."

> "Dois: ele não sabe quando não sabe. Estagiário humano hesita, enrola, dá
> aquela olhada de quem não faz ideia. Esse aqui responde com a mesma segurança
> nos dois casos, e é exatamente por isso que o texto não denuncia."

> "Três: ele não quer nada. Não tem intenção, não tem interesse, não está te
> enganando — não tem ninguém ali."

> "E quatro: estagiário de verdade tem nome, e um dia tem OAB. Existe um
> segundo responsável na história. Aqui não existe segundo — a responsabilidade
> não se divide em duas, ela fica inteira com quem assina. Daqui a dois blocos
> eu mostro um tribunal dizendo isso com todas as letras."

---

## Frase de retomada deste bloco

Para quem entrou no meio, e para a virada do bloco 3:

> "o modelo prevê texto de cabeça; quem busca, lê e grava é o escritório em
> volta — e a revisão é sua."

E a emenda para o bloco 3:

> "Vocês viram o escritório funcionando numa encenação minha. Agora eu vou
> ligar as ferramentas de verdade, aqui, e mostrar onde isso ainda quebra."

---

## Sobre as duas animações

O que você está afirmando quando aponta para a tela, para responder sem
titubear se alguém perguntar:

**A do sorteio** é um modelo de brinquedo, escrito à mão, com as probabilidades
inventadas por mim. O mecanismo é fiel (sorteio proporcional dentro de um
recorte); os números não foram medidos em modelo nenhum. Cada rodada é sorteada
e nenhuma frase está pré-escrita, todas corretas quanto ao art. 413. O rodapé
da tela diz isso, e diz também que na vida real ele corta o texto em pedaços
menores que palavras (tokens).

**A do harness** é encenação: nada ali acessa internet, Gmail ou pasta de
verdade. O que é fiel é o ciclo — o modelo escreve um pedido, a ferramenta
executa, o resultado volta como texto no contexto.

Resposta de uma linha, se perguntarem: *"não, é uma maquete — os números e as
telas são meus. O que é igual é o jeito de funcionar."* Dizer isso não
enfraquece nada; é a mesma disciplina que a oficina inteira ensina.

---

## Fontes deste bloco

Conferidas em 16/08/2026 (revisão de veracidade). O bloco é quase todo
descrição de funcionamento — o que tem fonte é isto:

- **Art. 413 do Código Civil** — a fala do passo 1 ("é o artigo 413, e a
  redução da multa tem mais de uma hipótese") está certa: o artigo prevê
  redução quando a obrigação principal tiver sido cumprida em parte **ou**
  quando o montante for manifestamente excessivo. Duas hipóteses, e é por isso
  que respostas diferentes podem estar todas certas.
- **Gênero e espécie (passo 2)** — o apoio está no lugar mais conveniente
  possível: a própria **Recomendação n. 001/2024 do CFOAB** faz a distinção,
  nos consideranda — *"sistemas de IA generativa são modelos de linguagem (LLM
  – Large Language Models)"*.
  <https://s.oab.org.br/arquivos/2024/11/7160d4fe-9449-4aed-80bc-a2d7ac1f5d2f.pdf>
  Se a sala quiser saber de onde você tirou a distinção, ela está na norma da
  Ordem que você vai mostrar dois blocos adiante.
- **As duas idades (passo 2, extensão)** — "anos 1950" é a conferência de
  Dartmouth, verão de 1956, onde o termo *artificial intelligence* foi cunhado
  na proposta de 1955 (McCarthy, Minsky, Rochester, Shannon).
  <https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/view/1904>
  "2017" é o artigo *Attention Is All You Need*, que apresentou a arquitetura
  Transformer, base dos modelos de hoje. <https://arxiv.org/abs/1706.03762>
  "Fim de 2022" é o lançamento público do ChatGPT, em 30/11/2022.
  **Cuidado com a formulação:** modelo de linguagem é coisa bem mais antiga que
  2017 — o que é de 2017 é a arquitetura que fez esses modelos funcionarem. A
  fala está escrita assim de propósito ("a ideia que fez isso funcionar"); não
  troque por "o LLM foi inventado em 2017".
- **A ressalva do Google (passo 2)** — os resumos gerados por IA (*AI
  Overviews*) chegaram à Busca em português no 2º semestre de 2024 e hoje
  aparecem em boa parte das buscas. A fala não precisa de número, e não deve
  levar nenhum: "o Google de hoje também te devolve um resumo escrito por um
  modelo" basta e está correto.
  <https://olhardigital.com.br/2024/08/15/internet-e-redes-sociais/resumos-gerados-por-ia-chegam-a-busca-do-google-no-brasil/>
- **A memória dos aplicativos (passo 6, primeira quebra)** — descrição de
  funcionamento, não de norma: ChatGPT, Claude e Gemini têm recurso de memória
  que grava preferências do usuário e as reinjeta no início das conversas, com
  tela para consultar e apagar. É por isso que a fala diz "dá para ler e dá
  para rasgar". **Não citar nome de produto no palco** — a frase vale para
  todos e nenhum precisa ser nomeado.
- **"Daqui a dois blocos eu mostro um tribunal dizendo isso com todas as
  letras"** (passo 6, quarta quebra) — a promessa é paga pelo acórdão do TRT-2
  do bloco 4, conferido na íntegra. Ela está travada: se o passo 4 do bloco 4
  cair, esta frase fica devendo.

**Sem fonte, e é assim que tem que ser:** as duas animações são maquete
declarada (probabilidades inventadas por você, nada acessa internet). A seção
acima já diz isso, e a resposta de uma linha está lá. Não transforme a variedade
da sua animação em dado sobre modelo de verdade, e não cite contagem de frases:
o autômato mudou hoje e qualquer número que você tenha na cabeça é de antes.

---

## Contingências de tempo

- **Corte de 2 min** (volta ao bloco de 12): não entra a extensão dos anos 1950
  nem a de "pedir não é garantir", cai a ressalva do Google no passo 2, cai o
  (B) do passo 5 — e o passo 3 vai em `automático` do começo ao fim, com você
  falando por cima em vez de clicar etapa a etapa. Perde-se o ritmo, não o
  conteúdo
- **Corte pesado, 4 min**: o passo 3 fica só nas etapas 1, 2 e 3 (a resposta de
  memória e a conversa nova) e você narra o resto apontando para o mapa do
  slide 8. As duas animações nunca caem juntas
- **Sala majoritariamente usuária**: encolher o passo 1, que essa sala já
  intui, e ir mais devagar no passo 3 — harness e janela de contexto são
  justamente a lacuna de quem já usa há um ano
- O passo 6 não cai. São 90 segundos, e é ele que segura o bloco 4

---

## Checklist de ensaio deste bloco

- [ ] Rodar as duas animações inteiras três vezes antes de segunda, para já
      saber de cor o que aparece e não ficar lendo a tela no palco
- [ ] Cronometrar o passo 3 clicando etapa a etapa. Se passar de 4 min 30,
      passe as etapas 5 a 8 para o `automático`
- [ ] Ensaiar a fala de espera do `automático` do passo 1 — é o único trecho em
      que você fala enquanto a tela trabalha
- [ ] Decidir se o fecho do passo 5 leva um exemplo de caso seu — é a fala que
      a sala mais leva para casa, e um exemplo de meio segundo a fixa
- [ ] Conferir na sala de projeção se o azul dos pesos e das fichas aparece. Se
      sumir, o passo 1 perde os 30 s finais e nada mais

---

## Registro de decisões

Notas de produção sobre o bloco — nada aqui é falado. Ficam no fim de
propósito: o topo é o que você lê às pressas na transição.

**De onde veio o tempo do bloco.** Ele cresceu de 11 para 14 minutos porque a
distinção modelo/harness passou do bloco 3 para cá, mostrada em vez de narrada;
o bloco 3 deixou de introduzir conceito, virou demonstração de ponta a ponta e
cabe em 9. Registrado no `PRODUCAO.md` e no plano.

**O passo 2 era de 45 s e passou a 1min30 em 16/08**, com duas entradas pedidas
por você (gênero/espécie e a ressalva do Google). Os 45 s a mais saíram do **(B)
do passo 5** (conversa longa degrada), que já era o primeiro corte do bloco —
não saíram da animação nem do passo 6. Se você quiser o (B) de volta no palco,
o que sai é a ressalva do Google.

**A quarta quebra da analogia** (passo 6) entrou em 16/08, por decisão de 15/08
registrada no `PRODUCAO.md`, § O fio da responsabilidade, item 1. É ela que
segura o bloco 4: sem a distinção de quem responde, o acórdão do TRT-2 chega lá
sem chão. Os 15 s a mais saíram da folga do bloco, não de outro passo.

**Revisão de 16/08 à noite, sobre as suas anotações no arquivo** — sete
mudanças:

1. *Passo 1.* "Gerar de novo, uma ou duas vezes" tornava falsa a fala que
   cravava "três respostas". A fala passou a funcionar com duas ou três, sem
   citar número.
2. *Passo 2.* Entrou a extensão das duas idades (IA dos anos 1950, a
   arquitetura de 2017, o celular em 2022), marcada como extensão porque o
   passo já está em 1min30. Fontes conferidas e anotadas, com o aviso de não
   dizer que "o LLM foi inventado em 2017".
3. *Passo 3, etapa 1.* A fala do gatilho estava grosseira: afirmava como regra
   o que só vale para o aplicativo que a sala usa. Foi reescrita para esse
   escopo, e a ressalva honesta (existe disparo automático, mas alguém montou
   antes) virou nota com resposta de uma linha — sem puxar o assunto, que é
   dos agentes, no bloco 3.
4. *Passo 3, etapa 4.* Entrou como extensão a ressalva de que pedir não é
   garantir: ele pode pular passo ou dizer que conferiu sem ter conferido, e
   parte do trabalho é olhar se cumpriu.
5. *Passo 3, etapa 11.* Você não é mais chamado de ferramenta, nem na fala nem
   na tela: a animação ganhou um filete e o rótulo "não é ferramenta" acima do
   cartão, separando-o do harness.
6. *Passo 4.* Entrou o fecho que faltava — cada aplicativo monta um escritório
   diferente —, e o fecho da pergunta incompleta ganhou a sua formulação: não
   basta o estagiário que estudou mais, ele precisa de escritório equipado e de
   alguém que saiba mandar.
7. *Passo 6, primeira quebra.* Reescrita com a sua observação: os aplicativos
   tomam nota e releem a nota a cada conversa, o que parece aprendizado e não
   é. A imagem do bilhete na mesa mantém a analogia de pé e ainda devolve o
   ponto ao harness.

**Palavra vetada no material: "colar"** (decisão sua, 16/08). Dois motivos: no
ouvido de advogado ela ecoa cola de prova, que é a moldura contrária à da
oficina; e na prática frustra, porque o usuário tenta Ctrl+V e o caminho real é
anexar arquivo. Aqui ela saiu de dois lugares (o fecho do passo 5 e o (B), que
agora diz "leve para lá o que importa"). **O veto vale para o material inteiro
e há ocorrências em outros blocos** — a lista está na entrada deste bloco no
diário do `BRIEFING-REVISAO.md`, para as sessões donas daqueles arquivos.
Ressalva: quando "colar" aparece na discussão de licitude (bloco 5), a palavra
é o objeto do debate jurídico e não se troca por sinônimo — o que se fez lá foi
dar objeto direto a ela ("colar o caso do cliente").

**O aparte de ceticismo fica fora — decidido em 16/08.** Eram 30 s fechando o
bloco ("eu uso todo dia e desconfio todo dia; uma dessas vocês vão ver hoje").
Ele tinha sumido do arquivo sem registro, e você confirmou o bloco como está:
não volta. Fica a consequência anotada, porque ela é de outro bloco — **era daí
que saía uma promessa para a demo**. Se nenhum outro bloco anunciar que a peça
pregada vai aparecer lá, o bloco 8 entra sem esse gancho; está na Tarefa 12 do
`PRODUCAO.md` para a varredura final.

**A duração ficou em ~14min15**, contra os 14min00 da tabela-mestra, e você
confirmou assim. A tabela do `PLANO-REVISAO.md` § 1 não foi recalculada de
propósito — a regra é que a sessão do bloco reporta e não mexe no relógio da
noite. O amortecimento está dentro do próprio bloco: a ressalva do Google, 45 s,
que já é o primeiro corte.
