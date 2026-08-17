# Bloco 8 — Estudo de caso: eu, o Claude e um contrato

**20 min** (17,5 de roteiro + 2,5 de amortecimento) · slides 20 e 21 (o prompt
do passo 1 e o fluxo do fim) · material:
`Contrato - Siderpark x Tecnosul.docx`, gabarito impresso
(`materiais/GABARITO-contrato.md`)

**Relógio (largada 19h00, teto 20h30):** entra 19h58 · sai 20h18 · entrada-limite
sem corte: 20h03 — depois disso, a escada de corte decide antes de você subir no passo 1

Duas coisas valem para o bloco inteiro:

- **Nada aqui depende do bloco 7.** Cada passo é anunciado pela frase que o
  justifica, e cada uma dessas frases já foi dita no bloco de origem. Não há
  contagem, não há "a primeira", não há "a sétima" — se o bloco 7 não existir
  na noite, esta demo não perde uma linha.
- **Nenhuma geração sem fala escrita para cobri-la.** São quatro gerações, de
  30 a 90 segundos cada. Cada uma tem duas camadas de fala: a primeira você
  diz sempre; a segunda entra só se o cursor ainda estiver piscando. É o único
  trecho da noite que vale decorar.

**O que ainda depende do seu teste no app** (marcado também no corpo): o que
comentar no passo 1 — o que ele achou e o que deixou passar das cinco —, e o
tempo real de cada geração, que é o que decide se a segunda camada é opcional
ou obrigatória.

---

## Antes de começar

- Contrato já aberto no Word, numa segunda janela, na cláusula 6.2 (é a que
  você vai abrir no passo 2 — deixe pronta para não procurar no palco)
- Claude aberto em **conversa nova**, perfil de navegador limpo, zoom da fonte
  já ajustado
- **Busca ligada** — é a decisão do passo 5, e ela vale desde o começo da
  conversa. Confira antes de subir
- Site do STJ já aberto numa terceira janela, e o print da consulta de ontem a
  um Alt+Tab
- Gabarito impresso, à sua esquerda
- Cronômetro zerado: este é o bloco que estoura

---

## Passo 0 — A cena (30 s)

Sem slide de título, direto:

> "Sexta-feira, seis da tarde. Cliente manda no WhatsApp: 'doutor, dá uma
> olhada nesse contrato? Preciso assinar segunda.' Dez cláusulas. É esse
> contrato aqui, e o cliente é a Tecnosul — uma prestadora de serviços de Volta
> Redonda que vai fechar com uma administradora de São Paulo."

- Contrato na tela por três segundos, rolando rápido — só para a sala ver o
  volume
- Nomear que é fictício **agora**, retomando a frase do sigilo:

> "Antes que alguém pergunte: esse contrato é inventado. Eu escrevi. Vale para
> mim o que eu disse lá atrás — o cliente não contratou a ferramenta, contratou
> você. Documento de cliente não entra num telão nem numa demonstração. É por
> isso que a gente vai trabalhar com uma ficção."

---

## Passo 1 — "Ele redige de cabeça": primeiro os autos (3 min)

- Anunciar a frase antes de agir: "o modelo redige de cabeça — então primeiro
  os autos. Vou levar o contrato inteiro para dentro da conversa, não vou
  perguntar de memória."
- Anexar o .docx e colar o prompt (**slide 20**, que fica projetado enquanto
  gera):

```
Você é assistente de um advogado que representa a TECNOSUL, a contratada.

Leia o contrato em anexo e produza uma tabela com quatro colunas:
cláusula (número exato) | risco para a Tecnosul | gravidade (alta/média/baixa)
| fundamento legal aplicável.

Condições:
- cite o número exato de cada cláusula;
- não inclua cláusula que não esteja no documento;
- se não tiver certeza de um fundamento legal, escreva "a confirmar" em vez
  de citar artigo.
```

**Fala de espera** — comente o desenho do prompt, que está na tela ao lado da
resposta nascendo:

> "Repara em três coisas que eu escrevi aí. Primeiro, eu dei um lado: 'você
> representa a contratada'. Sem isso ele faz um resumo neutro que não serve
> para nada, porque contrato não tem risco em abstrato — tem risco para
> alguém. Segundo, eu pedi o número exato da cláusula. Não é capricho: é o que
> me deixa conferir depois em dez segundos. E terceiro, eu autorizei ele a
> dizer 'a confirmar'. Se você não abrir essa porta, ele preenche o vazio com
> coisa plausível. Nunca com silêncio."

**Se ainda estiver gerando** — a escolha do caso, que é a escolha anterior a
todas as outras:

> "E tem uma coisa que eu escolhi antes de escrever qualquer prompt. Eu não
> trouxe um processo para cá, trouxe um contrato. Contrato é onde conferir sai
> barato: o documento está inteiro aqui na minha mão, e cada coisa que ele
> afirmar eu confiro abrindo a cláusula. Quando eu escolho a tarefa, eu já
> estou escolhendo junto o tamanho do trabalho de conferência que ela vai me
> dar."

Saiu a tabela:

- **Conferir contra o gabarito, sem ler o gabarito no palco**
- Comentar duas ou três linhas, nunca a tabela toda. As candidatas, em ordem
  de preferência: a multa assimétrica (6.1 vs 6.2), o foro de São Paulo (10.1)
  e — se ele pegou — a confidencialidade de informação pública (7.3)

> "Essa aqui é a que dói: a contratante sai quando quiser, de graça, com trinta
> dias de aviso. A minha cliente, se quiser sair, paga trinta por cento do que
> falta. Num contrato de dois anos, sair no sexto mês custa duzentos mil."

> **Pendente do seu teste.** A lista definitiva do que comentar aqui sai do que
> o app devolveu com este contrato — quais das cinco principais ele achou,
> quais deixou passar, se hierarquizou, se cruzou 1.3 com 4.2. Me manda a saída
> e eu fecho este trecho com o que aconteceu de verdade, em vez de com os três
> cenários genéricos abaixo.

Enquanto isso, as três saídas já resolvidas no gabarito:

- **Achou as cinco:** "achou as cinco que eu plantei" — e segue
- **Deixou passar alguma:** não conserte por cima. Use como gancho do passo
  seguinte — "faltou a do foro; repara que eu vou ter que pedir de novo,
  olhando o que ele não olhou. É isso que revisar significa"
- **Errou o número da cláusula e acertou o conteúdo** (o mais provável de
  todos): melhor ainda. Trinta segundos sobre isso, no passo 2 — é erro
  pequeno, é chato, e é exatamente por isso que a conferência existe

---

## Passo 2 — Número se confere na fonte: amostragem (2 min)

- "Ele me deu número de cláusula. Número se confere na fonte — então eu abro
  o contrato."
- Alt+Tab para o Word, cláusula 6.2, ler em voz alta a parte dos 30%
- Voltar

> "Isso aqui eu faço sempre. Pego um item, abro o contrato e confiro. Leva dez
> segundos e é o que me deixa dormir. Não confiro os quatorze — confiro dois,
> três. Se os que eu confiro batem, eu sigo com uma desconfiança razoável. Se
> um não bate, eu paro e leio tudo."

- Não há geração neste passo. É o único respiro do bloco e ele é de propósito:
  a sala acabou de ver a máquina trabalhar e agora vê você trabalhar

---

## Passo 3 — "Concordar não é conferir": a minuta lida em voz alta (3 min)

- "O que vem agora é rascunho, e concordar não é conferir — eu vou ler antes
  de aproveitar qualquer linha."

```
Com base apenas neste contrato, redija a minuta de uma carta de
contraproposta da Tecnosul à Siderpark, apontando as duas cláusulas mais
graves da tabela e propondo revisão de ambas.

Tom firme e cordial. Máximo de uma página. Não cite jurisprudência.
```

**Fala de espera:**

> "Repara que eu proibi jurisprudência aqui. De propósito. Eu quero a estrutura
> da peça primeiro, limpa — jurisprudência a gente vai pedir daqui a pouco, e
> vai ser um capítulo à parte, porque é onde mora o problema."

**Se ainda estiver gerando** — as outras duas escolhas do mesmo pedido:

> "E olha a primeira linha: 'com base apenas neste contrato'. É a mesma ideia
> dos autos de novo. Eu não quero que ele complete com o que ele lembra de
> outras cartas que já leu na vida; quero ele dentro do documento que eu
> dei. A página única é pelo mesmo motivo — peça curta é peça que eu consigo
> ler inteira antes de assinar."

- Ler em voz alta um trecho bom e um trecho ruim. **Os dois, sempre.**

> "Isso aqui está bom: ele pegou o desequilíbrio e escreveu em linguagem de
> carta, não de parecer. E isso aqui está genérico — 'em observância aos
> princípios da boa-fé objetiva' podia estar em qualquer carta do mundo.
> Se eu mandasse assim, o outro lado ia saber em dez segundos que ninguém
> pensou muito nisso."

---

## Passo 4 — "Onde eu estou errado?": advogado do diabo (3 min)

- Sem pergunta à sala. Anuncie a escolha e execute:

> "Dava para ir por dois caminhos aqui: pedir para reescrever numa linguagem
> que o cliente leigo entenda, ou virar o jogo e atacar a minha própria peça.
> Hoje eu vou de advogado do diabo, que é o uso que eu mais faço e o que menos
> gente conhece."

```
Agora inverta o lado: você é o advogado da Siderpark, que recebeu essa
carta. Liste os três argumentos mais fortes que você usaria contra
ela, indicando qual ponto da minuta cada um ataca.
```

**Fala de espera** — é aqui que a sicofantia volta, e ela é a razão do pedido
ter essa forma:

> "Repara no que eu tive que fazer para conseguir isso. O padrão dela é
> concordar comigo — é aquele puxa-saquismo que eu mostrei lá atrás. Se eu
> perguntar 'minha carta ficou boa?', ela vai achar que ficou. Então eu
> não pergunto. Eu troco o cliente dela: agora ela advoga para o outro lado. É
> a mesma coisa que eu disse antes com outras palavras — não pergunte 'estou
> certo?', pergunte 'onde eu estou errado?'. Isso aqui é essa pergunta escrita
> de um jeito que ela não consegue me agradar."

**Se ainda estiver gerando:**

> "E esse é o uso que mudou mais a minha semana, o que não tem nada a ver com
> escrever mais rápido. É ter alguém que discorda de mim às seis da tarde de
> sexta, quando não tem mais ninguém no escritório para discordar."

- Ler os três. Comentar qual deles é o que realmente te preocuparia
- Se um for fraco, dizer que é fraco — a honestidade aqui vale mais que a demo

---

## Passo 5 — "CPF do precedente": agora na jurisprudência (4 min)

**O momento mais importante da noite.**

```
Sobre a cláusula 6.2 — multa de 30% para a contratada, sem penalidade
equivalente para a contratante: existe jurisprudência do STJ sobre redução
de multa contratual desproporcional, ou sobre assimetria de penalidades em
contrato empresarial?

Cite no máximo 3 acórdãos, com número do processo, relator, órgão julgador
e ano. Se não tiver certeza de que um acórdão existe exatamente como você
está citando, diga isso de forma explícita.
```

**Fala de espera** — e você já vai abrindo a janela do STJ enquanto fala:

> "Enquanto ele procura, eu já abro o site do tribunal aqui do lado. E repara
> no que eu pedi: número do processo, relator, órgão julgador e ano. Não é
> preciosismo. É o que me deixa achar o acórdão em dez segundos — número de
> processo é o CPF do precedente. Sem ele eu fico com uma frase bonita e nenhum
> jeito de saber se ela existe."

**Se ainda estiver gerando** — a busca ligada, dita como escolha:

> "E a busca dele está ligada, de propósito. Ele pode ir na internet agora: não
> é mais só a memória, é o escritório em volta. Mesmo assim eu vou abrir o
> tribunal. Ferramenta que busca também erra ao citar o que achou, e quem leva
> o número para dentro da petição sou eu."

- Escolher **uma** citação e conferir ao vivo, em tela dividida

### Os três desfechos, todos já escritos

**Confirma** (o mais provável, com a busca ligada):

> "Existe, é isso mesmo, e o relator bate. Levou quarenta segundos, e esse é o
> fluxo mínimo — nunca menos que isso. E olha o que mudou agora: esse número
> passou a ser meu. Se ele estivesse errado, quem responderia por ele na
> petição seria eu, não ela. Essa tela aqui é a minha conferência — é isso que
> eu tenho para mostrar, não a resposta dele."

**Não confirma:**

> "Não existe. Ao vivo, sem ensaio possível. É exatamente por isso que número
> de processo é o CPF do precedente — e é assim que se chega no caso do TRT-2
> que eu contei lá atrás."

**O site não abre, engasga ou pede captcha** — saída em 15 segundos, sem mexer
no navegador em silêncio:

> "Não abriu — e isso também é o trabalho real. Eu tenho aqui o print da mesma
> consulta ontem."

(Alt+Tab para o print, comenta, volta. Nunca fique mexendo no navegador calado.)

> **Decisão do passo, fechada: busca ligada.** É como você trabalha de verdade,
> e a lição vira "mesmo com busca, eu abro a fonte", que é mais honesta.
> Desligada aumenta a chance de ele inventar — é mais dramático e beira a
> armadilha. Você não precisa que ele erre: já tem a ementa falsa da abertura e
> os tribunais brasileiros do bloco 4. O que o ensaio de domingo confirma aqui
> não é a decisão, é a operação — que a busca está mesmo ligada na conversa,
> que o site do STJ abre da rede do local, e quanto tempo ele leva com a busca
> ativa (que costuma ser mais que sem).

---

## Passo 6 — Balanço: o que eu deleguei e o que não (2 min)

- **Slide 21**, o balanço em cinco linhas: o contrato, a tabela, a conferência,
  o rascunho e a citação verificada — cada um com o tratamento que recebeu
- A tela só nomeia as cinco coisas. Quem está em primeira pessoa é você, na
  fala abaixo — não leia o slide em voz alta

> "Isso levou vinte minutos, comigo revisando o tempo todo. Na minha mesa, a
> mesma coisa levava a sexta-feira inteira. E repara no que eu deleguei: ler,
> tabelar, rascunhar, contra-argumentar. Pedi o caminho junto em cada passo, e
> foi isso que me deixou conferir. O que eu não deleguei foi decidir o que
> fazer com isso tudo. E quem assina a carta continua sendo eu, com meu
> número de OAB embaixo — a tarefa se delega; a responsabilidade, não."

- Nenhuma contagem de frases, aqui nem em lugar nenhum do bloco. O balanço é
  sobre o que ficou na tela, e a sala acabou de ver os cinco passos acontecerem
- **Se você cortou o passo 4** (contingência de tempo): tire "contra-argumentar"
  da lista do que você delegou. O resto da fala segue idêntico, e não se diz
  nada sobre o que deixou de aparecer — a demo não deve satisfação a uma lista
  que a noite não fez

> **O slide 21 mudou duas vezes, e as duas por tese.** Em 16/08 saíram os cinco
> imperativos (COLE, PEÇA, CONFIRA, DELEGUE, VERIFIQUE) e o título "O que eu
> faço amanhã de manhã" — lista de imperativos lê como manual, que é o gênero
> banido pela "Decisão de tese" e o que matou o bloco 7. Em 17/08 saíram também
> a primeira pessoa e o rodapé ("Vinte minutos, com revisão em cada passo. Na
> minha mesa, a mesma coisa levava a sexta-feira inteira"), por decisão sua: a
> sua experiência de uso fica na fala, e a tela guarda o que a sala viu
> acontecer. O título passou a ser "O que ajudou, neste caso" — o "neste caso"
> é o que impede a página fotografada de virar norma geral. **A fala deste
> passo não mudou uma vírgula em nenhuma das duas rodadas**: ela já era
> retrospectiva e já era em primeira pessoa. Os vinte minutos, que eram o
> assunto do rodapé, agora existem só nela.

---

## Checklist de ensaio deste bloco

- [ ] Rodar o fluxo completo 2x, **cronometrando cada geração separadamente**.
      É esse número que decide se a segunda camada de cada fala de espera é
      opcional ou obrigatória — se alguma geração passar de 90 segundos, ela
      vira obrigatória e você decora as duas
- [ ] Conferir a tabela gerada contra o gabarito — anotar o que ele acha e o
      que deixa passar, porque **é isso que você vai comentar no palco** (e é o
      que falta para eu fechar o passo 1)
- [ ] Confirmar a busca ligada na conversa e que o site do STJ abre da rede do
      local, da posição do palestrante
- [ ] Salvar a tabela e a minuta geradas (compõem o kit impresso do plano C)
- [ ] Gravar o screencast do fluxo inteiro (plano B camada 2)
- [ ] Print da consulta ao STJ (Alt+Tab do terceiro desfecho)
- [ ] Deixar o Word já aberto na cláusula 6.2

---

## Fontes deste bloco

Revisão de veracidade em 16/08/2026. Este é o bloco **menos** exposto da noite,
porque quase tudo nele é ficção sua e acontece na tela — mas ele tem três
pontos verificáveis, e um deles a sala pode conferir olhando o telão.

- **A conta dos duzentos mil (passo 1) confere.** Contrato de 24 meses a
  R$ 38.500; saindo no mês 6 sobram 18 meses, R$ 693.000; 30% disso é
  R$ 207.900. "Duzentos mil" é arredondamento honesto para baixo, e bate com o
  gabarito. Se alguém fizer a conta no celular enquanto você fala, chega no
  mesmo lugar — **não diga "mais de duzentos mil"**, que aí a conta fica no
  fio. Fonte: `materiais/GABARITO-contrato.md`, armadilha 1
- **"Dez cláusulas" (passo 0) confere** com o contrato fictício, que vai até a
  cláusula 10 (foro)
- **O contrato é ficção sua**, e você diz isso no passo 0. Nenhuma afirmação
  externa depende dele — inclusive a cláusula 7.3 (confidencialidade de
  informação já pública), que é absurda de propósito
- **A conferência do passo 5 é a única coisa da noite que depende de um
  tribunal responder ao vivo.** Se o STJ engasgar, o print resolve; se você
  quiser um print de segurança que também sirva de conteúdo, o candidato óbvio
  é o **REsp 1.424.074-SP** (rel. min. Ricardo Villas Bôas Cueva, 3ª Turma, j.
  10/11/2015, DJe 16/11/2015), que é a ementa **verdadeira** da abertura, é
  exatamente sobre redução de cláusula penal excessiva e conversa direto com a
  cláusula 6.2. Fechar a demo verificando o julgado que abriu a noite é um
  fecho melhor do que o acaso vai te dar. Conferido na fonte primária — ver
  `bloco-1-abertura.md`, § Fontes
- **Art. 413 do Código Civil** é o fundamento por trás do prompt do passo 5
  (redução equitativa da penalidade manifestamente excessiva). Se a ferramenta
  devolver o artigo, ele está certo — e é o mesmo do bloco 2 e do bloco 1
- **Sem fonte, e correto assim:** "isso levou vinte minutos, na minha mesa
  levava a sexta-feira inteira" é medida sua, dita em primeira pessoa, sobre o
  seu trabalho. Ninguém pode contestar e ninguém precisa. Não a transforme em
  número geral ("a IA economiza X% do tempo do advogado") — esse número não
  existe conferido em lugar nenhum da nossa lista

---

## Plano B, as três camadas

1. **Internet do local falhar** → hotspot 4G próprio, testado da posição do
   palestrante uma hora antes. Assuma que o wi-fi do local não existe
2. **Rede nenhuma** → o vídeo gravado no ensaio, arquivo local (jamais
   streaming), pausado nos mesmos pontos para você narrar as mesmas falas:
   "a internet caiu, mas eu gravei esse fluxo ontem — deixa eu mostrar"
3. **Falha total de projeção** → você narra o caso com o kit impresso na mão
   (contrato, tabela, minuta, print da verificação), como quem conta um caso no
   café

E a quarta situação, que não é falha nenhuma: **se a resposta vier ruim ou
genérica, isso é conteúdo.** Mostre o que você faz — dar mais contexto, mandar
refazer apontando o que faltou, conferir. É o uso real da ferramenta, e é a
parte que ninguém filma para o Instagram.
