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

  "burgmuller-op100-2": {
    summary: [
      "‘Arabesque’ (Op. 100 nº 2) é Burgmüller ensinando brilho sem pressa: leveza, desenho e elegância de salão em miniatura.",
      "O objetivo não é ‘tocar staccato’: é aprender a aterrissar (release) com silêncio — o tipo de controle que faz Mozart soar caro.",
    ],
    sections: [
      {
        title: "Burgmüller e a pedagogia-romance: por que esses estudos viraram ‘clássicos de escola’",
        paragraphs: [
          "Burgmüller escreve num século em que o piano já é o eletrodoméstico de luxo da casa burguesa: existe mercado editorial, existe ensino doméstico, existe ‘peça curta’ pensada para formar gosto. Op. 100 não é só mecânica: é gramática de estilo embrulhada em narrativa simpática.",
          "Pense nisso como ‘estudo com etiqueta’: você aprende coordenação e articulação, mas aprende também a estética do ‘não exagerar’. E isso é surpreendentemente difícil — porque o piano moderno convida a você apertar demais e pedalar demais.",
        ],
      },
      {
        title: "O que ouvir (e o que não confundir): staccato inteligente vs. staccato nervoso",
        paragraphs: [
          "O staccato aqui não é uma pancada seca. Ele é um toque com borda + saída rápida, como se a tecla fosse quente: você encosta, pega a informação, e sai sem deixar marca. O som ideal é leve, mas com presença.",
          "O erro clássico: levantar dedo alto e ‘picar’ o teclado. Isso cria barulho e cansaço. O acerto: gesto pequeno, antebraço disponível, e o release (soltar) tão importante quanto o ataque (apertar).",
          "Dica prática que parece boba e é ouro: estude 1 minuto tocando em p, quase ‘sussurrado’. Se você consegue manter clareza em p, o mf vai soar naturalmente elegante.",
        ],
      },
      {
        title: "Técnica aplicada (sem misticismo): coordenação e ‘coluna’",
        paragraphs: [
          "A coordenação aqui é de micro-tempos: mão direita precisa parecer ‘dançando’ por cima; mão esquerda sustenta pulso sem virar martelo. Se a esquerda pesa, o desenho desmancha.",
          "Faça um experimento: toque só a mão esquerda como ‘tapete’ (mf constante). Depois toque só a mão direita buscando um fraseado vocal. Só então junte — e tente manter as duas intenções simultâneas. Isso é exatamente a habilidade que você vai precisar em Chopin (acompanhamento) e em Debussy (camadas).",
        ],
      },
    ],
  },

  "beethoven-op49-2-1": {
    summary: [
      "A Op. 49 nº 2 é Beethoven ‘pequeno’ só no papel: uma aula de pontuação clássica com energia contida.",
      "Treina o que quase ninguém treina direito: fazer forma soar óbvia sem tocar forte — cadências como gramática, não como freada.",
    ],
    sections: [
      {
        title: "‘Sonata fácil’ e o truque do marketing: acessível, sim; indulgente, nunca",
        paragraphs: [
          "Essas sonatas foram publicadas como material acessível, mas Beethoven não escreve ‘neutro’. Ele escreve com intenção rítmica e com fraseado que precisa de direção — e isso exige maturidade.",
          "A ironia: quanto mais simples a textura, mais sua interpretação fica exposta. Se o tempo balança, se o fraseado não pontua, se o baixo invade, o ouvinte percebe na hora.",
        ],
      },
      {
        title: "Forma como fala: por que o primeiro movimento é um curso rápido de retórica",
        paragraphs: [
          "Trate o movimento como diálogo: tema principal ‘afirma’, o material de transição ‘empurra’, e as cadências ‘concluem’. Seu trabalho é fazer o ouvinte entender isso sem legenda.",
          "Um jeito simples de estudar: marque (mentalmente) 3 níveis de energia: (1) frase inicial (apresenta), (2) resposta (comenta), (3) cadência (fecha). Se tudo sai com o mesmo volume e o mesmo toque, a música vira ‘correta’ e sem Beethoven.",
        ],
      },
      {
        title: "Técnica aplicada: acento não é pancada — é timing + peso",
        paragraphs: [
          "Acento beethoveniano costuma ser funcional (estrutura), não ornamental. Em vez de bater mais forte, experimente ‘chegar’ um microssegundo mais definido (ataque mais focado) e sair mais limpo (release).",
          "Pedal: pouco e com motivo. Se você cola demais, apaga a pontuação. Beethoven aqui é desenho a lápis, não pintura a óleo.",
        ],
      },
    ],
  },

  "debussy-clair-de-lune": {
    summary: [
      "‘Clair de Lune’ é fotografia sonora: luz, distância e contorno. O desafio é fazer o piano brilhar sem virar neblina.",
      "Pedal aqui é lente (foco seletivo), não cobertor (borrão geral). Voicing e tempo interno são o ‘segredo’.",
    ],
    sections: [
      {
        title: "Debussy e a virada do século: quando o piano vira ‘orquestra de luz’",
        paragraphs: [
          "Debussy escreve num mundo que está mudando de cor: simbolismo, poesia que sugere em vez de declarar, pintura que trabalha com atmosferas. O piano vira um laboratório de ressonância — e isso muda o tipo de técnica exigida.",
          "No piano romântico do século XIX, você frequentemente constrói clímax por ‘peso’ e progressão. Em Debussy, você constrói por ‘foco’: o que está nítido, o que está ao fundo, e o que é só reflexo.",
        ],
      },
      {
        title: "Som caro e moderno: camadas, não volume",
        paragraphs: [
          "Pense em 3 planos: (1) uma voz que canta (às vezes é interna), (2) harmonia que respira (acordes), (3) brilho/espuma (figuração). Se esses planos se misturam, o ouvinte ouve ‘bonito’ mas não ouve a peça.",
          "O rubato aqui é de maré: pequenas expansões e recolhimentos que parecem inevitáveis. O maior erro é fazer rubato para ‘ficar emocionante’. A emoção vem quando a harmonia muda e você deixa o tempo reconhecer a mudança.",
        ],
      },
      {
        title: "Pedal como técnica de clareza (o paradoxo mais Debussy possível)",
        paragraphs: [
          "Treine sem pedal primeiro, bem devagar, para descobrir quais notas precisam realmente de ligação por dedo e quais podem ser ‘pintadas’ pelo pedal. Depois, introduza pedal curto, trocando por função harmônica (não por compasso).",
          "Experimento prático: grave 20 segundos. Se você não consegue cantar a melodia por cima do acompanhamento, falta voicing — e nenhuma quantidade de pedal vai consertar isso sem destruir a nitidez.",
        ],
      },
    ],
  },

  "chopin-prelude-7": {
    summary: [
      "Prelúdio Op. 28 nº 7: um ‘micro-parágrafo’ de Chopin — harmonia e gesto em poucos segundos.",
      "Difícil do jeito adulto: cada acorde tem função, e o rubato bom parece respiração, não ‘efeito’.",
    ],
    sections: [
      {
        title: "Chopin e a arte de dizer muito com pouco",
        paragraphs: [
          "Chopin pega o rótulo ‘prelúdio’ e faz peças autônomas: miniaturas que não são aquecimento, são literatura curta. É o tipo de obra que te obriga a entrar pronto — não dá tempo de ‘achar o clima’ no meio.",
          "O estudo aqui é filosófico e técnico ao mesmo tempo: como você dá peso expressivo a um acorde sem tocar forte? Como você faz uma cadência soar como conclusão real sem virar uma freada?",
        ],
      },
      {
        title: "Rubato ‘civilizado’: a mão esquerda como chão, a direita como fala",
        paragraphs: [
          "Um rubato chopiniano clássico é assim: a esquerda mantém o pulso interno (com pequenas flexibilidades discretas), e a direita respira por cima como cantor. Se as duas mãos ‘derretem’ juntas, você perde direção.",
          "Teste: toque a esquerda com metrônomo (bem lento) e deixe a direita flutuar minimamente. A meta não é robotizar; é provar que você tem coluna vertebral.",
        ],
      },
      {
        title: "Técnica aplicada: voicing e final de frase",
        paragraphs: [
          "Como a peça é curta, o final de frase é tudo. Treine chegando nas cadências com um micro-relaxamento do braço e um release limpo — como uma frase falada que termina sem engasgar.",
          "Se o som fica ‘duro’, normalmente é porque você segura o dedo na tecla (pressão) em vez de sustentar com ouvido e com pedal mínimo. Em Chopin curto, a elegância está no abandono controlado.",
        ],
      },
    ],
  },

  "satie-gymnopedie-1": {
    summary: [
      "Satie nº 1: minimalismo antes do minimalismo — a técnica principal é o tempo (e a coragem de não ‘encher’).",
      "Tocar simples aqui é um teste de maturidade: equilíbrio, som aveludado e pulso vivo sem pressa.",
    ],
    sections: [
      {
        title: "Satie contra o drama: a estética do ‘anti-virtuosismo’",
        paragraphs: [
          "Satie é quase um hacker cultural: ele escreve música que se recusa a performar ‘importância’ do jeito romântico. Em vez de clímax, ele te dá espaço. Em vez de complexidade aparente, ele te cobra honestidade de som.",
          "O resultado é paradoxal: é fácil tocar as notas, e muito difícil tocar a intenção. Porque o pianista moderno tem vício de ‘justificar’ a peça com rubato teatral, pedal excessivo ou dinâmica exagerada.",
        ],
      },
      {
        title: "Tempo como técnica: lento não pode virar mole",
        paragraphs: [
          "Aqui, o pulso tem que ser estável como um relógio bom — mas respirando. Pense em passos lentos: cada passo tem peso, mas não tem pressa. Se você relaxa demais, vira sonolência; se tensiona, vira marcha.",
          "Treino simples: toque em pp, com metrônomo bem lento, e tente manter o mesmo ‘peso psicológico’ em cada compasso. Não é sobre volume — é sobre presença.",
        ],
      },
      {
        title: "Som aveludado (como conseguir sem ‘sumir’)",
        paragraphs: [
          "Ataque: mais superfície de dedo, menos ponta agressiva. Release: limpo. Pedal: curto, quase como ‘colar a sala’ e não como cola de notas.",
          "Dica prática: se a harmonia fica turva, reduza o pedal pela metade e aumente o legato por dedo. Em Satie, a clareza é a própria emoção.",
        ],
      },
    ],
  },

  "bach-wtc1-prelude-c": {
    summary: [
      "O Prelúdio em Dó (WTC I) é um ‘scanner’ do seu controle: tempo, harmonia contínua e direção sem melodia óbvia.",
      "A beleza vem de pontuar cadências e de organizar ressonância — não de tocar rápido.",
    ],
    sections: [
      {
        title: "O WTC como atlas: por que esse prelúdio é mais que ‘arpejos bonitos’",
        paragraphs: [
          "No Cravo Bem Temperado, Bach demonstra tonalidades, sim — mas também ensina como harmonia se move no tempo. O Prelúdio em Dó é quase uma ‘aula em câmera lenta’ de progressão harmônica.",
          "Para o pianista, isso vira treino de duas coisas raras: (1) manter pulso constante sem ficar mecânico, (2) fazer o ouvinte perceber chegadas (cadências) mesmo sem tema cantável.",
        ],
      },
      {
        title: "Como fazer a música ‘andar’: direção harmônica e respiração",
        paragraphs: [
          "Se você toca tudo igual, vira papel de parede. A solução é simples e profunda: ouça onde a harmonia tensiona e onde resolve. Nessas resoluções, você ‘respira’ — micro-relaxamento, não pausa dramática.",
          "Exercício: toque só os primeiros tempos de cada compasso (redução harmônica). Cante a linha das fundamentais mentalmente. Depois recoloque a figuração mantendo a mesma sensação de direção.",
        ],
      },
      {
        title: "Técnica aplicada: legato real, pedal consciente",
        paragraphs: [
          "No cravo, não existe pedal; no piano, existe demais. Use o pedal como ‘cola de sala’ (ambiente), não como cola de notas. Trocas pequenas, preferencialmente em pontos de mudança harmônica.",
          "O legato deve vir do dedo: pense em ‘pousar’ cada acorde como se fosse um coral escondido dentro dos arpejos.",
        ],
      },
    ],
  },

  "haydn-hob-xvi-7": {
    summary: [
      "Haydn é o mestre do timing: o humor nasce de ritmo, pausa e surpresa harmônica — não de ‘efeito’.",
      "Essa sonata/seleção treina classicismo afiado: articulação clara, forma legível e leveza com coluna.",
    ],
    sections: [
      {
        title: "Haydn: o engenheiro do classicismo (e por que ele é subestimado no piano)",
        paragraphs: [
          "Se Mozart é a elegância ‘natural’ e Beethoven é o conflito, Haydn é o arquiteto do mecanismo: ele inventa jeitos de fazer a forma respirar, surpreender e brincar com expectativas.",
          "No estudo, isso vira uma lição brutal: você precisa ser preciso o bastante para a piada funcionar, mas leve o bastante para não virar rigidez. Humor musical é uma habilidade técnica.",
        ],
      },
      {
        title: "O que ouvir: articulação e silêncio (sim, silêncio)",
        paragraphs: [
          "Haydn usa pausas e micro-pausas como pontuação. Se você ‘cola’ tudo com pedal, você mata a retórica. Faça as vírgulas existirem.",
          "Um bom objetivo: conseguir tocar com pouquíssimo pedal, usando articulação e controle de release para criar clareza. Quando isso funciona, o estilo fica instantaneamente convincente.",
        ],
      },
      {
        title: "Técnica aplicada: leveza com estabilidade",
        paragraphs: [
          "Tocar leve não é tocar fraco. É tocar com gesto pequeno e com peso distribuído. O pulso fica disponível; os dedos não batem.",
          "Se a mão esquerda pesa, a forma perde transparência. Treine a esquerda em p e a direita em mf, para construir hierarquia — depois normalize os volumes mantendo a hierarquia mental.",
        ],
      },
    ],
  },

  "bartok-mikrokosmos": {
    summary: [
      "‘Mikrokosmos’ é alfabetização moderna: ritmo, acento e leitura limpa. Bartók te ensina a não tocar no piloto automático.",
      "O ganho não é só ‘século XX’: é precisão de intenção — e isso volta pra Bach e Beethoven em forma de clareza.",
    ],
    sections: [
      {
        title: "Bartók professor: método que parece simples e muda seu cérebro",
        paragraphs: [
          "Mikrokosmos não é uma coleção ‘exótica’: é um método de construção de músico. Bartók organiza problemas em pequena escala (micro), para você aprender a pensar textura e ritmo com consciência.",
          "O ponto histórico: século XX exige outra clareza — acentos podem ser assimétricos, padrões podem ser irregulares, e você precisa ler isso sem transformar tudo em ‘quadrado europeu do século XIX’.",
        ],
      },
      {
        title: "O que estudar de verdade: acento como significado",
        paragraphs: [
          "Em Bartók, acento raramente é ‘mais forte’. É ‘mais importante’. Pode ser por duração, por timbre, por ataque, por posição no compasso. Isso refina sua técnica de uma maneira que exercícios de velocidade não alcançam.",
          "Experimento: toque um trecho e mude apenas o acento (sem mudar volume). Se a música muda de caráter, você está entendendo o idioma.",
        ],
      },
      {
        title: "Transferência direta para outros repertórios (o motivo de valer cada minuto)",
        paragraphs: [
          "Depois de Bartók, sua leitura melhora porque você para de ‘assumir’ padrões. Você lê o que está escrito.",
          "E sua mão esquerda melhora porque você aprende a manter pulso e caráter sem depender de pedal. Em outras palavras: Bartók é um desintoxicante.",
        ],
      },
    ],
  },

  "beethoven-ecossaise": {
    summary: [
      "As Ecossaises são Beethoven brincando com dança: peças curtas que treinam ritmo, clareza e humor seco.",
      "Ótimas para aprender ‘energia contida’: staccato elegante e pulso que sorri sem ficar pesado.",
    ],
    sections: [
      {
        title: "Dança como professor de tempo: por que peças pequenas são treinamento sério",
        paragraphs: [
          "Peças de dança parecem ‘fáceis’ até você tentar fazê-las dançar. A dança é implacável: se o pulso vacila, o corpo cai.",
          "Beethoven usa esse gênero para treinar timing e articulação. É um laboratório de música ‘seca’ (sem pedal), onde a graça nasce do desenho rítmico.",
        ],
      },
      {
        title: "Técnica aplicada: staccato leve, sem pressa",
        paragraphs: [
          "Pense em staccato como quique: o dedo toca e já volta, mas sem rigidez. Se você contrai, o som vira agressivo.",
          "Treine com duas versões: (1) non-legato (curto, mas conectado), (2) staccato real. A diferença entre elas é pequena — e justamente por isso é um treino fino de controle.",
        ],
      },
      {
        title: "Curiosidade útil: Beethoven ‘popular’ e Beethoven ‘compositor’",
        paragraphs: [
          "Essas miniaturas mostram algo importante: Beethoven sabe escrever música que funciona socialmente (dança, salão) sem perder inteligência. Ele não precisa de tragédia para ser Beethoven.",
          "Quando você toca isso com estilo, você ganha uma habilidade rara: ser preciso e leve ao mesmo tempo.",
        ],
      },
    ],
  },

  "mendelssohn-songs-without-words": {
    summary: [
      "‘Songs Without Words’: cantabile no piano com disciplina clássica. Melodia em relevo, mecanismo invisível.",
      "A dificuldade é tocar bonito sem amolecer: pulso vivo, textura transparente e pedal com etiqueta.",
    ],
    sections: [
      {
        title: "Mendelssohn e o piano doméstico: música para casa com cérebro de compositor",
        paragraphs: [
          "Esse repertório nasce no auge do piano burguês: peças para serem tocadas em casa, vendidas em partitura, comparadas em interpretações. Mendelssohn responde com música ‘tocável’ e, ao mesmo tempo, refinadíssima.",
          "Ele é um compositor que ama Bach e ama a forma. Então mesmo quando parece sentimental, existe arquitetura. Seu trabalho é deixar a arquitetura sustentar a emoção sem mostrar as vigas.",
        ],
      },
      {
        title: "Cantabile real: como fazer o piano cantar sem virar ‘manteiga’",
        paragraphs: [
          "A melodia precisa ter dicção: começos claros (consoantes) e sustentação (vogais). O acompanhamento deve ser seda rítmica: regular, macio, e discretamente mais baixo.",
          "Pedal é o grande vilão: se você usa como cola, vira massa. Use como cor: trocas pequenas, meio-pedal, e sempre ouvindo se a harmonia continua legível.",
        ],
      },
      {
        title: "Técnica aplicada: voicing + mão esquerda ‘civilizada’",
        paragraphs: [
          "Treine a mão esquerda sozinha buscando o som mais bonito possível em dinâmica baixa. Depois adicione a melodia como ‘voz humana’ por cima.",
          "A meta é parecer fácil. E esse ‘parecer’ é exatamente a técnica: controle de peso, coordenação e tempo interno.",
        ],
      },
    ],
  },

  "bach-wtc1-g": {
    summary: [
      "Bach (WTC) em Sol maior: claridade com engrenagem — é ‘música que sorri’, mas com cérebro de aço por trás.",
      "Treino de polifonia que não soa acadêmica: cada voz tem etiqueta e propósito; o tempo precisa ser calmo e inevitável.",
    ],
    sections: [
      {
        title: "Sol maior em Bach: quando ‘fácil de ouvir’ é difícil de fazer",
        paragraphs: [
          "Sol maior é uma tonalidade que, no teclado, tende a parecer ‘natural’. Isso é uma armadilha: ela convida o pianista a tocar bonito e seguir em frente. Só que Bach não está pedindo ‘bonito’: está pedindo inteligibilidade — como se você estivesse lendo um texto em voz alta com pontuação perfeita.",
          "No WTC, o objetivo é duplo: provar que a tonalidade funciona no sistema temperado e, ao mesmo tempo, treinar sua cabeça (harmonia, voz, forma) com música real. Ou seja: não é exercício, é enciclopédia em formato de peça.",
        ],
      },
      {
        title: "Prelúdio/Fuga: duas técnicas diferentes (uma ‘harmônica’, outra ‘retórica’)",
        paragraphs: [
          "No prelúdio, você costuma ter uma textura que ‘anda’ — o segredo é fazer as cadências aparecerem como pontos de frase. Sem isso, vira moto-contínuo decorativo.",
          "Na fuga, o eixo vira linguagem: entradas precisam ser reconhecíveis por articulação e contorno (não por volume). A voz principal muda ao longo do caminho: sua técnica é decidir, em tempo real, ‘quem está falando’.",
        ],
      },
      {
        title: "Técnica aplicada no piano moderno: sustain como tentação",
        paragraphs: [
          "Se você usa pedal longo em Bach, o teclado vira aquário: tudo fica bonito e ninguém entende nada. Use pedal curto, quase ‘por sílaba’ — pequenos toques para colorir uma chegada harmônica.",
          "Truque prático: estude 30 segundos com as mãos bem perto das teclas e ataque ‘com borda’, sem dedos altos. Se ficar difícil, é porque você estava escondendo falta de articulação com gesto grande.",
        ],
      },
    ],
  },

  "beethoven-op49-2": {
    summary: [
      "Beethoven Op. 49 nº 2 (G maior): ‘fácil’ só na leitura — é Beethoven treinando clareza com nervo.",
      "A grande lição: fazer música com pontuação (cadências, respirações) e energia sem peso bruto.",
    ],
    sections: [
      {
        title: "A Op. 49 e o mundo do piano doméstico: quando Beethoven vira ‘produto’ (sem deixar de ser Beethoven)",
        paragraphs: [
          "Esse repertório circula no universo do ensino e da casa burguesa — o piano como centro social. Mas Beethoven não escreve ‘neutro’: ele escreve com acentos funcionais e com direção de frase. A forma é simples; a retórica é séria.",
          "Para estudar, a pergunta que manda é: a música está falando ou está só ‘andando’? Se está só andando, normalmente você está tocando tudo com o mesmo toque e o mesmo volume.",
        ],
      },
      {
        title: "Como fazer soar Beethoven (e não Mozart genérico): acento com função",
        paragraphs: [
          "Beethoven usa acentos como gramática: ele aponta viradas, cria micro-choques e organiza a frase. Você não precisa tocar mais forte; você precisa tocar mais ‘decidido’ — ataque claro e release limpo.",
          "Estudo-relâmpago: escolha 8 compassos e faça 2 versões. (1) Tudo em mf igual (para sentir o ‘sem fala’). (2) Mesma dinâmica geral, mas com pontuação de cadências e microcontrastes. A diferença estética aparece instantaneamente.",
        ],
      },
      {
        title: "Pedal e textura: o clássico pede ar",
        paragraphs: [
          "Use pouco pedal. Se você ‘cola’ as frases, você mata o idioma. Beethoven nessa fase ainda fala a língua clássica: separação de ideias, vírgulas, pontos.",
          "O som bom aqui é ‘limpo e quente’: brilho sem metal e sem dureza. Isso vem de gesto pequeno e de ouvir o baixo como chão harmônico.",
        ],
      },
    ],
  },

  "mozart-k283": {
    summary: [
      "Mozart K. 283: virtuosismo de transparência — tudo parece simples até você tentar deixar perfeito.",
      "Treino de ‘textura que respira’: mão esquerda educada, fraseado vocal e articulação que não vira percussão.",
    ],
    sections: [
      {
        title: "Mozart é ópera disfarçada: por que o piano precisa ‘falar’",
        paragraphs: [
          "Mozart pensa em frase como voz humana. Mesmo em passagens rápidas, existe dicção: início da frase, direção, conclusão. Quem toca Mozart como ‘mecânica’ costuma soar limpo — e vazio.",
          "Historicamente, isso está ligado ao ambiente do classicismo: música como conversa social sofisticada. A forma é a etiqueta. Se você não respeita a etiqueta, vira uma pessoa gritando num jantar chique.",
        ],
      },
      {
        title: "O erro mais comum: ‘bonito’ demais (pedal demais) e ‘igual’ demais (sem hierarquia)",
        paragraphs: [
          "Mozart não precisa de pedal para ser legato. O pedal, aqui, é tempero: uma pitada para cor em cadências, não molho por cima de tudo.",
          "A hierarquia manda: melodia canta, baixo sustenta, recheio é textura. Se o recheio cresce, você perde clareza; se o baixo some, você perde chão.",
        ],
      },
      {
        title: "Técnica aplicada: toque ‘perolado’ com relaxamento imediato",
        paragraphs: [
          "Busque o famoso jeu perlé: cada nota tem borda e brilho, mas o dedo não fica preso na tecla. Aperta e solta — como falar com consoantes claras.",
          "Um estudo poderoso: toque em p e com andamento mais lento, tentando manter o mesmo brilho. Se em p você perde brilho, é porque você associou brilho a força.",
        ],
      },
    ],
  },

  "grieg-lyric-pieces": {
    summary: [
      "Grieg (Lyric Pieces — seleção): miniaturas como clima. Harmonia muda como luz no céu nórdico.",
      "Treino de cor com higiene: fazer atmosfera sem virar sentimental pegajoso ou neblina de pedal.",
    ],
    sections: [
      {
        title: "Grieg e o romantismo ‘com sotaque’: paisagem como técnica",
        paragraphs: [
          "Grieg não está tentando ser alemão. Ele escreve com um senso de cor e de gesto que frequentemente lembra dança e folclore filtrados por refinamento urbano. Isso aparece em harmonia: acordes com sabor modal, mudanças que parecem ‘clima’ mais do que ‘argumento’.",
          "Como estudo, essas peças são excelentes porque ensinam um tipo de musicalidade que o conservatório às vezes não ensina: controlar atmosfera com economia.",
        ],
      },
      {
        title: "O que ouvir: melodia em relevo, harmonia como fundo vivo",
        paragraphs: [
          "A melodia não deve virar ‘solo de ópera’. Ela é um fio dentro de uma paisagem. Isso pede voicing sutil: cantar sem esmagar o acompanhamento.",
          "O acompanhamento precisa ser regular e macio, mas não morto. Se ele vira neutro, a peça vira cartão-postal; se ele pesa, a peça perde ar.",
        ],
      },
      {
        title: "Pedal nórdico: curto, inteligente, por harmonia",
        paragraphs: [
          "Troque pedal em mudanças harmônicas relevantes. Se você mantém pedal ‘por compasso’, você cola harmonias diferentes e apaga a narrativa.",
          "Uma técnica simples: ensaie 8 compassos sem pedal para descobrir a anatomia do som; depois devolva o pedal só onde ele realmente cria cor.",
        ],
      },
    ],
  },

  "schumann-op68-10": {
    summary: [
      "Schumann (Álbum para a Juventude — ‘peça de caça’/caráter): interpretar cedo — tocar como cena, não como exercício.",
      "Treino de articulação e acentos com imaginação: ritmo como narrativa (perseguição, passos, respiração).",
    ],
    sections: [
      {
        title: "Schumann pedagogo: ensinar imaginação como técnica",
        paragraphs: [
          "Schumann escreve para formar músico, não só pianista. Ele te dá miniaturas que obrigam você a decidir um personagem: quem está andando? quem está correndo? quem está olhando para trás?",
          "Isso é uma habilidade séria: no repertório adulto, você também precisa de personagens — só que eles estão escondidos em harmonias e texturas mais complexas.",
        ],
      },
      {
        title: "Acento e articulação: o ‘teatro’ está na pontuação",
        paragraphs: [
          "A peça de caráter geralmente pede acentos que criam gesto (como se fossem passos). Mas acento não é pancada: é timing + intenção. Você pode acentuar com clareza de ataque e com diferença de duração, sem aumentar muito o volume.",
          "Treine em duas camadas: mão direita com contorno (fala) e mão esquerda com pulso (chão). Se ambas viram ‘forte’, a cena fica histérica.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso melhora seu Beethoven",
        paragraphs: [
          "Beethoven também usa ritmo como retórica. Schumann te treina a sentir gesto e caráter em padrões simples.",
          "Depois desse tipo de estudo, você começa a ouvir ‘intenção’ mesmo em peças fáceis — e isso é um superpoder musical.",
        ],
      },
    ],
  },

  "bach-minuet-anh116": {
    summary: [
      "Minueto em sol menor (atribuído): barroco ‘de sala’ — dança com sombra. O segredo é pulse + dicção.",
      "Treina o básico que vira avançado: fraseado, cadências, articulação e a coragem de não usar pedal como anestesia.",
    ],
    sections: [
      {
        title: "Por que um minueto ‘simples’ é um professor cruel",
        paragraphs: [
          "Porque ele não tem onde você se esconder. A textura é clara, e a dança exige regularidade. Qualquer pressa, qualquer pausa sem intenção, qualquer pedal excessivo aparece como erro de pronúncia.",
          "E o modo menor muda tudo: não é ‘triste romântico’. É etiqueta com sombra. O caráter é contido, não melodramático.",
        ],
      },
      {
        title: "Dança = física: se o pulso balança, o corpo cai",
        paragraphs: [
          "Toque pensando em passos. O tempo precisa ter estabilidade suficiente para alguém dançar. Isso não significa tocar rígido; significa não perder o chão.",
          "Cadências são pontos de frase: respire sem atrasar demais. A dança continua.",
        ],
      },
      {
        title: "Técnica aplicada: non-legato elegante + pouco pedal",
        paragraphs: [
          "Experimente non-legato como padrão: ligeiramente separado, mas não seco. Isso dá ‘consoantes’ ao fraseado.",
          "Se usar pedal, use só para colorir finais de frase — e bem pouco. O objetivo é clareza, não atmosfera romântica.",
        ],
      },
    ],
  },

  "beethoven-op79": {
    summary: [
      "Beethoven Op. 79 (‘Sonatina’): energia compacta — humor e ataque em alta definição.",
      "Treina staccato, contraste e direção formal: tocar rápido com inteligência, não com adrenalina.",
    ],
    sections: [
      {
        title: "Por que essa ‘sonatina’ é um treino de Beethoven adulto",
        paragraphs: [
          "O tamanho é pequeno, mas a linguagem é beethoveniana: motivos curtos, respostas rápidas, acentos que mudam o sentido do compasso. Se você trata como peça leve, ela vira apressada e sem graça.",
          "É um ótimo laboratório para aprender a diferença entre energia e pressa. Pressa é medo; energia é direção.",
        ],
      },
      {
        title: "Ataque e release: a mecânica do humor",
        paragraphs: [
          "Beethoven faz piadas com timing: um silêncio, um acento, uma resposta inesperada. Para isso funcionar, seu release precisa ser limpo. Se você segura notas demais (ou pedala), você mata a piada.",
          "Treino: toque uma passagem rápida em andamento médio, buscando clareza de articulação. Só suba o andamento quando a clareza não cair.",
        ],
      },
      {
        title: "Pedal: quase nada (e esse é o ponto)",
        paragraphs: [
          "Pense nessa peça como desenho a grafite. Pedal demais vira aquarela.",
          "Quando você consegue tocar com pouco pedal e ainda soar cantabile onde precisa, você ganha uma técnica que transfere direto para Mozart e Haydn.",
        ],
      },
    ],
  },

  "kuhlau-op55-1": {
    summary: [
      "Kuhlau Op. 55 nº 1: sonatina como ‘academia de forma’ — períodos claros, cadências limpas e escalas com etiqueta.",
      "Treina leitura + pontuação: aprender a fazer música ‘falada’ antes de tentar música ‘gritada’.",
    ],
    sections: [
      {
        title: "A sonatina como invenção social: música para formar a classe média (e formar ouvido)",
        paragraphs: [
          "No início do século XIX, o piano é o centro da casa burguesa. Sonatinas existem porque existe um público que precisa de repertório que ensine forma, gosto e técnica sem ser inalcançável.",
          "Kuhlau é perfeito nisso: você aprende o idioma clássico (períodos e cadências) já na porta de entrada.",
        ],
      },
      {
        title: "O que estudar: ‘período’ (pergunta/resposta) e cadência como pontuação",
        paragraphs: [
          "Faça o ouvinte entender quando a frase pergunta e quando responde. Isso não é teoria seca; é interpretação. Sem isso, a peça vira corrida de notas.",
          "Cadências: trate como ponto final. Respire. Mas não pare o pulso — é respiração, não freada.",
        ],
      },
      {
        title: "Técnica aplicada: escalas que soam como frase",
        paragraphs: [
          "Mesmo em passagens de escala, existe direção (para onde vai a frase) e existe hierarquia (o que é melodia vs. preenchimento).",
          "Treine legato sem pedal primeiro. Depois use um pedal mínimo apenas em chegadas, para cor. Você vai ficar chocado com a clareza.",
        ],
      },
    ],
  },

  "clementi-op36-3": {
    summary: [
      "Clementi Op. 36 nº 3: mecânica elegante — regularidade, clareza e mão esquerda ‘civilizada’.",
      "Treina o que vira virtuosismo real: consistência de toque e equilíbrio de camadas.",
    ],
    sections: [
      {
        title: "Clementi: compositor-pedagogo-empresário (o piano como indústria)",
        paragraphs: [
          "Clementi vive no nascimento do piano como mercado: editoras, métodos, ensino doméstico. Ele escreve sonatinas que funcionam como ‘currículo’ — mas com música de verdade.",
          "Isso importa porque a estética é de clareza: frase bem construída, textura transparente e ataque que não é romântico. Você está treinando idioma.",
        ],
      },
      {
        title: "Regularidade sem rigidez: como soar ‘natural’",
        paragraphs: [
          "A peça te cobra repetição com elegância. Se você contrai para ‘ser preciso’, vira duro. Se você relaxa demais, vira mole. O ponto é gesto pequeno e pulso estável.",
          "Experimento: toque a mão esquerda em p o tempo todo. Se a peça continua funcionando, você achou hierarquia. Se desaba, é porque sua esquerda estava fazendo barulho em vez de sustentação.",
        ],
      },
      {
        title: "Curiosidade útil: Clementi como ponte para Beethoven",
        paragraphs: [
          "Beethoven estudou Clementi e admirava sua escrita pianística. A técnica de clareza e de textura que você aprende aqui ajuda diretamente nos movimentos rápidos de Beethoven.",
          "Ou seja: isso não é ‘repertório infantil’. É base de estilo.",
        ],
      },
    ],
  },

  "schubert-d894": {
    summary: [
      "Schubert (Impromptu/seleção em G e vizinhanças): tempo interno e canto infinito — ‘paisagem’ sustentada por harmonia.",
      "Treina frase longa sem inflar: intensidade por direção, não por volume.",
    ],
    sections: [
      {
        title: "Schubert: compositor de canções escrevendo para o piano (respiração é forma)",
        paragraphs: [
          "Schubert pensa como quem canta. Mesmo quando a textura é figurada, a música respira como voz. Isso muda tudo: seu tempo precisa ter inevitabilidade, como se a frase já soubesse para onde vai.",
          "A dificuldade real é sustentar interesse sem ‘fazer coisas’. Em Schubert, o drama frequentemente é harmônico — o chão muda devagar, e você precisa deixar o ouvinte sentir isso.",
        ],
      },
      {
        title: "O que ouvir: viradas de cor (harmonia) e arco de frase",
        paragraphs: [
          "Marque mentalmente onde a harmonia abre janela e onde fecha. Nessas viradas, você pode fazer microcrescimentos e microrelaxamentos — não como efeito, mas como consequência do chão mudando.",
          "O arco é maior do que o compasso. Se você fraseia ‘picado’, a peça vira colagem.",
        ],
      },
      {
        title: "Técnica aplicada: mão esquerda como mundo, direita como voz",
        paragraphs: [
          "A esquerda sustenta o universo: regular, quente, sem gritar. A direita canta por cima com som redondo. Se a esquerda pesa, a voz perde ar.",
          "Estude em dinâmica média e com pedal controlado. Pedal pode ajudar a criar espaço, mas se vira cola constante, você perde a harmonia — e Schubert é harmonia.",
        ],
      },
    ],
  },

  "clementi-op36-6": {
    summary: [
      "Clementi Op. 36 nº 6 (D maior): brilho clássico — escalas e clareza como ‘trompetes’ no teclado.",
      "Treina triunfo sem gritaria: articulação firme, pulso estável e som ‘de bronze’ com elegância.",
    ],
    sections: [
      {
        title: "Ré maior e o afeto do triunfo: por que essa tonalidade soa ‘cerimonial’",
        paragraphs: [
          "Na tradição clássica, Ré maior é tonalidade de festa (instrumentos de metal e trompetes naturais adoravam essa região). No piano, isso vira uma estética: brilho claro, ataque definido e postura.",
          "Clementi aproveita essa cor para ensinar escalas e arpejos dentro de forma. Ou seja: técnica com etiqueta e direção.",
        ],
      },
      {
        title: "O que estudar: escalas como discurso (não como corrida)",
        paragraphs: [
          "Quando a escala aparece, pergunte: ela está afirmando algo? respondendo? preparando cadência? Se você toca como corrida, você perde retórica.",
          "Treine o ‘som de bronze’ sem apertar: ataque claro e relaxamento imediato. Brilho que vem de borda, não de força.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso melhora sua técnica ‘de verdade’",
        paragraphs: [
          "Clementi é um mestre em deixar a mão aprender eficiência: dedos perto das teclas, pulso disponível, e desenho claro. Isso vira virtuosismo de limpeza.",
          "Depois disso, Mozart fica mais articulado e Beethoven fica mais controlado.",
        ],
      },
    ],
  },

  "mozart-k311": {
    summary: [
      "Mozart K. 311 (D maior): brilho de salão com sofisticação — fraseado vocal por cima de textura limpa.",
      "Treina equilíbrio de mãos e clareza sob ‘luz forte’: em Ré, tudo aparece.",
    ],
    sections: [
      {
        title: "D maior em Mozart: luz que exige controle de metal",
        paragraphs: [
          "Ré maior é brilhante. Se você não controla ataque, vira metálico; se controla demais, vira apagado. Mozart pede um brilho educado: borda sem agressividade.",
          "Historicamente, isso conversa com o mundo do salão e do fortepiano: som mais leve, menos sustain que o piano moderno. Sua missão é adaptar sem trair: clareza primeiro.",
        ],
      },
      {
        title: "O que ouvir: baixo discreto (mas presente) e melodia como fala",
        paragraphs: [
          "Mozart exige que a mão esquerda seja um ator coadjuvante perfeito: ela não chama atenção, mas sustenta tudo. Se ela some, a frase perde chão; se ela aparece demais, estraga a conversa.",
          "Truque: toque a mão esquerda 30% mais baixo do que você acha que precisa. Depois volte 10%. Normalmente esse é o ponto.",
        ],
      },
      {
        title: "Técnica aplicada: clareza de textura e pedais mínimos",
        paragraphs: [
          "Faça legato com dedos e com gesto, não com pedal. Pedal só em cadências e sempre curto.",
          "Procure a sensação de ‘texto lido’ — não de ‘linha desenhada’. Mozart é língua.",
        ],
      },
    ],
  },

  "beethoven-op10-3": {
    summary: [
      "Beethoven Op. 10 nº 3 (D maior): músculo com inteligência — contraste de caráter e forma com nervo.",
      "Treino de arquitetura: fazer o drama aparecer por motivo e harmonia, sem virar martelo.",
    ],
    sections: [
      {
        title: "O ‘Beethoven de verdade’ aparece cedo: contraste como motor",
        paragraphs: [
          "Mesmo sendo Beethoven relativamente inicial, a Op. 10 nº 3 já mostra o compositor obcecado por contraste e por virada retórica. Não é só ‘bonito’: é argumento.",
          "Para estudar trechos, pense como diretor de teatro: onde a cena muda? onde o personagem muda? seu som precisa mudar junto — com lógica.",
        ],
      },
      {
        title: "Técnica de peso: energia sem dureza",
        paragraphs: [
          "Beethoven pede peso, mas não pede rigidez. Peso vem de braço bem organizado e dedos perto das teclas. Se você tenta ‘fabricar’ energia com dedo alto, o som endurece e você cansa.",
          "A melhor meta: conseguir tocar em mf com som cheio e redondo. Se o mf está bom, o forte aparece como expansão natural.",
        ],
      },
      {
        title: "Curiosidade útil: Beethoven e o piano que estava mudando",
        paragraphs: [
          "O Beethoven dessa fase já convive com um instrumento em evolução: teclas mais pesadas, mais sustain, mais potência. A escrita pianística começa a assumir ‘peso’ como elemento expressivo.",
          "Mas isso não justifica pedal infinito: Beethoven ainda precisa de pontuação. O clássico não desapareceu.",
        ],
      },
    ],
  },

  "bach-prelude-bwv936": {
    summary: [
      "BWV 936 (Pequeno Prelúdio em D maior): Bach pedagógico com classe — contraponto básico que exige clareza real.",
      "Treina independência e articulação: cada voz precisa existir como linha, não como ‘sombra’ dentro do pedal.",
    ],
    sections: [
      {
        title: "‘Pequeno’ prelúdio, grande laboratório: o que ele realmente testa",
        paragraphs: [
          "Ele testa se você consegue manter duas coisas ao mesmo tempo: (1) pulso estável, (2) duas linhas com identidade. Se você consegue, o resto do repertório polifônico fica menos assustador.",
          "Como peça pedagógica, ele te dá o essencial de Bach sem a densidade de uma fuga grande — por isso é tão eficiente.",
        ],
      },
      {
        title: "O que ouvir: desenho de cada voz (começo, meio, fim)",
        paragraphs: [
          "Toque cada voz sozinha e procure fraseado: onde ela respira? onde conclui? Depois junte tentando manter as duas ‘falando’ em volumes próximos (sem uma engolir a outra).",
          "Um erro comum é tocar uma voz ‘melodia’ e a outra como ruído. Em Bach, a outra voz também fala.",
        ],
      },
      {
        title: "Técnica aplicada: legato por dedo + releases limpos",
        paragraphs: [
          "Se você segura notas demais, vira cola. Se solta cedo demais, vira picado. O meio é legato consciente — e release no tempo certo.",
          "Pedal: se usar, use mínimo e apenas para cor em cadências. O trabalho principal é de dedo e ouvido.",
        ],
      },
    ],
  },

  "kuhlau-op55-1-d": {
    summary: [
      "Kuhlau (ponte em Ré/vizinhança): classicismo como mapa — tonalidades conversando sem drama.",
      "Treina leitura e flexibilidade: entender vizinhança tonal é o ‘GPS’ para não depender de memória muscular.",
    ],
    sections: [
      {
        title: "A ideia de vizinhança: por que o círculo das quintas é ‘prático’",
        paragraphs: [
          "No classicismo, modular para tonalidades vizinhas é como mudar de cômodo na mesma casa. Você não precisa ‘explicar’ a mudança: ela é natural. Estudar Kuhlau nesse espírito te dá senso de navegação.",
          "Isso é exatamente o oposto de decorar tecla por tecla: você aprende função e direção.",
        ],
      },
      {
        title: "O que estudar: cadências como portas",
        paragraphs: [
          "Quando a música muda de tonalidade, geralmente existe uma ‘porta’ (cadência/ponte harmônica). Ouça e destaque discretamente essa porta.",
          "Uma dica simples: sempre que sentir ‘cheguei’, relaxe levemente o gesto. O ouvido do ouvinte vai entender a chegada.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso melhora sua leitura à primeira vista",
        paragraphs: [
          "Leitura melhora quando você reconhece padrões harmônicos e não fica caçando notas. Vizinhança tonal te dá esses padrões.",
          "Esse é o tipo de estudo que parece ‘teórico’, mas vira ganho prático imediato.",
        ],
      },
    ],
  },

  "schumann-op68-2": {
    summary: [
      "‘Soldier’s March’ (Op. 68): ritmo como retórica — marcha que ensina acento, postura e humor.",
      "Treina pontuação rítmica: acento não é volume; é intenção + timing.",
    ],
    sections: [
      {
        title: "Marcha como ‘educação do pulso’",
        paragraphs: [
          "Marcha é o oposto de rubato solto: ela pede chão. Só que esse chão não é rigidez — é postura. A música precisa caminhar.",
          "Schumann usa isso para ensinar controle rítmico desde cedo: você aprende a fazer a música ter caráter sem precisar de dificuldade digital.",
        ],
      },
      {
        title: "O que ouvir: desenho do ritmo pontuado",
        paragraphs: [
          "Ritmos pontuados (curto-longo / longo-curto) são ‘fala’ musical. Faça a diferença de duração ser clara, mas sem exagerar a intensidade.",
          "Se você tocar forte para parecer marcha, vai ficar duro. A marcha convincente pode ser leve — o que importa é a organização.",
        ],
      },
      {
        title: "Técnica aplicada: staccato com elasticidade",
        paragraphs: [
          "Pense em staccato como mola: o dedo encosta e já sai, sem bater. O braço ajuda com micro-peso; o punho não precisa ‘dançar’.",
          "Treine em andamento lento com foco em releases limpos. Quando o release está limpo, o ritmo ‘acende’.",
        ],
      },
    ],
  },

  "gossec-gavotte": {
    summary: [
      "Gavotte (Gossec): França pré/pos-revolução em forma de dança — elegância geométrica.",
      "Treina estilo de dança: pulso estável, articulação clara e fraseado que ‘sorri’ sem sentimentalismo.",
    ],
    sections: [
      {
        title: "Gavotte: dança como gramática (e não como ‘musiquinha antiga’)",
        paragraphs: [
          "A gavotte tem um passo específico: frases simétricas e uma sensação de levantar e pousar. Se você toca legato romântico, você mata o corpo da dança.",
          "Gossec é um nome que lembra o mundo francês de transição: música que serve a salão, teatro e uma sociedade em ebulição. Mas na gavotte, a etiqueta ainda manda.",
        ],
      },
      {
        title: "Articulação: non-legato como padrão elegante",
        paragraphs: [
          "Non-legato dá borda sem secar. Imagine passos: ligeiramente separados, mas conectados pelo pulso.",
          "Cadências precisam ‘sentar’ com naturalidade. Pense em vírgulas. Se você para demais, vira caricatura; se você corre, vira ansioso.",
        ],
      },
      {
        title: "Curiosidade útil: dança te dá o metrônomo interno",
        paragraphs: [
          "Quem estuda dança aprende a manter pulso sem rigidez. Isso transfere para tudo: Mozart, Haydn, Beethoven.",
          "A gavotte é um ótimo ‘antídoto’ contra o vício do pedal e do rubato aleatório.",
        ],
      },
    ],
  },

  "mozart-k310": {
    summary: [
      "Mozart K. 310 (A menor): drama sem maquiagem — uma das sonatas mais ‘cruas’ e intensas do Mozart.",
      "Treina clareza sob pressão: não acelerar quando a música aperta, e manter dicção mesmo em energia alta.",
    ],
    sections: [
      {
        title: "Por que K. 310 é diferente: Mozart em menor com dentes",
        paragraphs: [
          "Mozart em A menor não é ‘triste bonito’. É nervo. É teatro sério. A escrita pede contrastes mais diretos e um tipo de energia que não é comum nas sonatas solares.",
          "Isso torna a peça um estudo perfeito de autocontrole: você precisa manter pulso e clareza quando o texto quer te puxar para a pressa.",
        ],
      },
      {
        title: "O que ouvir: tensão harmônica e frases que ‘mordem’",
        paragraphs: [
          "Preste atenção em como a harmonia cria urgência. Em Mozart, urgência não se resolve com volume; se resolve com direção (para onde a frase vai) e com pontuação clara.",
          "Faça o ouvinte sentir as cadências como decisões — e não como checkpoints.",
        ],
      },
      {
        title: "Técnica aplicada: ataque focado, pedal mínimo",
        paragraphs: [
          "Pedal mínimo. Em clima dramático, o pianista moderno quer ‘engordar’ com pedal. Isso só apaga a dicção. A dicção é o drama.",
          "Treine passagens rápidas em andamento médio com foco em clareza de articulação. Quando a clareza existe, você pode acelerar sem virar borrão nervoso.",
        ],
      },
    ],
  },

  "bach-invention-13": {
    summary: [
      "Invenção a 2 vozes em A menor (BWV 784): independência total — duas mãos conversando sem ‘ajuda’ do pedal.",
      "Treino de ouro: articulação, hierarquia e a capacidade de ouvir duas linhas como se fossem dois cantores.",
    ],
    sections: [
      {
        title: "O que uma Invenção ensina de verdade: cérebro em tempo real",
        paragraphs: [
          "A invenção é um exercício de linguagem, mas em forma de música real. Você aprende a manter duas frases com lógica simultânea: uma mão fala, a outra responde, depois trocam de papel.",
          "A menor aqui dá um clima mais incisivo: não é ‘triste’; é concentrado. Isso ajuda a sentir a retórica.",
        ],
      },
      {
        title: "Como estudar: 3 camadas mesmo tendo só 2 vozes",
        paragraphs: [
          "Parece estranho, mas funciona: (1) voz que está falando agora, (2) voz que está acompanhando agora, (3) pulso interno (que não está escrito, mas precisa existir).",
          "Estude alternando: toque e cante a outra voz mentalmente. Depois inverta. Se você não consegue cantar a outra voz, é sinal de que ela não está viva.",
        ],
      },
      {
        title: "Técnica aplicada: articulação e releases",
        paragraphs: [
          "Em Bach, soltar é tão importante quanto apertar. Releases sujos viram cola. Releases cedo demais viram staccato involuntário.",
          "Grave 15 segundos e pergunte: dá para ‘seguir’ cada linha? Se não, reduza o andamento e limpe os releases.",
        ],
      },
    ],
  },

  "chopin-waltz-a-minor": {
    summary: [
      "Valsa em Lá menor (póstuma): Chopin ‘popular’ com código de etiqueta — dança com melancolia e ironia.",
      "Treina rubato com disciplina: a direita respira, a esquerda mantém o chão (sem virar bateria).",
    ],
    sections: [
      {
        title: "Valsa em Chopin: dançar e pensar ao mesmo tempo",
        paragraphs: [
          "A valsa é um gênero social, mas Chopin não é compositor de ‘música de fundo’. Ele faz a dança carregar psicologia: um sorriso, uma hesitação, um olhar de lado.",
          "Por isso a técnica central é de tempo: manter o passo enquanto a melodia respira.",
        ],
      },
      {
        title: "Rubato que funciona: esquerda como chão, direita como frase",
        paragraphs: [
          "Regra simples (e difícil): o baixo não pode ficar bêbado. Ele é o chão do salão. A mão direita pode atrasar/adiantar levemente como cantor.",
          "Treine com metrônomo só na mão esquerda por alguns minutos. Depois desligue e tente manter a mesma estabilidade sem perder leveza.",
        ],
      },
      {
        title: "Técnica aplicada: acompanhamento leve e pedal curto",
        paragraphs: [
          "O acompanhamento de valsa pode virar martelo se você não controla peso. Toque a esquerda como ‘tapete’: quente, mas discreto.",
          "Pedal: use para cor, principalmente nas cadências. Se você pedala por compasso, vira neblina e a dança perde contorno.",
        ],
      },
    ],
  },

  "tchaikovsky-op39-2": {
    summary: [
      "Tchaikovsky (Álbum para a Juventude — ‘Morning Prayer’/seleção): calma controlada — simplicidade com coluna emocional.",
      "Treina legato, pulso vivo e som íntimo: ‘sereno’ sem ser ‘sonolento’.",
    ],
    sections: [
      {
        title: "Pedagogia russa: ensinar caráter antes de ensinar virtuosismo",
        paragraphs: [
          "Tchaikovsky é ótimo em miniaturas porque ele escreve com dramaturgia mesmo em peças fáceis. O aluno aprende que música não é só nota: é intenção.",
          "Aqui, a intenção é calma — mas calma com presença. Você está treinando um tipo de concentração que depois vira essencial em Bach lento e em Chopin cantabile.",
        ],
      },
      {
        title: "O que ouvir: linha que respira e harmonia que não pode tropeçar",
        paragraphs: [
          "Mesmo simples, a harmonia precisa ‘andar’. Se o pulso vacila, a música parece tropeçar.",
          "Pense em frase longa. Evite microparadas. A serenidade vem de continuidade.",
        ],
      },
      {
        title: "Técnica aplicada: som aveludado e pedal discreto",
        paragraphs: [
          "Ataque com superfície de dedo e relaxamento imediato. Não ‘aperte’ a tecla; ‘pouse’.",
          "Pedal pode ser bem curto para colorir, mas o legato deve vir do dedo. Quando o legato é real, o pedal vira perfume — e não muleta.",
        ],
      },
    ],
  },

  "burgmuller-op100-13": {
    summary: [
      "Burgmüller Op. 100 nº 13 (‘Consolation’): cantabile com sombra — aprender a falar baixo no piano.",
      "Treina frase longa e timbre quente: a mão direita canta; a esquerda sustenta como ‘respiração’ discreta.",
    ],
    sections: [
      {
        title: "Consolation: por que ‘peça simples’ é treino de maturidade",
        paragraphs: [
          "Peças lentas e cantáveis expõem tudo: timbre, controle de ataque, equilíbrio e direção. Aqui, o desafio não é ‘acertar nota’ — é sustentar significado.",
          "Burgmüller, como pedagogo romântico, te dá música que ensina estética: como fazer o piano soar humano sem virar dramalhão.",
        ],
      },
      {
        title: "O que ouvir: a melodia precisa ter dicção",
        paragraphs: [
          "Faça a melodia como frase falada: começos claros, meio com apoio, fim com relaxamento. Se você toca tudo igual, vira canção de ninar sem história.",
          "A mão esquerda deve ser invisível e essencial: se ela chama atenção, vira pesado; se ela some, a melodia fica sem chão.",
        ],
      },
      {
        title: "Técnica aplicada: voicing + pedal ‘limpo’",
        paragraphs: [
          "Use pedal para coloração harmônica, trocando onde a harmonia muda. Evite pedal contínuo.",
          "Treine 1 minuto sem pedal, bem lento, para forçar legato por dedo e escuta de harmonia. Depois devolva pedal com parcimônia.",
        ],
      },
    ],
  },

  "beethoven-fuer-elise": {
    summary: [
      "Für Elise (WoO 59): popular por um motivo — é um estudo perfeito de equilíbrio e repetição com elegância.",
      "O desafio adulto: não acelerar, não ‘adoçar’ com pedal, e manter a melodia cantando por cima de padrões.",
    ],
    sections: [
      {
        title: "Popular não é simples: o problema da peça ‘muito conhecida’",
        paragraphs: [
          "O ouvido já vem cheio de versões. Isso cria dois riscos: (1) tocar no piloto automático, (2) exagerar para ‘parecer diferente’. O caminho bom é o clássico: clareza de frase + timbre bonito + tempo estável.",
          "Beethoven, mesmo em miniatura, exige pontuação. Se você cola tudo com pedal, vira caixa de música borrada.",
        ],
      },
      {
        title: "O que estudar: repetição sem dureza + melodia em relevo",
        paragraphs: [
          "A peça tem padrões repetidos. Seu trabalho é repetir sem endurecer: gesto pequeno, dedos perto da tecla, e relaxamento imediato após cada ataque.",
          "A melodia precisa cantar como se fosse voz. O acompanhamento deve ser discreto. Se tudo fica no mesmo plano, a música vira mecânica.",
        ],
      },
      {
        title: "Técnica aplicada: pedal como tempero (bem pouco)",
        paragraphs: [
          "Troque pedal em mudanças harmônicas e use pouco. O legato principal deve vir da mão.",
          "Um teste honesto: você consegue tocar a seção A com quase nenhum pedal e ainda soar ligado? Se não, revise o legato por dedo e o release.",
        ],
      },
    ],
  },

  "bach-bwv858": {
    summary: [
      "WTC I em F♯ maior (BWV 858): brilho raro — polifonia em tonalidade ‘de teclas pretas’ com clareza de cristal.",
      "Treina duas coisas ao mesmo tempo: conforto físico (pretas) e desconforto mental (ouvir função e hierarquia com precisão).",
    ],
    sections: [
      {
        title: "F♯ maior: a mão acha confortável, o ouvido precisa trabalhar",
        paragraphs: [
          "No teclado, F♯ maior pode ser confortável: muitos dedos longos nas pretas. Isso dá uma sensação de facilidade física.",
          "Mas musicalmente, a tonalidade é menos ‘comum’ no repertório iniciante, então você não tem tantos clichês no ouvido. Isso é ótimo: você é obrigado a ouvir função, não hábito.",
        ],
      },
      {
        title: "Prelúdio e fuga: clareza de vozes como meta principal",
        paragraphs: [
          "No prelúdio, a textura precisa ser transparente. No piano moderno, não deixe sustain virar cola.",
          "Na fuga, trate entradas como personagens. Ataque e release definidos, sem exagero de volume. A diferença entre ‘ouvi a fuga’ e ‘ouvi um monte de notas’ é hierarquia.",
        ],
      },
      {
        title: "Técnica aplicada: pedal mínimo e ‘bordas’ no ataque",
        paragraphs: [
          "Use pedal curto, se usar. Priorize legato por dedo e articulação consciente.",
          "Pense em bordas: cada nota precisa ter contorno. Se você toca macio demais, vira nuvem; se toca duro, vira cravo caricatural. O meio é clareza viva.",
        ],
      },
    ],
  },

  "beethoven-op78": {
    summary: [
      "Beethoven Op. 78 (F♯ maior): intimidade com ambição — energia organizada e cantabile que precisa parecer inevitável.",
      "Treina maturidade: forma comprimida, transições rápidas e um brilho que não pode virar metal.",
    ],
    sections: [
      {
        title: "F♯ maior em Beethoven: cor especial (não é tonalidade ‘padrão’)",
        paragraphs: [
          "F♯ maior tem uma cor particular no piano: brilhante e ‘suspensa’. Beethoven usa essa cor para escrever algo que é ao mesmo tempo íntimo e concentrado.",
          "Isso exige que você controle timbre e transições: a peça muda de humor sem avisar muito. Seu som precisa seguir.",
        ],
      },
      {
        title: "O que ouvir: transições e pontuação",
        paragraphs: [
          "Beethoven aqui trabalha com frases que se encadeiam rapidamente. Se você não pontua cadências, a forma vira um bloco.",
          "Marque mentalmente chegadas e relaxamentos. Isso organiza rubato e evita aceleração nervosa.",
        ],
      },
      {
        title: "Técnica aplicada: som cheio em dinâmica média",
        paragraphs: [
          "Estude buscando timbre redondo em mf. Se o timbre está bom em mf, você consegue crescer sem endurecer.",
          "Use pedal com cuidado: F♯ maior já ressoa muito; pedal longo vira neblina. Prefira pedais curtos por harmonia.",
        ],
      },
    ],
  },

  "chopin-prelude-28-13": {
    summary: [
      "Prelúdio Op. 28 nº 13 (F♯ maior): canto por cima de engrenagem — delicadeza com direção.",
      "Treina o clássico problema chopiniano: acompanhamento discreto, melodia que canta, e pedal que colore sem borrar.",
    ],
    sections: [
      {
        title: "F♯ maior: brilho íntimo (não heroico)",
        paragraphs: [
          "Esse prelúdio tem uma luz particular: não é triunfo; é brilho de perto, quase doméstico. Chopin usa a tonalidade para criar um estado delicado com harmonia que precisa respirar.",
          "Como peça curta, ele exige entrada imediata no clima. Não dá tempo de ‘achar o som’ no meio.",
        ],
      },
      {
        title: "O que ouvir: melodia como voz e acompanhamento como tecido",
        paragraphs: [
          "O acompanhamento precisa ser regular e macio. Se ele fica alto demais, engole a melodia. Se fica baixo demais, a harmonia perde chão.",
          "Treine separando: toque apenas a melodia cantabile; depois apenas o acompanhamento buscando estabilidade; depois junte mantendo as duas intenções.",
        ],
      },
      {
        title: "Técnica aplicada: pedal por harmonia + voicing em p",
        paragraphs: [
          "Troque pedal em mudanças harmônicas reais. Evite pedal por compasso.",
          "Treine em p e pp: se você consegue manter clareza em dinâmica baixa, você realmente controlou a textura.",
        ],
      },
    ],
  },

  "chopin-nocturne-op15-2": {
    summary: [
      "Noturno Op. 15 nº 2 (F♯ maior): elegância com mistério — cantabile que precisa soar ‘falado’ e não ‘derretido’.",
      "Treina rubato disciplinado e vozes internas: a mão esquerda sustenta o mundo, a direita canta com dicção.",
    ],
    sections: [
      {
        title: "O noturno como teatro íntimo: canto + harmonia",
        paragraphs: [
          "Noturnos não são ‘música lenta com pedal’. Eles são escrita vocal no teclado, sustentada por harmonia que se move com sutileza.",
          "Em F♯ maior, o desafio é brilho sem superficialidade: você precisa de um som redondo e de uma frase que respira com lógica.",
        ],
      },
      {
        title: "Rubato com coluna: o passo não pode sumir",
        paragraphs: [
          "A mão esquerda mantém o tempo interno. A direita flutua. Se as duas flutuam juntas, você perde direção.",
          "Exercício honesto: toque a esquerda em tempo bem estável (quase metrônomo) e deixe a direita variar só o mínimo necessário para respirar. Isso cria rubato ‘adulto’.",
        ],
      },
      {
        title: "Técnica aplicada: voicing e pedal limpo (lente, não cobertor)",
        paragraphs: [
          "Ouça as vozes internas. Muitas vezes é ali que está a ‘dor’ ou a ‘doçura’. Se você só destaca a nota mais alta, você perde metade da música.",
          "Pedal deve trocar por harmonia e, muitas vezes, ser meio-pedal. O objetivo é ressonância sem neblina.",
        ],
      },
    ],
  },

  "chopin-barcarolle-op60": {
    summary: [
      "Barcarola Op. 60: Chopin tardio em modo ‘arquiteto de perfume’ — harmonia sofisticada + canto que flutua sem perder coluna.",
      "O desafio real é controle de camadas e pedal: o ouvinte precisa sentir ‘água’ e direção, não neblina e acaso.",
    ],
    sections: [
      {
        title: "O gênero ‘barcarola’: por que isso não é só uma ‘peça bonita’",
        paragraphs: [
          "Barcarola vem da canção dos gondoleiros (Veneza), com balanço característico. Chopin pega essa imagem e faz uma coisa muito dele: transforma uma sensação física (balanço) em forma, e transforma uma forma em psicologia.",
          "Na prática: você não está estudando apenas um ritmo ondulante. Você está estudando como manter uma textura contínua viva por vários minutos sem virar repetição hipnótica vazia. É ‘engenharia de atmosfera’.",
          "Curiosidade histórica (útil, não decorativa): no Chopin tardio, a harmonia começa a ficar mais ambígua/ornamental sem perder função. Ele ainda é tonal, mas ele alonga a estrada. Você sente isso como intérprete quando precisa sustentar direção mesmo em acordes “luxuosos”.",
        ],
      },
      {
        title: "Arquitetura: 3 camadas que precisam existir o tempo todo",
        paragraphs: [
          "Pense como se o piano fosse uma pequena orquestra: (1) baixo/coluna harmônica (o “casco” do barco), (2) ondulação/figuração (a água), (3) canto/linha (a história humana por cima). Se essas camadas misturam, você perde o gênero.",
          "O canto aqui não pode ser gritado: ele precisa parecer inevitável, como voz que emerge do tecido. Isso exige voicing consciente (muitas vezes a melodia é um recorte dentro do acorde, não só a nota mais aguda).",
          "E a ondulação não pode virar metrônomo morto. Um jeito prático: escolha microdestinos harmônicos (cadências, modulações, “portas”) e deixe a ondulação apontar para eles com microcrescimentos e microrelaxamentos. A água tem corrente.",
        ],
      },
      {
        title: "Pedal e timbre: como soar ‘aquático’ sem virar sopa",
        paragraphs: [
          "O pedal aqui é lente, não cola. Se você pensa “pedal = ligar tudo”, o resultado é lama. O pedal bom é o que deixa a harmonia legível enquanto cria profundidade.",
          "Teste honesto (quase cruel): toque 20–30s sem pedal, bem devagar, e resolva o legato por dedo/voicing. Depois devolva o pedal em meia-dose. Se o som melhora sem perder contorno, você acertou a lógica.",
          "Biomecânica: o som ‘redondo’ em Chopin tardio costuma vir mais de gestão de peso do que de dedo apertando. Se você contrai, o timbre endurece e você compensa com pedal — e aí a peça perde definição. Relaxamento imediato após ataque é parte do estilo.",
        ],
      },
    ],
  },

  "debussy-fille-gflat": {
    summary: [
      "‘La fille aux cheveux de lin’: Debussy em modo câmera-close — simplicidade aparente, controle real de timbre e ressonância.",
      "Treino de maturidade: frase curta com poesia, pedal limpo e ‘som de luz’ sem virar sentimental açucarado.",
    ],
    sections: [
      {
        title: "Debussy sem neblina: por que essa peça ensina ‘clareza com cor’",
        paragraphs: [
          "Muita gente aprende Debussy como se fosse ‘pedal infinito + rubato livre’. Essa peça desmente o mito: a beleza aqui depende de contorno. Você precisa de uma ressonância controlada, quase como fotografia em luz suave.",
          "Historicamente, é o piano virando laboratório de cor: o que importa não é só o acorde (função), mas o timbre do acorde no tempo. Isso não é misticismo: é técnica de ataque, duração e pedal.",
        ],
      },
      {
        title: "Como frasear: poesia curta com gramática clara",
        paragraphs: [
          "Pense como linguagem falada: cada frase tem vírgulas. Se você toca tudo ligado e “bonito”, vira papel de parede. Se você separa demais, vira esqueleto. O ponto é dicção.",
          "Uma dica prática: cante a melodia mentalmente e tente reproduzir as mesmas inflexões no teclado. Se você não consegue ‘cantar’ sem aumentar volume geral, o problema é voicing e não emoção.",
        ],
      },
      {
        title: "Pedal limpo: trocas por harmonia (não por compasso)",
        paragraphs: [
          "Troque o pedal quando a harmonia muda de verdade. Pedal por compasso é um hábito que funciona mal em Debussy.",
          "Se você quer um som moderno: experimente meio-pedal em trechos específicos. O objetivo é dar “ar” sem colar as consoantes.",
          "Curiosidade útil: tocar isso bem é uma ponte direta para Chopin (noturnos) e para Mozart (transparência). Parece paradoxal, mas a habilidade central é a mesma: hierarquia de camadas em dinâmica moderada.",
        ],
      },
    ],
  },

  "schubert-impromptu-op90-3": {
    summary: [
      "Impromptu Op. 90 nº 3: Schubert cantando no piano — melodia infinita por cima de acompanhamento que precisa ser invisível e indispensável.",
      "Treino de resistência elegante: legato real, camadas e tempo interno (se você apressa, a peça perde a alma).",
    ],
    sections: [
      {
        title: "Schubert e o ‘tempo interno’: por que isso não funciona com pressa",
        paragraphs: [
          "Schubert é compositor de canções: ele pensa em respiração. O acompanhamento aqui não é ‘background’; ele é o chão emocional. Se você acelera para “passar” pela textura, você destrói a sensação de inevitabilidade.",
          "O drama schubertiano costuma ser harmônico: pequenas mudanças de cor que transformam o clima sem gritar. Sua interpretação precisa deixar o ouvinte perceber isso por direção — não por volume.",
        ],
      },
      {
        title: "Camadas: a mão esquerda sustenta o mundo sem virar protagonista",
        paragraphs: [
          "A melodia precisa cantar como voz humana: contorno, clímax, relaxamento. O acompanhamento precisa ser uma máquina suave. Se a esquerda pesa, a melodia vira refém; se a esquerda some, a harmonia perde chão.",
          "Exercício prático: estude 8 compassos em três passadas: (1) só melodia (cantabile, com intenção), (2) só acompanhamento (regular, macio, em p), (3) junte mantendo a esquerda 30% mais baixa do que você acha ‘normal’.",
        ],
      },
      {
        title: "Pedal e legato: onde o piano moderno atrapalha",
        paragraphs: [
          "O piano moderno sustenta muito. Isso é lindo e perigoso: você cola harmonias diferentes sem perceber. O pedal deve ser planejado por harmonia — e, muitas vezes, menor do que seu instinto romântico pede.",
          "Legato bom aqui nasce de dedo + intenção. Se você tenta ‘comprar legato’ com pedal, o preço é contorno. E Schubert, por incrível que pareça, precisa de contorno para soar verdadeiro.",
        ],
      },
    ],
  },

  "bridge-bach-transposition": {
    summary: [
      "Ponte (Bach + transposição): transpor 8–16 compassos de uma invenção para F♯ maior é um treino de GPS harmônico.",
      "Isso não é ‘teoria’ — é o jeito mais rápido de sair do piloto automático e ganhar leitura intervalar + função harmônica.",
    ],
    sections: [
      {
        title: "Por que transpor Bach é o ‘cheat code’ que quase ninguém usa",
        paragraphs: [
          "Porque Bach te dá escrita limpa: função e voz aparecem. Quando você transpõe, você é obrigado a entender o que está acontecendo (graus, cadências, sequências), em vez de só repetir gesto de dedo.",
          "O resultado prático: você começa a reconhecer padrões. E quando você reconhece padrões, qualquer tonalidade vira menos assustadora — inclusive aquelas “cheias de sustenido”.",
        ],
      },
      {
        title: "Protocolo simples (para funcionar de verdade)",
        paragraphs: [
          "1) Reduza: identifique baixo + melodia (ou as duas vozes principais). 2) Nomeie função (tônica/dominante/subdominante, ou ao menos sensação de ‘casa’ e ‘tensão’). 3) Transponha por intervalo, não por tecla. 4) Toque lento e cantabile.",
          "Se você travar: volte um passo. Normalmente o travamento é falta de mapa (função), não falta de dedo.",
        ],
      },
    ],
  },

  "bridge-debussy-preludes": {
    summary: [
      "Ponte (Debussy – Prelúdios): escolha 1 prelúdio e estude 8–16 compassos como laboratório de timbre e pedal.",
      "Meta: transparência com cor. Se virar neblina, você perdeu linguagem; se virar seco, você perdeu atmosfera.",
    ],
    sections: [
      {
        title: "Como estudar Debussy sem cair na ‘névoa’",
        paragraphs: [
          "Escolha um trecho curto e trate como experimento: repita buscando (1) camadas claras, (2) pedal por harmonia, (3) ataque que colore sem bater.",
          "Debussy fica ‘moderno’ quando você consegue separar o que é linha, o que é textura e o que é ressonância. E isso é técnica auditiva antes de ser técnica de dedo.",
        ],
      },
      {
        title: "Curiosidade útil: Debussy tem pulso (só que ele esconde)",
        paragraphs: [
          "A sensação de flutuar só existe porque há um pulso interno estável. Se o tempo desmancha, o ouvinte sente “confuso”, não “livre”.",
          "Uma regra prática: mantenha o pulso calmo e faça flexões mínimas apenas quando a harmonia muda de chão. Rubato em Debussy é consequência de harmonia e timbre.",
        ],
      },
    ],
  },

  "csharp-major-bach-wtc-db": {
    summary: [
      "WTC em D♭ maior (enarmônico de C♯): Bach brilhante em território de pretas — conforto físico, exigência mental.",
      "Treino de clareza: hierarquia de vozes e releases limpos (o piano moderno quer colar tudo; você precisa recusar).",
    ],
    sections: [
      {
        title: "D♭/C♯ maior: quando a mão fica feliz e o ouvido precisa ser adulto",
        paragraphs: [
          "Em tonalidades ‘de pretas’, a mão muitas vezes encontra posições confortáveis. O perigo é tocar bonito sem pensar. Bach pune isso: ele exige sintaxe — começo, meio e fim de cada voz.",
          "O WTC é atlas, não coleção de exercícios. Aqui, você está treinando: (1) harmonia no tempo, (2) polifonia legível, (3) tempo interno que não oscila.",
        ],
      },
      {
        title: "Prelúdio vs fuga: dois modos de atenção",
        paragraphs: [
          "No prelúdio, faça o ouvinte perceber cadências e viradas harmônicas. No piano, isso é pontuação por direção — não por volume.",
          "Na fuga, entradas são personagens. Ataque e release são seu código-fonte. Se você usa pedal longo, você apaga personagens.",
        ],
      },
      {
        title: "Pedal ‘por sílaba’: a regra que salva Bach no piano moderno",
        paragraphs: [
          "Se usar pedal, use curto: coloração de chegada, não cola contínua. Bach precisa de bordas.",
          "Um teste: toque 12–16 compassos sem pedal e veja se ainda dá para seguir as vozes. Se não dá, o problema não é falta de pedal — é falta de articulação.",
        ],
      },
    ],
  },

  "csharp-major-chopin-op28-15": {
    summary: [
      "Prelúdio ‘Raindrop’: repetição como dramaturgia — o mesmo som pode ser luz ou ameaça dependendo de camadas e harmonia.",
      "Treina controle de repetição + arco: segurar tensão sem aumentar volume a cada compasso (isso vira caricatura).",
    ],
    sections: [
      {
        title: "O truque do ‘Raindrop’: repetição não é monotonia — é lente",
        paragraphs: [
          "O motivo repetido é como um objeto em cena: ele fica igual, mas o ambiente muda. Harmonia, registro e densidade mudam o significado.",
          "Isso é uma aula de interpretação: você aprende a mudar caráter sem trocar a nota. E isso é nível alto de músico.",
        ],
      },
      {
        title: "Camadas: o pedal não pode ser muleta",
        paragraphs: [
          "Você precisa distinguir: nota repetida (textura), canto (fala) e baixo (chão). Se tudo vira uma massa, a peça vira “bonita” e perde teatro.",
          "Use pedal por harmonia. Em seções densas, meio-pedal e trocas curtas costumam funcionar melhor do que pedal longo.",
        ],
      },
      {
        title: "Biomecânica da repetição: como repetir sem travar",
        paragraphs: [
          "Repetição ruim vem de dedo que “agarra” a tecla. A repetição boa vem de gesto pequeno e relaxamento imediato.",
          "Estude em p primeiro. Se você consegue repetir em p com clareza, seu mf vai soar adulto (e não ansioso).",
        ],
      },
    ],
  },

  "csharp-major-chopin-nocturne-op27-2": {
    summary: [
      "Noturno Op. 27 nº 2: Chopin como arquitetura de canto — ornamentação é dicção, não renda decorativa.",
      "Treina rubato disciplinado + vozes internas: a emoção aparece quando a harmonia fica legível.",
    ],
    sections: [
      {
        title: "O noturno ‘adulto’: canto que flutua sobre um chão estável",
        paragraphs: [
          "A regra clássica do rubato chopiniano vale ouro aqui: esquerda como coluna (tempo interno), direita como fala (respiração). Se as duas mãos derretem juntas, você perde direção.",
          "Não confunda “romântico” com “sem pulso”. Chopin soa livre porque há estrutura. O ouvinte sente que a frase sabe para onde vai.",
        ],
      },
      {
        title: "Ornamentos como consoantes: como não virar ‘enfeite bonito’",
        paragraphs: [
          "Ornamento é dicção: ele dá sentido à sílaba. Se você toca como renda, vira superficial. Se você toca pesado, tropeça.",
          "Exercício honesto: toque a melodia “pelada” (sem ornamentos) e faça ela cantar. Depois recoloque os ornamentos sem mudar o volume geral.",
        ],
      },
      {
        title: "Pedal: ressonância controlada (lente)",
        paragraphs: [
          "Pedal longo pode ser lindo por 2 segundos e destrutivo por 2 minutos. Planeje trocas por harmonia.",
          "O objetivo é o paradoxal: som cheio e claro ao mesmo tempo. Isso vem de voicing + pedal curto, não de volume.",
        ],
      },
    ],
  },

  "csharp-major-chopin-waltz-op64-1": {
    summary: [
      "Valsa Op. 64 nº 1 (‘Minute’): virtuosismo de leveza — o difícil é soar brincalhão sem virar apressado.",
      "Treina pulso firme + mão direita elástica: dança com etiqueta, não corrida.",
    ],
    sections: [
      {
        title: "O mito da ‘1 minuto’: o objetivo é dançar, não bater recorde",
        paragraphs: [
          "A peça virou meme de velocidade, mas ela é valsa: precisa de passo. Se você toca como prova de atletismo, você mata o gênero.",
          "O virtuosismo aqui é de controle: tocar rápido com clareza e sorriso, sem rigidez no antebraço e sem mão esquerda martelando.",
        ],
      },
      {
        title: "Técnica aplicada: leveza = gesto pequeno + releases limpos",
        paragraphs: [
          "Gesto pequeno, dedos perto das teclas, punho disponível (não solto demais, não travado). A clareza vem do release.",
          "Treine em andamento médio, buscando timbre bonito. Quando o timbre está bom, a velocidade sobe com menos esforço.",
        ],
      },
      {
        title: "Rubato na valsa: microflexão sem destruir o passo",
        paragraphs: [
          "Você pode respirar na melodia, mas o chão (métrica da dança) não pode sumir.",
          "Pense: o público tem que conseguir dançar mentalmente. Se não dá, você deformou o gênero.",
        ],
      },
    ],
  },

  "csharp-major-debussy-reflets": {
    summary: [
      "‘Reflets dans l’eau’: Debussy como física do som — camadas cintilantes com contorno, não espuma.",
      "Treina transparência em alta densidade: voicing, pedal consciente e pulso interno calmo.",
    ],
    sections: [
      {
        title: "Debussy virtuoso (e o erro clássico: achar que é só pedal)",
        paragraphs: [
          "A escrita parece pedir pedal infinito, mas o efeito real nasce de hierarquia. Se você não define o que é linha e o que é textura, o piano vira borrão.",
          "Pense em ‘planos’: baixo/harmonia como chão, figuração como reflexo, e linhas que emergem como brilho direcionado. O ouvinte precisa perceber profundidade.",
        ],
      },
      {
        title: "Pedal como lente: trocas por harmonia e meio-pedal",
        paragraphs: [
          "Pedal aqui é técnica de foco: você liga para colorir chegada, desliga para recuperar borda.",
          "Meio-pedal é seu amigo. O objetivo não é “ligar tudo”; é controlar o quanto de ressonância fica no ar.",
        ],
      },
      {
        title: "Pulso interno: a água só parece livre porque existe gravidade",
        paragraphs: [
          "Mantenha um pulso interno estável. A liberdade é microflexão, não derretimento.",
          "Um bom teste: toque um trecho e marque mentalmente onde a harmonia muda de chão. Se seu tempo reconhece essas viradas, a peça ganha direção.",
        ],
      },
    ],
  },

  "csharp-major-scriabin-op11-selection": {
    summary: [
      "Scriabin Op. 11 (seleção): romantismo com química própria — cor harmônica e tensão elástica em miniaturas.",
      "Treina ouvir função quando ela começa a ficar ambígua: voicing e direção por acorde.",
    ],
    sections: [
      {
        title: "Scriabin antes do ‘místico’: por que isso já soa diferente de Chopin",
        paragraphs: [
          "Scriabin herda o canto romântico, mas a harmonia dele gosta de escorregar. Ele cria tensão por cor: acordes que mudam o clima mesmo sem grandes clímax.",
          "Isso é ótimo para estudo porque te obriga a ouvir verticalmente (acorde como personagem) e não apenas horizontalmente (melodia).",
        ],
      },
      {
        title: "Como estudar seleção: 2–3 acordes-chave e um arco pequeno",
        paragraphs: [
          "Escolha um prelúdio e identifique 2–3 acordes onde a cor vira. Sua missão é fazer o ouvinte sentir a virada por timbre e microdireção.",
          "Depois, construa um arco de 20–40 segundos: começo (neutro), tensão (cor mais carregada), assentamento (resolução). Mesmo miniatura precisa de mapa.",
        ],
      },
      {
        title: "Pedal e voicing: ressonância como atmosfera (sem apagar contorno)",
        paragraphs: [
          "Use pedal para colorir, mas mantenha contorno de vozes. Se tudo vira sustain contínuo, você perde a harmonia — e Scriabin é harmonia.",
          "Pense em ataque macio com borda. Se o som fica duro, você está empurrando; volte para dinâmica média e reorganize peso.",
        ],
      },
    ],
  },

  "csharp-major-rachmaninoff-op23-4": {
    summary: [
      "Ponte em D♭/C♯ maior para o Prelúdio Op. 23 nº 4: camadas rachmaninovianas em ‘território de pretas’ — som grande, mas organizado.",
      "Treina voicing e gestão de peso: baixo como coluna, meio como textura, canto emergindo sem gritar.",
    ],
    sections: [
      {
        title: "Por que isso é ponte perfeita para o círculo das quintas",
        paragraphs: [
          "O objetivo aqui é usar um repertório denso para treinar competência transferível: controlar camadas em tonalidades cheias de pretas, sem virar barulho.",
          "Mesmo que a peça esteja em outra tonalidade “oficial”, ela dialoga com este território do teclado (posições, ressonância, sensação física).",
        ],
      },
      {
        title: "A regra de ouro: hierarquia constante",
        paragraphs: [
          "Rachmaninoff funciona quando você decide o que é estrutura (baixo), o que é tecido (meio) e o que é fala (canto). Se você não decide, tudo vira forte.",
          "Estude em mf com timbre redondo. Se o mf está duro, o ff será desastre. O som grande vem de economia de gesto, não de força.",
        ],
      },
    ],
  },

  "csharp-major-bridge-brahms": {
    summary: [
      "Ponte (Brahms – Intermezzi): densidade íntima como treino de ouvido — vozes internas importam mais do que brilho.",
      "Treina som profundo sem virar massa: ‘quem fala agora?’ é a pergunta que organiza tudo.",
    ],
    sections: [
      {
        title: "Brahms como laboratório de camadas",
        paragraphs: [
          "Escolha um trecho curto (8–16 compassos) e identifique: (1) voz principal, (2) voz interna significativa, (3) baixo/coluna. Depois toque mantendo hierarquia.",
          "Brahms te ensina algo valioso: intensidade pode ser harmonia e textura, não volume. Isso melhora Chopin e Rachmaninoff automaticamente.",
        ],
      },
      {
        title: "Curiosidade útil: Brahms pensa ‘bachiano’",
        paragraphs: [
          "Mesmo quando soa romântico, Brahms é condução de vozes. Se você trata como ‘acordes bonitos’, você perde a estrutura.",
          "Quando você aprende a ouvir a voz interna, o piano começa a soar mais caro — porque você cria profundidade real.",
        ],
      },
    ],
  },

  "csharp-major-bridge-transposition": {
    summary: [
      "Ponte (transposição em D♭/C♯ maior): treino de enarmonia — o mesmo desenho, outro mapa mental.",
      "Objetivo: não decorar teclas; entender função e intervalo para se mover no círculo das quintas sem medo.",
    ],
    sections: [
      {
        title: "Enarmonia como ferramenta prática (não como curiosidade)",
        paragraphs: [
          "D♭ maior e C♯ maior são o mesmo som no piano, mas não são a mesma ideia no cérebro. Treinar os dois nomes te deixa mais flexível: você aprende a reconhecer padrões sem ficar preso em uma grafia.",
          "Na prática: escolha 8 compassos de Bach (ou um coral simples), escreva mentalmente os graus (I–V–vi etc.) e transpõe para esta região. Você treina leitura e harmonia ao mesmo tempo.",
        ],
      },
      {
        title: "Como saber que funcionou",
        paragraphs: [
          "Se você consegue tocar lento, cantabile, sem travar e sabendo onde estão as cadências, você não está mais ‘caçando nota’: você está falando a língua.",
          "Esse é o ganho real: autonomia para navegar tonalidades.",
        ],
      },
    ],
  },

  "dsharpmin-bach-wtc-ebm": {
    summary: [
      "WTC em Mi♭ menor (enarmônico de Ré♯ menor): Bach em modo ‘noite profunda’ — clareza de vozes em harmonia carregada.",
      "O treino é de inteligência: articulação e releases limpos para o piano não virar um borrão escuro e bonito.",
    ],
    sections: [
      {
        title: "Por que Mi♭ menor/Ré♯ menor é uma ‘academia do ouvido’",
        paragraphs: [
          "Em tonalidades muito ‘pretas’ e com clima naturalmente denso, o piano moderno oferece uma tentação: deixar o sustain fazer o trabalho. O som fica ‘lindo’… e a polifonia desaparece. Bach não perdoa isso.",
          "O ganho de estudar WTC aqui é enorme: você aprende a ouvir função harmônica e a separar vozes como se fossem pessoas numa sala escura. Não é sobre tocar alto; é sobre manter contorno.",
          "Pense no círculo das quintas como geografia: entrar em Mi♭ menor é entrar num clima. Seu trabalho é fazer o ouvinte entender o mapa mesmo quando a luz é baixa.",
        ],
      },
      {
        title: "Prelúdio vs fuga: duas maneiras de ‘explicar’ a tonalidade",
        paragraphs: [
          "No prelúdio, a figuração costuma carregar a harmonia. Seu objetivo é deixar o ouvinte sentir as cadências (portas) — sem precisar ‘fazer drama’. Pontuação por direção, não por volume.",
          "Na fuga, as entradas são personagens. Não precisa destacar com força; precisa destacar com dicção: ataque nítido, release limpo e intenção de frase. Se você pedala longo, você apaga personagens.",
        ],
      },
      {
        title: "Técnica aplicada: ‘bordas’ e pedal mínimo",
        paragraphs: [
          "Regra prática: 80% do trabalho é sem pedal (ou com pedal curtíssimo). Quando você usa pedal, use como coloração de chegada — um toque de sala — e não como cola contínua.",
          "Se a textura começa a ficar pesada, a solução raramente é ‘tocar mais forte’: é tocar mais curto (release melhor) e mais organizado. Bach fica claro quando você tem higiene.",
        ],
      },
    ],
  },

  "dsharpmin-chopin-op10-6": {
    summary: [
      "Étude Op. 10 nº 6 (Mi♭ menor): Chopin como ‘canto sob vidro’ — cromatismo e vozes internas em clima de confissão.",
      "Não é estudo de velocidade: é estudo de timbre, legato real e hierarquia em dinâmica baixa.",
    ],
    sections: [
      {
        title: "O que Chopin está ensinando: ‘melodia’ que às vezes mora no meio",
        paragraphs: [
          "Este estudo é famoso por parecer triste e ‘lento’, mas ele é um treino brutal de controle: você precisa fazer o piano falar baixo com clareza. Isso é mais difícil do que tocar forte.",
          "A armadilha é tocar tudo em legato genérico com pedal e virar uma névoa romântica. O acerto é esculpir vozes: saber qual nota é fala, qual é harmonia, qual é apenas passagem cromática.",
        ],
      },
      {
        title: "Biomecânica: som redondo vem de peso, não de dedo apertando",
        paragraphs: [
          "Se você pressiona a tecla com dedo ‘duro’, o timbre endurece e você tenta consertar com pedal. Aí o texto perde contorno.",
          "Pense em ataque macio + relaxamento imediato. E pense no legato como coreografia de troca de dedos (e não como pedal longo). O estudo vira uma aula de ‘toque caro’.",
        ],
      },
      {
        title: "Curiosidade útil: por que esse é um dos Chopin mais ‘modernos’",
        paragraphs: [
          "O cromatismo aqui não é só decoração; ele é tensão contínua. Isso antecipa um mundo em que harmonia vira psicologia (um caminho que passa por Scriabin e chega no século XX).",
          "Se você aprende a manter direção dentro do cromatismo, seu ouvido dá um salto enorme — e seu rubato fica lógico, não sentimental.",
        ],
      },
    ],
  },

  "dsharpmin-chopin-op28-14": {
    summary: [
      "Prelúdio Op. 28 nº 14 (Mi♭ menor): um relâmpago — curto, áspero, quase ‘percussivo’.",
      "Treina precisão e coordenação: som compacto, ritmo firme e nenhuma rigidez (senão vira pancadaria).",
    ],
    sections: [
      {
        title: "Prelúdio ‘mini-tempestade’: por que tão curto é tão exigente",
        paragraphs: [
          "Em 20–30 segundos, Chopin te obriga a entrar no clima instantaneamente. Não existe ‘meio da peça’ para você se ajustar. Se o ataque está errado, você perdeu.",
          "A sensação deve ser de energia concentrada. Se você toca grande demais, vira teatro. Se toca pequeno demais, vira insignificante. O ideal é ‘tenso e controlado’.",
        ],
      },
      {
        title: "Técnica: coordenação e rotação mínima",
        paragraphs: [
          "O segredo não é levantar dedo e bater: é manter dedos perto e usar micro-rotação do antebraço para distribuir esforço.",
          "Estude em andamento médio primeiro, buscando som uniforme e releases limpos. Quando a clareza existe, a velocidade aparece. Se você acelera antes da clareza, vira borrão nervoso.",
        ],
      },
      {
        title: "Pedal: quase nada (ou nada)",
        paragraphs: [
          "Este prelúdio geralmente fica melhor com pedal mínimo. Se você pedala, você esconde articulação e a peça vira massa.",
          "Pense nisso como ‘desenho a nanquim’: borda e contraste são parte do texto.",
        ],
      },
    ],
  },

  "dsharpmin-scriabin-op8-12": {
    summary: [
      "Étude Op. 8 nº 12 (Ré♯ menor/Mi♭ menor): Scriabin em combustão — clímax que não pode virar rigidez.",
      "Treina potência elástica e direção harmônica dentro de textura densa (intensidade ≠ força bruta).",
    ],
    sections: [
      {
        title: "A pegadinha: parece ‘só tocar forte’, mas é engenharia de peso",
        paragraphs: [
          "Esse estudo virou sinônimo de ‘piano heroico’. Só que o som realmente grande aqui vem de economia de gesto: você precisa de braço organizado, punho disponível e dedos perto das teclas.",
          "Se você trava, o som endurece e o tempo quebra. Scriabin quer tensão, mas tensão elástica — como arco de violino, não como barra de ferro.",
        ],
      },
      {
        title: "Direção: o clímax precisa ter mapa",
        paragraphs: [
          "Mesmo em textura intensa, existem pontos de chegada e de assento. Marque (mentalmente) 2–3 cadências/viradas. Sua missão é crescer para elas e aliviar depois.",
          "Isso evita o erro clássico: ficar ‘forte’ o tempo inteiro. Se tudo é clímax, nada é clímax.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso conversa com Rachmaninoff",
        paragraphs: [
          "Scriabin e Rachmaninoff compartilham o piano-orquestra e o cromatismo russo — mas Scriabin é mais ‘nervoso’, mais químico.",
          "Estudar este estudo te dá a habilidade de controlar densidade com hierarquia — e isso é exatamente o que Rachmaninoff exige, só que em outro dialeto.",
        ],
      },
    ],
  },

  "dsharpmin-brahms-op118-6": {
    summary: [
      "Brahms Op. 118 nº 6 (Mi♭ menor): intimidade pesada — drama em câmera lenta, por vozes internas.",
      "Treina voicing ‘adulto’: profundidade sem barulho, e pedal que colore sem apagar harmonia.",
    ],
    sections: [
      {
        title: "Brahms tardio: quando o clímax é interior",
        paragraphs: [
          "Aqui o ‘drama’ não é gesto heroico; é densidade. Brahms cria tensão com harmonia espessa e condução de vozes — quase como Bach com sangue quente.",
          "A pergunta que organiza tudo: quem fala agora? Muitas vezes a resposta não é ‘a nota mais aguda’. Pode ser uma voz interna.",
        ],
      },
      {
        title: "Técnica: camadas e pedal curto (o piano moderno é perigoso)",
        paragraphs: [
          "O sustain do piano moderno pode transformar Brahms em sopa. Use pedal como lente: pequenas trocas, meio-pedal, e sempre ouvindo se a harmonia continua legível.",
          "Estude trechos sem pedal para forçar condução de vozes por dedo. Depois devolva pedal só onde ele realmente dá profundidade.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso melhora Chopin",
        paragraphs: [
          "Chopin exige voicing; Brahms exige voicing. A diferença é a textura. Quando você aprende a tirar melodia do meio em Brahms, seus noturnos ficam automaticamente mais tridimensionais.",
          "É o tipo de estudo que muda seu ouvido para sempre.",
        ],
      },
    ],
  },

  "dsharpmin-bridge-rachmaninoff-ebm": {
    summary: [
      "Ponte: Rachmaninoff em Mi♭ menor (seleção/trechos) — sino, peso e camadas ‘orquestrais’.",
      "Objetivo: som grande com perspectiva (baixo/coluna, meio/textura, canto) — sem endurecer o braço.",
    ],
    sections: [
      {
        title: "Como usar essa ponte (sem virar ‘repertório impossível’)",
        paragraphs: [
          "Escolha 8–16 compassos de um prelúdio/trecho em Mi♭ menor (ou clima equivalente) e trate como laboratório de camadas.",
          "Pergunta-guia: qual camada é estrutura? qual é textura? qual é fala? Se você responde isso, o som fica instantaneamente mais organizado.",
        ],
      },
      {
        title: "Técnica: peso distribuído e pedal como lente",
        paragraphs: [
          "Rachmaninoff fica ‘grande’ quando você usa o peso do braço com economia, não quando você pressiona com dedo.",
          "Pedal: trocas por harmonia. Se você deixa o pedal ligado como cola, a escrita perde nitidez e o efeito de sino vira barulho.",
        ],
      },
    ],
  },

  "dsharpmin-bridge-debussy": {
    summary: [
      "Ponte: Debussy ‘escuro’ (seleção) — transparência em clima denso, pedal limpo e cor controlada.",
      "Meta: atmosfera sem borrão. Se você não consegue cantar as linhas por dentro, você pedalou demais.",
    ],
    sections: [
      {
        title: "O que escolher (prático e eficiente)",
        paragraphs: [
          "Escolha um prelúdio/trecho de Debussy com clima sombrio (ex.: ‘Des pas sur la neige’, ‘La cathédrale engloutie’ — trechos) e estude só 8–16 compassos.",
          "Debussy é perfeito para esse território do círculo: você aprende cor por pedal e por ataque, mas com contorno. Neblina sem contorno não é Debussy; é acidente.",
        ],
      },
      {
        title: "Pedal e pulso interno (a regra que salva)"
        ,
        paragraphs: [
          "Mantenha pulso interno calmo. O tempo não pode desmanchar. A sensação de flutuar só existe porque há gravidade.",
          "Faça trocas de pedal por harmonia e use meio-pedal quando necessário. O objetivo é ‘ar’ sem cola.",
        ],
      },
    ],
  },

  "dsharpmin-bridge-transposition": {
    summary: [
      "Ponte (transposição para Mi♭ menor/Ré♯ menor): treino de mapa tonal em território ‘escuro’.",
      "Objetivo: parar de caçar nota e começar a falar função (I–V–vi etc.) em qualquer tonalidade.",
    ],
    sections: [
      {
        title: "Protocolo que funciona (e evita frustração)",
        paragraphs: [
          "1) Pegue 8 compassos de um coral simples ou uma invenção curta. 2) Identifique graus/funções (mesmo que seja ‘casa’ vs ‘tensão’). 3) Transponha por intervalo.",
          "Truque: antes de tocar, diga em voz baixa o que você está fazendo (‘dominante’, ‘volta pra casa’). Parece bobo, mas transforma seu cérebro de digitador em músico.",
        ],
      },
      {
        title: "Como saber que você evoluiu",
        paragraphs: [
          "Quando você consegue transpor lento, cantabile, sem travar e sabendo onde estão as cadências, você ganhou autonomia.",
          "Isso melhora leitura à primeira vista e reduz medo de tonalidades com muitos acidentes.",
        ],
      },
    ],
  },

  "dsharpmin-bridge-chopin-nocturnes": {
    summary: [
      "Ponte: Noturnos de Chopin em clima ‘Mi♭ menor’ — canto com sombra e cromatismo.",
      "Treina rubato disciplinado e voicing: esquerda como coluna, direita como fala (ornamento = dicção).",
    ],
    sections: [
      {
        title: "Como estudar noturno como competência (não como ‘peça lenta’)",
        paragraphs: [
          "Escolha um trecho curto de um noturno com cromatismo/sombra e trabalhe três coisas: (1) melodia canta em p, (2) acompanhamento é seda, (3) pedal troca por harmonia.",
          "A cada frase, pergunte: onde está o ponto final? Onde respira? Isso transforma rubato em linguagem.",
        ],
      },
      {
        title: "Curiosidade útil: o noturno é ópera comprimida",
        paragraphs: [
          "Chopin escreve como quem ouve bel canto. Ornamentos são consoantes e vogais rápidas.",
          "Se você toca ornamento como renda, vira decoração. Se toca como dicção, vira música.",
        ],
      },
    ],
  },

  "dsharpmin-bridge-brahms": {
    summary: [
      "Ponte: Brahms ‘escuro’ (seleção) — densidade íntima em tonalidades menores/enarmônicas.",
      "Treina ouvir vozes internas e fazer ‘som profundo’ sem depender de volume ou pedal longo.",
    ],
    sections: [
      {
        title: "O exercício real: profundidade por hierarquia",
        paragraphs: [
          "Pegue 8–16 compassos de um Intermezzo tardio e faça um mapa simples: (1) voz principal, (2) voz interna significativa, (3) baixo.",
          "Depois toque mantendo essa hierarquia. Se tudo vira o mesmo plano, a peça perde a psicologia.",
        ],
      },
      {
        title: "Pedal como lente",
        paragraphs: [
          "Troque pedal por harmonia e aceite o silêncio entre acordes. Brahms precisa de ar para a harmonia se mover.",
          "Esse treino melhora imediatamente seu Chopin tardio (barcarola/polonaises) porque o ouvido aprende a não borrar.",
        ],
      },
    ],
  },

  "asharpmin-chopin-op9-1": {
    summary: [
      "Noturno Op. 9 nº 1 (Si♭ menor): Chopin jovem, mas já ‘cantor’ — melodia com ornamentos e harmonia que suspira.",
      "Treina bel canto no piano: voicing, rubato civilizado e pedal limpo (cheio e claro ao mesmo tempo).",
    ],
    sections: [
      {
        title: "A regra de ouro: esquerda como chão, direita como voz",
        paragraphs: [
          "O rubato que funciona aqui é simples de explicar e difícil de fazer: a mão esquerda mantém o pulso interno (coluna), e a mão direita respira como cantor.",
          "Se as duas mãos flutuam juntas, você perde direção. O noturno vira ‘bonito’ e genérico.",
        ],
      },
      {
        title: "Ornamentos: dicção, não renda",
        paragraphs: [
          "Ornamento tem função: ele conduz para uma nota, ele intensifica uma sílaba. Se você toca como enfeite, a frase não fala.",
          "Exercício: toque a melodia sem ornamentos (pelada) e faça cantar. Depois recoloque ornamentos sem aumentar o volume geral.",
        ],
      },
      {
        title: "Pedal: ‘lente’ e não ‘cobertor’",
        paragraphs: [
          "Troque pedal por harmonia. Use pouco mais do que em Mozart, mas menos do que seu instinto romântico quer.",
          "O objetivo é clareza com perfume: a harmonia precisa ser legível para o drama existir.",
        ],
      },
    ],
  },

  "asharpmin-chopin-op28-16": {
    summary: [
      "Prelúdio Op. 28 nº 16 (Si♭ menor): virtuosismo compacto — mão direita incisiva por cima de um motor que não pode travar.",
      "Treina agilidade com clareza: se você corre, vira borrão; se você ‘martela’, vira duro.",
    ],
    sections: [
      {
        title: "O que o prelúdio exige: energia organizada (não adrenalina)",
        paragraphs: [
          "É um daqueles Chopins em que você sente ‘tempestade’, mas ela precisa ser dirigida. O pulso é a gravidade.",
          "Pense em capítulos curtos: pequenas ondas de tensão e resolução. Se você toca tudo no mesmo forte, a peça fica plana.",
        ],
      },
      {
        title: "Técnica: dedos perto + antebraço disponível",
        paragraphs: [
          "Agilidade aqui nasce de gesto pequeno e relaxamento imediato. Se você levanta dedo alto, você perde tempo e cria ruído.",
          "Estude em staccato leve (bem curto) por alguns minutos para limpar coordenação. Depois volte ao legato/portato no tempo.",
        ],
      },
      {
        title: "Pedal e clareza",
        paragraphs: [
          "Use pedal com parcimônia. Em andamento rápido, pedal longo vira lama.",
          "Faça testes sem pedal: se a peça desaba, você estava escondendo falta de articulação.",
        ],
      },
    ],
  },

  "asharpmin-rachmaninoff-op23-2": {
    summary: [
      "Prelúdio Op. 23 nº 2 (Si♭ menor): Rachmaninoff sombrio — acordes como arquitetura, e baixo como sino grave.",
      "Treina camadas e peso distribuído: som grande, redondo e legível (sem virar bloco duro).",
    ],
    sections: [
      {
        title: "Piano-orquestra: como pensar em camadas",
        paragraphs: [
          "Rachmaninoff escreve como se o piano fosse orquestra: baixo = contrabaixos/metais, meio = massa, agudo = canto/brilho. Se tudo vira uma camada só, você perde perspectiva.",
          "Seu trabalho é manter o baixo como coluna sem esmagar o resto. Isso é gestão de peso, não força.",
        ],
      },
      {
        title: "Técnica: economia de gesto e ‘som redondo’",
        paragraphs: [
          "Som grande nasce de ataque profundo e relaxado, não de dedo pressionando. Se o braço trava, o timbre fica duro e você cansa.",
          "Estude em dinâmica média primeiro (mf) procurando timbre bonito. Se o mf é bonito, o forte aparece como expansão.",
        ],
      },
      {
        title: "Pedal: trocas por harmonia",
        paragraphs: [
          "Pedal aqui é cor e sustentação — mas com trocas claras. Se você cola harmonias diferentes, o sino vira ruído.",
          "Pense em pedal como lente de profundidade: você ajusta foco a cada mudança harmônica importante.",
        ],
      },
    ],
  },

  "asharpmin-bach-wtc-bbm": {
    summary: [
      "WTC em Si♭ menor (enarmônico de Lá♯ menor): Bach com gravidade — polifonia em clima escuro.",
      "Treina independência e legibilidade: deixar entradas e cadências claras sem ‘comprar’ clareza com volume.",
    ],
    sections: [
      {
        title: "Por que essa tonalidade é ‘treino de cabeça’",
        paragraphs: [
          "Si♭ menor no teclado tem um peso natural e muitos acidentes na escrita. Isso assusta o olho, mas pode ser confortável na mão. O perigo é confiar na mão e esquecer o ouvido.",
          "Bach exige que você saiba o que está acontecendo: quem fala, quem responde, onde a harmonia muda de chão.",
        ],
      },
      {
        title: "Técnica: articulação e releases",
        paragraphs: [
          "No piano moderno, a cola acontece fácil. Releases limpos (soltar no tempo certo) são parte do contraponto.",
          "Use pedal mínimo. Se você precisa de pedal para entender as vozes, você está invertendo a lógica: primeiro vem a dicção, depois vem a cor.",
        ],
      },
    ],
  },

  "asharpmin-scriabin-bbm": {
    summary: [
      "Ponte: Scriabin em Si♭ menor (seleção) — romantismo nervoso, cromatismo e ‘cor’ que muda rápido.",
      "Treina ouvir tensão por acorde e controlar pedal para não apagar a harmonia.",
    ],
    sections: [
      {
        title: "Como escolher e estudar (sem depender de ‘peça exata’)",
        paragraphs: [
          "Escolha um prelúdio/estudo curto de Scriabin em Si♭ menor (ou clima semelhante) e estude só 20–40 segundos.",
          "A missão é deixar o ouvinte sentir a mudança de cor harmônica. Scriabin vive disso: acorde como personagem.",
        ],
      },
      {
        title: "Pedal e voicing: cor com contorno",
        paragraphs: [
          "Use pedal para colorir, mas preserve bordas. Se vira sustain contínuo, vira romantismo genérico.",
          "Dica prática: estude sem pedal, identifique os acordes-chave, depois devolva pedal só para ‘iluminar’ chegadas.",
        ],
      },
    ],
  },

  "asharpmin-brahms-bridge": {
    summary: [
      "Ponte: Brahms em clima de Si♭ menor — densidade íntima, vozes internas e tensão lenta.",
      "Treina profundidade sem volume: hierarquia de camadas e pedal curto.",
    ],
    sections: [
      {
        title: "Exercício de ouvido: ‘onde está a voz principal?’",
        paragraphs: [
          "Pegue um Intermezzo tardio e tente localizar a melodia (às vezes ela está no meio). Depois faça essa voz aparecer sem aumentar volume geral.",
          "Isso é o tipo de técnica que transforma tudo: você aprende a esculpir relevo.",
        ],
      },
      {
        title: "Curiosidade útil: Brahms como ponte para Chopin tardio",
        paragraphs: [
          "Chopin tardio (Barcarola, Polonaise-Fantaisie) também exige hierarquia em textura densa. Brahms te dá musculatura de ouvido para isso.",
          "Ou seja: essa ponte não é aleatória — é um treino do mesmo músculo, só em outro dialeto.",
        ],
      },
    ],
  },

  "asharpmin-debussy-bridge": {
    summary: [
      "Ponte: Debussy em clima ‘Si♭ menor’ — transparência em sombra, pedal como foco.",
      "Treina cor controlada: fazer atmosfera sem borrar linhas.",
    ],
    sections: [
      {
        title: "Como estudar: 8 compassos como laboratório",
        paragraphs: [
          "Escolha 8 compassos de um prelúdio de caráter sombrio e repita buscando duas coisas: (1) pulso interno calmo, (2) trocas de pedal por harmonia.",
          "Se você sente que tudo fica lindo mas ‘indistinto’, corte o pedal pela metade e reforce voicing.",
        ],
      },
      {
        title: "Curiosidade útil: Debussy é clássico em segredo",
        paragraphs: [
          "A sensação de flutuar só existe porque existe estrutura. Debussy não é ‘sem forma’; ele é forma por timbre.",
          "Quando você aprende isso, seu romantismo inteiro fica mais claro.",
        ],
      },
    ],
  },

  "asharpmin-chopin-bbm-sonata": {
    summary: [
      "Sonata nº 2 Op. 35 (Si♭ menor): Chopin ‘grande forma’ com coração lírico e uma marcha fúnebre que virou símbolo cultural.",
      "Treina arquitetura: capítulos, contrastes e energia organizada — a obra não sobrevive a ‘tocar por trecho’.",
    ],
    sections: [
      {
        title: "Por que essa sonata é diferente (e por que ela assusta)",
        paragraphs: [
          "Chopin é mestre do íntimo, mas aqui ele encara o formato ‘público’. O desafio é unir lirismo (canto) com estrutura de longo fôlego.",
          "Se você estuda só por passagens difíceis, a obra vira colagem. O antídoto é mapa: saber onde a tensão começa, onde muda de caráter e onde assenta.",
        ],
      },
      {
        title: "A Marcha Fúnebre: símbolo histórico e aula de textura",
        paragraphs: [
          "A marcha virou ícone social (funerais, memória coletiva). Isso é curioso porque, na sonata, ela não é só ‘música triste’: ela é arquitetura de contraste.",
          "Tecnicamente, ela ensina camadas: baixo como passo, acordes como coro e uma linha que precisa ser inevitável sem virar melodrama.",
        ],
      },
      {
        title: "Técnica aplicada: som grande sem dureza",
        paragraphs: [
          "Em Chopin grande, o perigo é empurrar o som. Som grande aqui precisa ser redondo. Se fica duro, volte para mf e reorganize peso.",
          "Pedal é consequência: primeiro clareza de vozes, depois ressonância. Se o pedal entra cedo demais, ele vira máscara.",
        ],
      },
    ],
  },

  "asharpmin-bridge-transposition": {
    summary: [
      "Ponte (transposição para Si♭ menor/Lá♯ menor): treino de leitura intervalar e função harmônica.",
      "Objetivo: construir autonomia no círculo — não depender de ‘memória de dedo’.",
    ],
    sections: [
      {
        title: "Protocolo simples",
        paragraphs: [
          "Pegue 8 compassos de um coral ou de uma invenção e escreva mentalmente os graus (I, V, vi…). Depois transpõe para Si♭ menor.",
          "Toque lento e cantabile. Se ficar mecânico, pare e recupere função: ‘onde é casa? onde é tensão?’",
        ],
      },
      {
        title: "Por que isso vale ouro",
        paragraphs: [
          "Quando você transpõe, você obriga seu cérebro a entender música, não só teclado. Isso melhora leitura, improviso e até memória.",
          "É a ponte mais direta entre teoria e dedo.",
        ],
      },
    ],
  },

  "asharpmin-bridge-nocturnes": {
    summary: [
      "Ponte: outros noturnos (clima de Si♭ menor) — pedagogia do canto no piano.",
      "Treina o pacote completo: rubato com coluna + pedal limpo + ornamento como dicção.",
    ],
    sections: [
      {
        title: "Como estudar (para evoluir de verdade)",
        paragraphs: [
          "Escolha um noturno e trabalhe em três etapas: (1) melodia sozinha cantabile, (2) acompanhamento sozinho em p, (3) junte mantendo a esquerda mais baixa.",
          "Depois, faça o teste do ‘rubato saudável’: grave e veja se o pulso ainda existe. Liberdade sem pulso soa insegura.",
        ],
      },
      {
        title: "Curiosidade útil: a esquerda é o maestro",
        paragraphs: [
          "Em Chopin, a esquerda não é “piano de acompanhamento”; ela é gravidade. Quando a esquerda organiza, a direita pode cantar de verdade.",
          "É por isso que estudar noturno melhora tudo: você aprende controle de tempo interno.",
        ],
      },
    ],
  },

  "ab-chopin-etude-op25-1": {
    summary: [
      "Étude Op. 25 nº 1 (‘Harpa Eólia’): arpejos como vento — o desafio é flutuar com controle, sem pressa e sem pedal sujo.",
      "Treina toque ‘aéreo’: braço solto, dedos perto e voicing para a melodia emergir dentro da textura.",
    ],
    sections: [
      {
        title: "O truque: a melodia está escondida (e você precisa revelar sem gritar)",
        paragraphs: [
          "Muita gente toca isso como cascata de arpejos e pronto. O problema: vira ‘efeito’. O estudo real é fazer o arpejo ser atmosfera enquanto uma linha (às vezes implícita) canta.",
          "Pense como harpa: o som nasce e se dissipa. Se você segura a tecla com tensão, o timbre endurece e você perde a sensação de vento.",
        ],
      },
      {
        title: "Técnica: leveza não é fraqueza — é organização",
        paragraphs: [
          "A mão precisa ficar perto do teclado. Movimentos grandes criam atrasos, ruído e cansaço.",
          "Use rotação mínima e distribuição de peso. E estude em andamento confortável: a prioridade é timbre. Se o timbre está bonito, a velocidade aparece.",
        ],
      },
      {
        title: "Pedal: o perigo do ‘lindo borrado’",
        paragraphs: [
          "Pedal longo faz ficar ‘bonito’ rápido — e mata clareza rápido. Troque por harmonia e experimente meio-pedal.",
          "Teste cruel: toque 10 segundos sem pedal. Se o desenho some, você estava comprando legato com cola.",
        ],
      },
    ],
  },

  "ab-chopin-waltz-op69-1": {
    summary: [
      "Valsa Op. 69 nº 1 (‘Adeus’): dança com memória — elegância de salão com melancolia contida.",
      "Treina rubato com etiqueta: a esquerda é o chão; a direita respira como voz.",
    ],
    sections: [
      {
        title: "Valsa: o passo precisa existir",
        paragraphs: [
          "Se você perde o ‘um-dois-três’, a valsa vira canção lenta. O charme está em dançar enquanto pensa.",
          "A mão esquerda deve ser discreta e constante. Se ela pesa, vira marcha; se ela some, a frase perde chão.",
        ],
      },
      {
        title: "Rubato que funciona: respiração por cima do piso",
        paragraphs: [
          "Faça microflexões na melodia, mas mantenha a sensação de dança. O rubato é um balanço, não uma perda de pulso.",
          "Exercício: toque a esquerda com metrônomo por 1 minuto. Depois desligue e tente manter a mesma estabilidade, só com ouvido.",
        ],
      },
      {
        title: "Pedal e timbre: brilho macio (sem açúcar)",
        paragraphs: [
          "Use pedal curto nas cadências e em mudanças harmônicas. Pedal por compasso tende a borrar a dança.",
          "Procure timbre redondo. Sentimentalismo em Chopin costuma ser timbre duro + pedal demais.",
        ],
      },
    ],
  },

  "ab-chopin-polonaise-fantaisie-op61": {
    summary: [
      "Polonaise-Fantaisie Op. 61 (Lá♭ maior): Chopin tardio como narrativa ‘sem molde’ — dança vira sonho, forma vira pensamento.",
      "Treina arquitetura e coragem: manter unidade em material que parece improviso luxuoso.",
    ],
    sections: [
      {
        title: "O que é difícil aqui: forma em estado líquido",
        paragraphs: [
          "O título já é manifesto: Polonaise (gênero com postura) + Fantaisie (liberdade). Chopin mistura etiqueta e delírio controlado.",
          "Como intérprete, você precisa construir um caminho. Sem mapa, a peça vira sequência de ‘momentos bonitos’.",
        ],
      },
      {
        title: "Técnica: camadas e harmonia tardia",
        paragraphs: [
          "A textura é densa e cheia de vozes internas. O ouvido do ouvinte precisa saber o que é linha e o que é atmosfera.",
          "Pedal precisa ser sofisticado: trocas por harmonia e meio-pedal onde a ressonância é parte do perfume, mas nunca a ponto de apagar a gramática.",
        ],
      },
      {
        title: "Curiosidade útil: por que isso é ‘Chopin do futuro’",
        paragraphs: [
          "O Chopin tardio influencia diretamente a ideia de harmonia como cor (um caminho que conversa com Debussy).",
          "Se você aprende a manter direção nesse tipo de escrita, você domina um nível acima de ‘tocar certo’: você passa a narrar.",
        ],
      },
    ],
  },

  "ab-beethoven-op26": {
    summary: [
      "Sonata Op. 26 (Lá♭ maior): Beethoven inovando por dentro — variações no 1º movimento e uma Marcha Fúnebre no meio de uma tonalidade luminosa.",
      "Treina contraste e retórica: fazer forma e caráter mudarem com lógica (sem virar ‘um movimento de cada jeito’ desconexo).",
    ],
    sections: [
      {
        title: "Beethoven ‘clássico’ com ideias perigosas",
        paragraphs: [
          "A Op. 26 já mostra Beethoven mexendo na ordem do jogo. Abrir com variações (e não com forma-sonata padrão) é escolha estética: ele coloca o microscópio (variação) na frente.",
          "Isso exige do pianista: clareza de caráter em cada variação sem perder unidade. O ouvinte precisa sentir ‘mesma coisa, pessoa diferente’.",
        ],
      },
      {
        title: "A Marcha Fúnebre: contraste como arquitetura",
        paragraphs: [
          "Colocar uma marcha fúnebre no coração de Lá♭ maior é uma aula de luz/sombra. Beethoven te obriga a sustentar gravidade sem teatralizar.",
          "Técnica: pulso firme, som redondo, pedal controlado. A marcha precisa caminhar — não pode virar rubato triste sem chão.",
        ],
      },
      {
        title: "Curiosidade útil: Beethoven e o público burguês",
        paragraphs: [
          "Esse Beethoven já escreve para um mundo de publicação e de execução doméstica, mas com ambição artística enorme. É música que precisa funcionar em sala pequena — e ainda soar ‘grande’.",
          "Aprender isso te dá uma habilidade-chave: criar perspectiva sem depender de volume.",
        ],
      },
    ],
  },

  "ab-schubert-impromptu-op90-4": {
    summary: [
      "Impromptu Op. 90 nº 4 (Lá♭ maior): Schubert como máquina leve — fluxo contínuo com canto escondido e harmonia que precisa respirar.",
      "Treina resistência elegante: regularidade sem rigidez, e leveza sem pressa.",
    ],
    sections: [
      {
        title: "O desafio: tocar ‘muito’ sem parecer que está trabalhando",
        paragraphs: [
          "A textura corre, mas a música não pode soar ansiosa. A sensação deve ser de dança contínua, quase inevitável.",
          "Schubert exige tempo interno: você precisa manter direção harmônica por baixo do fluxo. Se você só repete padrão, vira papel de parede bonito.",
        ],
      },
      {
        title: "Técnica: gesto pequeno e releases limpos",
        paragraphs: [
          "A leveza vem de dedos perto das teclas e economia de movimento. Se você faz gesto grande, você cria peso e atraso.",
          "Treine em p: se você consegue manter clareza em p, você realmente controlou a mecânica.",
        ],
      },
      {
        title: "Pedal: coloração, não cola",
        paragraphs: [
          "Use pedal para dar ‘ar’ em mudanças harmônicas e chegadas. Se você deixa pedal longo, a harmonia cola e o fluxo vira neblina.",
          "O som schubertiano bom é cheio e claro ao mesmo tempo — e isso vem de planejamento, não de excesso.",
        ],
      },
    ],
  },

  "ab-liszt-liebestraum-3": {
    summary: [
      "Liebestraum nº 3 (Lá♭ maior): Liszt bel-canto no piano — clímax de ópera com voicing e controle de brilho.",
      "Treina o ‘grande erro do virtuose’: não deixar a ginástica matar o canto.",
    ],
    sections: [
      {
        title: "Liszt aqui é cantor (não atleta)",
        paragraphs: [
          "Essa peça é famosa e, por isso, sofre com versões que viram show de volume. O núcleo é bel canto: uma linha que canta e cresce com dignidade.",
          "Liszt sabe fazer o piano parecer voz humana. Seu trabalho é manter a melodia como protagonista mesmo quando a textura fica cheia.",
        ],
      },
      {
        title: "Clímax: construir e depois assentar",
        paragraphs: [
          "Planeje o arco: onde começa, onde acumula, onde explode, onde repousa. Se você dá tudo cedo, a peça perde narrativa.",
          "Técnica: som grande vem de peso organizado e timbre redondo. Se você empurra, o brilho vira metal.",
        ],
      },
      {
        title: "Pedal e voicing: brilho com contorno",
        paragraphs: [
          "Pedal precisa ser sofisticado: trocas por harmonia e, às vezes, meio-pedal para evitar lama.",
          "O teste é simples: o ouvinte consegue cantar a melodia depois? Se não, você tocou textura demais e canto de menos.",
        ],
      },
    ],
  },

  "ab-bach-wtc1-ab": {
    summary: [
      "WTC I em Lá♭ maior (enarmônico de Sol♯): Bach sob luz suave — clareza cristalina em ‘território de pretas’.",
      "Treino de transparência e pontuação: cada voz precisa respirar; o piano moderno quer colar tudo — você precisa dizer ‘não’.",
    ],
    sections: [
      {
        title: "Lá♭ maior: conforto físico, exigência mental",
        paragraphs: [
          "Lá♭ maior costuma ser confortável na mão por causa das teclas pretas (posições naturais). Isso é maravilhoso — e perigoso — porque convida o pianista a tocar ‘bonito’ sem pensar.",
          "Bach é justamente o antídoto: ele exige sintaxe. Você precisa deixar o ouvinte entender começo, meio e fim de cada frase, mesmo quando a textura parece simples.",
          "No círculo das quintas, esta região é um “salão de espelhos”: muitas coisas soam naturalmente redondas. Seu trabalho é manter contorno, não só brilho.",
        ],
      },
      {
        title: "Prelúdio vs fuga: harmonia como estrada vs vozes como personagens",
        paragraphs: [
          "No prelúdio, faça o ouvinte sentir as cadências como portas. Sem essa pontuação, a peça vira papel de parede brilhante.",
          "Na fuga, trate entradas como personagens. Não precisa aumentar volume; precisa dar dicção: ataque definido e release limpo.",
        ],
      },
      {
        title: "Pedal (quando usar): ‘cola de sala’, não cola de nota",
        paragraphs: [
          "Se usar pedal, use curtíssimo — mais para colorir chegadas do que para ligar tudo.",
          "Teste honesto: toque 12–16 compassos sem pedal. Se fica incompreensível, o problema é articulação, não falta de pedal.",
        ],
      },
    ],
  },

  "ab-debussy-bridge": {
    summary: [
      "Ponte: Debussy em clima de Lá♭ maior — transparência e luz ‘perolada’ com pedal limpo.",
      "Treino de cor controlada: brilho sem metal, ressonância sem borrão.",
    ],
    sections: [
      {
        title: "Como escolher e estudar (sem virar infinito)",
        paragraphs: [
          "Escolha 8–16 compassos de uma peça de Debussy com luz (ex.: ‘Arabesque’, ‘La fille…’, trechos de prelúdios). A regra é: curto e repetido com intenção.",
          "Debussy não é ‘pedal para tudo’: é foco. Você decide o que está em primeiro plano e o que é atmosfera.",
        ],
      },
      {
        title: "Pedal como lente: trocas por harmonia",
        paragraphs: [
          "Troque pedal quando a harmonia muda de chão. Evite pedal por compasso.",
          "Experimente meio-pedal para manter brilho sem colar consoantes. A meta é ‘ar’, não ‘sopa’.",
        ],
      },
      {
        title: "Curiosidade útil: Debussy aprende com Mozart (e isso muda seu toque)",
        paragraphs: [
          "A clareza que parece ‘moderna’ em Debussy tem raiz clássica: contorno e pontuação.",
          "Se você trata Debussy como neblina, você perde o que ele tem de mais sofisticado: arquitetura de cor.",
        ],
      },
    ],
  },

  "ab-brahms-bridge": {
    summary: [
      "Ponte: Brahms em território de Lá♭ — densidade íntima, camadas e vozes internas.",
      "Treino de relevo: fazer a melodia (às vezes no meio) aparecer sem aumentar o volume geral.",
    ],
    sections: [
      {
        title: "O exercício real: ‘quem fala agora?’",
        paragraphs: [
          "Pegue 8–16 compassos de um Intermezzo tardio (Op. 118/119) e marque: (1) voz principal, (2) voz interna significativa, (3) baixo.",
          "Depois toque mantendo hierarquia. Se tudo vira o mesmo plano, Brahms vira massa e perde psicologia.",
        ],
      },
      {
        title: "Pedal curto e harmonia legível",
        paragraphs: [
          "Brahms fica ‘caro’ quando a harmonia é legível. Pedal longo pode ser lindo por 2 segundos e destrutivo por 2 minutos.",
          "Troque pedal por harmonia e aceite pequenos silêncios. Silêncio é parte do fraseado.",
        ],
      },
    ],
  },

  "ab-transposition": {
    summary: [
      "Ponte (transposição para Lá♭ maior): treino de GPS harmônico em tonalidade ‘de pretas’.",
      "Objetivo: parar de decorar teclas e começar a enxergar função (I–V–vi…) com naturalidade.",
    ],
    sections: [
      {
        title: "Protocolo simples (que evita travar)",
        paragraphs: [
          "1) Escolha 8 compassos de um coral ou de uma invenção curta. 2) Reduza para baixo + melodia. 3) Identifique função (casa vs tensão, ou graus). 4) Transponha por intervalo.",
          "Toque lento e cantabile. Se virar mecânico, você perdeu a música — volte para a harmonia.",
        ],
      },
      {
        title: "Como saber que você ganhou algo de verdade",
        paragraphs: [
          "Você ganhou quando consegue transpor sem ‘caçar nota’ e consegue apontar onde estão as cadências.",
          "Esse ganho transfere para leitura à primeira vista e para improviso em qualquer tonalidade do círculo.",
        ],
      },
    ],
  },

  "eb-mozart-k282": {
    summary: [
      "Mozart K. 282 (Mi♭ maior): classicismo em modo cantabile — 1º movimento lento, como uma ária sem palavras.",
      "Treina o essencial: frase que respira, timbre ‘perolado’ e pedal mínimo (Mozart não tolera borrão).",
    ],
    sections: [
      {
        title: "Por que começar lento é um manifesto estético",
        paragraphs: [
          "Muitas sonatas começam com energia. Aqui, Mozart começa com canto. Isso muda o foco: o que vale é dicção e direção, não brilho.",
          "Você estuda a habilidade mais importante do piano: fazer frase em dinâmica moderada soar cheia de significado.",
        ],
      },
      {
        title: "Técnica: jeu perlé e releases limpos",
        paragraphs: [
          "Busque borda clara no ataque (sem dureza) e relaxamento imediato. A beleza vem do release.",
          "Pedal: quase nada. Se você usa pedal para ligar, provavelmente está cobrindo falta de condução de dedo.",
        ],
      },
      {
        title: "Curiosidade útil: Mi♭ maior como ‘cor de sala’",
        paragraphs: [
          "Mi♭ maior tem uma nobreza suave no teclado: brilho sem agressividade.",
          "A sonata te ensina a fazer essa nobreza aparecer por equilíbrio de camadas, não por volume.",
        ],
      },
    ],
  },

  "eb-chopin-nocturne-op9-2": {
    summary: [
      "Noturno Op. 9 nº 2 (Mi♭ maior): o ‘Chopin de salão’… mas por baixo já existe arquitetura de canto e harmonia.",
      "Treina bel canto: ornamentos como dicção, rubato com coluna e pedal que dá perfume sem virar açúcar.",
    ],
    sections: [
      {
        title: "O noturno como aula de canto: voz por cima de seda",
        paragraphs: [
          "A melodia precisa soar vocal — não como dedo ‘tocando alto’. Pense em consoantes (ataque) e vogais (sustentação).",
          "A mão esquerda é o chão (pulso interno). A mão direita respira. Se as duas mãos derretem juntas, a peça vira sentimentalismo sem mapa.",
        ],
      },
      {
        title: "Ornamentos: onde a maioria se perde",
        paragraphs: [
          "Ornamento é dicção, não decoração. Ele aponta para notas importantes e cria tensão/resolução.",
          "Exercício: toque a melodia sem ornamentos, bem cantabile. Depois recoloque ornamentos sem aumentar o volume geral.",
        ],
      },
      {
        title: "Pedal: brilho e clareza ao mesmo tempo",
        paragraphs: [
          "Troque pedal por harmonia. Pedal por compasso costuma borrar a gramática.",
          "Use pedal como lente: o suficiente para cor, não o suficiente para apagar a fala.",
        ],
      },
    ],
  },

  "eb-chopin-etude-op10-11": {
    summary: [
      "Étude Op. 10 nº 11 (Mi♭ maior): arpejos largos e brilhantes — virtuosismo de ‘mão organizada’.",
      "Treina amplitude com leveza: se você empurra, vira metal; se você cola com pedal, vira neblina.",
    ],
    sections: [
      {
        title: "O problema técnico real: amplitude sem tensão",
        paragraphs: [
          "O estudo parece pedir ‘mão grande’. Na verdade, ele pede coordenação e distribuição de peso. Você precisa mover-se com economia.",
          "A mão não pode travar em aberturas. Pense em gesto que passa pela tecla, não que gruda nela.",
        ],
      },
      {
        title: "Som e clareza: arpejo é textura, não barulho",
        paragraphs: [
          "Chopin escreveu estudos para soar como música. O arpejo precisa ter direção harmônica e contorno de frase.",
          "Se você toca só como cascata, vira academia. Procure microdestinos (cadências) e faça o arpejo apontar para eles.",
        ],
      },
      {
        title: "Pedal: meio-pedal e trocas por harmonia",
        paragraphs: [
          "Pedal ajuda a dar brilho, mas precisa de trocas claras. Em arpejos rápidos, pedal longo vira lama.",
          "Teste: estude trechos sem pedal para garantir legato/coordenação. Depois devolva pedal como perfume.",
        ],
      },
    ],
  },

  "eb-schubert-impromptu-op90-2": {
    summary: [
      "Impromptu Op. 90 nº 2 (Mi♭ maior): Schubert como dança elegante — leveza, regularidade e um canto que aparece dentro da textura.",
      "Treina ‘máquina leve’: fluxo contínuo sem dureza e sem pressa.",
    ],
    sections: [
      {
        title: "Schubert: alegria com sombra (sem precisar de volume)",
        paragraphs: [
          "Mesmo quando Schubert parece alegre, há uma nostalgia de fundo. Isso aparece em viradas harmônicas discretas.",
          "Seu trabalho é manter pulso dançante e deixar as mudanças de cor aparecerem por direção, não por drama.",
        ],
      },
      {
        title: "Técnica: regularidade com elasticidade",
        paragraphs: [
          "A mão precisa ser eficiente: dedos perto, gesto pequeno, releases limpos.",
          "Estude em p: se você mantém clareza em p, você realmente controlou o mecanismo.",
        ],
      },
      {
        title: "Pedal: coloração, não cola",
        paragraphs: [
          "Troque pedal em mudanças harmônicas relevantes. Pedal longo apaga o desenho.",
          "O som schubertiano bom é cheio e claro ao mesmo tempo — e isso vem de planejamento.",
        ],
      },
    ],
  },

  "eb-beethoven-op31-3": {
    summary: [
      "Sonata Op. 31 nº 3 (Mi♭ maior): Beethoven sorrindo com dentes — humor, timing e retórica em forma grande.",
      "Treina precisão de caráter: acento como pontuação, não como pancada. Se você cola com pedal, a piada morre.",
    ],
    sections: [
      {
        title: "Beethoven e o humor: por que timing é técnica",
        paragraphs: [
          "Beethoven faz piadas com expectativas: pausas, respostas inesperadas, acentos que mudam o sentido da frase.",
          "Para isso funcionar, você precisa de controle de release (soltar no tempo certo) e de clareza de articulação.",
        ],
      },
      {
        title: "Forma como teatro: seções precisam ter ‘fala’",
        paragraphs: [
          "Em sonata, cada seção tem função. Se você toca tudo igual, vira maratona.",
          "Marque cadências como pontuação e diferencie material principal de transição por toque, não por volume.",
        ],
      },
      {
        title: "Curiosidade útil: Mi♭ maior é tonalidade de ‘público’",
        paragraphs: [
          "Mi♭ maior frequentemente soa nobre e ‘orquestral’ (pense em Eroica, etc.). Beethoven usa isso para um brilho público.",
          "Mas brilho público não é tocar forte: é tocar com postura e clareza.",
        ],
      },
    ],
  },

  "eb-bach-wtc1-eb": {
    summary: [
      "WTC I em Mi♭ maior: Bach em luz nobre — polifonia com etiqueta, cadências como pontuação e clareza sem esforço aparente.",
      "Treina o essencial: vozes legíveis e pulso calmo. Se você apressa, fica ‘bonito’ e vazio.",
    ],
    sections: [
      {
        title: "Mi♭ maior: nobreza que exige dicção",
        paragraphs: [
          "Mi♭ maior no teclado tende a soar ‘redondo’. A armadilha é tocar no piloto automático.",
          "Bach pede sintaxe: faça o ouvinte perceber cadências e entradas. A beleza vem da gramática.",
        ],
      },
      {
        title: "Técnica: articulação e releases",
        paragraphs: [
          "No piano moderno, sustain vira cola. Use releases limpos para separar vozes.",
          "Pedal mínimo. Se usar, use curto como coloração de sala.",
        ],
      },
    ],
  },

  "eb-haydn-hob-xvi-49": {
    summary: [
      "Haydn Hob. XVI:49 (Mi♭ maior): classicismo afiado — humor, surpresas e forma como conversa inteligente.",
      "Treina pontuação (silêncios) e clareza de textura: tocar leve com coluna.",
    ],
    sections: [
      {
        title: "Haydn: o inventor do timing",
        paragraphs: [
          "Haydn brinca com expectativas. A graça nasce de pausas e de pequenos deslocamentos harmônicos.",
          "Se você ‘alisa’ com pedal e legato genérico, você mata a piada. Classicismo precisa de ar.",
        ],
      },
      {
        title: "Como estudar: cadências como pontuação real",
        paragraphs: [
          "Trate cadências como vírgulas e pontos. Respire sem parar o pulso.",
          "Treine com pouco pedal. Se você consegue soar cantabile sem pedal, seu fraseado está saudável.",
        ],
      },
      {
        title: "Curiosidade útil: Haydn como base para Beethoven",
        paragraphs: [
          "Beethoven quebra um sistema que Haydn ajudou a inventar. Estudar Haydn te dá o mapa do que será quebrado.",
          "Tecnicamente, Haydn limpa vícios: articulação e clareza.",
        ],
      },
    ],
  },

  "eb-debussy-bridge": {
    summary: [
      "Ponte: Debussy em Mi♭ maior — brilho suave, transparência e pedal controlado.",
      "Objetivo: ‘luz sem borrão’. Se virar neblina, você perdeu o idioma.",
    ],
    sections: [
      {
        title: "Como estudar: 8–16 compassos como laboratório",
        paragraphs: [
          "Escolha um trecho curto e repita buscando camadas claras: linha, textura, ressonância.",
          "Debussy funciona quando você decide o que está em primeiro plano. O resto vira atmosfera, não bagunça.",
        ],
      },
      {
        title: "Pedal: por harmonia (e, às vezes, meio-pedal)",
        paragraphs: [
          "Troque pedal quando a harmonia muda de chão. Evite pedal por compasso.",
          "Meio-pedal pode manter brilho sem colar. Pense em pedal como ajuste de foco.",
        ],
      },
    ],
  },

  "eb-brahms-bridge": {
    summary: [
      "Ponte: Brahms em Mi♭ maior — densidade íntima com ‘nobreza contida’.",
      "Treina vozes internas e hierarquia: profundidade sem volume.",
    ],
    sections: [
      {
        title: "Exercício: relevo (melodia às vezes no meio)",
        paragraphs: [
          "Escolha 8–16 compassos de um Intermezzo tardio e identifique a voz principal — nem sempre é a mais alta.",
          "Faça essa voz aparecer por timbre e atenção, não por aumento de volume.",
        ],
      },
      {
        title: "Pedal curto e harmonia legível",
        paragraphs: [
          "Troque pedal por harmonia e aceite pequenos silêncios entre acordes.",
          "Quando a harmonia fica legível, Brahms fica emocional sem você precisar ‘atuar’.",
        ],
      },
    ],
  },

  "eb-transposition": {
    summary: [
      "Ponte (transposição para Mi♭ maior): treino de mapa tonal em uma tonalidade muito ‘musical’ no teclado.",
      "Objetivo: ler função e cadências — o círculo das quintas vira navegação, não loteria.",
    ],
    sections: [
      {
        title: "Protocolo curto",
        paragraphs: [
          "Pegue 8 compassos de um coral/invenção. Reduza para baixo + melodia. Identifique função. Transponha por intervalo.",
          "Toque lento. Se travar, o problema é mapa harmônico, não dedo.",
        ],
      },
      {
        title: "Por que isso é essencial no app",
        paragraphs: [
          "Esse tipo de exercício é exatamente o que transforma o círculo das quintas de ‘diagrama’ em ‘território praticável’.",
          "Você passa a entender tonalidade como idioma.",
        ],
      },
    ],
  },

  "fmin-beethoven-op57": {
    summary: [
      "Sonata Op. 57 (‘Appassionata’, Fá menor): Beethoven como vulcão com engenharia — energia contínua com lógica implacável.",
      "Treino de arquitetura e potência elástica: intensidade sem rigidez, clímax por harmonia (não por pancada).",
    ],
    sections: [
      {
        title: "Fá menor como afeto: gravidade não é volume",
        paragraphs: [
          "Fá menor tem tradição de ‘drama’ no repertório, mas Beethoven não escreve drama como maquiagem: ele escreve drama como estrutura. A tensão nasce de motivo + harmonia + registro.",
          "Se você tenta resolver com decibéis, o som endurece e você perde o que a obra tem de mais assustador: a sensação de inevitabilidade.",
        ],
      },
      {
        title: "Arquitetura: capítulos (não trechos difíceis)",
        paragraphs: [
          "A Appassionata não tolera estudo por retalhos. Você precisa mapear: onde a tensão começa, onde ela acumula, onde ela muda de natureza e onde ela assenta.",
          "Um método simples: escolha 3 ‘portas’ harmônicas (cadências/viradas) e treine cada trecho apontando para a porta. Isso dá direção e evita pressa.",
        ],
      },
      {
        title: "Biomecânica: potência elástica (sobrevivência do corpo)",
        paragraphs: [
          "Som grande aqui vem de peso organizado e relaxamento imediato. Se o antebraço trava, o timbre vira metal e o tempo quebra.",
          "Treine trechos intensos em mf com timbre redondo. Se o mf é bonito, o forte vira expansão. Se o mf já é duro, o forte será ‘grito’.",
        ],
      },
    ],
  },

  "fmin-chopin-ballade-4": {
    summary: [
      "Ballade nº 4 Op. 52 (Fá menor): Chopin narrador adulto — forma como literatura, harmonia como psicologia.",
      "Treina o nível enciclopédico: voicing interno, rubato lógico e clímax inevitável (não teatral).",
    ],
    sections: [
      {
        title: "Ballade = romance: tema que volta transformado",
        paragraphs: [
          "A Ballade não é ‘sonata alternativa’; é narrativa. Ideias retornam com outra luz, como personagem que volta mais velho.",
          "Por isso o estudo rende demais: você precisa sustentar unidade por memória de motivos e por direção harmônica, não por repetição mecânica.",
        ],
      },
      {
        title: "Harmonia tardia: perfume com gramática",
        paragraphs: [
          "Chopin tardio alonga o caminho harmônico. Ele muda de cor para mudar psicologia. Se você pedala demais, você apaga a gramática; se seca demais, mata o perfume.",
          "Estratégia: marque acordes-chave (viradas) e faça microcrescimentos para eles. Rubato bom é o tempo reconhecendo a harmonia.",
        ],
      },
      {
        title: "Técnica aplicada: voicing e camadas em dinâmica moderada",
        paragraphs: [
          "Muitas vezes a linha principal está ‘dentro’ do acorde. Faça ela aparecer por timbre e foco, não por volume.",
          "Teste honesto: grave 20s. Se você não consegue cantar a linha principal depois, a textura engoliu a narrativa.",
        ],
      },
    ],
  },

  "fmin-chopin-nocturne-op55-1": {
    summary: [
      "Noturno Op. 55 nº 1 (Fá menor): Chopin no modo ‘filósofo’ — intimidade, vozes internas e tristeza lúcida.",
      "Treina cantar baixo com clareza: rubato disciplinado e pedal como lente.",
    ],
    sections: [
      {
        title: "Noturno tardio: quando o drama vira harmonia",
        paragraphs: [
          "Aqui a emoção não está em ‘melodia alta’: está em como a harmonia se move por baixo. Isso pede ouvido de compositor.",
          "O objetivo é deixar o ouvinte entender tensão/resolução mesmo em dinâmica baixa.",
        ],
      },
      {
        title: "Rubato com coluna: esquerda como gravidade",
        paragraphs: [
          "A esquerda mantém o tempo interno (com pequenas flexibilidades). A direita respira como voz.",
          "Se as duas mãos flutuam juntas, vira ‘derretido’. O rubato adulto é liberdade com chão.",
        ],
      },
      {
        title: "Pedal e voicing: cheio e claro ao mesmo tempo",
        paragraphs: [
          "Troque pedal por harmonia e use meio-pedal quando necessário.",
          "Estude 8 compassos sem pedal para forçar legato por dedo e hierarquia de camadas. Depois devolva pedal como perfume.",
        ],
      },
    ],
  },

  "fmin-bach-wtc1-fm": {
    summary: [
      "WTC I em Fá menor: Bach em modo sombra — contraponto que exige higiene de articulação no piano moderno.",
      "Treina clareza sob densidade: entradas reconhecíveis, cadências pontuadas e pedal mínimo.",
    ],
    sections: [
      {
        title: "Fá menor: gravidade por direção (não por peso)",
        paragraphs: [
          "Fá menor convida a tocar ‘pesado’. Resista: o barroco pede contorno, não massa.",
          "Faça a harmonia andar por frase. Se você só segura som, vira lama.",
        ],
      },
      {
        title: "Técnica: releases limpos e pouco pedal",
        paragraphs: [
          "No piano moderno, sustain cola vozes. Releases (soltar no tempo certo) são parte do contraponto.",
          "Se usar pedal, use curtíssimo e apenas em chegadas. A clareza vem da mão.",
        ],
      },
      {
        title: "Curiosidade útil: Bach ‘limpa’ seu romantismo",
        paragraphs: [
          "Quem aprende a separar vozes em Bach escuro toca Brahms/Chopin com outra qualidade: profundidade legível.",
          "É o melhor antídoto para pedal como muleta.",
        ],
      },
    ],
  },

  "fmin-schubert-impromptu-op142-1": {
    summary: [
      "Impromptu Op. 142 nº 1 (Fá menor): Schubert dramático com pulso dançante — narrativa por mudança de cor harmônica.",
      "Treina alternar sombra e impulso sem virar pressa: forma longa em linguagem de canção.",
    ],
    sections: [
      {
        title: "Schubert: tensão por harmonia (mudança de luz)",
        paragraphs: [
          "Schubert muda clima como quem muda de cômodo: quase sem aviso, mas com lógica. Seu trabalho é deixar o ouvinte sentir essa troca de luz.",
          "Se você dramatiza com volume, vira romantismo genérico. A grandeza aqui é interna.",
        ],
      },
      {
        title: "Técnica: pulso firme, superfície flexível",
        paragraphs: [
          "O pulso precisa caminhar. Respire na frase sem perder gravidade.",
          "Pense em camadas: baixo como chão, textura como motor, e qualquer linha superior como fala.",
        ],
      },
      {
        title: "Pedal: cor em pontos estratégicos",
        paragraphs: [
          "Troque pedal em mudanças harmônicas importantes. Pedal contínuo apaga o desenho.",
          "O som schubertiano bom é cheio e claro ao mesmo tempo.",
        ],
      },
    ],
  },

  "fmin-mendelssohn-rondo-capriccioso-op14": {
    summary: [
      "Rondo Capriccioso Op. 14: Mendelssohn como ‘clássico com adrenalina’ — virtuosismo limpo e forma elegante.",
      "Treina transparência em velocidade: brilho sem grosseria, articulação clara e pedal disciplinado.",
    ],
    sections: [
      {
        title: "O charme mendelssohniano: parecer fácil",
        paragraphs: [
          "Mendelssohn soa melhor quando a engrenagem é invisível. Se você ‘trabalha’ demais no teclado, a música perde elegância.",
          "O segredo é gesto pequeno + tempo interno firme. Velocidade é consequência de limpeza.",
        ],
      },
      {
        title: "Técnica: clareza antes de BPM",
        paragraphs: [
          "Estude em andamento moderado buscando som limpo e releases curtos. Depois suba sem perder contorno.",
          "Evite pedal longo em textura rápida: ele faz ‘espuma’. Use pedal como cor pontual.",
        ],
      },
      {
        title: "Curiosidade útil: ponte para Debussy (sim, sério)",
        paragraphs: [
          "Debussy virtuoso exige a mesma competência: alta densidade com transparência. Só muda o vocabulário.",
          "Treinar brilho sem borrar aqui te prepara para ‘cor com contorno’ depois.",
        ],
      },
    ],
  },

  "fmin-rachmaninoff-op23-5-bridge": {
    summary: [
      "Ponte: Rachmaninoff em clima de Fá menor — energia marcial, camadas e som orquestral.",
      "Treino de densidade organizada: baixo-coluna, acordes-metais e pedal por harmonia.",
    ],
    sections: [
      {
        title: "Como usar a ponte (8–16 compassos, 1 objetivo)",
        paragraphs: [
          "Escolha um trecho marcial/denso e trate como laboratório de camadas. Não é ‘zerar a peça’; é dominar a competência.",
          "Pergunta-guia: o que é estrutura (baixo)? o que é massa (meio)? o que é brilho (agudo)? Se tudo vira uma camada, vira barulho.",
        ],
      },
      {
        title: "Pedal e timbre: sino sem lama",
        paragraphs: [
          "Troque pedal por harmonia. Pedal longo em textura densa apaga articulação.",
          "Som grande vem de peso organizado. Se fica duro, volte para mf e refaça a engenharia.",
        ],
      },
    ],
  },

  "fmin-brahms-bridge": {
    summary: [
      "Ponte: Brahms em Fá menor — densidade íntima e tensão lenta (drama de câmera).",
      "Treina vozes internas e profundidade sem volume: relevo por hierarquia, não por ‘força’.",
    ],
    sections: [
      {
        title: "Exercício: mapa de camadas em 3 linhas",
        paragraphs: [
          "Pegue 8–16 compassos de um Intermezzo tardio e marque: (1) voz principal, (2) voz interna significativa, (3) baixo.",
          "Depois toque mantendo a hierarquia. Se tudo fica no mesmo plano, Brahms vira massa e some a psicologia.",
        ],
      },
      {
        title: "Pedal curto: ‘ar’ para a harmonia se mover",
        paragraphs: [
          "Troque pedal por harmonia e aceite pequenos silêncios. Em Brahms, silêncio é parte do fraseado.",
          "Quando a harmonia fica legível, a emoção aparece sem você precisar teatralizar.",
        ],
      },
    ],
  },

  "fmin-debussy-bridge": {
    summary: [
      "Ponte: Debussy em clima de Fá menor — sombra com transparência (atmosfera sem borrão).",
      "Treina pedal limpo, pulso interno calmo e camadas claras mesmo em cor escura.",
    ],
    sections: [
      {
        title: "Como estudar: 8 compassos como laboratório de cor",
        paragraphs: [
          "Escolha um trecho sombrio (ex.: ‘Des pas sur la neige’, ‘La cathédrale engloutie’, etc.) e repita em loop curto.",
          "A meta é atmosfera com contorno: se você não consegue cantar as linhas internas, você pedalou demais.",
        ],
      },
      {
        title: "Pedal por harmonia (e meio-pedal quando necessário)",
        paragraphs: [
          "Troque pedal quando o chão harmônico muda. Evite pedal automático por compasso.",
          "Meio-pedal ajuda a manter cor sem colar. Pedal, aqui, é foco.",
        ],
      },
    ],
  },

  "fmin-transposition": {
    summary: [
      "Ponte (transposição para Fá menor): treino de GPS harmônico em tonalidade ‘dramática’ do círculo.",
      "Objetivo: entender função e cadências — parar de caçar nota e começar a falar idioma.",
    ],
    sections: [
      {
        title: "Protocolo que funciona",
        paragraphs: [
          "1) Pegue 8 compassos de um coral/invenção. 2) Reduza para baixo + melodia. 3) Identifique função (casa vs tensão). 4) Transponha por intervalo.",
          "Toque lento e cantabile. Se travar, você perdeu o mapa harmônico.",
        ],
      },
      {
        title: "Por que Fá menor é uma boa ‘academia de função’",
        paragraphs: [
          "Porque a cor forte da tonalidade te dá tentação de dramatizar. A transposição te obriga a ser lógico.",
          "Quando você consegue transpor e ainda frasear, você ganhou autonomia real.",
        ],
      },
    ],
  },

  "cmin-beethoven-op13": {
    summary: [
      "Sonata Op. 13 (‘Pathétique’, dó menor): Beethoven em retórica pública — drama com gramática clássica e golpes de teatro calculados.",
      "Treina contraste e pontuação: acento com função, silêncio como parte do texto e clímax construído por harmonia (não só por volume).",
    ],
    sections: [
      {
        title: "Dó menor: a ‘língua’ do Beethoven dramático",
        paragraphs: [
          "Dó menor, em Beethoven, costuma ser território de conflito: é a tonalidade que ele usa quando quer falar com o público em voz grave.",
          "Mas aqui o drama ainda conversa com a etiqueta clássica. Isso é importante: você não está tocando ‘romantismo livre’; está tocando teatro dentro de forma.",
        ],
      },
      {
        title: "O Grave (introdução): por que silêncio e timing são técnica",
        paragraphs: [
          "A introdução é retórica: quase uma fala. Se você toca ‘em tempo’ como se fosse metrônomo, você perde o efeito. Se você exagera e vira novela, você perde a forma.",
          "O segredo é pontuação: ataques claros, releases limpos e pausas que soam intencionais. No piano moderno, pedal demais apaga a fala.",
        ],
      },
      {
        title: "Biomecânica do drama: som grande sem dureza",
        paragraphs: [
          "Beethoven pede peso, mas não rigidez. Som grande aqui vem de braço organizado e relaxamento imediato.",
          "Treine trechos fortes em mf primeiro buscando timbre redondo. Se o timbre endurece, não é ‘falta de força’: é excesso de pressão.",
        ],
      },
    ],
  },

  "cmin-bach-wtc1-847": {
    summary: [
      "WTC I em dó menor (BWV 847): Bach em modo severo — contraponto que testa dicção, foco e resistência mental.",
      "Treina clareza em clima denso: entradas legíveis, cadências como pontuação e pedal mínimo (senão vira massa bonita e inútil).",
    ],
    sections: [
      {
        title: "Dó menor: densidade que exige contorno",
        paragraphs: [
          "Dó menor no teclado convida o pianista a ‘pesar’ o som. Só que Bach não quer peso; quer gramática. O drama é de lógica, não de volume.",
          "A pergunta-guia: dá para ‘ler’ as vozes como se fossem frases? Se não, você está tocando textura sem linguagem.",
        ],
      },
      {
        title: "Técnica: sujeito/entradas como personagens + releases limpos",
        paragraphs: [
          "Isolar o sujeito e mapear entradas é a forma mais rápida de ganhar controle. Você não precisa destacar com força; precisa destacar com dicção.",
          "No piano moderno, release (soltar no tempo certo) é parte do contraponto. Release sujo = cola; release limpo = polifonia.",
        ],
      },
      {
        title: "Pedal: ‘cola de sala’, não cola de notas",
        paragraphs: [
          "Se usar pedal, use curtíssimo e só em chegadas harmônicas (como cor). Em Bach, pedal contínuo é o atalho que destrói o texto.",
          "Quando você consegue tocar isso com clareza, você ganhou uma habilidade transferível: organizar densidade em Brahms e Rachmaninoff.",
        ],
      },
    ],
  },

  "cmin-bach-invention-2": {
    summary: [
      "Invenção nº 2 em dó menor (BWV 773): duas vozes, zero desculpas — independência total com retórica clara.",
      "Treina o básico que vira avançado: articulação, hierarquia instantânea e a habilidade de ouvir duas linhas como dois cantores.",
    ],
    sections: [
      {
        title: "Por que invenção é ‘academia do cérebro’",
        paragraphs: [
          "Em duas vozes, tudo fica exposto. Se você deixa uma voz virar ‘acompanhamento morto’, você está tocando metade da obra.",
          "O ganho é imediato: você aprende a alternar papéis (fala/resposta) sem perder pulso interno. Isso é interpretação, não digitação.",
        ],
      },
      {
        title: "Técnica: articulação como consoante (e tempo interno como coluna)",
        paragraphs: [
          "Experimente non-legato elegante como padrão. Barroco ‘colado’ no piano moderno vira borrão.",
          "Treine releases limpos: em Bach, soltar no tempo certo é tão importante quanto apertar.",
        ],
      },
    ],
  },

  "cmin-chopin-prelude-op28-20": {
    summary: [
      "Prelúdio Op. 28 nº 20 (dó menor): catedral em 30 segundos — acordes como arquitetura e silêncio como significado.",
      "Treina sonoridade vertical: timbre de ‘bronze’, progressão harmônica legível e pedal que sustenta sem borrar a pontuação.",
    ],
    sections: [
      {
        title: "Curto, mas monumental: harmonia andando no tempo",
        paragraphs: [
          "A peça é feita de acordes que caminham com lógica. Sua missão é deixar o ouvinte perceber para onde a harmonia vai — e onde ela assenta.",
          "Se você toca como ‘acorde forte’ sem direção, vira caricatura. O peso precisa ter destino.",
        ],
      },
      {
        title: "Timbre: ‘bronze’ sem dureza",
        paragraphs: [
          "Densidade aqui não é pancada; é apoio. Use peso organizado e relaxamento imediato para manter timbre redondo.",
          "Um bom teste: tocar em mf com som cheio. Se o mf já está duro, o forte vai quebrar.",
        ],
      },
      {
        title: "Pedal: sustentar sem apagar cadências",
        paragraphs: [
          "Troque pedal quando a harmonia muda de verdade. Pedal contínuo apaga a gramática.",
          "Estude sem pedal (bem lento) para entender o legato real. Depois devolva pedal como arquitetura, não como cola.",
        ],
      },
    ],
  },

  "cmin-chopin-etude-op10-12": {
    summary: [
      "Étude Op. 10 nº 12 (‘Revolucionário’, dó menor): fúria com engenharia — esquerda como motor e a direita como comando.",
      "Treina resistência inteligente: economia de gesto, antebraço disponível e clareza de direção mesmo em alta energia.",
    ],
    sections: [
      {
        title: "O mito: velocidade. A realidade: organização",
        paragraphs: [
          "Esse estudo tem legenda histórica, mas o que ele te ensina é mecânica eficiente: a esquerda precisa se mover sem travar e sem ‘martelar’.",
          "Se você tenta resolver com tensão, você quebra rápido. Se organiza gesto e timbre, ele vira música — não academia.",
        ],
      },
      {
        title: "Biomecânica: dedos perto + rotação mínima",
        paragraphs: [
          "Use gesto pequeno e micro-rotação do antebraço para distribuir esforço. O dedo não ‘bate’; ele encosta, apoia e solta.",
          "Estude em andamento médio buscando som limpo. Quando a clareza existe, a velocidade aparece.",
        ],
      },
      {
        title: "Música: cadências dentro da tempestade",
        paragraphs: [
          "Mesmo com figuração contínua, existe direção harmônica. Marque viradas e assentamentos.",
          "Evite ‘forte constante’. Contraste (ainda que pequeno) é o que transforma barulho em narrativa.",
        ],
      },
    ],
  },

  "cmin-mozart-k475": {
    summary: [
      "Fantasia em dó menor K. 475: Mozart ‘noturno’ e teatral — improviso controlado, mudanças súbitas de luz e retórica de ópera no teclado.",
      "Treina contrastes rápidos com lógica: mudar caráter sem virar colagem e usar pedal como pontuação (não como neblina).",
    ],
    sections: [
      {
        title: "Mozart dramático: por que isso não é ‘Mozart de porcelana’",
        paragraphs: [
          "Esta fantasia é um lembrete de que Mozart não é só simetria sorridente. Aqui ele escreve como dramaturgo: cenas, cortes, recitativos, súbitos ‘apagões’ e reentradas — quase uma ópera sem palavras.",
          "Isso muda o estudo: você precisa de imaginação com disciplina. Se você ‘romantiza’ com pedal e rubato frouxo, perde a dicção clássica. Se você seca demais, perde teatro.",
        ],
      },
      {
        title: "Forma como cena: dê nome aos capítulos",
        paragraphs: [
          "Um método prático (e poderoso): rotule seções com uma palavra (ex.: ‘declamação’, ‘corrida’, ‘sussurro’, ‘tempestade curta’). Isso impede que tudo vire o mesmo ‘bonito’.",
          "Pense em cadências como portas. Sempre que a harmonia fecha, você precisa deixar o ouvinte sentir que ‘entrou em outro cômodo’.",
        ],
      },
      {
        title: "Técnica: dicção, releases e pedal curto",
        paragraphs: [
          "No piano moderno, o risco é sustain demais virar cola. Seu aliado é release limpo: soltar no tempo certo dá contorno sem precisar bater forte.",
          "Pedal aqui deve ser cirúrgico: colorir chegadas e ajudar a ‘sala’, mas nunca a ponto de apagar consoantes (ataques) e pontuação (cadências).",
        ],
      },
    ],
  },

  "cmin-beethoven-op111": {
    summary: [
      "Op. 111 (dó menor): Beethoven tardio em forma de ‘manifesto’ — duas partes e um mundo inteiro (conflito → transfiguração).",
      "Treina leitura estrutural: motivo como DNA, variação como metamorfose e tempo interno que sustenta silêncio e densidade.",
    ],
    sections: [
      {
        title: "Por que a Op. 111 é diferente (não é ‘mais uma sonata’)",
        paragraphs: [
          "A Op. 111 é Beethoven no ponto em que forma deixa de ser moldura e vira argumento. O fato de ter só dois movimentos não é ‘corte’: é concentração. O primeiro é conflito concentrado; o segundo é uma Arietta que vira processo — variações que parecem mudar o estado físico do som.",
          "Para você como pianista, isso é crucial: aqui não funciona ‘tocar bonito’. Funciona construir inevitabilidade. Se você não sabe onde está a tensão e onde está a liberação, a obra soa como episódios.",
        ],
      },
      {
        title: "Mov. I: retórica em alta densidade (ataque, silêncio e hierarquia)",
        paragraphs: [
          "O primeiro movimento pede dicção de discurso: ataques que significam, silêncios que não são ‘buraco’ e mudanças de registro que são viradas de cena. O problema técnico real é manter clareza sob energia: som grande sem dureza.",
          "Pense em camadas: baixo = coluna (função), acordes = massa/argumento, e linhas internas = ‘subtexto’. Se tudo vira o mesmo plano, Beethoven vira barulho.",
        ],
      },
      {
        title: "Mov. II: variações como ‘mudança de estado’ (tempo interno e timbre)",
        paragraphs: [
          "Na Arietta, a unidade não vem de ‘tema reaparece’: vem de transformação contínua. Cada variação muda o tipo de pulso, o tipo de brilho e o tipo de ressonância. É por isso que o tempo interno manda: se você acelera por ansiedade, você destrói a sensação de expansão.",
          "O pedal aqui é lente: em trechos rápidos, pedal longo vira espuma; em trechos lentos, pedal curto demais vira seco. A solução não é regra fixa — é ouvir harmonia e decidir foco (o que está nítido vs. o que é halo).",
        ],
      },
    ],
    takeaways: [
      "Se você não consegue cantar o tema da Arietta por cima da textura, o problema é voicing (hierarquia), não emoção.",
      "Em Beethoven tardio, ‘controle’ é estética: som grande com relaxamento imediato (pressão contínua endurece e mata o tempo).",
    ],
  },

  "cmin-rachmaninoff-op3-2-bridge": {
    summary: [
      "Ponte: Prelúdio Op. 3 nº 2 (dó# menor) como ‘treino de sino’ — peso com ressonância organizada.",
      "Serve para C menor porque ensina o que impede o drama de virar pedra: camadas (baixo/miolo/canto) + pedal como foco.",
    ],
    sections: [
      {
        title: "Por que isso é ponte útil (mesmo não sendo dó menor)",
        paragraphs: [
          "A ideia da ponte é competência transferível: aprender a criar gravidade com timbre redondo e hierarquia de camadas. Em C menor, o pianista tende a ‘pesar’ e endurecer; Rachmaninoff te obriga a pesar sem travar.",
          "Pense em ‘piano-orquestra’: baixo como contrabaixo/metais, acordes como sino/coro e qualquer linha superior como fala. Se tudo vira forte, some a perspectiva.",
        ],
      },
      {
        title: "Ressonância como parte do texto (pedal = lente)",
        paragraphs: [
          "O prelúdio funciona quando a ressonância é controlada: você quer cauda de som, mas com bordas. Pedal contínuo vira lama; sem pedal vira esqueleto. A solução é trocar por harmonia e usar meio-pedal quando necessário.",
          "Um bom critério: o ouvinte precisa perceber ‘portas’ harmônicas (tensão → assentamento). Se as portas não aparecem, o pedal está colando harmonias diferentes.",
        ],
      },
      {
        title: "Biomecânica: peso distribuído (intensidade ≠ força)",
        paragraphs: [
          "Som grande não vem de apertar. Vem de peso organizado + relaxamento imediato. Se você sente o antebraço travando, você está pagando caro: timbre duro + cansaço + pedal como muleta.",
          "Estude em mf com timbre redondo e clareza. Quando o mf é ‘caro’, o forte aparece como expansão e não como grito.",
        ],
      },
    ],
  },

  "cmin-brahms-bridge": {
    summary: [
      "Ponte: Brahms (rapsódias/intermezzi — seleção) como escola de densidade íntima: drama por vozes internas.",
      "Em C menor, isso é antídoto contra ‘muro de som’: você aprende relevo (quem fala agora?) sem depender de volume.",
    ],
    sections: [
      {
        title: "Brahms como ‘Bach com sangue’ (por que isso melhora sua clareza)",
        paragraphs: [
          "Brahms frequentemente escreve com condução de vozes muito consciente: linhas internas têm função real. Se você toca como ‘acordes bonitos’, a música vira massa.",
          "Como ponte para C menor, o objetivo é simples: aprender a sustentar gravidade com hierarquia. Isso limpa imediatamente o som beethoveniano e chopiniano em tons escuros.",
        ],
      },
      {
        title: "Como estudar como competência (8–16 compassos, 3 camadas)",
        paragraphs: [
          "Faça um mapa: (1) voz principal (nem sempre a mais aguda), (2) voz interna significativa, (3) baixo/coluna. Depois toque mantendo isso, mesmo quando a textura engrossa.",
          "Pedal aqui é lente: trocas por harmonia e aceitação de pequenos silêncios. Se você cola tudo, perde legibilidade — e a emoção brahmsiana desaparece.",
        ],
      },
    ],
  },

  "cmin-transposition": {
    summary: [
      "Ponte (transposição para dó menor): o exercício que transforma o círculo das quintas em ‘GPS’ — você para de caçar nota e começa a falar função.",
      "Treina leitura intervalar + harmonia: casa vs tensão, cadências como portas e mão guiada por intenção (não por hábito).",
    ],
    sections: [
      {
        title: "O que você está estudando de verdade (não é ‘teoria’)",
        paragraphs: [
          "Transpor é a forma mais direta de desmontar a ‘memória muscular’. Em vez de repetir um gesto decorado, você precisa entender o desenho e a função. Isso melhora leitura, improviso e até memória de repertório.",
          "Em dó menor, o bônus é psicológico: a tonalidade convida a dramatizar. A transposição te obriga a ser lógico e claro — exatamente o antídoto para tocar ‘escuro e borrado’.",
        ],
      },
      {
        title: "Protocolo simples (8–16 compassos) — para não travar",
        paragraphs: [
          "1) Reduza: identifique baixo + linha principal (ou as duas vozes principais). 2) Marque funções (I, V, etc. — ou pelo menos ‘casa’ vs ‘tensão’). 3) Transponha por intervalo (movendo o desenho), não por tecla. 4) Toque lento e cantabile.",
          "Se você trava, normalmente não é falta de dedo: é falta de mapa harmônico. Volte um passo e recupere a função antes de insistir no teclado.",
        ],
      },
      {
        title: "Como saber que funcionou",
        paragraphs: [
          "Sinal 1: você consegue transpor sem parar, mesmo devagar. Sinal 2: você consegue apontar (ouvindo) onde a harmonia ‘fecha’ e ‘reabre’.",
          "Quando isso acontece, o círculo das quintas deixa de ser desenho e vira território praticável.",
        ],
      },
    ],
  },

  "bb-mozart-k333": {
    summary: [
      "Mozart K. 333 (B♭ maior): classicismo ‘de sala’ em alta definição — transparência que não deixa você se esconder.",
      "Treina retórica e higiene: frase que pergunta/responde, camadas hierárquicas e pedal mínimo (brilho educado, não neblina).",
    ],
    sections: [
      {
        title: "B♭ maior: conforto que vira armadilha (e por isso é ótimo)",
        paragraphs: [
          "B♭ maior é uma tonalidade naturalmente redonda no teclado. Isso é perigoso: você pode soar ‘bonito’ sem ser convincente. Mozart não perdoa. A escrita é clara demais para o piloto automático.",
          "O ganho do estudo está em aprender a pontuar sem exagero: cadências como pontos finais, transições como mudança de assunto, e pequenos acentos como consoantes — não como pancadas.",
        ],
      },
      {
        title: "Fraseado e camadas: melodia vocal por cima de engenharia discreta",
        paragraphs: [
          "Pense em 3 planos: (1) melodia (fala), (2) baixo (chão), (3) internas (textura). Se as internas sobem demais, você perde a dicção. Se o baixo pesa, você perde elegância.",
          "Um teste honesto: toque 8–16 compassos com a mão esquerda deliberadamente mais baixa. Se a música ‘some’, é sinal de que você estava apoiando a estrutura no volume em vez da harmonia e do timing.",
        ],
      },
      {
        title: "Pedal: tempero (pouco) e por função",
        paragraphs: [
          "No piano moderno, pedal contínuo transforma Mozart em aquarela. Use pedal curto em chegadas/cadências — e deixe o legato acontecer por dedo + release limpo.",
          "A meta estética é paradoxal: som cheio, mas com borda. Se o som fica ‘lindo’ porém indistinto, você está colando consoantes.",
        ],
      },
    ],
  },

  "bb-beethoven-op22": {
    summary: [
      "Beethoven Op. 22 (B♭ maior): disciplina clássica com energia — forma clara, motor rítmico e acento com função.",
      "Treina ‘convencer sem gritar’: hierarquia, articulação e direção harmônica para o drama não virar volume constante.",
    ],
    sections: [
      {
        title: "O que essa sonata ensina: forma como argumento (e não burocracia)",
        paragraphs: [
          "A Op. 22 é Beethoven mostrando que sabe falar a língua clássica perfeitamente — e que consegue colocar tensão dentro dela. Para estudar trechos, o essencial é deixar o ouvinte entender ‘tema’, ‘ponte’, ‘chegada’ e ‘retorno’.",
          "Em B♭ maior, muita coisa soa confortável. Então a diferença entre uma execução adulta e uma genérica é retórica: pontuação e contraste de intenção, não excesso de forte.",
        ],
      },
      {
        title: "Acento beethoveniano: pontuação (ataque + release), não martelo",
        paragraphs: [
          "Antes de aumentar volume, experimente ‘acento por dicção’: ataque um pouco mais definido e release limpo. Isso faz o compasso ‘falar’ sem brutalizar o timbre.",
          "Se você sente o braço endurecer, você está pagando caro: som metálico + pressa. Volte ao mf redondo e reconstrua energia como direção.",
        ],
      },
      {
        title: "Pedal e clareza: classicismo precisa de ar",
        paragraphs: [
          "Pedal longo apaga vírgulas e pontos. Use pouco e por harmonia. Se você precisa de pedal para ligar, normalmente é legato por dedo + planejamento de mão que falta.",
          "Quando você consegue tocar Beethoven ‘claro’ em B♭, você ganha uma ferramenta que transfere direto para os tons escuros: energia organizada sem virar massa.",
        ],
      },
    ],
  },

  "bb-schubert-d960": {
    summary: [
      "Schubert D. 960 (B♭ maior): tempo interno profundo — a tensão é harmônica e existencial, não ‘barulhenta’.",
      "Treina forma longa por respiração: camadas estáveis, repetição com sentido e coragem de não apressar.",
    ],
    sections: [
      {
        title: "Schubert tardio: sonata como paisagem (não como debate)",
        paragraphs: [
          "Schubert tardio constrói grandeza por espaço: frases longas, repetição que muda de significado e modulações que alteram o clima sem precisar de choque. É um tipo de drama que acontece ‘por baixo’.",
          "Se você toca como Beethoven (acentuando e empurrando), você perde o ponto. Aqui, a pergunta é: você consegue sustentar direção sem aumentar a voz?",
        ],
      },
      {
        title: "Tempo interno: lento precisa ter direção (senão vira sonolência)",
        paragraphs: [
          "A tentação é acelerar por ansiedade (para ‘passar’ pela textura). Isso destrói a gravidade. A outra tentação é frear sem mapa e virar morto. O meio-termo é pulso calmo com microdireção harmônica.",
          "Estratégia prática: marque 3–5 ‘portas’ (cadências/viradas). Faça microcrescimentos para elas e microrelaxamentos depois. O rubato vira consequência do chão mudando.",
        ],
      },
      {
        title: "Camadas + pedal: ‘cheio e claro’ ao mesmo tempo",
        paragraphs: [
          "A mão esquerda é o mundo: regular, quente e discreta. Se ela pesa, o canto perde ar; se ela some, a harmonia perde chão.",
          "No piano moderno, pedal vira cola fácil. Use trocas por harmonia e aceite meio-pedal: ressonância como cor, não como neblina.",
        ],
      },
    ],
  },

  "bb-bach-wtc1-866": {
    summary: [
      "WTC I em B♭ maior (BWV 866): Bach em luz nobre — polifonia legível e cadências como pontuação.",
      "Treina o antídoto do sustain moderno: releases limpos + hierarquia de vozes. ‘Bonito’ sem legibilidade não conta.",
    ],
    sections: [
      {
        title: "O objetivo: fazer o ouvinte seguir personagens",
        paragraphs: [
          "Em Bach, a pergunta é concreta: dá para ouvir quem está falando agora? Se não dá, você está tocando textura, não linguagem.",
          "B♭ maior é confortável e redondo — ótimo para refinar dicção sem lutar com o teclado. A clareza aqui é escolha, não acidente.",
        ],
      },
      {
        title: "Prelúdio vs fuga: harmonia no tempo vs vozes em diálogo",
        paragraphs: [
          "No prelúdio, faça cadências aparecerem como pontos finais. Direção (microcrescer para chegar) e relaxamento ao assentar são sua pontuação.",
          "Na fuga, entradas precisam ser reconhecíveis por articulação e contorno. Você não precisa tocar mais alto — precisa tocar mais claro.",
        ],
      },
      {
        title: "Pedal: curtíssimo (ou nenhum) — ‘cola de sala’, não cola de nota",
        paragraphs: [
          "Se usar pedal, use por sílaba: pequenas cores em chegadas. Pedal contínuo apaga vozes.",
          "Teste honesto: toque 8–12 compassos sem pedal. Se fica confuso, falta articulação e releases.",
        ],
      },
    ],
  },

  "bb-haydn-bb-sonata": {
    summary: [
      "Haydn em B♭ maior (seleção): o inventor do timing — humor e surpresa por pausa, respiração e virada harmônica.",
      "Treina classicismo real: articulação clara, silêncios com intenção e forma que fala sem depender de volume.",
    ],
    sections: [
      {
        title: "Haydn = pontuação (silêncio é técnica)",
        paragraphs: [
          "A graça de Haydn nasce de expectativa: ele prepara, pausa, e muda o chão. Se você cola tudo com pedal ou pressa, a piada morre.",
          "Isso é por que Haydn é base: ele ensina a língua clássica com vírgulas e pontos reais — e isso melhora Mozart e Beethoven imediatamente.",
        ],
      },
      {
        title: "Como estudar seleção (curto e eficiente)",
        paragraphs: [
          "Escolha 8–16 compassos e faça duas leituras: (1) non-legato elegante, quase sem pedal; (2) cantabile com pedal mínimo só em chegadas. O que funciona nas duas é o núcleo do estilo.",
          "Procure onde a harmonia ‘fecha’ e ‘reabre’. Isso organiza rubato e evita aceleração nervosa.",
        ],
      },
    ],
  },

  "bb-beethoven-hammerklavier-bridge": {
    summary: [
      "Ponte: Beethoven Op. 106 (‘Hammerklavier’) em B♭ maior — arquitetura monumental e energia em alta densidade.",
      "Mesmo em trechos curtos, o ganho é estrutural: capítulos, camadas e clareza sob potência (não ‘passagem difícil’ isolada).",
    ],
    sections: [
      {
        title: "Por que isso é ponte (e não obrigação de ‘zerar a obra’)",
        paragraphs: [
          "A Hammerklavier é grande demais para virar tarefa aleatória. Como ponte, ela é laboratório: você escolhe um trecho curto e treina competência transferível — leitura estrutural e hierarquia.",
          "Perguntas-guia: qual é o motivo (DNA)? onde a harmonia vira? o que é estrutura (baixo) e o que é textura (meio)?",
        ],
      },
      {
        title: "Técnica adulta: potência elástica + releases limpos",
        paragraphs: [
          "Som grande aqui não vem de apertar: vem de peso organizado e relaxamento imediato. Se você empurra, vira metal; se você cola com pedal, vira massa.",
          "Treine em mf com clareza. Se o mf é ‘caro’, o forte aparece como expansão. Se o mf já é duro, o forte vira grito.",
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
