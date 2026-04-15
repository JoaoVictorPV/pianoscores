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
