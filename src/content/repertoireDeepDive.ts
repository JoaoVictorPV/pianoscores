import type { RepertoireItem } from "@/content/keys";

export type DeepDiveSection = {
  title: string;
  paragraphs: string[];
};

export type RepertoireDeepDive = {
  /** Short, punchy summary for scanning (1–3 lines). */
  summary: string[];
  /** Long-form sections. */
  sections: DeepDiveSection[];
  /** Optional “listen for / practice for” bullets. */
  takeaways?: string[];
};

/**
 * Manual overrides for flagship pieces.
 *
 * NOTE: This is intentionally small. Everything else is covered by autoDeepDive()
 * so the site stays complete without needing hundreds of handcrafted entries.
 */
const MANUAL: Partial<Record<string, RepertoireDeepDive>> = {
  "mozart-k331": {
    summary: [
      "Tema e variações como ‘microscópio’ de estilo: o mesmo material muda de personalidade sem mudar de gramática.",
      "Uma aula de retórica clássica: clareza, simetria e fantasia controlada (não ‘efeito’).",
    ],
    sections: [
      {
        title: "Mozart no piano: por que variações viram autobiografia indireta",
        paragraphs: [
          "A K. 331 pertence ao Mozart que já domina o idioma de salão e o transforma em arte: ele escreve para um mundo em que o piano vira objeto central da burguesia urbana — música que precisa ser tocável, memorável, vendável, mas ainda assim elegante ao extremo.",
          "O formato ‘Tema e Variações’ aqui não é só divertimento. Em Mozart, variação é uma aula de linguagem: ele mostra como caráter muda por articulação, registro, figuração e harmonia — e não por sentimentalismo. Isso é valioso porque treina interpretação sem recorrer ao excesso romântico.",
        ],
      },
      {
        title: "Arquitetura: como o mesmo tema vira vários ‘personagens’",
        paragraphs: [
          "O tema é propositalmente simples: períodos claros, cadências limpas, uma harmonia que ‘se explica’ em voz baixa. Justamente por isso, qualquer escolha de toque aparece.",
          "Cada variação desloca o foco: ora a textura vira filigrana, ora a mão esquerda assume mais movimento, ora a dinâmica exige gradações. A genialidade está em manter a forma reconhecível enquanto a superfície muda — como alguém mudando de roupa sem mudar de identidade.",
        ],
      },
      {
        title: "Sintaxe clássica: cadências, simetria e a ideia de ‘período’",
        paragraphs: [
          "O idioma clássico depende de pontuação: cadências funcionam como pontos e vírgulas. Se você alisa cadências com pedal ou pressa, você remove a sintaxe e a peça vira uma sequência bonita, porém sem fala.",
          "O brilho mozartiano aqui é o equilíbrio entre previsibilidade (forma) e surpresa (variação). Mesmo quando há ornamentação, a harmonia continua inteligível: virtuosismo que não faz barulho.",
        ],
      },
      {
        title: "Curiosidade útil: por que esse movimento é difícil ‘do jeito certo’",
        paragraphs: [
          "Em Mozart, o erro mais comum é confundir elegância com neutralidade. Cada variação pede um caráter específico, mas dentro do mesmo ‘bom gosto’ (sem virar caricatura).",
          "Um bom estudo aqui é de estética: variar timbre e intenção com economia de gesto. Isso vira técnica de alto nível porque exige ouvido — não força.",
        ],
      },
    ],
  },

  "beethoven-op2-2": {
    summary: [
      "Beethoven jovem usando a forma clássica como ringue: contraste, energia e humor com estrutura.",
      "Boa para treinar ‘retórica’ (acento com função) sem transformar o piano em martelo.",
    ],
    sections: [
      {
        title: "O que a Op. 2 significa na carreira (cartão de visita com ambição)",
        paragraphs: [
          "As sonatas Op. 2 pertencem ao Beethoven que chega para ser levado a sério: ele entra no idioma de Haydn/Mozart, mas já deixa claro que quer mais atrito, mais impulso, mais ‘motor’. Não é ruptura; é tensão dentro do molde.",
          "Para o estudo, isso muda a leitura: aqui a forma não é neutra. A forma é palco. Se você não faz o contraste soar inevitável, você perde a personalidade beethoveniana e sobra apenas uma ‘sonata correta’.",
        ],
      },
      {
        title: "Forma como discurso (o que é tema, o que é comentário, o que é virada)",
        paragraphs: [
          "Pense em três níveis: (1) material principal (o que precisa ser lembrado), (2) material de transição (o que empurra), (3) zonas de instabilidade (onde Beethoven provoca). Quando esses níveis não têm hierarquia, o movimento parece longo sem ser grande.",
          "Beethoven usa dinâmica e registro como ‘pontuação forte’: não é só volume — é gramática. Quando você entende isso, a peça ganha humor e musculatura sem endurecer.",
        ],
      },
      {
        title: "Curiosidades úteis (por que isso treina o Beethoven ‘depois’)",
        paragraphs: [
          "Mesmo sendo Beethoven inicial, a peça já te prepara para o Beethoven médio: acentos com sentido, frases que ‘andam’ por motivo e uma relação mais orquestral com o teclado.",
          "Um bom objetivo é ouvir onde a harmonia pede tensão e onde ela pede clareza — e usar o toque para fazer o ouvinte perceber essa mudança sem precisar de explicação.",
        ],
      },
    ],
  },

  "schubert-d664": {
    summary: [
      "Schubert em A maior: narrativa por respiração e por harmonia — ‘paisagem’ em vez de debate.",
      "Treino de frase longa: o tempo precisa soar inevitável, não apressado.",
    ],
    sections: [
      {
        title: "Schubert e a sonata como espaço (canto expandido)",
        paragraphs: [
          "Schubert escreve sonatas com cérebro de compositor de canções: ele pensa em linhas que respiram, em mudanças de cor que acontecem quase sem anúncio, e em um tipo de tensão que não depende de choque.",
          "Isso é central no idioma dele: quando você toca Schubert como Beethoven, você perde o ponto. O drama aqui frequentemente é harmônico (mudança de chão) e não volumétrico (mudança de decibel).",
        ],
      },
      {
        title: "Linguagem: modulação discreta e ‘tempo interno’",
        paragraphs: [
          "Schubert é mestre de virar o clima com um pequeno desvio: uma nota muda função, um acorde se reinterpreta, e você já está em outro quarto. A execução precisa deixar o ouvinte perceber a virada sem teatralizar.",
          "A técnica teórica prática: marque (mentalmente) onde a harmonia ‘abre janela’ e onde ela ‘fecha período’. Se você ouve isso, seu rubato fica lógico e a peça para de parecer ‘morna’.",
        ],
      },
      {
        title: "Curiosidades úteis (por que Schubert parece simples e não é)",
        paragraphs: [
          "O virtuosismo schubertiano é invisível: ele exige camadas constantes e uma mão esquerda que sustenta o mundo sem chamar atenção. Quando dá certo, parece fácil — e esse é o sinal.",
          "Como estudo, isso melhora tudo: você aprende a não confundir intensidade com força, e a sustentar forma por direção harmônica.",
        ],
      },
    ],
  },

  "chopin-prelude-7-a": {
    summary: [
      "Miniatura concentrada: harmonia e caráter em poucos compassos — um ‘parágrafo’ musical.",
      "Chopin curto exige intenção imediata: não há tempo para ‘se encontrar’ no meio.",
    ],
    sections: [
      {
        title: "O prelúdio em Chopin (peça autônoma, não aquecimento)",
        paragraphs: [
          "Chopin pega o termo ‘prelúdio’ e transforma em obra fechada: cada número vira um estado. Aqui, o tamanho pequeno é uma escolha estética — concisão como virtude.",
          "Na prática de estudo, esse tipo de peça funciona como bisturi: ela revela se você sabe dar sentido a um acorde, dar direção a uma cadência e fazer o piano falar baixo sem ficar sem coluna.",
        ],
      },
      {
        title: "Linguagem: harmonia como narrativa (não como sequência de acordes)",
        paragraphs: [
          "O núcleo é harmônico: a melodia é quase mínima, mas as funções se encadeiam com precisão. Se você não ouve tensão/resolução, a música vira ‘bonita’ e genérica.",
          "Um jeito de ler: identifique onde a música ‘prepara’, onde ‘aponta’, onde ‘fecha’. Essa pontuação é a diferença entre rubato adulto e rubato aleatório.",
        ],
      },
      {
        title: "Curiosidades úteis (por que curto = exigente)",
        paragraphs: [
          "Peças curtas não têm espaço para máscara: timbre, ataque e equilíbrio aparecem na hora. Isso as torna ótimas para lapidar estilo sem fadiga.",
          "Como repertório, é um ótimo ‘cartão de visita’: você mostra musicalidade sem depender de virtuosismo vistoso.",
        ],
      },
    ],
  },

  "chopin-polonaise-op40-1": {
    summary: [
      "Polonaise como emblema: ritmo cerimonial e gesto público — piano como símbolo.",
      "O desafio é energia disciplinada: acento com forma, não com violência.",
    ],
    sections: [
      {
        title: "Gênero e contexto: quando dança vira identidade",
        paragraphs: [
          "A polonaise carrega DNA de afirmação cultural. Em Chopin, isso tem peso especial: mesmo circulando em salões, a dança vira signo de ‘voz coletiva’ estilizada.",
          "Na carreira, as polonaises funcionam como ‘peças públicas’: o compositor do íntimo (noturnos) também escreve para um gesto cerimonial. Isso muda o caráter: o pulso precisa ter postura.",
        ],
      },
      {
        title: "Ritmo e forma: marcha que precisa dançar",
        paragraphs: [
          "O truque é lembrar que é dança, não desfile. Se você torna quadrado, perde elegância; se afrouxa, perde coluna. Acentos existem para apontar métrica e harmonia.",
          "Harmonicamente, o brilho está em alternar densidade e espaço: trechos de ‘bronze’ e trechos de ‘ar’. Quando essa alternância fica clara, o caráter aparece sem excesso de volume.",
        ],
      },
      {
        title: "Curiosidades úteis (por que isso vira teste de maturidade)",
        paragraphs: [
          "É fácil soar heroico tocando forte. Difícil é manter clareza, pulso e hierarquia durante uma energia marcial constante.",
          "O estudo histórico aqui ajuda diretamente: entender o que uma polonaise ‘significa’ resolve articulação e acento melhor do que qualquer dica mecânica.",
        ],
      },
    ],
  },

  "brahms-op118-2": {
    summary: [
      "Brahms tardio: intimidade arquitetada — o tema real pode estar em voz interna, não na superfície.",
      "Estudo de densidade organizada: harmonia e condução de vozes fazem o drama, não o volume.",
    ],
    sections: [
      {
        title: "O lugar da Op. 118 na vida de Brahms (quando o virtuosismo vira ‘pensamento’)",
        paragraphs: [
          "A Op. 118 pertence ao Brahms tardio: música que já não compete por brilho imediato. É um compositor que escreve como quem revisita memórias, mas com a frieza estrutural de alguém que conhece Bach por dentro.",
          "Na carreira, essas peças funcionam como destilação: menos ornamentação externa, mais densidade emocional por harmonia e por textura. Isso é ótimo para estudo porque obriga você a ouvir camadas reais.",
        ],
      },
      {
        title: "Linguagem: melodia em relevo (não em neon)",
        paragraphs: [
          "A ‘melodia’ aqui frequentemente está acoplada à textura: ela pode estar no alto, no meio, ou sugerida por notas de apoio. Interpretar bem é esculpir relevo sem separar artificialmente.",
          "Brahms usa harmonia espessa e, às vezes, ambígua: a sensação de chegada/saída nem sempre é óbvia. Quando você aprende a reconhecer essas micro-tensões, o rubato começa a fazer sentido sem virar derretimento.",
        ],
      },
      {
        title: "Curiosidades úteis: por que isso melhora seu ouvido de forma permanente",
        paragraphs: [
          "Depois de Brahms tardio, você começa a ouvir o que normalmente passa batido: linhas internas, notas de passagem ‘com função’, e tensão que se move lentamente. Isso transfere direto para Chopin (voicing) e para Schubert (tempo interno).",
          "É o tipo de peça que ensina ‘som caro’ como consequência de organização: profundidade sem grosseria, e densidade sem virar massa.",
        ],
      },
    ],
  },

  "mendelssohn-op62-6": {
    summary: [
      "‘Spring Song’: romantismo com disciplina clássica — alegria articulada, não euforia desorganizada.",
      "Peça-escola de transparência: melodia vocal por cima de um mecanismo que precisa ser invisível.",
    ],
    sections: [
      {
        title: "Mendelssohn e o piano burguês (música doméstica com cérebro de compositor)",
        paragraphs: [
          "As ‘Songs Without Words’ nascem em um mundo em que o piano está no centro da casa e do mercado editorial. Mendelssohn responde escrevendo música tocável, mas com refinamento composicional de alguém que revive Bach e adora forma.",
          "Na trajetória dele, esse repertório é identidade: cantar no piano sem recorrer a sentimentalismo grosseiro. Para estudar, isso é ouro: você treina estilo, não só dedos.",
        ],
      },
      {
        title: "Linguagem: cantabile sustentado por engrenagem (sem virar engrenagem)",
        paragraphs: [
          "A melodia precisa soar como frase humana. O acompanhamento é uma máquina rítmica suave: se ele cresce demais, a peça fica mecânica; se ele some, a harmonia perde chão.",
          "A genialidade está nas transições: pequenas mudanças de cor que precisam ser ‘ouvidas’ no tempo. Quando o pulso é estável, a leveza parece natural.",
        ],
      },
      {
        title: "Curiosidades úteis: por que ‘leve’ aqui não significa ‘fraco’",
        paragraphs: [
          "Leveza mendelssohniana é controle. A música perde elegância quando vira pressa; perde vida quando vira neutra. O meio-termo é fraseado com pontuação.",
          "Estudar isso melhora seu Mozart automaticamente: você aprende a separar canto e textura sem precisar de excesso de pedal.",
        ],
      },
    ],
  },

  "bach-wtc2-a": {
    summary: [
      "WTC (Livro II): Bach como laboratório de clareza mental — polifonia que exige hierarquia de vozes.",
      "Em A maior, o desafio é fazer luz com contorno: legível, articulado, sem virar ‘bonito borrado’.",
    ],
    sections: [
      {
        title: "O projeto do WTC (enciclopédia prática de tonalidade e linguagem)",
        paragraphs: [
          "O Cravo Bem Temperado não é ‘coleção de exercícios’: é um atlas. Ele demonstra a viabilidade das tonalidades no temperamento e, ao mesmo tempo, ensina composição e interpretação através de obras completas.",
          "No Livro II, a escrita costuma ser ainda mais concentrada. Para o pianista, isso é treino de cabeça: você não pode tocar por superfície; precisa entender o que é sujeito, o que é acompanhamento e o que é discurso.",
        ],
      },
      {
        title: "Prelúdio e fuga: duas escutas diferentes",
        paragraphs: [
          "No prelúdio, a textura (figuração) é o veículo da harmonia: você precisa deixar as cadências aparecerem como pontuação. Na fuga, o eixo vira retórico: entradas e respostas precisam ser reconhecíveis.",
          "Bach em A maior costuma soar ‘claro’; a armadilha é virar decorativo. A clareza verdadeira vem de frase e hierarquia, não de brilho superficial.",
        ],
      },
      {
        title: "Curiosidades úteis: Bach no piano moderno (sustain como tentação)",
        paragraphs: [
          "O piano moderno oferece sustain e dinâmica que o cravo não tinha. Isso é vantagem e risco: a polifonia desaparece quando o sustain vira cola.",
          "Uma boa leitura ‘moderna’ é aquela que usa o instrumento atual sem apagar a lógica barroca: borda de ataque, releases limpos e vozes com personalidade.",
        ],
      },
    ],
  },

  "scarlatti-k208": {
    summary: [
      "Scarlatti: virtuosismo compacto — ritmo como teatro, articulação como desenho.",
      "É música de efeito inteligente: surpreende por gesto e por textura, não por volume.",
    ],
    sections: [
      {
        title: "Scarlatti no século XVIII (um teclado antes do piano ‘virar’ piano)",
        paragraphs: [
          "Scarlatti escreve para cravo em ambiente de corte, mas pensa em gesto instrumental: cruzamentos, repetições rápidas, ornamentos e padrões que parecem coreografia. A música nasce para impressionar com elegância.",
          "Historicamente, as sonatas são um laboratório de técnica: elas antecipam efeitos que pianistas modernos reconhecem como ‘pianísticos’, mesmo sendo de outro instrumento.",
        ],
      },
      {
        title: "Linguagem: dança, guitarra e humor rítmico",
        paragraphs: [
          "O caráter muitas vezes carrega ecos ibéricos: padrões que lembram dedilhado de cordas e dança. A execução precisa preservar a borda rítmica, senão vira ‘música antiga bonita’ sem personalidade.",
          "A harmonia costuma ser rápida e direta; a narrativa nasce do ritmo e das respostas do motivo. Você está estudando como o ritmo conta história.",
        ],
      },
      {
        title: "Curiosidades úteis: como tocar isso no piano sem trair o idioma",
        paragraphs: [
          "O objetivo não é imitar cravo literalmente; é preservar a lógica: clareza de ataque, releases limpos, e pedal mínimo/estratégico.",
          "Quando funciona, a peça soa espirituosa e moderna — não ‘museu’.",
        ],
      },
    ],
  },

  "beethoven-op101": {
    summary: [
      "Beethoven tardio: forma comprimida, motivo como motor e textura íntima com ambição estrutural.",
      "Treino de maturidade: você precisa ler arquitetura, não só executar superfície.",
    ],
    sections: [
      {
        title: "Beethoven tardio (por que o teclado vira pensamento)",
        paragraphs: [
          "A Op. 101 pertence ao Beethoven que já mudou as regras: a escrita se torna mais concentrada, mais polifônica e mais ‘intelectual’ sem perder emoção. É um piano que conversa com a ideia de forma.",
          "Na carreira, isso marca uma fase em que o compositor trabalha com memória e transformação: pequenos motivos geram longas seções. Para o estudante, o estudo técnico passa a ser estudo de leitura estrutural.",
        ],
      },
      {
        title: "Linguagem: motivo como fio e harmonia como direção",
        paragraphs: [
          "O que dá unidade não é ‘melodia bonita’: é motivo. Identificar a célula que se repete transformada é o que faz a peça soar inevitável.",
          "A harmonia costuma ter viradas discretas: o chão muda sem alarde. Interpretar bem é fazer o ouvinte perceber a mudança por direção de frase e por clareza de vozes — sem precisar aumentar o volume para ‘explicar’.",
        ],
      },
      {
        title: "Curiosidades úteis: por que estudar trechos já vale",
        paragraphs: [
          "Mesmo em trechos, você treina uma habilidade rara: sustentar forma por lógica interna. Isso melhora qualquer repertório longo.",
          "É uma obra em que ‘limpar’ o pensamento musical vale mais do que perseguir BPM. Se você entende o mapa, os dedos começam a obedecer.",
        ],
      },
    ],
  },

  "bach-wtc1-e": {
    summary: [
      "Bach no WTC I em Mi maior: clareza luminosa, contraponto limpo e ‘tempo interno’ que não pode tremer.",
      "É uma peça que te ensina a separar camadas sem precisar de pedal-cobertor.",
    ],
    sections: [
      {
        title: "WTC I: por que isso é mais ‘língua’ do que ‘peça’",
        paragraphs: [
          "O WTC é um atlas de linguagem: cada tonalidade vira um laboratório onde Bach prova (na prática) que você consegue pensar em todas as regiões do sistema tonal — e ainda fazer música viva.",
          "Em Mi maior, a armadilha é tocar ‘bonito e reto’. A clareza verdadeira aqui é retórica: cadências como pontuação, articulação como consoante, e direção harmônica como frase.",
        ],
      },
      {
        title: "Como ouvir enquanto toca (prelúdio vs fuga)",
        paragraphs: [
          "No prelúdio, a figuração precisa carregar a harmonia sem virar ‘moto-perpétuo’ vazio: faça o ouvinte sentir quando a harmonia muda de chão.",
          "Na fuga, trate cada entrada como personagem: o sujeito precisa ser reconhecível, mas as vozes secundárias não podem morrer. O equilíbrio é o jogo.",
        ],
      },
      {
        title: "Curiosidade útil: Bach no piano moderno",
        paragraphs: [
          "O piano moderno te dá sustain e dinâmica — ótimo. Só que sustain é cola: se você usa demais, a polifonia vira nuvem.",
          "Estudar Bach com pouco pedal (ou pedal ‘por sílaba’) melhora diretamente seu repertório romântico: você aprende a organizar camadas com o ouvido, não com volume.",
        ],
      },
    ],
  },

  "chopin-op10-3": {
    summary: [
      "Um ‘estudo’ que é, na verdade, um tratado de canto: melodia como voz humana sustentada por engenharia invisível.",
      "A dificuldade não é velocidade: é controlar clímax e timbre sem engrossar o som.",
    ],
    sections: [
      {
        title: "O que Chopin está ensinando aqui (técnica = estética)",
        paragraphs: [
          "Chopin redefine o gênero Étude: ele pega um problema técnico e o transforma em poesia com forma. Não é exercício para aguentar sofrimento; é exercício para aprender a falar bonito com o instrumento.",
          "Neste estudo, a meta não é ‘melodia alta’: é melodia inevitável. O acompanhamento precisa existir (harmonia e pulso), mas não pode roubar a fala.",
        ],
      },
      {
        title: "Linguagem: por que o meio ‘machuca’ (e por que tem que machucar)",
        paragraphs: [
          "A seção central contrasta porque a narrativa precisa de fratura: se tudo é canto confortável, não existe retorno com significado.",
          "Você aprende aqui uma regra de ouro: clímax de Chopin é harmônico + tímbrico. Quando você resolve harmonia e voicing, o clímax aparece sem empurrar.",
        ],
      },
      {
        title: "Curiosidade útil: o perigo do ‘som bonito’",
        paragraphs: [
          "É fácil ‘embelezar’ com pedal e perder contorno de vozes. Um Chopin adulto é legível por dentro.",
          "Grave 20–30s: se você não consegue cantar a melodia com clareza sem aumentar o volume geral, o problema é hierarquia — não sensibilidade.",
        ],
      },
    ],
  },

  "chopin-op28-9": {
    summary: [
      "Prelúdio curto em Mi maior: brilho econômico — uma frase que precisa soar natural e inevitável.",
      "Treina leveza com contorno: rápido não é pressa; é elasticidade.",
    ],
    sections: [
      {
        title: "O prelúdio como microcapítulo",
        paragraphs: [
          "Nos 24 prelúdios, Chopin escreve estados. O nº 9 é um daqueles ‘sorrisos curtos’: parece simples, mas expõe se sua figuração tem desenho ou só movimento.",
          "Como peça de estudo, é excelente porque não permite disfarce: o timbre e a direção aparecem imediatamente.",
        ],
      },
      {
        title: "Linguagem: cadências rápidas, mas pontuadas",
        paragraphs: [
          "Você precisa fazer o ouvinte sentir onde a harmonia fecha e reabre. Sem essa pontuação, a peça vira ‘passagem bonita’ e perde caráter.",
          "Pense em articulação como gramática: o legato não é cola; é condução.",
        ],
      },
      {
        title: "Curiosidade útil: o truque da leveza",
        paragraphs: [
          "Leveza aqui não é dedo fraco: é gesto pequeno e direção clara. Se você aperta, endurece; se você solta demais, some o desenho.",
          "Quando dá certo, o prelúdio soa ‘óbvio’ — e esse é o sinal de maturidade.",
        ],
      },
    ],
  },

  "beethoven-op14-1": {
    summary: [
      "Beethoven em Mi maior: clareza clássica com personalidade — humor e acento como pontuação.",
      "Uma ponte perfeita: etiqueta do classicismo + energia beethoveniana sem exagero.",
    ],
    sections: [
      {
        title: "Onde isso senta no Beethoven (já é ‘Beethoven’, mas ainda conversa com Mozart)",
        paragraphs: [
          "A Op. 14 nº 1 mostra um Beethoven que domina o idioma clássico e começa a colocar as próprias garras: pequenos deslocamentos de acento, energia em motivos curtos e um senso de ‘piada’ musical que depende de timing.",
          "Como estudante, você aprende que a forma não é burocracia: é teatro. Se você toca neutro, a peça vira correta e sem graça.",
        ],
      },
      {
        title: "Linguagem: acento como função (não como pancada)",
        paragraphs: [
          "Beethoven usa acentos para apontar estrutura harmônica e retórica: dominante, surpresa, resposta. O objetivo é fazer o ouvinte entender a frase sem legenda.",
          "Se você transforma tudo em forte, perde contraste. Se você ‘alisa’, perde a piada. O meio-termo é articulação clara com peso organizado.",
        ],
      },
      {
        title: "Curiosidade útil: por que Mi maior aqui importa",
        paragraphs: [
          "Mi maior não é a tonalidade mais ‘padrão’ para Beethoven; isso dá uma cor específica: brilho que pede precisão.",
          "Pense nessa sonata como treino de elegância muscular: energia sem brutalidade.",
        ],
      },
    ],
  },

  "scarlatti-e-major": {
    summary: [
      "Scarlatti em Mi maior (exemplos/seleção): articulação afiada, humor e gesto rápido — teclado como teatro.",
      "Treina clareza em alta energia: desenho rítmico primeiro, ‘beleza’ depois.",
    ],
    sections: [
      {
        title: "Como estudar ‘Scarlatti genérico’ sem virar genérico",
        paragraphs: [
          "Este item é uma ponte deliberada: em vez de uma sonata única, ele te convida a pegar uma (ou duas) sonatas em Mi maior e tratá-las como laboratório de idioma.",
          "A regra de ouro é estilo: pouca cola (pedal), ataque claro, releases limpos e pulso dançante. O que faz Scarlatti soar vivo é a borda.",
        ],
      },
      {
        title: "Linguagem: forma binária e surpresa por gesto",
        paragraphs: [
          "A maioria das sonatas trabalha com forma binária: duas metades com retornos claros. Você não precisa ‘romantizar’: precisa fazer o ouvinte perceber fronteiras e respostas.",
          "O brilho está em ritmo e textura: repetição que vira fala, não repetição que vira tédio.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso melhora seu Mozart",
        paragraphs: [
          "Scarlatti te obriga a articular com inteligência. Isso limpa vícios de dedo alto e de pedal excessivo.",
          "Quando você volta para Mozart depois, o fraseado fica mais ‘falado’ e menos ‘amassado’.",
        ],
      },
    ],
  },

  "mozart-divertimento-k563-bridge": {
    summary: [
      "Item-ponte: Mozart de câmara como escola de fraseado — pense em três personagens conversando, não em ‘duas mãos’.",
      "Treina hierarquia e respiração: o ouvido manda mais do que o dedo.",
    ],
    sections: [
      {
        title: "Por que música de câmara é o melhor professor de piano (sem você perceber)",
        paragraphs: [
          "Mozart é mestre de conversação musical. Em obras de câmara, isso fica escancarado: cada linha tem direito a respirar, interromper, responder e mudar de humor com lógica.",
          "Como ‘ponte’, o objetivo não é decorar o Divertimento inteiro ao piano: é usar trechos/ideias para treinar a sensação de ensemble — você faz o piano parecer um trio conversando.",
        ],
      },
      {
        title: "Como estudar (sem virar tarefa impossível)",
        paragraphs: [
          "Escolha 8–16 compassos de um trecho cantabile e faça três coisas: (1) cante mentalmente a voz principal, (2) toque a voz principal sozinha com intenção, (3) adicione as outras vozes mantendo a principal como discurso.",
          "O ganho real é controle de textura: você aprende a deixar uma linha ‘falar’ enquanto as outras sustentam o mundo sem virar ruído.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso melhora seu Mozart pianístico",
        paragraphs: [
          "Muitos pianistas ‘tocam Mozart’ como porcelana: bonito, mas sem fala. Música de câmara te obriga a fazer Mozart como teatro — elegante, mas cheio de intenção.",
          "Quando você volta para sonatas, o fraseado fica mais humano: perguntas e respostas aparecem naturalmente.",
        ],
      },
    ],
  },

  "rachmaninoff-op23-4": {
    summary: [
      "Rachmaninoff: camadas como arquitetura — o som precisa ser grande sem virar peso bruto.",
      "Prelúdio como laboratório de voicing: baixo firme, meio denso e canto que aparece dentro do tecido.",
    ],
    sections: [
      {
        title: "Rachmaninoff e o piano ‘orquestra’",
        paragraphs: [
          "No romantismo tardio, o piano vira um substituto de orquestra: registro grave como metais/contrabaixos, médio como violas e madeiras, agudo como cordas e canto. Rachmaninoff escreve pensando em massa sonora com desenho.",
          "Isso muda o estudo: não é só acertar notas; é decidir o que é estrutura (baixo), o que é textura (meio) e o que é fala (canto).",
        ],
      },
      {
        title: "Linguagem: densidade controlada (o segredo é hierarquia)",
        paragraphs: [
          "A armadilha é confundir densidade com barulho. Rachmaninoff soa ‘rico’ quando as camadas têm funções claras. Se tudo vira forte, a música perde perspectiva.",
          "Pense no pedal como lente: ele pode dar profundidade, mas se você deixa ligado o tempo todo, vira neblina sem contorno.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso é treino de resistência inteligente",
        paragraphs: [
          "Muita gente acha que Rachmaninoff é ‘mão grande e força’. Na prática, é economia de gesto + gestão de peso. O corpo precisa aguentar densidade sem contrair.",
          "Se você consegue manter timbre redondo em dinâmica média, o resto do repertório romântico fica mais fácil: você aprende a ‘carregar’ o som sem empurrar.",
        ],
      },
    ],
  },

  "mendelssohn-op19b-1-bridge": {
    summary: [
      "Ponte: Mendelssohn ‘Songs Without Words’ como laboratório de leveza com coluna — canto por cima de textura discreta.",
      "Treina transparência e fraseado: romantismo sem excesso.",
    ],
    sections: [
      {
        title: "Por que isso é ponte excelente",
        paragraphs: [
          "Esse item é um convite para escolher 1 ‘Song Without Words’ e usar como treino de idioma: período claro (clássico) + cor (romântico).",
          "A habilidade central é controle de camadas: a melodia precisa soar vocal; o acompanhamento precisa ser confiável e leve.",
        ],
      },
      {
        title: "Curiosidade útil: o mesmo problema aparece em Debussy",
        paragraphs: [
          "Mendelssohn te ensina transparência sem dissolver a harmonia. Isso é exatamente o que você vai precisar em Debussy: clareza sem secura.",
          "Ou seja: ponte não é ‘peça aleatória’. É treino de uma competência transferível.",
        ],
      },
    ],
  },

  "debussy-bridge": {
    summary: [
      "Ponte: Debussy como treino de transparência — pedal como cor, não como cola.",
      "O objetivo é ouvir harmonia por timbre: ‘luz’ e ‘sombra’ sem borrar linhas.",
    ],
    sections: [
      {
        title: "Como estudar Debussy como ‘competência’ (e não como mistério)",
        paragraphs: [
          "Debussy funciona quando você troca a pergunta ‘qual é a nota?’ por ‘qual é a cor?’. Isso não é esoterismo: é controle de ataque, duração e pedal para deixar a harmonia respirar.",
          "Como ponte, escolha um trecho curto (8–16 compassos) de uma Arabesque/Prelúdio e estude como se fosse laboratório de timbre: repita buscando clareza de vozes com ressonância controlada.",
        ],
      },
      {
        title: "Curiosidade útil: Debussy não é ‘sem pulso’",
        paragraphs: [
          "A sensação de flutuação só aparece porque existe um pulso interno estável. Se o tempo desmancha, vira borrão.",
          "O segredo é pulso calmo + microflexibilidade. Você sustenta o chão enquanto a superfície parece livre.",
        ],
      },
    ],
  },

  "bach-wtc1-b": {
    summary: [
      "Bach no WTC I em Si maior: clareza rara em tonalidade brilhante — polifonia precisa soar como conversa, não como vitrine.",
      "O desafio é fazer luz com contorno: belo é fácil; legível é que dá trabalho.",
    ],
    sections: [
      {
        title: "Por que Si maior é um laboratório especial no WTC",
        paragraphs: [
          "Si maior vive no ‘território de pretas’: a mão encontra posições confortáveis e o ouvido recebe um brilho natural. Isso é maravilhoso — e perigoso — porque convida o pianista a tocar no piloto automático.",
          "Bach aqui te pede sintaxe: cadências como pontuação, vozes com hierarquia e tempo interno estável. Se você entrega só ‘som bonito’, a música perde linguagem.",
        ],
      },
      {
        title: "Como estudar sem virar soma de notas",
        paragraphs: [
          "No prelúdio: faça o ouvinte sentir as viradas harmônicas por direção de frase (não por volume).",
          "Na fuga: trate o sujeito como personagem. Cada entrada precisa ser reconhecível, mas as vozes secundárias não podem morrer — principalmente no piano moderno.",
        ],
      },
      {
        title: "Curiosidade útil: ‘pedal por sílaba’",
        paragraphs: [
          "Se você usar pedal, use como pontuação curta: coloração de chegada, não cola permanente.",
          "Quando esse Bach fica legível, você ganha uma habilidade transferível: tocar densidade sem virar massa (isso reaparece direto em Brahms e Rachmaninoff).",
        ],
      },
    ],
  },

  "chopin-op62-1": {
    summary: [
      "Noturno tardio em Si maior: harmonia refinada, vozes internas e um cantabile que precisa ser esculpido.",
      "Treino de maturidade: ornamentação como dicção (fala), não como ‘enfeite bonito’.",
    ],
    sections: [
      {
        title: "Chopin tardio: por que isso não é mais ‘romantismo de salão’",
        paragraphs: [
          "Nos noturnos tardios, Chopin escreve com densidade de compositor que já ultrapassou o clichê do ‘suspiro’. A superfície ainda é sedutora, mas por baixo existe harmonia com ambiguidade e condução de vozes muito consciente.",
          "Isso muda o estudo: você não está treinando apenas legato. Você está treinando hierarquia, respiração, e controle de tensão harmônica ao longo do tempo.",
        ],
      },
      {
        title: "Linguagem: ornamentação como consoante",
        paragraphs: [
          "Ornamentos aqui funcionam como dicção: eles dão sentido ao canto. Se você toca como ‘renda’, perde a fala; se toca pesado, tropeça.",
          "Teste honesto: você consegue cantar a melodia mentalmente enquanto toca, sem subir o volume geral? Se não, a textura está engolindo a voz.",
        ],
      },
      {
        title: "Curiosidade útil: a armadilha da tonalidade ‘luxuosa’",
        paragraphs: [
          "Si maior soa naturalmente brilhante no piano. Chopin usa essa luz para fazer sutileza de cor, não para fazer espetáculo.",
          "Quando bem tocado, parece simples. Quando mal tocado, parece apenas bonito. A diferença é direção harmônica + voicing.",
        ],
      },
    ],
  },

  "mozart-k570": {
    summary: [
      "Mozart tardio em Si maior: transparência clássica com sofisticação — ‘fácil de tocar, difícil de dizer’.",
      "Treino de retórica: perguntas e respostas com pontuação, sem exagero de pedal.",
    ],
    sections: [
      {
        title: "Por que Mozart tardio é cruel (e por isso é ótimo)",
        paragraphs: [
          "Mozart tardio escreve transparente: ele não deixa você esconder. Tempo, articulação, cadências, vozes internas — tudo aparece.",
          "Em Si maior, o brilho natural pode enganar: você acha que está ‘soando bem’ quando, na verdade, está só brilhando. A missão é brilho com intenção.",
        ],
      },
      {
        title: "Linguagem: período clássico (a gramática do bom gosto)",
        paragraphs: [
          "Pense em períodos: uma frase pergunta, outra responde. Cadências são pontuação. Se você não respira nas vírgulas, a música perde fala.",
          "Mozart não precisa de pedal para soar ligado. Quando você usa pedal para criar legato, muitas vezes está cobrindo falta de condução de dedo + direção de frase.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso melhora seu Debussy",
        paragraphs: [
          "Debussy exige transparência. Mozart te ensina transparência. Essa é a ponte secreta.",
          "Se você consegue tocar Mozart com camadas claras em dinâmica moderada, você já tem metade da técnica de ‘clareza com cor’ que o século XX pede.",
        ],
      },
    ],
  },

  "beethoven-op22-bridge": {
    summary: [
      "Ponte: Beethoven ‘clássico’ em B♭ maior como escola de disciplina — clareza de forma, pulso e articulação.",
      "Treino de retórica sem drama: aprender a ser convincente com pouco ‘efeito’.",
    ],
    sections: [
      {
        title: "Por que essa ponte existe (Beethoven antes do ‘Beethoven’)",
        paragraphs: [
          "Antes do Beethoven virar sinônimo de ruptura, ele já era mestre de gramática clássica. Estudar esse território é como estudar fundamentos de engenharia: não é ‘menos artístico’; é a base do que vem depois.",
          "Como ponte, o foco não é ‘zerar a sonata inteira’: é usar trechos para treinar forma (seções claras), pontuação (cadências) e acentos com função.",
        ],
      },
      {
        title: "O que ouvir enquanto toca",
        paragraphs: [
          "Você está treinando três coisas: (1) baixo com chão, (2) melodia com fala, (3) acompanhamento disciplinado. Se qualquer uma domina as outras, a forma perde nitidez.",
          "Beethoven aqui é quase um professor de ‘clareza com energia’: o pulso precisa ser firme, mas a frase precisa respirar.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso melhora seu Beethoven tardio",
        paragraphs: [
          "Quando você entende Beethoven ‘disciplinado’, você entende melhor o Beethoven ‘rebelde’: a ruptura tem alvo.",
          "Em termos técnicos, isso te dá controle de articulação e acento que depois vira essencial em movimentos rápidos.",
        ],
      },
    ],
  },

  "schumann-op82-bridge": {
    summary: [
      "Ponte: Schumann e a ideia de ‘cenas’ — cor, caráter e camadas psicológicas em miniaturas.",
      "Treina alternância rápida de humor: frase como narrativa, não como exercício.",
    ],
    sections: [
      {
        title: "Schumann em miniatura: por que isso é técnica de imaginação",
        paragraphs: [
          "Schumann escreve personagens: o piano vira teatro interior. A técnica principal é caracterização — mudar intenção sem perder coerência de som.",
          "Como ponte, pegue uma peça curta de Waldszenen (ou coleção afim) e trate como laboratório de cor: você aprende a mudar timbre e densidade sem trocar por volume.",
        ],
      },
      {
        title: "Curiosidade útil: Schumann como ponte para Debussy",
        paragraphs: [
          "Schumann te ensina cor por harmonia e textura. Debussy continua isso com outra linguagem.",
          "Se você aprende a ‘pintar’ sem borrar, sua leitura do século XIX e XX muda de patamar.",
        ],
      },
    ],
  },

  "debussy-lisle-joyeuse-bridge": {
    summary: [
      "Ponte: Debussy virtuoso — brilho e euforia com controle de camadas (não é ‘pedal infinito’).",
      "Estudo de textura: deixar o piano cintilar sem virar espuma.",
    ],
    sections: [
      {
        title: "Por que essa ponte é importante",
        paragraphs: [
          "‘L’isle joyeuse’ mostra que Debussy pode ser virtuoso sem perder transparência. É o contrário do clichê ‘impressionismo = borrão’.",
          "Como ponte, você não precisa estudar a peça inteira: escolha um trecho curto e trate como laboratório de brilho controlado.",
        ],
      },
      {
        title: "O que ouvir (pra não virar espuma)",
        paragraphs: [
          "Separe camadas: baixo/harmonia como chão, figuração como textura, e qualquer linha superior como fala.",
          "Pedal aqui é cor pontuada: se ele vira contínuo, você perde articulação e o brilho vira espuma.",
        ],
      },
      {
        title: "Curiosidade útil: Debussy também tem ‘retórica’",
        paragraphs: [
          "Mesmo quando parece livre, existe pontuação e direção harmônica. O pulso interno é o que permite a sensação de flutuação.",
          "Quem estuda isso aprende uma habilidade rara: controlar alta densidade com ouvido calmo.",
        ],
      },
    ],
  },

  "bridge-scriabin-op11-bridge": {
    summary: [
      "Ponte: Scriabin Op. 11 (prelúdios) como laboratório de cor harmônica — romantismo tardio com ‘química’ própria.",
      "Treina ouvir tensão por acorde (e não só por melodia).",
    ],
    sections: [
      {
        title: "Como estudar Scriabin (sem cair no ‘místico genérico’)",
        paragraphs: [
          "Scriabin pré-místico ainda é romântico, mas já tem vício de cor: acordes com funções menos óbvias e uma tendência a fazer a harmonia ‘derreter’ entre estados.",
          "Como ponte, escolha 1 prelúdio curto da Op. 11 e estude como paleta: identifique 2–3 acordes-chave e ouça como a tensão muda mesmo sem grande volume.",
        ],
      },
      {
        title: "Curiosidade útil: isso prepara seu ouvido para Debussy e Rachmaninoff",
        paragraphs: [
          "Scriabin te ensina a ouvir cor por função ambígua. Debussy te pede cor por timbre. Rachmaninoff te pede cor por camadas.",
          "Ou seja: é ponte de ouvido, não só de repertório.",
        ],
      },
    ],
  },

  "bridge-brahms-op118": {
    summary: [
      "Ponte: Brahms (Op. 118/119 — seleção) como treino de vozes internas e densidade íntima.",
      "O objetivo é aprender ‘som profundo’ sem virar massa.",
    ],
    sections: [
      {
        title: "Como usar Brahms como ponte",
        paragraphs: [
          "Escolha uma miniatura tardia e trate como laboratório de camadas: a melodia pode estar no meio; o baixo pode ser a coluna; o resto é atmosfera.",
          "Treine ouvir ‘quem fala’ a cada compasso. Essa pergunta resolve 80% do problema brahmsiano.",
        ],
      },
      {
        title: "Curiosidade útil: Brahms é Bach com sangue (no teclado)",
        paragraphs: [
          "Brahms pensa em condução de vozes (herança de Bach), mas escreve com densidade romântica. Entender isso te impede de tocar só ‘acordes bonitos’.",
          "Essa ponte melhora seu Chopin: você aprende a fazer timbre por camadas, não por volume.",
        ],
      },
    ],
  },

  "bridge-mendelssohn-sww": {
    summary: [
      "Ponte: mais Mendelssohn (‘Songs Without Words’ — seleção) como treino de transparência com pulso.",
      "Perfeito para consolidar cantabile e acompanhamento invisível.",
    ],
    sections: [
      {
        title: "O que escolher e como estudar",
        paragraphs: [
          "Escolha uma ‘Song’ cantabile e trate como exercício de hierarquia: melodia canta; acompanhamento respira; harmonia aparece sem empurrar.",
          "Se você consegue manter a melodia clara em dinâmica média, você ganha controle que transfere direto para noturnos de Chopin.",
        ],
      },
      {
        title: "Curiosidade útil: ‘leve’ = controle",
        paragraphs: [
          "O erro típico é tocar leve ‘fraco’. O certo é leve com coluna: pulso estável e gesto pequeno.",
          "Essa ponte também te prepara para Debussy, porque o ouvido aprende a não borrar.",
        ],
      },
    ],
  },

  "rachmaninoff-op32-12": {
    summary: [
      "Prelúdio tardio em sol# menor: arquitetura sombria e camadas que precisam respirar — densidade com desenho.",
      "Treina ‘piano orquestra’ com autocontrole: grande sem virar duro.",
    ],
    sections: [
      {
        title: "O que ouvir: camadas e direção harmônica",
        paragraphs: [
          "Rachmaninoff te pede hierarquia constante: baixo como coluna, textura média como ‘ar denso’ e uma voz que precisa emergir sem gritar.",
          "A peça funciona quando a tensão parece inevitável e a resolução parece ‘assentar’. Isso não vem de volume; vem de direção harmônica e de timing.",
        ],
      },
      {
        title: "Curiosidade útil: o mito da força",
        paragraphs: [
          "Rachmaninoff não exige força bruta; exige gestão de peso e economia de gesto. Se você contrai, o som endurece e o pedal vira muleta.",
          "Estude em dinâmica média com timbre redondo. Se o timbre já está bom no meio, o forte aparece como expansão natural.",
        ],
      },
    ],
  },

  "scriabin-op8-9": {
    summary: [
      "Estudo em sol# menor: tensão elástica — virtuosismo que precisa soar como linha, não como tranco.",
      "Treina controle de clímax: crescer sem endurecer.",
    ],
    sections: [
      {
        title: "Por que Scriabin é ‘Chopin com outro DNA’",
        paragraphs: [
          "Scriabin herda a ideia de canto e rubato do romantismo, mas coloca outro tipo de cromatismo e outra psicologia de tensão. O resultado é música que pede elasticidade controlada.",
          "O estudo vira laboratório de ‘tensão organizada’: você precisa manter direção enquanto a harmonia parece escorregar.",
        ],
      },
      {
        title: "Curiosidade útil: clímax por harmonia (não por volume)",
        paragraphs: [
          "Se você resolve a direção harmônica, o clímax aparece sem empurrar. Se você empurra, o som quebra.",
          "Scriabin te ensina um conceito adulto: intensidade ≠ força. Intensidade pode ser cor e direção.",
        ],
      },
    ],
  },

  "bach-wtc1-gsharp-minor": {
    summary: [
      "WTC em sol# menor (ou enarmônico): Bach no modo ‘escuro’ — contraponto que exige clareza em meio a tensão.",
      "Treina controle de articulação: deixar a polifonia legível mesmo quando a harmonia pesa.",
    ],
    sections: [
      {
        title: "Por que tons ‘difíceis’ no WTC te deixam mais inteligente",
        paragraphs: [
          "Em tonalidades como sol# menor, o teclado convida a dedos confortáveis e, ao mesmo tempo, desafia o ouvido com um clima mais carregado. Isso é perfeito para treinar escuta de função.",
          "O objetivo é o mesmo de sempre: sujeito reconhecível, vozes com vida e cadências pontuadas. Só que aqui o risco de virar massa é maior.",
        ],
      },
      {
        title: "Curiosidade útil: enarmonia como ferramenta mental",
        paragraphs: [
          "Pensar enarmonicamente (G# vs A♭) pode te ajudar a enxergar padrões no teclado e a diminuir medo de ‘tonalidade de sustenido’.",
          "No fim, o que importa é linguagem: quando você ouve a função harmônica, qualquer tonalidade fica ‘falável’.",
        ],
      },
    ],
  },

  "chopin-op48-2-bridge": {
    summary: [
      "Ponte: Chopin dramático (Noturno Op. 48 nº 2 em F# menor) como escola de clímax — arquitetura, não ‘emoção sem mapa’.",
      "Treina sustentar tensão por harmonia e textura.",
    ],
    sections: [
      {
        title: "Por que isso é ponte: clímax como competência",
        paragraphs: [
          "Antes de pensar em ‘tocar bonito’, pense em construir um arco: onde começa, onde acumula, onde explode, onde assenta.",
          "Como ponte, use trechos (20–40s) para estudar a competência ‘clímax com controle’: crescer sem perder legibilidade de vozes.",
        ],
      },
      {
        title: "Curiosidade útil: clímax de Chopin não é só volume",
        paragraphs: [
          "O clímax realmente convincente costuma ser harmônico + tímbrico. Se você só aumenta volume, a peça vira teatro raso.",
          "Estude perguntando: qual voz está falando agora? Se você responde isso, a música se organiza.",
        ],
      },
    ],
  },

  "beethoven-op27-2-bridge": {
    summary: [
      "Ponte: ‘Ao Luar’ como laboratório de textura contínua — pedalar é consequência de arquitetura, não efeito.",
      "Treina hierarquia (baixo/textura/linha) e resistência sem contrair.",
    ],
    sections: [
      {
        title: "Como usar como ponte (sem cair no clichê do pedal)",
        paragraphs: [
          "Escolha 16–32 compassos e estude as três camadas: (1) baixo como função harmônica, (2) figuração como ‘ar’, (3) linha superior como fala.",
          "O pedal entra depois, como ajuste fino para coloração — se ele entra antes, ele vira máscara.",
        ],
      },
      {
        title: "Curiosidade útil: ‘beleza’ aqui é higiene",
        paragraphs: [
          "Se a peça soa bonita mas sem direção, normalmente o baixo está fraco ou o pedal está cobrindo decisões.",
          "É um ótimo estudo de maturidade: você aprende a manter atmosfera sem perder gramática harmônica.",
        ],
      },
    ],
  },

  "rachmaninoff-op23-4-bridge": {
    summary: [
      "Ponte: Rachmaninoff (território de pretas) como treino de camadas — densidade organizada e timbre redondo.",
      "Treina baixo como coluna e meio como textura, sem ‘empurrar’ o som.",
    ],
    sections: [
      {
        title: "Por que isso é ponte",
        paragraphs: [
          "Esse tipo de escrita te prepara para qualquer romantismo tardio: você aprende a controlar densidade sem virar barulho.",
          "Use trechos curtos para treinar voicing: faça a camada estrutural aparecer sem esmagar a textura.",
        ],
      },
      {
        title: "Curiosidade útil: pedal como lente",
        paragraphs: [
          "Pense no pedal como uma lente de profundidade: você liga para colorir chegada, desliga para recuperar contorno.",
          "Quando isso fica natural, você ganha um ‘padrão’ que serve até para Brahms.",
        ],
      },
    ],
  },

  "bridge-debussy": {
    summary: [
      "Ponte: Debussy (geral) como laboratório de cor — timbre e pedal com lógica, não com neblina.",
      "Treina transparência: ressonância controlada e pulso interno.",
    ],
    sections: [
      {
        title: "Como estudar (sem virar ‘mágica’)",
        paragraphs: [
          "Escolha 8–16 compassos de um prelúdio/peça e estude como timbre: repita buscando (1) contorno de vozes, (2) pedal curto e consciente, (3) direção harmônica.",
          "O objetivo é criar cor sem perder desenho. Se você perde desenho, vira borrão; se você perde cor, vira seco.",
        ],
      },
      {
        title: "Curiosidade útil: Debussy é clássico em segredo",
        paragraphs: [
          "A liberdade que parece existir depende de um pulso interno bem estável. Sem isso, a peça ‘desmancha’.",
          "Quando você aprende isso, o romantismo inteiro fica mais transparente.",
        ],
      },
    ],
  },

  "bridge-brahms": {
    summary: [
      "Ponte: Brahms (seleção) como treino de densidade íntima — vozes internas e harmonia que se move devagar.",
      "Treina ‘som profundo’ sem grosseria.",
    ],
    sections: [
      {
        title: "O que estudar de verdade",
        paragraphs: [
          "Não é sobre tocar forte: é sobre fazer o ouvinte perceber camadas. Escolha um trecho e determine: (1) voz principal, (2) voz de suporte, (3) textura.",
          "Se você mantém essa hierarquia, a emoção aparece como consequência.",
        ],
      },
      {
        title: "Curiosidade útil: densidade não precisa de pedal longo",
        paragraphs: [
          "Pedal pode ajudar, mas não pode substituir condução de vozes. Brahms fica ‘caro’ quando a harmonia é legível.",
          "Esse treino melhora seu Rachmaninoff e seu Chopin automaticamente.",
        ],
      },
    ],
  },

  "bridge-schumann": {
    summary: [
      "Ponte: Schumann (seleção) como treino de personagens — alternância de humor com coerência de som.",
      "Treina imaginação com disciplina: mudar caráter sem perder pulso.",
    ],
    sections: [
      {
        title: "Como estudar sem virar ‘teatro confuso’",
        paragraphs: [
          "Escolha uma peça curta e descreva (em uma frase) o personagem. Depois, toque tentando manter essa frase ‘viva’ no som.",
          "O segredo é não exagerar: Schumann é intenso, mas a intensidade vem de harmonia e ritmo, não de pancada.",
        ],
      },
      {
        title: "Curiosidade útil: isso te prepara para repertório narrativo",
        paragraphs: [
          "Quando você aprende a manter caráter, você melhora qualquer peça de ‘história’ — de Tchaikovsky a Debussy.",
          "Essa ponte é sobre linguagem: fazer o piano falar em estilos diferentes.",
        ],
      },
    ],
  },

  "chopin-op27-1": {
    summary: [
      "Noturno em dó# menor: drama com arquitetura — canto sobre textura e harmonia que precisa ‘andar’.",
      "Treina rubato com coluna vertebral: liberdade por cima de chão estável.",
    ],
    sections: [
      {
        title: "Linguagem: cantabile + tensão harmônica",
        paragraphs: [
          "A melodia precisa soar vocal, mas o motor real é harmônico: a tensão se acumula por função e por registro.",
          "O grande erro é romantizar com pedal e perder contorno. A emoção aparece quando as camadas são claras.",
        ],
      },
      {
        title: "Curiosidade útil: rubato não é ‘derreter’",
        paragraphs: [
          "Rubato adulto é respiração com pulso interno. A mão esquerda segura a coluna; a direita flutua.",
          "Se você consegue manter a coluna enquanto a frase respira, você domina o noturno — não só esta peça.",
        ],
      },
    ],
  },

  "rachmaninoff-op3-2": {
    summary: [
      "Prelúdio em dó# menor: um ícone de peso e sino — mas o segredo é clareza e controle de ressonância.",
      "Treina acordes como arquitetura: grande, redondo e legível.",
    ],
    sections: [
      {
        title: "O que o mundo ouve (e o que você precisa controlar)",
        paragraphs: [
          "O público ouve ‘drama’. Você precisa ouvir estrutura: baixo, acordes, ressonância e direção.",
          "Se você só toca forte, perde o efeito de sino e vira bloco. O impacto vem de timbre + timing.",
        ],
      },
      {
        title: "Curiosidade útil: ressonância como parte da composição",
        paragraphs: [
          "O sustain aqui é parte do texto: você precisa de ressonância, mas com bordas. Isso é exatamente o equilíbrio que o piano moderno dificulta.",
          "Estudar isso te dá uma habilidade valiosa: controlar densidade vertical sem perder legibilidade.",
        ],
      },
    ],
  },

  "beethoven-op27-2": {
    summary: [
      "Uma peça-fenômeno que é menos sobre ‘pedal bonito’ e mais sobre arquitetura de harmonia e controle de densidade.",
      "O desafio técnico real é manter clareza de vozes em textura contínua (sem transformar tudo em neblina sem desenho).",
    ],
    sections: [
      {
        title: "Onde isso encaixa na vida do Beethoven (por que essa sonata é ‘diferente’)",
        paragraphs: [
          "A Op. 27 é um marco porque Beethoven explicitamente sinaliza que está brincando com o molde ‘sonata clássica’ — a própria indicação ‘quasi una fantasia’ é uma placa dizendo: ‘não espere o protocolo de sempre’. Isso importa para você como estudante porque muda o que vale como ‘boa execução’: não é só clareza de forma; é coerência de atmosfera e direção harmônica.",
          "O primeiro movimento, especificamente, é uma espécie de laboratório de ressonância: o tecido é repetitivo de propósito, como se Beethoven estivesse testando o quanto uma ideia simples pode sustentar tensão por harmonia e registro — e não por pirotecnia pianística.",
        ],
      },
      {
        title: "Gramática musical (o que ouvir enquanto toca)",
        paragraphs: [
          "Pense em três camadas: (1) o ostinato/figuração contínua (a ‘névoa’), (2) o baixo que define o chão harmônico, (3) a linha superior que precisa soar como fala — mesmo quando é discreta. Se você perde a hierarquia, você perde a peça.",
          "Harmonicamente, o movimento vive de tensão prolongada e resolução controlada. É por isso que ‘pedal demais’ destrói a narrativa: você apaga as bordas das funções harmônicas e tudo vira um cinza uniforme.",
        ],
      },
      {
        title: "Técnica (o que o compositor está exigindo do seu corpo)",
        paragraphs: [
          "O gesto não é grande: é contínuo. O corpo tem que aguentar repetição sem contrair. Se o antebraço endurece, você vai compensar com pedal e o som vai virar lama.",
          "O controle de peso é o ponto central: som suficiente para sustentar a harmonia, mas com dedos perto da tecla. O ataque precisa ser consistente; o release precisa ser limpo. A ‘beleza’ aqui é um subproduto da higiene.",
        ],
      },
    ],
    takeaways: [
      "Se tudo soa bonito, mas sem direção, seu baixo está fraco ou seu pedal está ‘cobrindo’ decisões.",
      "Se a mão cansa rápido, o bug não é ‘falta de força’: é estratégia (peso mal distribuído + dedo alto demais).",
      "Grave 20–30s e confira se dá para cantar a voz superior sem aumentar volume geral.",
    ],
  },

  "bach-wtc1-csharp-minor": {
    summary: [
      "WTC I em dó# menor: Bach no modo ‘noite’ — polifonia como engenharia emocional, não decoração barroca.",
      "Treina clareza sob tensão: vozes nítidas mesmo quando a harmonia aperta.",
    ],
    sections: [
      {
        title: "O ‘problema’ real: fazer contraponto soar inevitável",
        paragraphs: [
          "Dó# menor tende a soar sério no teclado: a sensação tátil e o clima harmônico puxam para densidade psicológica. Bach usa isso como laboratório de discurso: sustentar tensão por lógica de voz, não por volume.",
          "O inimigo aqui é o borrão (pedal e legato genérico). O contraponto funciona quando cada voz respira: começo, meio e fim. O ouvinte precisa conseguir seguir personagens.",
        ],
      },
      {
        title: "Como estudar (sem virar ‘só nota’)",
        paragraphs: [
          "No prelúdio: encontre o motor (figura recorrente) e marque viradas harmônicas como pontuação. Se você não percebe cadências, você está tocando superfície.",
          "Na fuga: trate o sujeito como personagem. Toque apenas as entradas do sujeito; depois devolva o resto sem perder reconhecimento. Ataque + release limpos são seu ‘código-fonte’.",
        ],
      },
      {
        title: "Curiosidade útil: Bach como treino de controle de densidade",
        paragraphs: [
          "Dominar WTC em tonalidades carregadas melhora seu romantismo: você aprende a separar camadas sem ‘gritar’ a melodia.",
          "Isso transfere direto para voicing de Brahms e clareza de Rachmaninoff.",
        ],
      },
    ],
  },

  "chopin-op39": {
    summary: [
      "Mazurkas Op. 39: Chopin ‘de raiz’ — dança polonesa filtrada por sofisticação harmônica e ironia.",
      "Treina ritmo com sotaque (não metrônomo) e rubato que respira sem desmanchar.",
    ],
    sections: [
      {
        title: "Mazurka não é ‘valsa triste’: é idioma com sotaque",
        paragraphs: [
          "A mazurka é um universo rítmico: acentos deslocados, sensação de puxar/soltar e um chão de dança. Chopin transforma isso em arte de salão, mas o DNA é popular.",
          "A pergunta que organiza sua interpretação: onde está o acento expressivo? Muitas vezes, o charme está no desvio: síncopes, atrasos e ‘olhares de lado’ harmônicos.",
        ],
      },
      {
        title: "Como estudar sem matar a dança",
        paragraphs: [
          "Primeiro encontre o passo (pulso estável), depois adicione o sotaque (microdeslocamentos). Rubato antes do passo vira sentimentalismo sem chão.",
          "Truque: bata o pé em tempo regular e cante a melodia. Se ainda faz sentido, seu rubato está saudável.",
        ],
      },
      {
        title: "Curiosidade útil: Chopin patriótico sem panfleto",
        paragraphs: [
          "Em Paris, Chopin vive exílio cultural. A mazurka vira uma forma de manter identidade — não com bandeira, mas com linguagem.",
          "Interprete como memória íntima, não como marcha heroica.",
        ],
      },
    ],
  },

  "scriabin-op2-1": {
    summary: [
      "Scriabin Op. 2 nº 1: juventude romântica com cromatismo nervoso — já dá para sentir a ‘química’ scriabiniana.",
      "Treina cantabile em harmonia instável: linha que canta enquanto o chão muda.",
    ],
    sections: [
      {
        title: "Scriabin jovem: romântico, mas não ‘Chopin 2.0’",
        paragraphs: [
          "Scriabin bebe de Chopin, mas já tem outra ansiedade harmônica: ele gosta de fazer a harmonia escorregar para outra cor sem pedir licença.",
          "Isso exige escuta harmônica: sustentar tensão por timbre e direção, não por volume.",
        ],
      },
      {
        title: "Como estudar: direção de frase + acordes-chave",
        paragraphs: [
          "Marque 2–3 acordes em que a harmonia vira. Sua missão é fazer o ouvinte sentir essas viradas — às vezes por micro-ênfase de timbre, às vezes por relaxamento.",
          "Se você tocar tudo com o mesmo legato/pedal, vira névoa romântica genérica. Scriabin pede contorno.",
        ],
      },
      {
        title: "Curiosidade útil: ponte para o século XX",
        paragraphs: [
          "Mesmo cedo, Scriabin aponta para um mundo onde função fica menos óbvia. Isso te prepara para Debussy e para repertório de tensão por cor.",
          "É treino de ouvido: harmonia como ambiente, não só como cadência.",
        ],
      },
    ],
  },

  "bridge-chopin-op10-4": {
    summary: [
      "Ponte: Étude Op. 10 nº 4 como laboratório de precisão em alta energia — velocidade como resultado de clareza.",
      "Treina mão organizada: dedos perto, pulso vivo e nenhum movimento sobrando.",
    ],
    sections: [
      {
        title: "Por que isso é ponte e não ‘provação’",
        paragraphs: [
          "O benefício vem da competência: coordenar padrões rápidos sem tensão. Você não precisa tocar no tempo final para ganhar o ganho técnico-musical.",
          "Meta: eliminar ruído. Quando a mão está organizada, o som fica limpo e a velocidade aparece como consequência.",
        ],
      },
      {
        title: "Curiosidade útil: virtuosismo em Chopin é estética",
        paragraphs: [
          "Chopin escreve textura, não academia. Se a textura está limpa, a música existe. Se está suja, vira exercício.",
          "Trate clareza como objetivo musical (não só técnico).",
        ],
      },
    ],
  },

  "chopin-op28-4": {
    summary: [
      "Prelúdio (Op. 28 nº 4): a arte de dizer muito com quase nada — lamento harmônico sem melodrama.",
      "Treina controle de tensão lenta: cada acorde é uma palavra; cada resolução, um suspiro com direção.",
    ],
    sections: [
      {
        title: "O que faz esse prelúdio ‘grande’ (ele é harmonia encenada)",
        paragraphs: [
          "Aqui o protagonista não é virtuosismo, nem melodia longa: é a progressão harmônica. Chopin escreve como se estivesse girando a câmera devagar por um quarto escuro; cada acorde muda a luz.",
          "Isso exige maturidade: se você usa pedal como anestesia, você mata a fala. Se você toca seco demais, você mata o ar. O ponto é ressonância controlada e direção inevitável.",
        ],
      },
      {
        title: "Como estudar sem cair no ‘triste genérico’",
        paragraphs: [
          "Decida onde está a frase (mesmo sem melodia óbvia): qual acorde prepara, qual aponta, qual fecha. Depois, faça microdinâmicas coerentes com essa pontuação.",
          "Truque honesto: toque sem pedal e procure legato por troca de dedos. Só depois devolva o pedal como cor — não como cola.",
        ],
      },
      {
        title: "Curiosidade útil: a pedagogia do silêncio",
        paragraphs: [
          "Peças lentas curtas são cruéis porque não deixam você se esconder: qualquer tremor de pulso vira ‘mentira’ musical.",
          "Se você aprende a sustentar esse tipo de tensão, seus noturnos e suas baladas ficam automaticamente mais inteligentes.",
        ],
      },
    ],
  },

  "chopin-op72-1": {
    summary: [
      "Valsa (Op. 72 nº 1): elegância com ‘melancolia de salão’ — sorriso que já sabe do inverno.",
      "Treina rubato civilizado: dança com coluna vertebral (sem desmanchar o passo).",
    ],
    sections: [
      {
        title: "Valsa em Chopin: dança real, mas vista de dentro",
        paragraphs: [
          "A valsa é um gênero social: roda, gira, mostra etiqueta. Chopin escreve valsas que ainda dançam, mas que também pensam — como alguém dançando e lembrando de outra coisa ao mesmo tempo.",
          "O resultado é um treino perfeito de estilo: você precisa manter o pulso de dança (o ‘um-dois-três’) enquanto deixa a mão direita respirar como voz.",
        ],
      },
      {
        title: "Como estudar: passo primeiro, poesia depois",
        paragraphs: [
          "Faça duas passagens: (1) toque com pulso rígido e simples, para garantir o chão; (2) depois adicione pequenas flexões na melodia — mas sem mexer no baixo como se ele estivesse bêbado.",
          "A qualidade aqui é timbre: elegante não é fraco; é redondo e com borda discreta.",
        ],
      },
    ],
  },

  "chopin-op41-2": {
    summary: [
      "Mazurka (Op. 41 nº 2): dança com ironia e harmonia afiada — Chopin te ensinando ‘sotaque’ em alta definição.",
      "Treina acento deslocado + frase falada: o charme mora onde a métrica parece ‘errar’ de propósito.",
    ],
    sections: [
      {
        title: "A doutrina da mazurka: o acento é personagem",
        paragraphs: [
          "Em mazurka, acento não é pancada; é intenção. O deslocamento de acento cria identidade, como um jeito de falar.",
          "Chopin brinca com isso harmonicamente: ele troca o chão sob seus pés sem perder a sensação de dança. Seu trabalho é manter a dança viva enquanto as cores mudam.",
        ],
      },
      {
        title: "Como estudar: metrônomo com senso de humor",
        paragraphs: [
          "Use metrônomo para firmar o passo, mas não para matar o sotaque. Depois desligue e mantenha a memória do pulso.",
          "Uma boa execução soa ‘natural’, quase improvisada — mas é uma naturalidade construída com muita consciência.",
        ],
      },
    ],
  },

  "bach-bwv855": {
    summary: [
      "BWV 855 (WTC I): Bach como engenharia de clareza — textura que parece simples até você tentar deixar tudo legível.",
      "Treina independência real: cada voz precisa ter papel sem você recorrer ao pedal como tapa-buraco.",
    ],
    sections: [
      {
        title: "O que você está estudando aqui (hierarquia de vozes)",
        paragraphs: [
          "O segredo do WTC não é ‘tocar rápido’: é decidir o que é fala e o que é textura. Quando você escolhe hierarquia, o contraponto vira discurso.",
          "No piano moderno, o risco é sustain excessivo: a mesma vantagem (ressonância) vira problema (cola). Seu trabalho é desenhar bordas.",
        ],
      },
      {
        title: "Como estudar: separar para unir",
        paragraphs: [
          "Toque cada voz isolada em andamento lento e cantabile. Depois, una duas vozes e mantenha as duas audíveis. Só então junte tudo.",
          "Se no final você ‘ouve’ cada linha internamente, o resultado soa natural; se não, soa como digitação.",
        ],
      },
    ],
  },

  "mendelssohn-op35-1": {
    summary: [
      "Mendelssohn Op. 35 nº 1 (estudo/peça): virtuosismo limpo — brilho com etiqueta clássica.",
      "Treina leveza organizada: agilidade que não perde transparência.",
    ],
    sections: [
      {
        title: "Mendelssohn: ‘clássico com adrenalina’",
        paragraphs: [
          "Mendelssohn tem uma virtude rara: ele consegue ser rápido e brilhante sem virar grosso. A escrita é transparente e exige limpeza.",
          "Isso faz dele ótimo professor: qualquer sujeira de articulação aparece. O estudo vira treino de precisão com som bonito.",
        ],
      },
      {
        title: "Como estudar: clareza antes de velocidade",
        paragraphs: [
          "Toque em andamento moderado com dedos perto da tecla e releases curtos. Quando a textura fica nítida, a velocidade sobe com menos esforço.",
          "Pense em ‘linha’ mesmo em passagens: a frase tem destino, não é só corrida.",
        ],
      },
    ],
  },

  "beethoven-op90": {
    summary: [
      "Sonata Op. 90: Beethoven no limiar do tardio — concisão, caráter e uma retórica mais íntima.",
      "Treina forma como teatro sem exagero: energia concentrada e clareza de intenção.",
    ],
    sections: [
      {
        title: "Por que Op. 90 é ‘ponte’ para o Beethoven tardio",
        paragraphs: [
          "Aqui Beethoven já não está interessado em ‘cumprir protocolo’ clássico. Ele compacta forma e intensifica motivação: menos enfeite, mais nervo.",
          "Para o pianista, isso é treino de leitura estrutural: você precisa reconhecer motivos e articulações que funcionam como linguagem.",
        ],
      },
      {
        title: "Como estudar: acento com função",
        paragraphs: [
          "Acento beethoveniano não é pancada: é pontuação. Ele marca gramática harmônica, viradas e respostas.",
          "Se você organiza acentos e camadas, a peça soa inevitável; se não, vira ‘forte aleatório’.",
        ],
      },
    ],
  },

  "haydn-hob-xvi-34": {
    summary: [
      "Haydn (Hob. XVI:34): clareza clássica com humor de laboratório — forma como conversa inteligente.",
      "Treina ‘piano falando’: articulação, cadência como pontuação e surpresa sem virar teatro exagerado.",
    ],
    sections: [
      {
        title: "Haydn não é ‘pré-Mozart’: é o inventor do jogo",
        paragraphs: [
          "Haydn escreve como quem inventa regras enquanto brinca. A graça não está em tocar ‘bonito’; está em fazer o ouvinte perceber a piada formal: uma pausa que é piscadela, um acorde que parece óbvio e, de repente, te contradiz.",
          "Isso é didático: você aprende que classicismo é retórica (fala) e timing. Se você toca tudo igual, perde o texto. Se exagera, vira caricatura.",
        ],
      },
      {
        title: "Como estudar: pontuação + contraste de camadas",
        paragraphs: [
          "Trate cadências como sinais de pontuação: vírgula, ponto, exclamação. Respire. O classicismo precisa de espaço para a forma aparecer.",
          "Treine duas dinâmicas: mf ‘conversando’ e p ‘confidencial’. O humor de Haydn muitas vezes está em tirar o tapete em voz baixa.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso melhora Beethoven",
        paragraphs: [
          "Beethoven aprendeu (e depois quebrou) o sistema. Se você entende o sistema com Haydn, você entende melhor o alvo da ruptura.",
          "Tecnicamente, Haydn te dá higiene: articulação, clareza harmônica e senso de período.",
        ],
      },
    ],
  },

  "grieg-op12-1": {
    summary: [
      "Grieg (Lyric Pieces Op. 12 nº 1): miniatura como paisagem — romantismo nórdico em poucos compassos.",
      "Treina cor e pedais pequenos: atmosfera sem borrar, e melodia que surge ‘dentro’ do tecido.",
    ],
    sections: [
      {
        title: "Grieg: romantismo com sotaque (e não ‘Chopin diluído’)",
        paragraphs: [
          "Grieg escreve com uma lógica de natureza: frases curtas, mudança de luz, e uma harmonia que às vezes soa como ‘ar frio’ — transparente, mas carregada de nostalgia.",
          "O estudo aqui é de timbre: você precisa criar cor sem virar neblina. Pense em camadas como aquarela: cada pincelada precisa ser visível.",
        ],
      },
      {
        title: "Como estudar: melodia cantada + acompanhamento discreto",
        paragraphs: [
          "Faça a melodia cantar com peso mínimo e apoio constante (como voz). O acompanhamento deve ser confiável, mas nunca protagonista.",
          "Pedal: use como respiração curta (meio-pedal/mini-trocas) para colorir harmonia sem colar tudo.",
        ],
      },
    ],
  },

  "rachmaninoff-op32-4": {
    summary: [
      "Rachmaninoff (Op. 32 nº 4): lirismo com sombra — o piano ‘orquestra’ em escala de câmara.",
      "Treina camadas em dinâmica média: som grande e redondo sem virar peso bruto.",
    ],
    sections: [
      {
        title: "O segredo do som rachmaninoviano: hierarquia, não força",
        paragraphs: [
          "Em Rachmaninoff, quase sempre há três coisas acontecendo: baixo como coluna, meio como textura (ar denso) e um canto que precisa emergir sem gritar. Quando você decide isso conscientemente, a música ‘acende’.",
          "A tentação é tocar tudo ‘bonito e cheio’. Mas cheio sem hierarquia vira sopa. O som rico vem de perspectiva.",
        ],
      },
      {
        title: "Como estudar: timbre primeiro, volume depois",
        paragraphs: [
          "Estude em dinâmica média (mf) buscando timbre redondo. Se o timbre fica duro, você está empurrando com dedo em vez de organizar peso.",
          "Faça testes sem pedal e depois devolva pedal como cor. Se o pedal resolve a clareza, você não resolveu a escrita.",
        ],
      },
    ],
  },

  "bridge-burgmuller-op100": {
    summary: [
      "Ponte: Burgmüller Op. 100 como ‘Mozart do iniciante’ — miniaturas que ensinam caráter e frase.",
      "Treina intenção: tocar peças fáceis como música de verdade (não como exercício).",
    ],
    sections: [
      {
        title: "Por que essa ponte é essencial (a arte de ser simples)",
        paragraphs: [
          "Burgmüller parece simples, mas é um professor de estilo: ele ensina articulação, direção de frase e caráter claro. Isso é a base de tocar qualquer repertório depois.",
          "A ponte aqui é psicológica: aprender a não ‘subestimar’ peça fácil. A musicalidade nasce justamente quando a dificuldade não te distrai.",
        ],
      },
      {
        title: "Como estudar: texto curto, intenção grande",
        paragraphs: [
          "Escolha uma peça e descreva em uma frase (ex.: ‘uma marcha orgulhosa’, ‘uma canção tímida’). Depois toque fazendo o som obedecer essa frase.",
          "O ganho é enorme: você treina narrativa, não só dedos.",
        ],
      },
    ],
  },

  "bach-wtc1-bm": {
    summary: [
      "WTC I em si menor: Bach como tensão com disciplina — contraponto que precisa soar ‘falado’, não mecânico.",
      "Treina clareza de vozes em clima escuro: legibilidade sem dureza.",
    ],
    sections: [
      {
        title: "O clima: ‘escuro’ não é forte — é direção",
        paragraphs: [
          "Si menor carrega um peso histórico de afeto (lamento, seriedade), mas no teclado isso não significa tocar pesado. Significa sustentar direção harmônica e densidade sem perder bordas.",
          "A polifonia pede que você seja maestro de mini-orquestra: entradas precisam ser reconhecidas, acompanhamentos precisam ter vida sem competir.",
        ],
      },
      {
        title: "Como estudar: sujeito reconhecível + releases limpos",
        paragraphs: [
          "Isolar o sujeito e as entradas é a forma mais rápida de dar sentido. Depois, devolva as vozes secundárias com dinâmica menor, mas com articulação igualmente clara.",
          "No piano, ‘soltar’ a tecla no tempo certo é tão importante quanto pressionar. Releases sujos viram lama.",
        ],
      },
    ],
  },

  "chopin-op58": {
    summary: [
      "Sonata Op. 58: Chopin ‘sinfonizando’ o piano — arquitetura grande com coração lírico.",
      "Treina forma longa com cantabile: disciplina estrutural sem perder perfume harmônico.",
    ],
    sections: [
      {
        title: "Chopin em formato grande: por que é diferente de Beethoven",
        paragraphs: [
          "Chopin não pensa como compositor ‘de argumento’. Ele pensa como compositor de canto e harmonia. Em uma sonata, isso cria um desafio: unir lirismo (fragmentos cantáveis) em arquitetura de longo fôlego.",
          "O estudo aqui é de mapa: saber onde a música está indo. Sem mapa, você toca capítulos bonitos, mas sem romance.",
        ],
      },
      {
        title: "Como estudar: objetivos por seção (não por página)",
        paragraphs: [
          "Defina para cada seção: qual é a ideia principal? onde está o clímax? onde a textura precisa ficar transparente? Isso reduz ansiedade e aumenta coerência.",
          "Técnica aplicada: voicing constante. A melodia não pode desaparecer só porque a mão está ocupada.",
        ],
      },
    ],
  },

  "liszt-sonata": {
    summary: [
      "Sonata em si menor: Liszt como arquitetura de transformação — virtuosismo a serviço de uma ideia única.",
      "Treina narrativa épica: motivos que mudam de máscara, sem você perder o fio.",
    ],
    sections: [
      {
        title: "Liszt além do ‘efeito’: motivo como DNA",
        paragraphs: [
          "A Sonata é um estudo de metamorfose: um motivo aparece, reaparece, vira outra coisa, muda de caráter, mas mantém identidade. A técnica aqui é reconhecer o DNA.",
          "Se você toca como ‘coleção de trechos difíceis’, você destrói a obra. Se você toca como história, até os trechos virtuosos passam a ter sentido.",
        ],
      },
      {
        title: "Como estudar: reduzir para entender e depois reconstruir",
        paragraphs: [
          "Faça redução: identifique linhas principais (baixo, canto, motivo). Toque essas linhas como esqueleto. Só então recoloque a textura completa.",
          "O objetivo é não ser refém da digitação. Você precisa saber o que está dizendo — senão a velocidade vira pânico.",
        ],
      },
    ],
  },

  "tchaikovsky-op39-16": {
    summary: [
      "Tchaikovsky (Álbum para a Juventude Op. 39 nº 16): narrativa em miniatura — pedagogia com dramaturgia.",
      "Treina caráter e timing: fazer o piano ‘contar história’ com poucos recursos.",
    ],
    sections: [
      {
        title: "Tchaikovsky pedagogo: fácil no papel, exigente no teatro",
        paragraphs: [
          "O Álbum para a Juventude é a prova de que pedagogia não precisa ser sem graça. Tchaikovsky escreve peças curtas que ensinam estilo, frase e imaginação.",
          "Aqui, o estudo é menos ‘digitacional’ e mais narrativo: você precisa decidir um personagem e fazer o som obedecer essa decisão.",
        ],
      },
      {
        title: "Como estudar: descreva a cena em uma frase",
        paragraphs: [
          "Antes de tocar, escreva (mentalmente): ‘isso é uma marcha? uma canção? uma brincadeira?’ Depois, ajuste articulação e dinâmica para apoiar a cena.",
          "O ganho é enorme porque isso treina intenção — e intenção é a base do repertório adulto.",
        ],
      },
    ],
  },

  "schumann-op15-7": {
    summary: [
      "Schumann (Kinderszenen Op. 15 nº 7): infância como lembrança — simplicidade com psicologia.",
      "Treina som ‘íntimo’: cantar sem sentimentalismo e manter pulso calmo sem ficar neutro.",
    ],
    sections: [
      {
        title: "Schumann: personagem em miniatura",
        paragraphs: [
          "Schumann escreve cenas internas. A dificuldade real é fazer parecer inevitável — como se a música estivesse lembrando, não performando.",
          "Isso pede controle de timbre em dinâmica baixa: o piano precisa falar baixo, mas com dicção.",
        ],
      },
      {
        title: "Como estudar: melodia como frase falada",
        paragraphs: [
          "Cante a melodia como uma frase de linguagem (com vírgulas). Depois toque buscando o mesmo ‘texto’ no teclado.",
          "Se você usa pedal demais, a memória vira névoa; se usa pedal de menos, vira esqueleto. Procure um meio-pedal que respire.",
        ],
      },
    ],
  },

  "schubert-d960-2": {
    summary: [
      "Schubert (D. 960, mov. II): tempo interno profundo — o drama é harmônico e existencial, não ‘barulhento’.",
      "Treina sustentar silêncio: frase longa, dinâmica baixa e tensão que não pode desmanchar.",
    ],
    sections: [
      {
        title: "O desafio: tocar lento sem ficar morto",
        paragraphs: [
          "Schubert tardio pede coragem: você precisa sustentar um tempo lento com direção. Se você ‘segura’ demais, congela; se você ‘anda’ demais, perde gravidade.",
          "O ouvido manda: a harmonia aqui é quem conta a história. Você precisa sentir onde o chão muda e deixar isso aparecer no som.",
        ],
      },
      {
        title: "Como estudar: mapa harmônico + camadas",
        paragraphs: [
          "Marque (mesmo mentalmente) os pontos onde a harmonia vira de cor. Faça microcrescimentos para essas viradas e microrelaxamentos depois.",
          "Camadas: baixo como coluna silenciosa, meio como atmosfera, e uma linha que precisa cantar sem virar ‘solo’.",
        ],
      },
      {
        title: "Curiosidade útil: Schubert como treino para Brahms",
        paragraphs: [
          "Brahms aprendeu com Schubert a sustentar tensão por harmonia lenta. Estudar esse movimento é estudar ‘gravidade musical’.",
          "Depois disso, você entende melhor por que certas peças românticas não pedem pressa: pedem inevitabilidade.",
        ],
      },
    ],
  },

  "grieg-op54-4": {
    summary: [
      "Grieg Op. 54 nº 4: cor nórdica — dança/poesia em textura clara, com harmonia que muda como clima.",
      "Treina timbre e articulação: deixar a peça ‘respirar ar frio’ sem virar seca.",
    ],
    sections: [
      {
        title: "Grieg: folclore como técnica de harmonia",
        paragraphs: [
          "Em Grieg, o ‘folclórico’ não é fantasia turística: ele entra como escolha harmônica e rítmica. Isso cria um idioma de frescor e nostalgia.",
          "A técnica aqui é colorir sem borrar: você quer ressonância, mas quer bordas.",
        ],
      },
      {
        title: "Como estudar: ataque leve + pedal consciente",
        paragraphs: [
          "Faça o ataque com borda suave (não percussiva) e planeje pedais em pontos de mudança harmônica.",
          "Se a harmonia muda e você não troca o pedal, você ‘apaga’ a narrativa. Se troca demais, fica picotado. Procure trocas que soem como respiração.",
        ],
      },
    ],
  },

  "brahms-op119-1": {
    summary: [
      "Brahms Op. 119 nº 1: densidade íntima — drama em câmera lenta, por vozes internas.",
      "Treina voicing adulto: fazer camadas falarem sem ‘explicar’ com volume.",
    ],
    sections: [
      {
        title: "Brahms tardio: quando o clímax é interior",
        paragraphs: [
          "Brahms aqui escreve como alguém conversando consigo mesmo. A tensão não é gesto heroico; é harmonia que pesa e se resolve devagar.",
          "A dificuldade real é hierarquia: às vezes a voz principal está no meio, às vezes está sugerida. Você precisa ouvir como compositor.",
        ],
      },
      {
        title: "Como estudar: ‘quem fala agora?’",
        paragraphs: [
          "A cada compasso, responda: qual voz está falando? Qual está sustentando? Qual é apenas atmosfera? Isso organiza timbre e dinâmica automaticamente.",
          "Pedal: use curto para coloração. Se você cola demais, a harmonia perde legibilidade e o drama some.",
        ],
      },
    ],
  },

  "rachmaninoff-op23-5": {
    summary: [
      "Prelúdio Op. 23 nº 5: Rachmaninoff marcial — energia como arquitetura, não como grito.",
      "Treina ritmo de aço + camadas: marcha com clareza e timbre redondo, sem endurecer o braço.",
    ],
    sections: [
      {
        title: "O que faz isso funcionar: chão + brilho + perspectiva",
        paragraphs: [
          "O público ouve ‘marcha’. Você precisa ouvir: baixo como coluna, acordes como metais, figuração como textura. Se tudo vira a mesma camada, some a sensação de orquestra.",
          "A peça pede precisão rítmica e controle de peso. O som grande aparece quando o gesto é econômico e o pulso não contrai.",
        ],
      },
      {
        title: "Como estudar: metrônomo e depois fala",
        paragraphs: [
          "Primeiro, firme pulso com metrônomo para construir estabilidade (sem rubato). Depois, refine microacentos que apontem estrutura: cadências, respostas e viradas harmônicas.",
          "Se o forte fica duro, volte ao mf com timbre redondo. É um bug comum: confundir energia com pressão.",
        ],
      },
      {
        title: "Curiosidade útil: o ‘marcial’ é coreografia",
        paragraphs: [
          "A marcha convincente é dançante, não rígida. O segredo é deixar o pulso vivo enquanto a métrica permanece firme.",
          "Quando você consegue isso, ganha uma habilidade transferível para qualquer peça com ostinato rítmico.",
        ],
      },
    ],
  },

  "chopin-op48-2": {
    summary: [
      "Noturno Op. 48 nº 2: Chopin dramático com arquitetura — clímax como construção, não como emoção solta.",
      "Treina sustentar tensão longa: camadas claras enquanto a harmonia ‘puxa’ para frente.",
    ],
    sections: [
      {
        title: "O que estudar aqui: arco, não compasso",
        paragraphs: [
          "O noturno vira uma narrativa: você precisa saber onde a tensão começa, onde acumula, onde explode e onde assenta. Se você toca ‘lindo’ sem mapa, o clímax parece aleatório.",
          "Chopin aqui é harmonia + retórica. A melodia canta, mas quem decide o drama é a função harmônica e a densidade da textura.",
        ],
      },
      {
        title: "Como estudar: três camadas e um relógio interno",
        paragraphs: [
          "Camadas: baixo como coluna, meio como tecido, melodia como fala. Se a textura engole a melodia, você perde o gênero.",
          "Relógio interno: a mão esquerda deve manter pulso calmo. A direita pode respirar, mas sem desligar da gravidade.",
        ],
      },
      {
        title: "Curiosidade útil: clímax não é ‘forte’ — é inevitabilidade",
        paragraphs: [
          "O clímax convincente aparece quando você já preparou a harmonia e a direção. Volume sem direção vira teatro raso.",
          "Se você aprende isso aqui, você aprende um princípio universal do romantismo.",
        ],
      },
    ],
  },

  "chopin-op44": {
    summary: [
      "Ballade Op. 44: Chopin épico — narrativa em grande escala com dança interna e harmonia que ‘vira o mundo’.",
      "Treina pensar em capítulos: contrastes de caráter com unidade de motivo.",
    ],
    sections: [
      {
        title: "Ballade em Chopin: forma como literatura",
        paragraphs: [
          "A ballade não é forma acadêmica; é forma narrativa. Você precisa tratar seções como capítulos com personagens que retornam transformados.",
          "A técnica real é estrutural: saber onde você está na história. Sem isso, você vira refém de trechos difíceis.",
        ],
      },
      {
        title: "Como estudar: redução + pontos de virada",
        paragraphs: [
          "Faça redução harmônica: toque só baixo + melodia (quando existe) para entender direção. Depois devolva textura.",
          "Marque os pontos onde o clima muda de forma irreversível. Esses pontos precisam ser ‘sentidos’ no som — por timbre e timing.",
        ],
      },
    ],
  },

  "scriabin-op8-12": {
    summary: [
      "Étude Op. 8 nº 12: Scriabin em alta voltagem — clímax contínuo com harmonia cromática.",
      "Treina potência elástica: grande som sem rigidez, e direção mesmo dentro do caos.",
    ],
    sections: [
      {
        title: "O erro clássico: confundir intensidade com tensão",
        paragraphs: [
          "Essa peça parece pedir ‘força’. Na verdade, ela pede gestão de peso e um braço que não trava. Se trava, o som endurece e o tempo desmancha.",
          "A harmonia cromática precisa de direção: você não pode só ‘surfar’ volume. Precisa saber para onde a frase está indo.",
        ],
      },
      {
        title: "Como estudar: clímax em camadas",
        paragraphs: [
          "Separe vozes/planos: quais notas são estrutura? quais são textura? Se você entende isso, você toca grande sem virar massa.",
          "Trabalhe em dinâmica média primeiro. Se você consegue manter clareza em mf, o ff fica seguro.",
        ],
      },
    ],
  },

  "bach-wtc2-fsharp-minor": {
    summary: [
      "WTC II em fá# menor: Bach ‘noturno’ — contraponto como tensão controlada.",
      "Treina clareza em clima denso: cada entrada precisa ter identidade, mesmo com harmonia carregada.",
    ],
    sections: [
      {
        title: "O foco: legibilidade polifônica no piano moderno",
        paragraphs: [
          "Fá# menor no piano tem um peso natural (teclas pretas + cor). A tentação é usar sustain demais e perder as bordas.",
          "O ganho aqui é mental: você treina hierarquia de vozes em tempo real. Isso é uma habilidade rara.",
        ],
      },
      {
        title: "Como estudar: entradas como personagens",
        paragraphs: [
          "Toque só as entradas principais (sujeito/respostas) e faça elas soarem reconhecíveis por articulação, não por volume.",
          "Depois adicione vozes secundárias sem apagar as principais. Release limpo é tão importante quanto ataque.",
        ],
      },
    ],
  },

  "mozart-k475": {
    summary: [
      "Fantasia em dó menor K. 475: Mozart ‘dramático’ — improviso controlado, teatro harmônico e retórica de ópera no teclado.",
      "Treina contrastes rápidos: mudanças de humor com clareza de articulação e lógica harmônica.",
    ],
    sections: [
      {
        title: "Mozart fora da porcelana (por que isso surpreende)",
        paragraphs: [
          "Muita gente associa Mozart a simetria e elegância solar. A K. 475 mostra outro Mozart: sombrio, teatral, com mudanças súbitas — como uma cena de ópera com cortes de luz.",
          "O estudo aqui é de retórica: você precisa fazer as viradas harmônicas soarem como decisões dramáticas, não como ‘acordes diferentes’.",
        ],
      },
      {
        title: "Como estudar: capítulos + cadências como pontuação",
        paragraphs: [
          "Divida em seções curtas e dê um nome a cada uma (ex.: ‘declamação’, ‘corrida’, ‘sussurro’). Isso impede execução uniforme.",
          "Pedal deve ser cirúrgico: coloração de chegada, não cola permanente. A clareza das cadências é o fio que segura a fantasia.",
        ],
      },
    ],
  },

  "schumann-op16-2": {
    summary: [
      "Schumann (Kreisleriana/Fantasiestücke – Op. 16 nº 2): instabilidade controlada — personagem que muda de máscara.",
      "Treina alternância de energia e silêncio: textura e harmonia como psicologia.",
    ],
    sections: [
      {
        title: "Schumann: o piano como mente",
        paragraphs: [
          "Schumann não escreve ‘peças’; ele escreve estados mentais. A técnica principal é coerência de caráter: mudar rápido sem perder unidade.",
          "O risco é virar colagem. O antídoto é ouvir harmonia e manter pulso interno: mesmo quando parece livre, existe uma gravidade.",
        ],
      },
      {
        title: "Como estudar: duas leituras (estrutura vs personagem)",
        paragraphs: [
          "Faça uma passada ‘estrutural’: cadências, pontos de repouso, direções. Depois uma passada ‘teatral’: timbre e gesto.",
          "Quando as duas concordam, a peça fica convincente.",
        ],
      },
    ],
  },

  "tchaikovsky-op19-2": {
    summary: [
      "Tchaikovsky Op. 19 nº 2: lirismo com melancolia — romantismo russo em frase longa.",
      "Treina cantabile sustentado: melodia ‘vocal’ com acompanhamento que não sufoca.",
    ],
    sections: [
      {
        title: "O foco: cantar no piano sem virar açúcar",
        paragraphs: [
          "Tchaikovsky pede melodia generosa, mas com dignidade. Sentimentalismo exagerado mata a nobreza da linha.",
          "A técnica aqui é voicing: a melodia precisa emergir do tecido, não flutuar como algo separado e artificial.",
        ],
      },
      {
        title: "Como estudar: legato real + pedal por harmonia",
        paragraphs: [
          "Construa legato por dedo (trocas discretas) e use pedal para coloração de harmonia, trocando em mudanças estruturais.",
          "Se a melodia some, normalmente o acompanhamento está pesado demais — ajuste peso, não ‘aumente a melodia’.",
        ],
      },
    ],
  },

  "field-nocturne-fsharp-minor": {
    summary: [
      "John Field em fá# menor: o noturno antes do ‘Noturno de Chopin’ — canto simples com harmonia que suspira.",
      "Treina legato verdadeiro e rubato discreto: poesia com economia (sem perfume demais).",
    ],
    sections: [
      {
        title: "Field: o inventor do clima (antes do romantismo virar tempestade)",
        paragraphs: [
          "Field cria o noturno como gênero de atmosfera: melodia cantada, acompanhamento suave e sensação de noite doméstica — piano como intimidade, não como palco.",
          "Isso é importante historicamente porque Chopin herda essa ideia e a sofisticará harmonicamente. Estudar Field é estudar o proto-idioma.",
        ],
      },
      {
        title: "Como estudar: canto em p + pedal limpo",
        paragraphs: [
          "Faça a melodia cantar em dinâmica baixa com apoio constante. O acompanhamento é respiração, não martelinho.",
          "Pedal deve ser curto e funcional: troque em mudanças harmônicas e evite nuvem contínua. O charme é clareza suave.",
        ],
      },
    ],
  },

  "grieg-op54-4-bridge": {
    summary: [
      "Ponte: Grieg (Op. 54 – seleção) como laboratório de cor nórdica — harmonia como clima e ritmo como paisagem.",
      "Treina ‘cor sem borrão’: pedais curtos, ataque suave e frase com ar.",
    ],
    sections: [
      {
        title: "Como usar essa ponte",
        paragraphs: [
          "Escolha 8–16 compassos de uma peça da Op. 54 e trate como paleta: onde a harmonia muda de cor? onde a textura precisa ser mais seca? onde pede ressonância?",
          "A regra é simples: pedal curto por harmonia, ataque leve e releases limpos. Se virar nuvem, você perdeu a linguagem.",
        ],
      },
      {
        title: "Curiosidade útil: por que Grieg é ‘técnica de atmosfera’",
        paragraphs: [
          "Grieg te ensina algo raro: fazer o ouvinte sentir espaço sem você tocar mais alto. Atmosfera é gestão de ressonância.",
          "Isso transfere direto para Debussy: cor com contorno.",
        ],
      },
    ],
  },

  "bach-minuet-g-major": {
    summary: [
      "Minueto em Sol maior (atribuído a Bach/Anna Magdalena): etiqueta barroca em miniatura — dançar com boa pronúncia.",
      "Treina articulação e fraseado: ‘sorriso’ no pulso, clareza nas cadências e baixo com educação.",
    ],
    sections: [
      {
        title: "Por que uma peça ‘fácil’ vira escola de maturidade",
        paragraphs: [
          "O minueto é dança social: postura, simetria e pontuação. Isso significa que a música precisa respirar em frases claras — como alguém falando com boa dicção.",
          "O erro típico é tocar em legato genérico com pedal e transformar dança em ‘música bonita’. O certo é dar borda e manter o passo.",
        ],
      },
      {
        title: "Como estudar: pontuação + baixo com função",
        paragraphs: [
          "Marque mentalmente onde cada frase pergunta e responde. Respire nos finais (sem ‘cair’ o tempo).",
          "Na mão esquerda, pense em função harmônica: tônica/dominante como chão. Se o baixo fica tímido demais, a dança perde coluna.",
        ],
      },
    ],
  },

  "clementi-op36-1": {
    summary: [
      "Clementi Op. 36 nº 1: sonatina como engenharia — clareza clássica com ‘mecânica elegante’.",
      "Treina mão direita articulada + mão esquerda inteligente: tocar leve sem ficar vazio, e preciso sem ficar duro.",
    ],
    sections: [
      {
        title: "Clementi e o mercado do piano (virtuose + editor + pedagogo)",
        paragraphs: [
          "Clementi é uma peça-chave do piano como indústria: compositor, editor, fabricante/empreendedor e professor. Suas sonatinas são ‘produto’ — mas produto com inteligência.",
          "Tecnicamente, ele ensina eficiência: escalas, padrões e simetria, mas sempre dentro de forma clássica legível.",
        ],
      },
      {
        title: "Como estudar: clareza de textura e acentos com função",
        paragraphs: [
          "Pense em três camadas: melodia (fala), baixo (chão) e recheio (textura). Se o recheio sobe demais, a peça vira emaranhado.",
          "Acentos não são pancadas: são pontuação. Faça a forma aparecer por articulação e timing.",
        ],
      },
    ],
  },

  "mozart-k545-1": {
    summary: [
      "K. 545 (I mov.): Mozart ‘fácil’ que denuncia tudo — transparência absoluta, forma como conversa.",
      "Treina retórica clássica: frase que pergunta/responde, e independência de mãos sem pedal-muleta.",
    ],
    sections: [
      {
        title: "Por que ‘Sonata Facile’ é cruel",
        paragraphs: [
          "Ela é chamada de ‘fácil’ porque a leitura é acessível. Mas musicalmente ela é implacável: qualquer descontrole de tempo, qualquer falta de frase, qualquer pedal excessivo aparece.",
          "A missão é fazer parecer óbvio e natural: como alguém falando com elegância, sem ficar recitando.",
        ],
      },
      {
        title: "Como estudar: frases curtas, cadências nítidas",
        paragraphs: [
          "Cante mentalmente a melodia e trate cadências como pontuação real (vírgula/ponto).",
          "Pedal mínimo: se você precisa de pedal para ligar, o problema é condução de dedo e direção de frase.",
        ],
      },
      {
        title: "Curiosidade útil: isso é base para tocar ‘grande Mozart’",
        paragraphs: [
          "O mesmo idioma aparece nas sonatas mais complexas. Aqui você treina o DNA: clareza e intenção.",
          "Dominar essa sonata melhora todo o repertório clássico — e até Debussy, porque te ensina transparência.",
        ],
      },
    ],
  },

  "schumann-op68-1": {
    summary: [
      "Schumann Op. 68 nº 1 (Álbum para a Juventude): narrativa doméstica — técnica a serviço de personagem.",
      "Treina tocar ‘simples’ como arte: intenção, timbre e fala clara sem exagero.",
    ],
    sections: [
      {
        title: "Schumann pedagogo: miniaturas com psicologia",
        paragraphs: [
          "Schumann escreve para ensinar, mas não ensina como manual: ele ensina como literatura curta. Cada peça é um quadro.",
          "O desafio é dar caráter: o ouvinte precisa entender a cena sem você teatralizar com volume.",
        ],
      },
      {
        title: "Como estudar: descreva o personagem em uma frase",
        paragraphs: [
          "Antes de tocar, escolha uma frase-guia (ex.: ‘um passeio calmo’). Depois toque fazendo o som obedecer essa frase.",
          "Se o som fica ‘duro’, geralmente é dedo alto + falta de apoio. Gesto pequeno, ouvido grande.",
        ],
      },
    ],
  },

  "tchaikovsky-op39-9": {
    summary: [
      "Tchaikovsky Op. 39 nº 9 (‘The New Doll’): delicadeza russa — ingenuidade com técnica de timbre.",
      "Treina controle de dinâmica baixa + pedal sutil: fazer o piano soar ‘de brinquedo’ sem ficar fraco.",
    ],
    sections: [
      {
        title: "O foco: ternura com disciplina",
        paragraphs: [
          "A peça parece ‘fofa’. Mas o que ela exige é maturidade de som: ataque suave, frase cantada e um pedal que colore sem borrar.",
          "Tchaikovsky é mestre em escrever emoção direta. Seu trabalho é não adoçar demais: mantenha clareza e simplicidade.",
        ],
      },
      {
        title: "Como estudar: mf como teto, p como casa",
        paragraphs: [
          "Estude mantendo o mf como teto: se você já começa grande, não existe espaço para nuance. Construa a peça em p e pp bem controlados.",
          "Troque o pedal em mudanças harmônicas e ouça a ‘cauda’ do som: se a cauda encobre a melodia, você pedalou demais.",
        ],
      },
    ],
  },
};

function stableHash(s: string) {
  // Simple deterministic hash for variation (no crypto).
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function pick<T>(seed: string, xs: T[]) {
  const h = stableHash(seed);
  return xs[h % xs.length];
}

function parseWorkNumber(title: string) {
  // Lightweight parsing to make text feel specific without relying on external lookups.
  const patterns = [
    /(bwv)\s*(\d+)/i,
    /(k\.)\s*(\d+)/i,
    /(op\.)\s*(\d+)(?:\s*n[ºo]\s*(\d+))?/i,
    /(d)\s*(\d{3,4})/i,
    /(hob\.?\s*xvi:?\s*)(\d+)/i,
    /(woo)\s*(\d+)/i,
  ];
  for (const rx of patterns) {
    const m = title.match(rx);
    if (m) return m[0];
  }
  return null;
}

function normalizeComposerName(x: string) {
  // The site uses a few variants (ex.: "W. A. Mozart" vs "W. A. Mozart").
  // Keep it simple and safe.
  return x.trim();
}

function classifyPiece(title: string) {
  const t = title.toLowerCase();
  if (t.includes("sonata") || t.includes("sonatina")) return "sonata" as const;
  if (t.includes("prelúdio") || t.includes("prelude")) return "prelude" as const;
  if (t.includes("fuga") || t.includes("fugue")) return "fugue" as const;
  if (t.includes("invenção") || t.includes("invention")) return "invention" as const;
  if (t.includes("estudo") || t.includes("étude") || t.includes("etude")) return "etude" as const;
  if (t.includes("noturno") || t.includes("nocturne")) return "nocturne" as const;
  if (t.includes("valsa") || t.includes("waltz")) return "waltz" as const;
  if (t.includes("prelúdios") || t.includes("preludes")) return "collection" as const;
  if (t.includes("transponha") || t.includes("transposição")) return "exercise" as const;
  return "piece" as const;
}

function eraHintByComposer(composer: string) {
  const c = composer.toLowerCase();
  if (c.includes("bach")) return "barroco";
  if (c.includes("scarlatti")) return "barroco (teclado ibérico/italiano)";
  if (c.includes("haydn") || c.includes("mozart") || c.includes("clementi") || c.includes("kuhlau"))
    return "clássico";
  if (c.includes("beethoven")) return "transição clássico → romântico";
  if (c.includes("schubert") || c.includes("chopin") || c.includes("schumann") || c.includes("liszt") || c.includes("brahms"))
    return "romântico";
  if (c.includes("debussy") || c.includes("ravel")) return "virada do século / impressionismo";
  if (c.includes("rachmaninoff") || c.includes("scriabin") || c.includes("tchaikovsky") || c.includes("grieg"))
    return "romântico tardio";
  if (c.includes("bartók") || c.includes("bartok")) return "século XX";
  return "(varia por obra)";
}

function autoDeepDive(item: RepertoireItem): RepertoireDeepDive {
  const composer = normalizeComposerName(item.composer);
  const kind = classifyPiece(item.title);
  const era = eraHintByComposer(composer);
  const focus = item.technicalFocus;
  const workNo = parseWorkNumber(item.title);

  const angle = pick(item.id, [
    "um ponto de inflexão estilístico",
    "uma peça-pivô de linguagem",
    "um laboratório de textura",
    "uma miniatura com ambição de tratado",
    "um retrato do ‘mundo sonoro’ do compositor",
  ]);

  const instrumentAngle = pick(item.id + ":instr", [
    "piano de ação mais leve (herança do cravo)",
    "piano já com dinâmica mais ampla e sustain maior",
    "salão burguês e mercado editorial (música como produto)",
    "estética de clareza/retórica (frase como discurso)",
    "idioma pianístico romântico (camadas e ressonância)",
  ]);

  // No more repeated “generic practice tips”. The goal here is historical + analytical density.
  const techniqueNote = pick(item.id + ":tech", [
    "Tecnicamente, o ‘difícil’ costuma estar na gestão de densidade: escolher o que é figuração e o que é fala, e garantir que o ouvido do ouvinte nunca perca o desenho.",
    "Tecnicamente, esta obra costuma punir dois extremos: (1) romantizar com pedal e perder contorno; (2) secar demais e perder legato/linha. O ponto é equilíbrio de ressonância.",
    "Tecnicamente, o compositor está te pedindo um tipo específico de ataque: borda suficiente para clareza, mas com release limpo para não virar percussão seca.",
    "Tecnicamente, a peça pede ‘engenharia de pulso’: estabilidade suficiente para sustentar forma, flexibilidade suficiente para frasear sem deformar.",
  ]);

  const kindSection: DeepDiveSection = (() => {
    if (kind === "sonata") {
      return {
        title: "Forma e retórica (sonata/sonatina: por que isso é ‘piano que fala’)",
        paragraphs: [
          "Sonatas e sonatinas não são apenas ‘peças longas’: elas são treinamento de discurso. Você aprende a fazer o piano argumentar (tema), contrastar (segundo tema), viajar (desenvolvimento) e voltar para casa (recapitulação) com coerência. A técnica aqui é mental: você precisa de mapa — não só de dedos.",
          "Se o seu som não muda de intenção entre seções, a forma colapsa. Se muda demais sem controle, vira teatro confuso. O ponto é retórica: mudança com lógica.",
          "Dica brutalmente prática: marque no papel (ou mentalmente) ‘quem está falando’ em cada trecho (melodia? baixo? contraponto?). Isso resolve 80% do problema de interpretação.",
        ],
      };
    }
    if (kind === "prelude") {
      return {
        title: "O que um prelúdio costuma treinar (mais do que parece)",
        paragraphs: [
          "Prelúdios são frequentemente peças-curtas com densidade de ideia: uma textura ou um gesto que se mantém por um tempo e, por isso, vira microscópio de controle. O desafio raramente é ‘nota difícil’ — é consistência de timbre, direção de frase e clareza harmônica.",
          "Mesmo quando a escrita parece simples, o prelúdio exige maturidade: ouvir função harmônica, planejar clímax e não usar o pedal para esconder falhas de legato.",
        ],
      };
    }
    if (kind === "fugue") {
      return {
        title: "Fuga (por que isso te dá uma ‘mão nova’)",
        paragraphs: [
          "Fuga é treino de pensamento em camadas: o sujeito precisa ser reconhecível, as respostas precisam ter contorno, e o acompanhamento não pode virar massa. Isso força uma técnica adulta: articulação consciente + equilíbrio entre vozes.",
          "O grande erro do pianista moderno é tocar fuga como se fosse ‘um monte de notas’. A correção é simples (e difícil): você escolhe a hierarquia de vozes a cada entrada e faz o ouvido do ouvinte perceber o desenho.",
        ],
      };
    }
    if (kind === "etude") {
      return {
        title: "Estudo (por que isso é ‘técnica disfarçada de música’)",
        paragraphs: [
          "Um estudo bom é um problema técnico com alma. Ele te obriga a resolver um mecanismo (passagem, textura, padrão) sem sacrificar musicalidade. Isso é o oposto de exercício mecânico: aqui a técnica tem que soar inevitável.",
          "A estratégia é sempre a mesma: isolar a célula que ‘quebra’, reconstruir com gesto pequeno e timbre bonito, e só então devolver para o contexto.",
        ],
      };
    }
    if (kind === "nocturne") {
      return {
        title: "Noturno (cantabile + arquitetura invisível)",
        paragraphs: [
          "Noturnos são treinamento de canto no piano: a melodia precisa ter ‘consoantes e vogais’ (ataque e sustentação), enquanto o acompanhamento vira seda e não compete. O erro típico é achar que ‘bonito’ = pedal longo. Na prática, noturno bonito é harmonia legível com ressonância controlada.",
          "O rubato aqui (quando usado) não é derretimento: é respiração com coluna vertebral. A mão esquerda segura o tempo interno; a direita flutua por cima sem perder chão.",
        ],
      };
    }
    if (kind === "exercise") {
      return {
        title: "Exercício musical (transposição): por que isso é ‘o cheat code’ do estudo",
        paragraphs: [
          "Transpor 8–16 compassos parece simples até você tentar sem travar. O ganho real não é ‘saber nota’: é entender função harmônica, reduzir dependência de memória muscular e construir leitura intervalar.",
          "O protocolo para dar certo: (1) identifique graus/funções (tônica, dominante, etc.), (2) mova o desenho, não a tecla, (3) toque lento e cantável — se virar mecânico, você perdeu a música.",
        ],
      };
    }
    return {
      title: "Como ler esta obra como ‘laboratório’ (sem virar lista de notas)",
      paragraphs: [
        "Em repertório pedagógico, o mais valioso não é ‘terminar a peça’ — é descobrir qual habilidade ela treina e tratá-la como laboratório. Aqui, a sua bússola é o foco técnico descrito acima.",
        "A melhor métrica de progresso não é BPM. É: clareza do desenho, estabilidade do pulso e capacidade de tocar em p com o mesmo controle que em mf.",
      ],
    };
  })();

  return {
    summary: [
      `Compositor: ${composer} · Estética/era: ${era}.`,
      `${workNo ? `Identificador: ${workNo}. ` : ""}Peça-tipo: ${kind} · Foco: ${focus}.`,
      `Chave de leitura: trate como ${angle} — não como “só repertório”.`,
    ],
    sections: [
      {
        title: "Contexto histórico/biográfico (como o mundo entra no teclado)",
        paragraphs: [
          `Esta obra existe dentro de um ecossistema: estética (${era}), instrumento (pense em ${instrumentAngle}) e público (igreja, corte, salão, conservatório, mercado editorial). Isso altera a “etiqueta sonora”: quanto sustain você pode permitir, que tipo de ataque soa convincente e quanto rubato é estilisticamente plausível.`,
          `Em vez de procurar uma “história bonitinha”, procure a consequência musical: por que esta linguagem se tornou necessária para ${composer}? O que ela resolve (ou inaugura) na escrita pianística do período?`,
        ],
      },
      kindSection,
      {
        title: "Detalhes de linguagem (harmonia, textura, condução de vozes)",
        paragraphs: [
          "Procure o ‘motor’ específico deste texto: (a) um padrão rítmico recorrente, (b) uma figuração insistente, (c) um tipo de cadência, (d) entradas de voz/sujeito, (e) uma sequência harmônica. Sem esse motor, a interpretação vira soma de compassos.",
          "Uma forma prática de análise sem virar tratado: identifique 3 eventos: (1) onde a música “acende” (tensão), (2) onde “decide” (cadência/virada), (3) onde “assenta” (resolução). Isso já dá mapa de direção e evita rubato aleatório.",
        ],
      },
      {
        title: "Técnica aplicada (o que o compositor está exigindo de você)",
        paragraphs: [
          `O foco técnico declarado aqui (${focus}) não é “tema de academia”: ele é a forma como o compositor faz a linguagem funcionar. Se você não resolve isso, a música não decola.`,
          techniqueNote,
        ],
      },
      {
        title: "Curiosidades úteis (as que melhoram a interpretação)",
        paragraphs: [
          "Curiosidade produtiva: o mesmo texto pode existir em ‘vários pianos’ dentro do ouvido do compositor — cravo, fortepiano, piano moderno. Um jeito de estudar é alternar duas leituras: (1) mais seco/articulado (cravo/fortepiano), (2) mais cantabile/sustentado (piano moderno). O que permanece convincente nas duas é o núcleo da obra.",
          "Outro truque de historiador: observe se o texto ‘pede dança’ (gavota, marcha, mazurca, valsa) ou ‘pede discurso’ (sonata, fuga). Isso muda ataque e respiração. Um pianista que sabe a diferença começa a soar inevitável.",
        ],
      },
    ],
    // Intentionally removed generic takeaways to avoid repetition.
  };
}

export function getRepertoireDeepDive(item: RepertoireItem): RepertoireDeepDive {
  return MANUAL[item.id] ?? autoDeepDive(item);
}
