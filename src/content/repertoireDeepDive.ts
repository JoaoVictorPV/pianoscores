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
