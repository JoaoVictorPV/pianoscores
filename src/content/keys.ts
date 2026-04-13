export type KeyMode = "major" | "minor";

export type KeySlug =
  | "c-major"
  | "g-major"
  | "d-major"
  | "a-major"
  | "e-major"
  | "b-major"
  | "a-minor"
  | "e-minor"
  | "b-minor"
  | "fsharp-minor"
  | "csharp-minor"
  | "gsharp-minor";

export type Exercise = {
  id: string;
  title: string;
  subtitle?: string;
  exampleNotes?: string; // e.g. "C D E F G"
  notes: string[];
};

function notes(...xs: string[]) {
  return xs;
}

function scaleNotes(...xs: string[]) {
  // Visual padrão: sempre “A B C# ...” com espaços.
  return xs.join(" ");
}

export type RepertoireLink = {
  label: "YouTube" | "Spotify" | "Apple Music" | "IMSLP";
  url: string;
};

export type RepertoireItem = {
  id: string;
  composer: string;
  title: string;
  level: "iniciante" | "intermediário" | "avançado";
  technicalFocus: string;
  notes: string;
  links: RepertoireLink[];
};

export type KeyContent = {
  slug: KeySlug;
  label: string; // UI label
  mode: KeyMode;
  pitchClass: string; // e.g. D, A
  motto: string;
  estimatedReadingMinutes: number;

  mechanical: {
    title: string;
    intro: string;
    exercises: Exercise[];
  };
  repertoire: {
    title: string;
    intro: string;
    items: RepertoireItem[];
  };
};

function ytSearch(q: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
}
function spotifySearch(q: string) {
  return `https://open.spotify.com/search/${encodeURIComponent(q)}`;
}
function appleSearch(q: string) {
  return `https://music.apple.com/search?term=${encodeURIComponent(q)}`;
}
function imslpSearch(q: string) {
  return `https://imslp.org/index.php?title=Special:Search&search=${encodeURIComponent(q)}`;
}

export const MVP_KEYS: KeyContent[] = [
  {
    slug: "a-major",
    label: "A Maior",
    mode: "major",
    pitchClass: "A",
    motto:
      "Lá Maior é luz com nervo: um brilho que parece simples, mas exige polegar educado e dedos longos ‘morando’ nas teclas pretas sem ansiedade.",
    estimatedReadingMinutes: 18,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "Três sustenidos (F#, C#, G#) deixam claro quem está dirigindo: se a mão ‘manda’ sozinha, você derrapa; se o braço conduz e os dedos só finalizam, tudo fica estável. Em A maior, a técnica-chave é alinhar o gesto com as pretas: dedos longos (2–3–4) pousam nelas com naturalidade e o polegar entra silencioso, sem se espremer pra dentro do teclado.",
      exercises: [
        {
          id: "hanon-1-in-a-major",
          title: "Hanon nº 1 (em A Maior) — transposição",
          subtitle: "mesma ideia, outra geometria (pretas como ‘casa’)",
          notes: [
            "Transpor em A maior é um detox contra ‘memória de dedo’. O cérebro precisa reconhecer intervalos, não hábitos.",
            "Quando aparecer G#, observe se o dedo 3/4 ‘escorrega’ por falta de apoio do braço. Corrija com alinhamento, não com força.",
            "Faça 2 versões: (1) legato completo, (2) non-legato (um ‘respiro’ entre notas). A mão deve ficar igualmente solta em ambas.",
          ],
        },
        {
          id: "hanon-6-in-a-major",
          title: "Hanon nº 6 (em A Maior)",
          subtitle: "4º e 5º dedos com micro-rotação (sem punho dançarino)",
          notes: [
            "Em A maior, o 5º dedo tende a ‘gritar’ ou ‘sumir’. Ambos são controle ruim: procure borda clara com relaxamento imediato.",
            "Pense em rotação mínima do antebraço como um ‘assistente invisível’ para 4 e 5.",
            "Micro-rotina: 20s mf (som cheio), 20s p (controle fino), 20s staccato leve (elasticidade).",
          ],
        },
        {
          id: "scales-a-major",
          title: "Escala de A Maior (mãos separadas → juntas)",
          subtitle: "polegar silencioso + pretas confortáveis",
          exampleNotes: "A B C# D E F# G# A",
          notes: [
            "Regra prática: nas teclas pretas, dedo ‘entra’ mais para dentro do teclado; nas brancas, dedo fica mais na borda. Misture isso sem pânico.",
            "O erro nº 1 é empurrar o polegar para dentro e torcer o punho. Em vez disso, mova o antebraço ligeiramente para a direita/esquerda.",
            "Treine com metrônomo lento e objetivo de som: mesmo timbre em todas as notas, sem degraus nos cruzamentos.",
          ],
        },
        {
          id: "arpeggio-a-major",
          title: "Arpejo de A Maior",
          subtitle: "trajetória do braço + concha estável",
          exampleNotes: "A C# E A | A E C# A",
          notes: [
            "Arpejo bom parece um único gesto. Se soa como ‘três posições coladas’, o braço chegou atrasado.",
            "C# deve ser confortável (dedo longo). Se você tenta tocar C# com ‘dedo curto’ muito na borda, o som fica inseguro.",
          ],
        },
        {
          id: "czerny-599-11-a-major",
          title: "Czerny Op. 599 nº 11 (adapte o padrão para A maior quando fizer sentido)",
          subtitle: "regularidade e pulso estável",
          notes: [
            "A meta é previsibilidade do ataque: mesma intenção em cada repetição.",
            "Se cansar rápido, você está apertando. Técnica é peso bem distribuído + dedos perto da tecla.",
          ],
        },
        {
          id: "broken-chords-a-major",
          title: "Acordes quebrados em A (padrões de acompanhamento)",
          subtitle: "mão esquerda ‘tapete’, mão direita ‘fala’",
          notes: [
            "A mão esquerda bonita é quase invisível: regular, quente, sem bater.",
            "Treine voicing: nota de cima canta, o resto sustenta sem competir.",
          ],
        },
        {
          id: "staccato-a-major",
          title: "Staccato elástico (padrões curtos em A)",
          subtitle: "soltar rápido sem contrair",
          notes: [
            "Staccato é ‘quique’, não martelo. O dedo sai, mas o corpo fica disponível.",
            "Se o som fica agressivo, diminua altura do dedo e aumente clareza do gesto.",
          ],
        },
        {
          id: "voicing-a-major",
          title: "Voz superior destacada (acordes em A) — mini laboratório",
          subtitle: "camadas de volume na mesma mão",
          notes: [
            "Treine 2 níveis: melodia em mf, notas internas em p.",
            "Se a melodia não aparece, você está apertando as notas internas demais.",
          ],
        },
        {
          id: "rhythm-cells-a-major",
          title: "Células rítmicas (longo-curto / curto-longo) em padrões de escala",
          subtitle: "anti-embolação",
          notes: [
            "Ritmo alterado ‘destrava’ coordenação: expõe onde a mão está ‘chutando’ em vez de controlar.",
            "Quando voltar ao ritmo normal, a sensação deve ser de estrada lisa.",
          ],
        },
        {
          id: "reading-a-major",
          title: "Leitura consciente em A maior (1 página lenta)",
          subtitle: "olho à frente, mão calma",
          notes: [
            "Leia 1 compasso à frente. Mão apressa quando o olho chega atrasado.",
            "Faça ‘poucas notas bem feitas’: qualidade > quantidade.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "Curadoria em Lá Maior (10+): peças que pedem brilho elegante, articulação clara e controle de pedal/vozes. Links são por busca (YouTube/Spotify/Apple/IMSLP) para você comparar interpretações.",
      items: [
        {
          id: "mozart-k331",
          composer: "W. A. Mozart",
          title: "Sonata K. 331 (A Maior) — I mov. (Tema e Variações)",
          level: "avançado",
          technicalFocus: "variações de toque, clareza e estilo",
          notes:
            "Ótima pra treinar ‘mesma mão, mil timbres’: cada variação pede uma intenção de ataque diferente.",
          links: [
            { label: "YouTube", url: ytSearch("Mozart K 331 A major theme and variations piano") },
            { label: "Spotify", url: spotifySearch("Mozart K. 331") },
            { label: "Apple Music", url: appleSearch("Mozart K. 331") },
            { label: "IMSLP", url: imslpSearch("K. 331") },
          ],
        },
        {
          id: "beethoven-op2-2",
          composer: "L. v. Beethoven",
          title: "Sonata Op. 2 nº 2 (A Maior) — trechos",
          level: "avançado",
          technicalFocus: "clareza clássica com energia",
          notes:
            "Treina direção formal e acentos ‘inteligentes’: energia sem martelar.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Sonata Op 2 No 2 A major piano") },
            { label: "Spotify", url: spotifySearch("Beethoven Op. 2 No. 2") },
            { label: "Apple Music", url: appleSearch("Beethoven Op. 2 No. 2") },
            { label: "IMSLP", url: imslpSearch("Beethoven Op. 2 No. 2") },
          ],
        },
        {
          id: "schubert-d664",
          composer: "Franz Schubert",
          title: "Sonata D 664 (A Maior) — trechos",
          level: "avançado",
          technicalFocus: "cantabile longo + equilíbrio",
          notes:
            "Schubert em A é aula de frase longa: som bonito sem inflar o volume.",
          links: [
            { label: "YouTube", url: ytSearch("Schubert Sonata D 664 A major piano") },
            { label: "Spotify", url: spotifySearch("Schubert D 664") },
            { label: "Apple Music", url: appleSearch("Schubert D 664") },
            { label: "IMSLP", url: imslpSearch("Schubert D 664") },
          ],
        },
        {
          id: "chopin-prelude-7-a",
          composer: "Frédéric Chopin",
          title: "Prelúdio Op. 28 nº 7 (A Maior) — micro-joia",
          level: "intermediário",
          technicalFocus: "harmonia implícita + voicing",
          notes:
            "Curto e concentrado: cada acorde precisa ‘dizer algo’.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Op 28 No 7 A major piano") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 28 No. 7") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 28 No. 7") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 28") },
          ],
        },
        {
          id: "chopin-polonaise-op40-1",
          composer: "Frédéric Chopin",
          title: "Polonaise Op. 40 nº 1 (A Maior) — ‘Militar’ (trechos)",
          level: "avançado",
          technicalFocus: "ritmo, acentos e resistência",
          notes:
            "Excelente para treinar pulso firme e acentos que ‘andam’ sem virar pancada. Se cansar rápido, você está apertando demais.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Polonaise Op 40 No 1 A major") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 40 No. 1") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 40 No. 1") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 40") },
          ],
        },
        {
          id: "brahms-op118-2",
          composer: "Johannes Brahms",
          title: "Intermezzo Op. 118 nº 2 (A Maior) — canto interno",
          level: "avançado",
          technicalFocus: "voicing e camadas (melodia dentro da textura)",
          notes:
            "A dificuldade é ‘arquitetura emocional’: manter a melodia viva sem esmagar as vozes internas.",
          links: [
            { label: "YouTube", url: ytSearch("Brahms Intermezzo Op 118 No 2 A major piano") },
            { label: "Spotify", url: spotifySearch("Brahms Op. 118 No. 2") },
            { label: "Apple Music", url: appleSearch("Brahms Op. 118 No. 2") },
            { label: "IMSLP", url: imslpSearch("Brahms Op. 118") },
          ],
        },
        {
          id: "mendelssohn-op62-6",
          composer: "Felix Mendelssohn",
          title: "Songs Without Words Op. 62 nº 6 (A Maior) — ‘Spring Song’",
          level: "intermediário",
          technicalFocus: "melodia cantada + acompanhamento leve",
          notes:
            "‘Leve’ aqui não é ‘fraco’: é elástico. Acompanhamento deve sorrir sem empurrar.",
          links: [
            { label: "YouTube", url: ytSearch("Mendelssohn Op 62 No 6 Spring Song A major") },
            { label: "Spotify", url: spotifySearch("Mendelssohn Op. 62 No. 6") },
            { label: "Apple Music", url: appleSearch("Mendelssohn Op. 62 No. 6") },
            { label: "IMSLP", url: imslpSearch("Mendelssohn Op. 62") },
          ],
        },
        {
          id: "bach-wtc2-a",
          composer: "J. S. Bach",
          title: "Prelúdio e Fuga em A Maior (Cravo Bem Temperado, Livro II — BWV 888)",
          level: "avançado",
          technicalFocus: "independência de vozes e clareza",
          notes:
            "Bach em A é uma aula de ‘mãos independentes com cérebro único’. Se borrar, desacelere e clareie articulação.",
          links: [
            { label: "YouTube", url: ytSearch("Bach BWV 888 A major prelude fugue piano") },
            { label: "Spotify", url: spotifySearch("BWV 888") },
            { label: "Apple Music", url: appleSearch("BWV 888") },
            { label: "IMSLP", url: imslpSearch("BWV 888") },
          ],
        },
        {
          id: "scarlatti-k208",
          composer: "Domenico Scarlatti",
          title: "Sonata em A Maior (K. 208/L. 238) — ‘pianismo com sorriso’",
          level: "intermediário",
          technicalFocus: "articulação, clareza e leveza",
          notes:
            "Scarlatti treina precisão sem rigidez: cada nota tem borda, mas o braço continua solto.",
          links: [
            { label: "YouTube", url: ytSearch("Scarlatti Sonata K 208 A major piano") },
            { label: "Spotify", url: spotifySearch("Scarlatti K. 208") },
            { label: "Apple Music", url: appleSearch("Scarlatti K. 208") },
            { label: "IMSLP", url: imslpSearch("Scarlatti K. 208") },
          ],
        },
        {
          id: "beethoven-op101",
          composer: "L. v. Beethoven",
          title: "Sonata Op. 101 (A Maior) — trechos",
          level: "avançado",
          technicalFocus: "texturas, vozes e controle de energia",
          notes:
            "Beethoven tardio: exige maturidade de som. É treino de ‘clareza com densidade’.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Sonata Op 101 A major piano") },
            { label: "Spotify", url: spotifySearch("Beethoven Op. 101") },
            { label: "Apple Music", url: appleSearch("Beethoven Op. 101") },
            { label: "IMSLP", url: imslpSearch("Beethoven Op. 101") },
          ],
        },
      ],
    },
  },

  {
    slug: "e-major",
    label: "E Maior",
    mode: "major",
    pitchClass: "E",
    motto:
      "Mi Maior é claridade com nervo: um brilho elétrico que só fica elegante quando o polegar é silencioso e o braço dirige a geometria das pretas.",
    estimatedReadingMinutes: 19,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "Quatro sustenidos (F#, C#, G#, D#) mudam a ergonomia: a mão naturalmente quer ‘entrar’ mais no teclado. A técnica aqui não é ‘forçar precisão’, e sim construir uma rota confortável: dedos longos pousam nas pretas, o polegar atravessa sem cavar e o punho fica estável (estável ≠ rígido). Em E maior, a beleza vem de brilho redondo — como metal polido, não como lata amassada.",
      exercises: [
        {
          id: "scale-e-major",
          title: "Escala de E Maior (mãos separadas → juntas)",
          subtitle: "D# e G# sem susto; polegar educado",
          exampleNotes: "E F# G# A B C# D# E",
          notes: [
            "Pense em ‘teclas pretas como plataforma’: dedos 2–3–4 entram um pouco mais nelas. Isso estabiliza o som.",
            "O erro clássico: polegar cavando e puxando o punho. Solução: antebraço guia a travessia; o polegar só finaliza.",
            "Treine em p (bem baixo) para revelar degraus de volume. Se ficar ‘liso’ em p, fica liso em mf.",
          ],
        },
        {
          id: "arpeggio-e-major",
          title: "Arpejo de E Maior",
          subtitle: "gesto único, sem degraus",
          exampleNotes: "E G# B E | E B G# E",
          notes: [
            "Arpejo bom parece um arco. Se parece uma escada, o braço está chegando atrasado.",
            "G# é preta: use dedo longo e mantenha a concha. Evite ‘apertar’ para não errar.",
          ],
        },
        {
          id: "hanon-1-in-e-major",
          title: "Hanon nº 1 (em E Maior) — transposição",
          subtitle: "coordenação em 4 sustenidos",
          notes: [
            "Transpor para E maior é um teste de honestidade: se a mão endurece, você estava dependente da geometria de teclas brancas.",
            "Faça lento e com borda nítida (jeu perlé): ataque consistente + relaxamento imediato.",
          ],
        },
        {
          id: "hanon-6-in-e-major",
          title: "Hanon nº 6 (em E Maior)",
          subtitle: "4º e 5º dedos com micro-rotação",
          notes: [
            "Em tonalidades cheias de pretas, o 5º dedo ‘some’ porque a mão muda de formato. Traga ele de volta com micro-rotação.",
            "Se o punho parece dançar, você está rotacionando demais. A rotação é quase invisível.",
          ],
        },
        {
          id: "broken-chords-e-major",
          title: "Acordes quebrados em E (padrões clássicos) + voicing",
          subtitle: "mão esquerda tapete",
          notes: [
            "Treine progressão simples: E–C#m–A–B. O objetivo é fluxo harmônico, não volume.",
            "A mão esquerda deve ser quente e regular. Se ‘late’, reduza altura do dedo.",
            "Faça a nota de cima cantar sem esmagar as internas.",
          ],
        },
        {
          id: "staccato-e-major",
          title: "Staccato elástico em E Maior",
          subtitle: "ataque claro, corpo solto",
          notes: [
            "Staccato bom é quique, não martelo. Se ficar agressivo, você está batendo.",
            "Use altura mínima de dedo e ‘soltar rápido’ com o braço disponível.",
          ],
        },
        {
          id: "voicing-e-major",
          title: "Voicing: melodia em E Maior por cima de acompanhamento",
          subtitle: "camadas de volume",
          notes: [
            "Treine 2 níveis: melodia em mf, acompanhamento em p.",
            "Se a melodia some, abaixe o acompanhamento; não ‘esprema’ a melodia.",
          ],
        },
        {
          id: "rhythm-cells-e-major",
          title: "Células rítmicas (longo-curto/curto-longo) na escala",
          subtitle: "anti-ansiedade",
          notes: [
            "Ritmo alterado é um ‘debugger’ de coordenação: revela onde a mão acelera para se livrar da dificuldade.",
            "Volte ao ritmo normal só quando a sensação estiver estável.",
          ],
        },
        {
          id: "reading-e-major",
          title: "Leitura lenta em E Maior (1 página)",
          subtitle: "olho à frente, mão calma",
          notes: [
            "Escolha algo em E maior e leia devagar, sem parar. Se parar, você treina parar.",
            "Regra: 1 compasso de olho à frente.",
          ],
        },
        {
          id: "micro-routine-e-major",
          title: "Micro-rotina (3 minutos): brilho redondo",
          subtitle: "p → mf → p",
          notes: [
            "1 min: escala em p.",
            "1 min: arpejo em mf (som cheio sem dureza).",
            "1 min: acorde quebrado E–C#m–A–B em p com voicing.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "Curadoria em E Maior (10+). Prioridade: peças em E maior. No máximo 2–3 itens-ponte bem marcados quando a utilidade pedagógica for real.",
      items: [
        {
          id: "bach-wtc1-e",
          composer: "J. S. Bach",
          title: "Cravo Bem Temperado, Livro I: Prelúdio e Fuga em E Maior (BWV 854)",
          level: "avançado",
          technicalFocus: "clareza contrapontística e tempo estável",
          notes:
            "Bach em E maior é um banho de luz: se a textura borra, o brilho vira neblina. Articule com intenção e respire as cadências.",
          links: [
            { label: "YouTube", url: ytSearch("Bach BWV 854 E major prelude fugue piano") },
            { label: "Spotify", url: spotifySearch("BWV 854") },
            { label: "Apple Music", url: appleSearch("BWV 854") },
            { label: "IMSLP", url: imslpSearch("BWV 854") },
          ],
        },
        {
          id: "chopin-op10-3",
          composer: "Frédéric Chopin",
          title: "Estudo Op. 10 nº 3 (E Maior) — canto e saudade (sem peso)",
          level: "avançado",
          technicalFocus: "cantabile + voicing + controle de clímax",
          notes:
            "O desafio real é manter a melodia cantando enquanto a mão ‘trabalha por baixo’. Se apertar, perde o canto.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Etude Op 10 No 3 E major") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 10 No. 3") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 10 No. 3") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 10") },
          ],
        },
        {
          id: "chopin-op28-9",
          composer: "Frédéric Chopin",
          title: "Prelúdio Op. 28 nº 9 (E Maior) — clareza e elegância",
          level: "intermediário",
          technicalFocus: "toque leve e borda nítida",
          notes:
            "Curto e brilhante: perfeito para treinar ‘alegria sem pressa’. O toque precisa ser claro, não apressado.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Prelude Op 28 No 9 E major") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 28 No. 9") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 28 No. 9") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 28") },
          ],
        },
        {
          id: "beethoven-op14-1",
          composer: "L. v. Beethoven",
          title: "Sonata Op. 14 nº 1 (E Maior) — I mov. (trechos)",
          level: "intermediário",
          technicalFocus: "clareza clássica e direção de frase",
          notes:
            "Beethoven aqui exige articulação limpa e energia controlada. Se bater, vira rude; se alisar demais, perde o pulso.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Sonata Op 14 No 1 E major") },
            { label: "Spotify", url: spotifySearch("Beethoven Op. 14 No. 1") },
            { label: "Apple Music", url: appleSearch("Beethoven Op. 14 No. 1") },
            { label: "IMSLP", url: imslpSearch("Beethoven Op. 14 No. 1") },
          ],
        },
        {
          id: "scarlatti-e-major",
          composer: "Domenico Scarlatti",
          title: "Sonata em E Maior (ex.: K. 380 / outras em E) — leveza com precisão",
          level: "intermediário",
          technicalFocus: "articulação e clareza",
          notes:
            "Scarlatti é o professor do ‘rápido sem nervoso’: borda clara, mão solta e pulso vivo.",
          links: [
            { label: "YouTube", url: ytSearch("Scarlatti Sonata E major K 380 piano") },
            { label: "Spotify", url: spotifySearch("Scarlatti Sonata E major") },
            { label: "Apple Music", url: appleSearch("Scarlatti Sonata E major") },
            { label: "IMSLP", url: imslpSearch("Scarlatti sonata E major") },
          ],
        },
        {
          id: "mozart-divertimento-k563-bridge",
          composer: "W. A. Mozart",
          title: "(ponte) Divertimento/obras de câmara com trechos em E maior — treino de fraseado",
          level: "avançado",
          technicalFocus: "fraseado e clareza",
          notes:
            "Item-ponte: quando o repertório solo em E maior não é o que você tem à mão, use trechos em E maior (edições/arranjos) para treinar fraseado como música de câmara.",
          links: [
            { label: "YouTube", url: ytSearch("Mozart E major piano excerpt") },
            { label: "Spotify", url: spotifySearch("Mozart E major") },
            { label: "Apple Music", url: appleSearch("Mozart E major") },
          ],
        },
        {
          id: "rachmaninoff-op23-4",
          composer: "Sergei Rachmaninoff",
          title: "Prelúdio Op. 23 nº 4 (Dó sustenido menor) — (ponte: território de pretas)",
          level: "avançado",
          technicalFocus: "voicing e peso distribuído",
          notes:
            "Item-ponte: embora seja C# menor, trabalha o mesmo ‘mapa de pretas’ do seu dedo/antebraço. Útil para consolidar rota.",
          links: [
            { label: "YouTube", url: ytSearch("Rachmaninoff Prelude Op 23 No 4") },
            { label: "Spotify", url: spotifySearch("Rachmaninoff Op. 23 No. 4") },
            { label: "Apple Music", url: appleSearch("Rachmaninoff Op. 23 No. 4") },
            { label: "IMSLP", url: imslpSearch("Rachmaninoff Op. 23") },
          ],
        },
        {
          id: "mendelssohn-op19b-1-bridge",
          composer: "Felix Mendelssohn",
          title: "(ponte) Songs Without Words (seleção) — brilho e leveza",
          level: "intermediário",
          technicalFocus: "cantabile + acompanhamento disciplinado",
          notes:
            "Item-ponte: treino de ‘melodia que flutua’ com acompanhamento discreto — habilidade essencial para E maior soar elegante.",
          links: [
            { label: "YouTube", url: ytSearch("Mendelssohn Songs Without Words E major") },
            { label: "Spotify", url: spotifySearch("Mendelssohn Songs Without Words") },
            { label: "Apple Music", url: appleSearch("Mendelssohn Songs Without Words") },
            { label: "IMSLP", url: imslpSearch("Songs Without Words") },
          ],
        },
        {
          id: "debussy-bridge",
          composer: "Claude Debussy",
          title: "(ponte) Arabesques (seleção) — leveza com estrutura",
          level: "avançado",
          technicalFocus: "pedal limpo e vozes",
          notes:
            "Item-ponte: não é E maior necessariamente, mas treina o tipo de leveza transparente que faz E maior brilhar sem ficar metálico.",
          links: [
            { label: "YouTube", url: ytSearch("Debussy Arabesque piano") },
            { label: "Spotify", url: spotifySearch("Debussy Arabesque") },
            { label: "Apple Music", url: appleSearch("Debussy Arabesque") },
            { label: "IMSLP", url: imslpSearch("Debussy Arabesque") },
          ],
        },
      ],
    },
  },

  {
    slug: "b-major",
    label: "B Maior",
    mode: "major",
    pitchClass: "B",
    motto:
      "Si Maior é o vitral iluminado: cinco sustenidos, muita tecla preta, e um brilho que só vira ‘luxo’ quando você para de brigar com a mão e começa a guiar a rota.",
    estimatedReadingMinutes: 20,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "B maior (F#, C#, G#, D#, A#) é a tonalidade perfeita para entender uma verdade desconfortável: dedo não dirige. Quem dirige é a rota do antebraço + alinhamento. Se você tenta controlar cada preta com ‘pinça’, cansa e endurece. Se você posiciona a mão ‘por dentro’ com calma, as pretas viram corrimão. Aqui, tudo é sobre: polegar silencioso, concha estável e timbre brilhante sem agressão.",
      exercises: [
        {
          id: "scale-b-major",
          title: "Escala de B Maior (mãos separadas → juntas)",
          subtitle: "A# e D# sem ansiedade",
          exampleNotes: "B C# D# E F# G# A# B",
          notes: [
            "Use dedos longos (2–3–4) nas pretas. Parece óbvio, mas muita gente ‘aperta’ com dedo curto na borda e perde estabilidade.",
            "O polegar entra de lado (sensação de deslize), sem cavar. Se fizer ‘clique’, você está descendo com ângulo ruim.",
            "Treine em p para deixar a escala honesta. Volume alto mascara irregularidade.",
          ],
        },
        {
          id: "arpeggio-b-major",
          title: "Arpejo de B Maior",
          subtitle: "gesto único (sem degraus)",
          exampleNotes: "B D# F# B | B F# D# B",
          notes: [
            "Se o arpejo vira escada, o braço está chegando tarde. Antecipe a posição.",
            "D# e F# (pretas) pedem dedo longo pousado. Evite apertar por medo.",
          ],
        },
        {
          id: "hanon-1-in-b-major",
          title: "Hanon nº 1 (em B Maior) — transposição",
          subtitle: "igualdade de dedos em território de pretas",
          notes: [
            "Hanon aqui vira ‘teste de postura’: se a mão endurece, você está tentando controlar por dedo.",
            "Faça lento e bonito. Técnica feia não vira técnica bonita por milagre.",
          ],
        },
        {
          id: "hanon-6-in-b-major",
          title: "Hanon nº 6 (em B Maior)",
          subtitle: "4º e 5º dedos sem colapso",
          notes: [
            "O 5º dedo tende a ‘sumir’ quando a mão está ocupada com pretas. Traga ele com micro-rotação do antebraço.",
            "Se o punho dança, você exagerou. A rotação é mínima.",
          ],
        },
        {
          id: "broken-chords-b-major",
          title: "Acordes quebrados em B (padrões) + voicing",
          subtitle: "mão esquerda tapete; melodia canta",
          notes: [
            "Progressão prática: B–G#m–E–F#. Treine o fluxo harmônico sem aumentar volume.",
            "Mão esquerda regular e quente. Se bater, reduza altura do dedo e use peso.",
            "Voicing: nota de cima mf, internas p.",
          ],
        },
        {
          id: "staccato-b-major",
          title: "Staccato elástico em B Maior",
          subtitle: "precisão sem agressão",
          notes: [
            "Staccato é quique. Se você ‘bate’, o som fica duro e o corpo trava.",
            "Alvo: borda clara + relaxamento imediato.",
          ],
        },
        {
          id: "voicing-b-major",
          title: "Voicing em B Maior (melodia por cima de acordes)",
          subtitle: "camadas de volume na mesma mão",
          notes: [
            "Não ‘esprema’ a melodia. Abaixe as internas.",
            "Teste rápido: toque tudo p e só a voz superior mf. Se endurecer, você está apertando internas.",
          ],
        },
        {
          id: "rhythm-cells-b-major",
          title: "Células rítmicas na escala de B (longo-curto / curto-longo)",
          subtitle: "debug de coordenação",
          notes: [
            "Isso revela onde você acelera por medo.",
            "Quando voltar ao ritmo normal, a sensação deve ser de estrada lisa.",
          ],
        },
        {
          id: "reading-b-major",
          title: "Leitura lenta em B Maior (1 página)",
          subtitle: "olho à frente",
          notes: [
            "Escolha algo em B maior (ou com muitos sustenidos) e leia sem parar.",
            "Olhar 1 compasso à frente reduz ‘pânico de tecla preta’.",
          ],
        },
        {
          id: "micro-routine-b-major",
          title: "Micro-rotina (3 minutos): vitral brilhante",
          subtitle: "p → mf → p",
          notes: [
            "1 min: escala em p.",
            "1 min: arpejo em mf (cheio, sem dureza).",
            "1 min: acordes quebrados B–G#m–E–F# em p com voicing.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "Curadoria em B Maior (10+). Prioridade para obras em B maior — e, quando for ponte, eu marco como ponte sem vergonha.",
      items: [
        {
          id: "bach-wtc1-b",
          composer: "J. S. Bach",
          title: "Cravo Bem Temperado, Livro I: Prelúdio e Fuga em Si Maior (BWV 868)",
          level: "avançado",
          technicalFocus: "clareza, contraponto e leveza",
          notes:
            "Se você consegue manter isso leve, você domou a ansiedade das pretas. Articule como quem borda.",
          links: [
            { label: "YouTube", url: ytSearch("Bach BWV 868 B major prelude fugue piano") },
            { label: "Spotify", url: spotifySearch("BWV 868") },
            { label: "Apple Music", url: appleSearch("BWV 868") },
            { label: "IMSLP", url: imslpSearch("BWV 868") },
          ],
        },
        {
          id: "chopin-op62-1",
          composer: "Frédéric Chopin",
          title: "Noturno Op. 62 nº 1 (Si Maior) — brilho íntimo",
          level: "avançado",
          technicalFocus: "cantabile + voicing + pedal limpo",
          notes:
            "Noturno ‘late Chopin’: tudo é nuance. Se você tocar pesado, ele some.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Nocturne Op 62 No 1 B major") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 62 No. 1") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 62 No. 1") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 62") },
          ],
        },
        {
          id: "mozart-k570",
          composer: "W. A. Mozart",
          title: "Sonata K. 570 (Si Maior) — trechos",
          level: "avançado",
          technicalFocus: "clareza clássica e articulação",
          notes:
            "Mozart em B maior é uma aula de elegância: tudo precisa soar inevitável.",
          links: [
            { label: "YouTube", url: ytSearch("Mozart Sonata K 570 B major piano") },
            { label: "Spotify", url: spotifySearch("Mozart K. 570") },
            { label: "Apple Music", url: appleSearch("Mozart K. 570") },
            { label: "IMSLP", url: imslpSearch("K. 570") },
          ],
        },
        {
          id: "beethoven-op22-bridge",
          composer: "L. v. Beethoven",
          title: "(ponte) Sonata Op. 22 (B♭ Maior) — disciplina clássica",
          level: "avançado",
          technicalFocus: "estrutura e articulação",
          notes:
            "Item-ponte: não é B maior, mas treina disciplina clássica e fraseado. Volte pra B maior com a mesma coluna vertebral.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Sonata Op 22 piano") },
            { label: "Spotify", url: spotifySearch("Beethoven Op. 22") },
            { label: "Apple Music", url: appleSearch("Beethoven Op. 22") },
            { label: "IMSLP", url: imslpSearch("Beethoven Op. 22") },
          ],
        },
        {
          id: "schumann-op82-bridge",
          composer: "Robert Schumann",
          title: "(ponte) Waldszenen Op. 82 (seleção) — cor e camadas",
          level: "avançado",
          technicalFocus: "voicing e narrativa",
          notes:
            "Item-ponte: treina cor e camadas sem ‘virar lama’ — útil para manter B maior transparente.",
          links: [
            { label: "YouTube", url: ytSearch("Schumann Waldszenen piano") },
            { label: "Spotify", url: spotifySearch("Schumann Waldszenen") },
            { label: "Apple Music", url: appleSearch("Schumann Waldszenen") },
            { label: "IMSLP", url: imslpSearch("Waldszenen") },
          ],
        },
        {
          id: "debussy-lisle-joyeuse-bridge",
          composer: "Claude Debussy",
          title: "(ponte) L'isle joyeuse (A maior) — brilho e controle",
          level: "avançado",
          technicalFocus: "brilho sem agressão + pedal limpo",
          notes:
            "Item-ponte: treino de brilho sofisticado. O objetivo é som polido, não volume.",
          links: [
            { label: "YouTube", url: ytSearch("Debussy L'isle joyeuse piano") },
            { label: "Spotify", url: spotifySearch("Debussy L'isle joyeuse") },
            { label: "Apple Music", url: appleSearch("Debussy L'isle joyeuse") },
            { label: "IMSLP", url: imslpSearch("L'isle joyeuse") },
          ],
        },
        {
          id: "bridge-scriabin-op11-bridge",
          composer: "Alexander Scriabin",
          title: "(ponte) Prelúdios Op. 11 (seleção) — harmonia e cor",
          level: "avançado",
          technicalFocus: "harmonia e voicing",
          notes:
            "Item-ponte: Scriabin te obriga a ouvir função harmônica. Isso faz B maior soar com ‘luz’ e não só com ‘nota certa’.",
          links: [
            { label: "YouTube", url: ytSearch("Scriabin Op 11 preludes piano") },
            { label: "Spotify", url: spotifySearch("Scriabin Op. 11") },
            { label: "Apple Music", url: appleSearch("Scriabin Op. 11") },
            { label: "IMSLP", url: imslpSearch("Scriabin Op. 11") },
          ],
        },
        {
          id: "bridge-brahms-op118",
          composer: "Johannes Brahms",
          title: "(ponte) Intermezzi Op. 118/119 (seleção) — camadas",
          level: "avançado",
          technicalFocus: "voicing e textura",
          notes:
            "Item-ponte: Brahms é academia de camadas. Ajuda a manter B maior ‘de vidro’, não ‘de pedra’.",
          links: [
            { label: "YouTube", url: ytSearch("Brahms Op 118 piano") },
            { label: "Spotify", url: spotifySearch("Brahms Op. 118") },
            { label: "Apple Music", url: appleSearch("Brahms Op. 118") },
            { label: "IMSLP", url: imslpSearch("Brahms Op. 118") },
          ],
        },
        {
          id: "bridge-mendelssohn-sww",
          composer: "Felix Mendelssohn",
          title: "(ponte) Songs Without Words (seleção) — leveza com coluna",
          level: "intermediário",
          technicalFocus: "cantabile e acompanhamento disciplinado",
          notes:
            "Item-ponte: treino de ‘leveza firme’, perfeito para não deixar B maior virar ‘escorregadio’.",
          links: [
            { label: "YouTube", url: ytSearch("Mendelssohn Songs Without Words piano") },
            { label: "Spotify", url: spotifySearch("Mendelssohn Songs Without Words") },
            { label: "Apple Music", url: appleSearch("Mendelssohn Songs Without Words") },
            { label: "IMSLP", url: imslpSearch("Songs Without Words") },
          ],
        },
      ],
    },
  },

  {
    slug: "gsharp-minor",
    label: "G♯ menor",
    mode: "minor",
    pitchClass: "G♯",
    motto:
      "Sol sustenido menor é drama em câmera lenta: seis sustenidos, muito ‘território de pretas’ e um convite enorme ao excesso. A meta aqui é profundidade sem lama.",
    estimatedReadingMinutes: 22,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "G♯ menor é uma tonalidade que dá vontade de tocar ‘com cara de filme’. Só que o piano pune teatro sem técnica: vira peso, vira dureza, vira borrão. O segredo aqui é ergonomia + camadas. Com cinco sustenidos na relativa maior (B maior) e seis na harmônica/melódica dependendo do caminho, a mão precisa aceitar que as pretas são a casa — e que o polegar não é inimigo. Técnica principal: rota do antebraço, dedos perto, concha estável e voicing cirúrgico.",
      exercises: [
        {
          id: "scale-gsharp-minor-natural",
          title: "Escala de G♯ menor (natural)",
          subtitle: "pretas como plataforma",
          exampleNotes: "G# A# B C# D# E F# G#",
          notes: [
            "A# e D# são pretas: use dedos longos e entre um pouco no teclado — isso dá estabilidade.",
            "Se o som muda ‘de cor’ quando você pisa numa preta, seu gesto mudou. Uniformize.",
            "Treine em p. Quem controla pianíssimo controla tudo.",
          ],
        },
        {
          id: "scale-gsharp-minor-harmonic",
          title: "Escala de G♯ menor (harmônica)",
          subtitle: "F## (sim, F duplo sustenido) sem susto",
          exampleNotes: "G# A# B C# D# E F## G#",
          notes: [
            "F## é a tecla do G natural, mas a função harmônica é outra. Entender isso melhora leitura e consciência tonal.",
            "O salto E → F## é onde a mão denuncia ansiedade. Antecipe a rota do braço.",
            "Use ritmos longo-curto/curto-longo para estabilizar.",
          ],
        },
        {
          id: "scale-gsharp-minor-melodic",
          title: "Escala de G♯ menor (melódica)",
          subtitle: "subindo com E# e F##; descendo natural",
          exampleNotes: "Subindo: G# A# B C# D# E# F## G# | Descendo: G# F# E D# C# B A# G#",
          notes: [
            "Você não ‘decora’ acidentes: você entende direção de frase.",
            "Na descida, mantenha clareza. Modo menor não é desculpa pra ficar nebuloso.",
          ],
        },
        {
          id: "arpeggio-gsharp-minor",
          title: "Arpejo de G♯ menor",
          subtitle: "gesto único + concha firme",
          exampleNotes: "G# B D# G# | G# D# B G#",
          notes: [
            "Se o arpejo vira escada, o braço chegou tarde. O braço viaja antes do dedo.",
            "D# é preta: dedo longo, som redondo, sem apertar.",
          ],
        },
        {
          id: "hanon-1-in-gsharp-minor",
          title: "Hanon nº 1 (em G♯ menor) — transposição",
          subtitle: "coordenação sem ‘pânico de pretas’",
          notes: [
            "Faça lento e bonito. A meta é borda clara + relaxamento imediato.",
            "Se o polegar cava, diminua a velocidade e ajuste ângulo/rota do antebraço.",
          ],
        },
        {
          id: "hanon-6-in-gsharp-minor",
          title: "Hanon nº 6 (em G♯ menor)",
          subtitle: "4º e 5º dedos com micro-rotação",
          notes: [
            "Micro-rotação do antebraço ajuda 4 e 5 sem travar a mão.",
            "Se a mão ‘queima’, pare: isso é sinal de estratégia ruim, não de progresso.",
          ],
        },
        {
          id: "broken-chords-gsharp-minor",
          title: "Acordes quebrados em G♯ menor (i–VI–III–VII)",
          subtitle: "harmonia andando + voicing",
          notes: [
            "Progressão típica: G#m–E–B–F#. Treine como respiração: sem picos.",
            "Faça voicing: voz superior mf, internas p.",
            "O objetivo é ‘profundidade organizada’: ouvir camadas sem ficar pesado.",
          ],
        },
        {
          id: "voicing-gsharp-minor",
          title: "Voicing em G♯ menor (melodia interna e externa)",
          subtitle: "relevo dentro da textura",
          notes: [
            "Treine melodia no meio do acorde. Isso te dá controle real de camadas.",
            "Grave 30s e verifique: a melodia aparece sem a mão endurecer?",
          ],
        },
        {
          id: "staccato-gsharp-minor",
          title: "Staccato elástico em G♯ menor",
          subtitle: "clareza sem agressão",
          notes: [
            "Staccato bom é quique. Se parecer martelo, você está batendo.",
            "A regra: ataque claro e relaxamento imediato.",
          ],
        },
        {
          id: "micro-routine-gsharp-minor",
          title: "Micro-rotina (3 minutos): profundo sem lama",
          subtitle: "p → mf → p",
          notes: [
            "1 min: escala natural em p.",
            "1 min: arpejo em mf (som cheio e redondo).",
            "1 min: acordes quebrados G#m–E–B–F# em p com voicing.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "Curadoria em G♯ menor (10+). Prioridade: obras em G# menor; poucos itens-ponte quando a utilidade técnica for óbvia.",
      items: [
        {
          id: "rachmaninoff-op32-12",
          composer: "Sergei Rachmaninoff",
          title: "Prelúdio Op. 32 nº 12 (G♯ menor) — arquitetura e sombra",
          level: "avançado",
          technicalFocus: "camadas, resistência e direção",
          notes:
            "Excelente para treinar densidade organizada: som grande sem esmagar, vozes claras e energia que não vira pancada.",
          links: [
            { label: "YouTube", url: ytSearch("Rachmaninoff Prelude Op 32 No 12 G sharp minor") },
            { label: "Spotify", url: spotifySearch("Rachmaninoff Op. 32 No. 12") },
            { label: "Apple Music", url: appleSearch("Rachmaninoff Op. 32 No. 12") },
            { label: "IMSLP", url: imslpSearch("Rachmaninoff Op. 32") },
          ],
        },
        {
          id: "scriabin-op8-9",
          composer: "Alexander Scriabin",
          title: "Estudo Op. 8 nº 9 (G♯ menor) — tensão elástica",
          level: "avançado",
          technicalFocus: "toque profundo + coordenação",
          notes:
            "Scriabin aqui pede controle de tensão sem rigidez. Se endurecer, o perfume harmônico some.",
          links: [
            { label: "YouTube", url: ytSearch("Scriabin Etude Op 8 No 9 G sharp minor") },
            { label: "Spotify", url: spotifySearch("Scriabin Op. 8 No. 9") },
            { label: "Apple Music", url: appleSearch("Scriabin Op. 8 No. 9") },
            { label: "IMSLP", url: imslpSearch("Scriabin Op. 8") },
          ],
        },
        {
          id: "bach-wtc1-gsharp-minor",
          composer: "J. S. Bach",
          title: "(ponte) WTC (livros I/II): procure prelúdio/fuga em G# menor (ou enarmônico A♭ menor) — laboratório de clareza",
          level: "avançado",
          technicalFocus: "clareza e contraponto",
          notes:
            "Item-ponte porque é raro em G# menor nas edições mais tocadas: se você encontrar uma versão/edição, use como detergente de textura.",
          links: [
            { label: "YouTube", url: ytSearch("Bach G sharp minor prelude fugue") },
            { label: "Spotify", url: spotifySearch("Bach G sharp minor") },
          ],
        },
        {
          id: "chopin-op48-2-bridge",
          composer: "Frédéric Chopin",
          title: "(ponte) Noturno Op. 48 nº 2 (F♯ menor) — controle de clímax",
          level: "avançado",
          technicalFocus: "crescer sem bater",
          notes:
            "Item-ponte: mesma vizinhança técnica (pretas + drama). Treine clímax disciplinado e volte para G# menor com mais controle.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Nocturne Op 48 No 2 F sharp minor") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 48 No. 2") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 48 No. 2") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 48") },
          ],
        },
        {
          id: "beethoven-op27-2-bridge",
          composer: "L. v. Beethoven",
          title: "(ponte) Sonata Op. 27 nº 2 (C♯ menor) — textura e pedal",
          level: "intermediário",
          technicalFocus: "neblina controlada",
          notes:
            "Item-ponte: treina a arte de não borrar. G# menor também precisa disso: sombra com contorno.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Moonlight Sonata Op 27 No 2") },
            { label: "Spotify", url: spotifySearch("Beethoven Op. 27 No. 2") },
            { label: "Apple Music", url: appleSearch("Beethoven Op. 27 No. 2") },
            { label: "IMSLP", url: imslpSearch("Beethoven Op. 27 No. 2") },
          ],
        },
        {
          id: "rachmaninoff-op23-4-bridge",
          composer: "Sergei Rachmaninoff",
          title: "(ponte) Prelúdio Op. 23 nº 4 (Dó# menor) — camadas em território de pretas",
          level: "avançado",
          technicalFocus: "voicing e peso distribuído",
          notes:
            "Item-ponte: mesma geografia de mão/antebraço. Excelente para treinar camadas sem travar.",
          links: [
            { label: "YouTube", url: ytSearch("Rachmaninoff Prelude Op 23 No 4") },
            { label: "Spotify", url: spotifySearch("Rachmaninoff Op. 23 No. 4") },
            { label: "Apple Music", url: appleSearch("Rachmaninoff Op. 23 No. 4") },
            { label: "IMSLP", url: imslpSearch("Rachmaninoff Op. 23") },
          ],
        },
        {
          id: "bridge-debussy",
          composer: "Claude Debussy",
          title: "(ponte) Estampes / Prelúdios (seleção) — cor sem borrão",
          level: "avançado",
          technicalFocus: "pedal limpo e transparência",
          notes:
            "Item-ponte: treino de transparência. G# menor agradece quando você aprende a ‘sombrear’ sem cobrir o desenho.",
          links: [
            { label: "YouTube", url: ytSearch("Debussy preludes piano") },
            { label: "Spotify", url: spotifySearch("Debussy Preludes") },
            { label: "Apple Music", url: appleSearch("Debussy Preludes") },
            { label: "IMSLP", url: imslpSearch("Debussy Preludes") },
          ],
        },
        {
          id: "bridge-brahms",
          composer: "Johannes Brahms",
          title: "(ponte) Intermezzi Op. 118/119 (seleção) — densidade íntima",
          level: "avançado",
          technicalFocus: "camadas e som profundo",
          notes:
            "Item-ponte: Brahms ensina a tocar ‘por dentro’, com camadas. Essencial para G# menor não virar ‘massa’.",
          links: [
            { label: "YouTube", url: ytSearch("Brahms Intermezzo piano") },
            { label: "Spotify", url: spotifySearch("Brahms Intermezzo") },
            { label: "Apple Music", url: appleSearch("Brahms Intermezzo") },
            { label: "IMSLP", url: imslpSearch("Brahms Intermezzo") },
          ],
        },
        {
          id: "bridge-schumann",
          composer: "Robert Schumann",
          title: "(ponte) Kreisleriana Op. 16 (seleção) — turbulência organizada",
          level: "avançado",
          technicalFocus: "energia e vozes internas",
          notes:
            "Item-ponte: ótimo para treinar turbulência sem perder vozes. Volte para G# menor com mais ‘controle de caos’.",
          links: [
            { label: "YouTube", url: ytSearch("Schumann Kreisleriana piano") },
            { label: "Spotify", url: spotifySearch("Schumann Kreisleriana") },
            { label: "Apple Music", url: appleSearch("Schumann Kreisleriana") },
            { label: "IMSLP", url: imslpSearch("Kreisleriana") },
          ],
        },
      ],
    },
  },

  {
    slug: "csharp-minor",
    label: "C♯ menor",
    mode: "minor",
    pitchClass: "C♯",
    motto:
      "Dó sustenido menor é a câmera escura do piano: quanto mais você tenta ‘forçar emoção’, mais ela foge. Aqui a regra é: estrutura primeiro, drama depois.",
    estimatedReadingMinutes: 21,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "C♯ menor vive cercada de teclas pretas e pede mão ‘por dentro’. Isso seduz a rigidez: o corpo tenta segurar tudo para não errar. O caminho adulto é o oposto: rota clara do antebraço, dedos perto da tecla, polegar silencioso e controle de camadas (voicing). É o lugar perfeito para treinar som profundo sem esmagar o teclado.",
      exercises: [
        {
          id: "scale-csharp-minor-natural",
          title: "Escala de C♯ menor (natural)",
          subtitle: "pretas confortáveis, polegar civilizado",
          exampleNotes: "C# D# E F# G# A B C#",
          notes: [
            "Use dedos longos nas pretas e evite ‘puxar’ o polegar pra dentro.",
            "Treine em p e ouça se o timbre muda quando você pisa numa preta. Não deveria mudar por acidente.",
          ],
        },
        {
          id: "scale-csharp-minor-harmonic",
          title: "Escala de C♯ menor (harmônica)",
          subtitle: "B# (sim, B#) sem susto",
          exampleNotes: "C# D# E F# G# A B# C#",
          notes: [
            "B# é a mesma tecla do C natural, mas entender função melhora leitura e afinação mental.",
            "Treine em ritmos longos-curtos para estabilizar o salto antes da tônica.",
          ],
        },
        {
          id: "arpeggio-csharp-minor",
          title: "Arpejo de C♯ menor",
          subtitle: "gesto único",
          exampleNotes: "C# E G# C# | C# G# E C#",
          notes: [
            "Se o som quebra no cruzamento, o braço chegou atrasado.",
            "Mantenha a concha: dedos mudam, a mão não desaba.",
          ],
        },
        {
          id: "hanon-1-in-csharp-minor",
          title: "Hanon nº 1 (em C♯ menor) — transposição",
          subtitle: "coordenação em território de pretas",
          notes: [
            "Faça lento, com borda clara. Técnica aqui é ‘controle de nervos’.",
            "Se a mão endurece, reduza amplitude e aproxime os dedos das teclas.",
          ],
        },
        {
          id: "hanon-6-in-csharp-minor",
          title: "Hanon nº 6 (em C♯ menor)",
          subtitle: "4º e 5º dedos sem colapso",
          notes: [
            "Micro-rotação do antebraço ajuda a estabilizar 4 e 5.",
            "Curto e bem feito: 2–3 min.",
          ],
        },
        {
          id: "broken-chords-csharp-minor",
          title: "Acordes quebrados em C♯ menor (i–VI–III–VII)",
          subtitle: "harmonia andando",
          notes: [
            "Progressão típica: C#m–A–E–B. Treine como respiração: sem picos, sem peso.",
            "Trabalhe voicing: a nota de cima canta, as internas sustentam.",
          ],
        },
        {
          id: "voicing-csharp-minor",
          title: "Voicing e camadas em C♯ menor",
          subtitle: "melodia interna",
          notes: [
            "Treine tocar melodia no meio do acorde. Se tudo soa igual, você perdeu o relevo.",
            "Grave 20 segundos: o microfone é um professor cruel e justo.",
          ],
        },
        {
          id: "staccato-csharp-minor",
          title: "Staccato elástico (controle de ataque) em C♯ menor",
          subtitle: "clareza sem agressão",
          notes: [
            "Staccato bom é curto e leve. Se ficar duro, volte ao non-legato.",
          ],
        },
        {
          id: "rhythm-cells-csharp-minor",
          title: "Células rítmicas na escala (anti-ansiedade)",
          subtitle: "debug de coordenação",
          notes: [
            "Longo-curto/curto-longo revela onde a mão acelera para escapar.",
          ],
        },
        {
          id: "micro-routine-csharp-minor",
          title: "Micro-rotina (3 minutos): profundo sem esmagar",
          subtitle: "p → mf → p",
          notes: [
            "1 min: escala natural em p.",
            "1 min: arpejo em mf com gesto único.",
            "1 min: acordes quebrados C#m–A–E–B em p com voicing.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "Curadoria em C♯ menor (10+). Prioridade para obras em C# menor; poucos itens-ponte bem marcados.",
      items: [
        {
          id: "beethoven-op27-2",
          composer: "L. v. Beethoven",
          title: "Sonata Op. 27 nº 2 ‘Ao Luar’ (C♯ menor) — I mov. (e além, se quiser)",
          level: "intermediário",
          technicalFocus: "controle de textura + pedal inteligente",
          notes:
            "O perigo é usar pedal como cobertor. A meta é ‘neblina controlada’: harmonia clara, melodia presente, baixo não agressivo.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Moonlight Sonata Op 27 No 2 C sharp minor") },
            { label: "Spotify", url: spotifySearch("Beethoven Op. 27 No. 2") },
            { label: "Apple Music", url: appleSearch("Beethoven Op. 27 No. 2") },
            { label: "IMSLP", url: imslpSearch("Beethoven Op. 27 No. 2") },
          ],
        },
        {
          id: "chopin-op27-1",
          composer: "Frédéric Chopin",
          title: "Noturno Op. 27 nº 1 (C♯ menor) — cantabile e arquitetura",
          level: "avançado",
          technicalFocus: "voicing + rubato disciplinado",
          notes:
            "Rubato aqui é respiração, não derretimento. A mão esquerda segura o chão.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Nocturne Op 27 No 1 C sharp minor") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 27 No. 1") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 27 No. 1") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 27") },
          ],
        },
        {
          id: "rachmaninoff-op3-2",
          composer: "Sergei Rachmaninoff",
          title: "Prelúdio Op. 3 nº 2 (C♯ menor) — peso sem dureza",
          level: "avançado",
          technicalFocus: "camadas e sonoridade profunda",
          notes:
            "Se a mão travar, você perdeu a distribuição de peso. É som grande com corpo solto.",
          links: [
            { label: "YouTube", url: ytSearch("Rachmaninoff Prelude Op 3 No 2 C sharp minor") },
            { label: "Spotify", url: spotifySearch("Rachmaninoff Op. 3 No. 2") },
            { label: "Apple Music", url: appleSearch("Rachmaninoff Op. 3 No. 2") },
            { label: "IMSLP", url: imslpSearch("Rachmaninoff Op. 3") },
          ],
        },
        {
          id: "bach-wtc1-csharp-minor",
          composer: "J. S. Bach",
          title: "Cravo Bem Temperado, Livro I: Prelúdio e Fuga em C♯ menor (BWV 849)",
          level: "avançado",
          technicalFocus: "clareza e contraponto",
          notes:
            "Bach é o detergente da mão: remove excesso. Se borrar, desacelere e defina articulação.",
          links: [
            { label: "YouTube", url: ytSearch("Bach BWV 849 C sharp minor prelude fugue piano") },
            { label: "Spotify", url: spotifySearch("BWV 849") },
            { label: "Apple Music", url: appleSearch("BWV 849") },
            { label: "IMSLP", url: imslpSearch("BWV 849") },
          ],
        },
        {
          id: "chopin-op39",
          composer: "Frédéric Chopin",
          title: "Scherzo nº 3 Op. 39 (C♯ menor) — trechos",
          level: "avançado",
          technicalFocus: "clareza em alta energia",
          notes:
            "Treina ‘energia organizada’. Se virar pancada, a arquitetura cai.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Scherzo No 3 Op 39 C sharp minor") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 39") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 39") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 39") },
          ],
        },
        {
          id: "scriabin-op2-1",
          composer: "Alexander Scriabin",
          title: "Estudo Op. 2 nº 1 (C♯ menor) — lirismo tenso",
          level: "avançado",
          technicalFocus: "melodia + harmonia + controle de clímax",
          notes:
            "Scriabin treina delicadeza com tensão. Se apertar, perde o perfume harmônico.",
          links: [
            { label: "YouTube", url: ytSearch("Scriabin Etude Op 2 No 1 C sharp minor") },
            { label: "Spotify", url: spotifySearch("Scriabin Op. 2 No. 1") },
            { label: "Apple Music", url: appleSearch("Scriabin Op. 2 No. 1") },
            { label: "IMSLP", url: imslpSearch("Scriabin Op. 2") },
          ],
        },
        {
          id: "bridge-chopin-op10-4",
          composer: "Frédéric Chopin",
          title: "(ponte) Estudo Op. 10 nº 4 (C# menor?) — ponte de agilidade",
          level: "avançado",
          technicalFocus: "agilidade e clareza",
          notes:
            "Item-ponte: use um estudo de agilidade em território de pretas para consolidar rota e relaxamento; volte para C# menor com mais controle.",
          links: [{ label: "YouTube", url: ytSearch("Chopin Etude territory black keys") }],
        },
        {
          id: "bridge-debussy",
          composer: "Claude Debussy",
          title: "(ponte) Clair de Lune — controle de pedal e camadas",
          level: "avançado",
          technicalFocus: "pedal limpo e voicing",
          notes:
            "Item-ponte: treina transparência e camadas. Excelente para evitar que C# menor vire ‘lama sonora’.",
          links: [{ label: "YouTube", url: ytSearch("Debussy Clair de Lune piano") }],
        },
        {
          id: "bridge-brahms",
          composer: "Johannes Brahms",
          title: "(ponte) Intermezzi (seleção) — densidade íntima",
          level: "avançado",
          technicalFocus: "camadas e som profundo",
          notes:
            "Item-ponte: Brahms ensina a tocar ‘por dentro’. Útil para o tipo de profundidade que C# menor pede.",
          links: [{ label: "YouTube", url: ytSearch("Brahms Intermezzo piano") }],
        },
      ],
    },
  },

  {
    slug: "e-minor",
    label: "E menor",
    mode: "minor",
    pitchClass: "E",
    motto:
      "Mi menor é sombra com bússola: o drama existe, mas quem manda é o pulso. Aqui você aprende a ser expressivo sem ficar pesado.",
    estimatedReadingMinutes: 18,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "E menor tem um sustenido (F#). Parece pouco, mas é o suficiente pra revelar vícios: polegar barulhento, punho que torce pra ‘achar’ teclas pretas e a tendência de confundir ‘triste’ com ‘pesado’. O objetivo é construir um som escuro e denso com um corpo solto. Tensão emocional na música, zero tensão inútil no gesto.",
      exercises: [
        {
          id: "scale-e-minor-natural",
          title: "Escala de E menor (natural)",
          subtitle: "legato real + direção de frase",
          exampleNotes: "E F# G A B C D E",
          notes: [
            "Trate a escala como frase musical: começo (tensão) → meio (cresce) → topo (pico) → volta (resolução).",
            "O F# é o ‘teste de civilidade’: se ele sai mais duro/alto, você está mudando o gesto nas pretas. Uniformize.",
            "Toque 2 oitavas em p. Se ficar irregular, você estava se escondendo no volume.",
          ],
        },
        {
          id: "scale-e-minor-harmonic",
          title: "Escala de E menor (harmônica)",
          subtitle: "D# como pivô sem tropeçar",
          exampleNotes: "E F# G A B C D# E",
          notes: [
            "O intervalo ‘estranho’ é onde a mão denuncia rigidez. Antecipe a posição: o braço viaja antes do dedo.",
            "Use ritmos longo-curto e curto-longo. Coordenação melhora quando o cérebro para de escapar no automático.",
            "Se o D# sai como susto, você está chegando atrasado — é rota, não força.",
          ],
        },
        {
          id: "scale-e-minor-melodic",
          title: "Escala de E menor (melódica)",
          subtitle: "subida/descida com intenção (não regra cega)",
          exampleNotes: "Subindo: E F# G A B C# D# E | Descendo: E D C B A G F# E",
          notes: [
            "Você ‘escolhe’ as alterações pra dar direção, não pra obedecer fórmula.",
            "Na descida, não relaxe demais: clareza também precisa de controle.",
          ],
        },
        {
          id: "arpeggio-e-minor",
          title: "Arpejo de E menor",
          subtitle: "gesto único + concha firme",
          exampleNotes: "E G B E | E B G E",
          notes: [
            "Arpejo bom é trajetória do braço com dedos perto da tecla.",
            "Se o som ‘quebra’ no polegar, o braço chegou atrasado. Dê o volante pro antebraço.",
          ],
        },
        {
          id: "hanon-1-in-e-minor",
          title: "Hanon nº 1 (em E menor) — transposição",
          subtitle: "intervalos, não hábitos",
          notes: [
            "Faça lento e bonito. Hanon feio ensina feiura — técnica é estética aplicada.",
            "Se 4 e 5 endurecem, use micro-rotação do antebraço (quase invisível) em vez de levantar dedo como garra.",
          ],
        },
        {
          id: "czerny-599-8-e-minor",
          title: "Czerny Op. 599 nº 8 (trechos em E menor)",
          subtitle: "fluxo de mão + olho à frente",
          notes: [
            "O estudo treina fluxo. Se você para sempre, você treina parar.",
            "Leia 1 compasso à frente. Mão apressa quando o olho chega atrasado.",
          ],
        },
        {
          id: "broken-chords-e-minor",
          title: "Acordes quebrados em E menor",
          subtitle: "mão esquerda tapete (sem picos)",
          notes: [
            "Acompanhamento bonito é invisível: regular, quente e sem bater.",
            "Toque o baixo como contrabaixo: presente, mas não mandão.",
            "Treine voicing: a voz de cima canta, o resto sustenta.",
          ],
        },
        {
          id: "voicing-e-minor",
          title: "Voz superior em acordes (E menor) — laboratório",
          subtitle: "camadas de volume na mesma mão",
          notes: [
            "Faça a melodia falar sem gritar. Se precisar gritar, o resto está alto demais.",
            "Teste: tudo p e só a voz superior mf. Se endurecer, você está apertando internas.",
          ],
        },
        {
          id: "staccato-e-minor",
          title: "Staccato elástico (2 notas alternadas) em E menor",
          subtitle: "soltar rápido sem contrair",
          notes: [
            "Staccato bom é quique, não martelo.",
            "Se ficar agressivo, reduza altura do dedo e aumente a clareza do gesto.",
          ],
        },
        {
          id: "micro-routine-e-minor",
          title: "Micro-rotina (3 minutos): som escuro sem peso",
          subtitle: "p → mf → p sem mudar gesto",
          notes: [
            "1 min: escala natural em p (controle fino).",
            "1 min: arpejo em mf (som cheio, mas redondo).",
            "1 min: volte pra p e confira se o gesto não ‘aperta’ pra compensar.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "Curadoria em E menor (10+). Prioridade: peças realmente em E menor. No máximo alguns itens-ponte (bem marcados) pra conectar linguagem e técnica.",
      items: [
        {
          id: "chopin-op28-4",
          composer: "Frédéric Chopin",
          title: "Prelúdio Op. 28 nº 4 (E menor) — respiração e harmonia",
          level: "intermediário",
          technicalFocus: "voicing, tempo interno e pedal discreto",
          notes:
            "A técnica aqui é psicológica: manter o tempo vivo sem empurrar. Controle de peso no braço, sem afundar teclas.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Prelude Op 28 No 4 E minor piano") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 28 No. 4") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 28 No. 4") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 28") },
          ],
        },
        {
          id: "chopin-op72-1",
          composer: "Frédéric Chopin",
          title: "Noturno Op. 72 nº 1 (E menor) — cantabile com sombra",
          level: "avançado",
          technicalFocus: "melodia cantada + acompanhamento aveludado",
          notes:
            "Treina rubato com disciplina: a mão esquerda é o chão; a direita respira por cima.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Nocturne Op 72 No 1 E minor") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 72 No. 1") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 72 No. 1") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 72") },
          ],
        },
        {
          id: "chopin-op41-2",
          composer: "Frédéric Chopin",
          title: "Mazurca Op. 41 nº 2 (E menor) — dança com acento inteligente",
          level: "avançado",
          technicalFocus: "acento, rubato e caráter",
          notes:
            "Mazurca é ‘fala com sotaque’: acentos deslocados sem perder o pulso. Treina elegância rítmica.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Mazurka Op 41 No 2 E minor") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 41 No. 2") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 41 No. 2") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 41") },
          ],
        },
        {
          id: "bach-bwv855",
          composer: "J. S. Bach",
          title: "Cravo Bem Temperado, Livro I: Prelúdio e Fuga em E menor (BWV 855)",
          level: "avançado",
          technicalFocus: "independência de vozes e clareza",
          notes:
            "Bach ‘limpa’ a mão: se o som vira massa, você perdeu articulação. Excelente para treinar cada voz com propósito.",
          links: [
            { label: "YouTube", url: ytSearch("Bach BWV 855 E minor prelude fugue piano") },
            { label: "Spotify", url: spotifySearch("BWV 855") },
            { label: "Apple Music", url: appleSearch("BWV 855") },
            { label: "IMSLP", url: imslpSearch("BWV 855") },
          ],
        },
        {
          id: "mendelssohn-op35-1",
          composer: "Felix Mendelssohn",
          title: "Prelúdio e Fuga Op. 35 nº 1 (E menor)",
          level: "avançado",
          technicalFocus: "contraponto romântico + controle de textura",
          notes:
            "Ótimo para ligar Bach ao romantismo: clareza contrapontística com sonoridade mais ‘pianística’.",
          links: [
            { label: "YouTube", url: ytSearch("Mendelssohn Op 35 No 1 E minor prelude fugue") },
            { label: "Spotify", url: spotifySearch("Mendelssohn Op. 35 No. 1") },
            { label: "Apple Music", url: appleSearch("Mendelssohn Op. 35 No. 1") },
            { label: "IMSLP", url: imslpSearch("Mendelssohn Op. 35") },
          ],
        },
        {
          id: "beethoven-op90",
          composer: "L. v. Beethoven",
          title: "Sonata Op. 90 (E menor) — I mov. (trechos)",
          level: "avançado",
          technicalFocus: "drama controlado + clareza de textura",
          notes:
            "Beethoven em E menor: energia interna forte. Treina acento e direção sem endurecer o som.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Sonata Op 90 E minor piano") },
            { label: "Spotify", url: spotifySearch("Beethoven Op. 90") },
            { label: "Apple Music", url: appleSearch("Beethoven Op. 90") },
            { label: "IMSLP", url: imslpSearch("Beethoven Op. 90") },
          ],
        },
        {
          id: "haydn-hob-xvi-34",
          composer: "Joseph Haydn",
          title: "Sonata Hob. XVI:34 (E menor) — seleção de movimentos/trechos",
          level: "avançado",
          technicalFocus: "articulação, timing e clareza clássica",
          notes:
            "Haydn em menor é ótimo pra treinar ‘drama sem excesso’. Timing precisa ser cirúrgico.",
          links: [
            { label: "YouTube", url: ytSearch("Haydn Hob XVI 34 E minor piano") },
            { label: "Spotify", url: spotifySearch("Hob. XVI:34") },
            { label: "Apple Music", url: appleSearch("Hob. XVI:34") },
            { label: "IMSLP", url: imslpSearch("Hob. XVI:34") },
          ],
        },
        {
          id: "grieg-op12-1",
          composer: "Edvard Grieg",
          title: "Peças Líricas Op. 12 nº 1 ‘Arietta’ (E menor) — simplicidade profunda",
          level: "intermediário",
          technicalFocus: "cantabile e pedais curtos",
          notes:
            "Treina som quente em dinâmica baixa. Boa peça para ouvir ‘dentro’ do som.",
          links: [
            { label: "YouTube", url: ytSearch("Grieg Arietta Op 12 No 1 E minor piano") },
            { label: "Spotify", url: spotifySearch("Grieg Arietta Op. 12 No. 1") },
            { label: "Apple Music", url: appleSearch("Grieg Arietta Op. 12 No. 1") },
            { label: "IMSLP", url: imslpSearch("Grieg Op. 12") },
          ],
        },
        {
          id: "rachmaninoff-op32-4",
          composer: "Sergei Rachmaninoff",
          title: "Prelúdio Op. 32 nº 4 (E menor) — peso sem dureza",
          level: "avançado",
          technicalFocus: "toque profundo + camadas",
          notes:
            "Perfeito para treinar ‘peso bem distribuído’: som grande sem esmagar teclas. Se a mão travar, volte e reorganize o braço.",
          links: [
            { label: "YouTube", url: ytSearch("Rachmaninoff Prelude Op 32 No 4 E minor") },
            { label: "Spotify", url: spotifySearch("Rachmaninoff Op. 32 No. 4") },
            { label: "Apple Music", url: appleSearch("Rachmaninoff Op. 32 No. 4") },
            { label: "IMSLP", url: imslpSearch("Rachmaninoff Op. 32") },
          ],
        },
        {
          id: "bridge-burgmuller-op100",
          composer: "Friedrich Burgmüller",
          title: "(ponte) 25 Estudos Fáceis Op. 100 — escolha 1 estudo em modo menor e transfira o som para E menor",
          level: "iniciante",
          technicalFocus: "articulação + expressão sem peso",
          notes:
            "Item-ponte: a ideia é treinar a estética de ‘modo menor’ e aplicar o mesmo tipo de toque/respiração quando você volta para E menor.",
          links: [
            { label: "YouTube", url: ytSearch("Burgmuller Op 100 piano") },
            { label: "Spotify", url: spotifySearch("Burgmuller Op. 100") },
            { label: "Apple Music", url: appleSearch("Burgmuller Op. 100") },
            { label: "IMSLP", url: imslpSearch("Burgmuller Op. 100") },
          ],
        },
      ],
    },
  },

  {
    slug: "b-minor",
    label: "B menor",
    mode: "minor",
    pitchClass: "B",
    motto:
      "Si menor é o corredor comprido de uma catedral: ressoa por dentro. Aqui você treina foco (e não pressa) — e aprende a fazer o piano sussurrar sem perder a coluna vertebral.",
    estimatedReadingMinutes: 19,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "B menor tem dois sustenidos (F# e C#). Isso é o suficiente pra te forçar a ‘morar’ com elegância nas pretas, sem virar braço duro. O risco típico é emocional: como o modo menor sugere drama, muita gente toca pesado. A missão aqui é produzir densidade de som com gesto econômico: dedos perto da tecla, antebraço que guia a rota e punho que não colapsa.",
      exercises: [
        {
          id: "scale-b-minor-natural",
          title: "Escala de B menor (natural)",
          subtitle: "duas pretas, um corpo calmo",
          exampleNotes: "B C# D E F# G A B",
          notes: [
            "C# e F# devem soar tão naturais quanto as brancas. Se ‘mudam de cor’ sem você querer, é gesto desigual.",
            "Treine em p para revelar irregularidades. Dinâmica baixa é lupa.",
            "Faça 3 articulações: legato, non-legato e staccato leve. O braço precisa permanecer disponível em todas.",
          ],
        },
        {
          id: "scale-b-minor-harmonic",
          title: "Escala de B menor (harmônica)",
          subtitle: "A# como precisão sem susto",
          exampleNotes: "B C# D E F# G A# B",
          notes: [
            "O A# é o ponto onde a mão entrega ansiedade. Antecipe: posicione antes do dedo ‘cair’.",
            "Use ritmos longo-curto/curto-longo para estabilizar coordenação.",
            "Se o som fica áspero no A#, reduza altura do dedo e pense em ‘peso’ em vez de ‘batida’.",
          ],
        },
        {
          id: "scale-b-minor-melodic",
          title: "Escala de B menor (melódica)",
          subtitle: "subindo com intenção, descendo com clareza",
          exampleNotes: "Subindo: B C# D E F# G# A# B | Descendo: B A G F# E D C# B",
          notes: [
            "A subida costuma ‘encantar’ e a descida vira relaxo. Não. A descida tem que ser tão controlada quanto.",
            "G# e A# são pretas: use dedos longos e mantenha o polegar civilizado.",
          ],
        },
        {
          id: "arpeggio-b-minor",
          title: "Arpejo de B menor",
          subtitle: "gesto único, sem degraus",
          exampleNotes: "B D F# B | B F# D B",
          notes: [
            "Se o arpejo parece ‘escada’, você está mudando de posição tarde demais.",
            "Pense na rota do antebraço e deixe a mão como concha estável.",
          ],
        },
        {
          id: "hanon-6-in-b-minor",
          title: "Hanon nº 6 (em B menor) — transposição",
          subtitle: "4º e 5º dedos com micro-rotação",
          notes: [
            "B menor costuma expor o 5º dedo na mão direita (quando o cérebro fica ‘ocupado’ com pretas).",
            "Micro-rotação ajuda 4 e 5 sem travar punho. Se o punho ‘dança’, é rotação demais.",
            "Treine curto e bem: 3×30s, com pausa. Qualidade > fadiga.",
          ],
        },
        {
          id: "czerny-pattern-b-minor",
          title: "Czerny (padrão de escala) — aplique em B menor",
          subtitle: "agilidade com borda clara",
          notes: [
            "Use um estudo de Czerny que tenha padrões de escala e re-harmonize/transpose trechos para B menor.",
            "A regra: velocidade só entra depois que a borda do som estiver nítida.",
          ],
        },
        {
          id: "broken-chords-b-minor",
          title: "Acordes quebrados (i–VI–III–VII) em B menor",
          subtitle: "mão esquerda tapete + voicing",
          notes: [
            "Treine progressão típica do modo menor: Bm–G–D–A. Faça a harmonia ‘andar’ sem aumentar volume.",
            "Mantenha o baixo presente e quente, sem bater. É contrabaixo, não martelo.",
          ],
        },
        {
          id: "voicing-b-minor",
          title: "Voicing: melodia em cima de acompanhamento em B menor",
          subtitle: "camadas de volume",
          notes: [
            "Toque a melodia como voz humana (consoantes/vogais).",
            "Se o acompanhamento encobre a melodia, abaixe a mão — não force o dedo da melodia.",
          ],
        },
        {
          id: "staccato-b-minor",
          title: "Staccato leve (controle de ataque) em B menor",
          subtitle: "elasticidade",
          notes: [
            "Staccato bom é rápido e leve. Se ficar agressivo, você está batendo.",
            "Use altura mínima de dedo e sensação de ‘quique’.",
          ],
        },
        {
          id: "micro-routine-b-minor",
          title: "Micro-rotina (3 minutos): pretas sem ansiedade",
          subtitle: "p → mf → p",
          notes: [
            "1 min: escala natural em p.",
            "1 min: arpejo em mf (som cheio sem dureza).",
            "1 min: acorde quebrado Bm–G–D–A em p com voicing.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "Curadoria em B menor (10+). Prioridade total para obras em B menor; no máximo poucos itens-ponte que realmente ajudem (marcados).",
      items: [
        {
          id: "bach-wtc1-bm",
          composer: "J. S. Bach",
          title: "Cravo Bem Temperado, Livro I: Prelúdio e Fuga em Si menor (BWV 869)",
          level: "avançado",
          technicalFocus: "contraponto, clareza e tempo estável",
          notes:
            "Se você conseguir fazer isso soar ‘simples’, você ganhou um ouvido novo. Articule como quem desenha com caneta fina.",
          links: [
            { label: "YouTube", url: ytSearch("Bach BWV 869 B minor prelude fugue piano") },
            { label: "Spotify", url: spotifySearch("BWV 869") },
            { label: "Apple Music", url: appleSearch("BWV 869") },
            { label: "IMSLP", url: imslpSearch("BWV 869") },
          ],
        },
        {
          id: "chopin-op58",
          composer: "Frédéric Chopin",
          title: "Sonata nº 3 Op. 58 (Si menor) — trechos",
          level: "avançado",
          technicalFocus: "textura, resistência e voicing",
          notes:
            "Chopin em B menor é ‘piano-orquestra’. Treina densidade sem virar barro: camadas claras.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Sonata No 3 Op 58 B minor piano") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 58") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 58") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 58") },
          ],
        },
        {
          id: "liszt-sonata",
          composer: "Franz Liszt",
          title: "Sonata em Si menor — trechos (o Everest)",
          level: "avançado",
          technicalFocus: "controle de energia e arquitetura",
          notes:
            "Mesmo em trechos curtos, isso treina ‘planejamento’: você não toca só o compasso; você toca a estrutura.",
          links: [
            { label: "YouTube", url: ytSearch("Liszt Sonata in B minor piano") },
            { label: "Spotify", url: spotifySearch("Liszt Sonata in B minor") },
            { label: "Apple Music", url: appleSearch("Liszt Sonata in B minor") },
            { label: "IMSLP", url: imslpSearch("Liszt Sonata in B minor") },
          ],
        },
        {
          id: "tchaikovsky-op39-16",
          composer: "P. I. Tchaikovsky",
          title: "Children's Album Op. 39: ‘Sweet Dream’ (Si menor) — cantabile",
          level: "iniciante",
          technicalFocus: "melodia cantada e controle de tempo",
          notes:
            "Peça ‘simples’ que ensina coisa séria: manter o pulso vivo em dinâmica baixa.",
          links: [
            { label: "YouTube", url: ytSearch("Tchaikovsky Sweet Dream Op 39 B minor piano") },
            { label: "Spotify", url: spotifySearch("Tchaikovsky Children's Album Sweet Dream") },
            { label: "Apple Music", url: appleSearch("Tchaikovsky Sweet Dream Op. 39") },
            { label: "IMSLP", url: imslpSearch("Tchaikovsky Children's Album Op. 39") },
          ],
        },
        {
          id: "schumann-op15-7",
          composer: "Robert Schumann",
          title: "Kinderszenen Op. 15 nº 7 ‘Träumerei’ (Fá maior) — (ponte: cantabile) ",
          level: "intermediário",
          technicalFocus: "canto e controle de peso",
          notes:
            "Item-ponte (não é B menor): serve pra treinar cantabile e peso redondo que você precisa pra tocar B menor sem ficar pesado.",
          links: [
            { label: "YouTube", url: ytSearch("Schumann Traumerei piano") },
            { label: "Spotify", url: spotifySearch("Schumann Traumerei") },
            { label: "Apple Music", url: appleSearch("Schumann Traumerei") },
            { label: "IMSLP", url: imslpSearch("Kinderszenen Op. 15") },
          ],
        },
        {
          id: "schubert-d960-2",
          composer: "Franz Schubert",
          title: "Sonata D 960 (Si bemol maior) — (ponte: arquitetura lenta) ",
          level: "avançado",
          technicalFocus: "tempo interno e estrutura",
          notes:
            "Item-ponte: não é B menor, mas treina o tipo de tempo interno ‘adulto’ necessário para sustentar modos menores longos sem pressa.",
          links: [
            { label: "YouTube", url: ytSearch("Schubert D 960 piano") },
            { label: "Spotify", url: spotifySearch("Schubert D 960") },
            { label: "Apple Music", url: appleSearch("Schubert D 960") },
            { label: "IMSLP", url: imslpSearch("Schubert D 960") },
          ],
        },
        {
          id: "grieg-op54-4",
          composer: "Edvard Grieg",
          title: "Lyric Pieces Op. 54 nº 4 ‘Notturno’ (Si menor) — cor e pedal",
          level: "avançado",
          technicalFocus: "pedal limpo e vozes internas",
          notes:
            "Uma aula de ‘neblina controlada’: pedal suficiente pra cor, mas nunca pra esconder articulação.",
          links: [
            { label: "YouTube", url: ytSearch("Grieg Notturno Op 54 No 4 B minor piano") },
            { label: "Spotify", url: spotifySearch("Grieg Op. 54 No. 4 Notturno") },
            { label: "Apple Music", url: appleSearch("Grieg Notturno Op. 54 No. 4") },
            { label: "IMSLP", url: imslpSearch("Grieg Op. 54") },
          ],
        },
        {
          id: "brahms-op119-1",
          composer: "Johannes Brahms",
          title: "Intermezzo Op. 119 nº 1 (Si menor) — densidade íntima",
          level: "avançado",
          technicalFocus: "voicing e controle de textura",
          notes:
            "Treina tocar ‘por dentro’: se tudo soar igual, você perdeu o relevo. Camadas, camadas, camadas.",
          links: [
            { label: "YouTube", url: ytSearch("Brahms Op 119 No 1 B minor piano") },
            { label: "Spotify", url: spotifySearch("Brahms Op. 119 No. 1") },
            { label: "Apple Music", url: appleSearch("Brahms Op. 119 No. 1") },
            { label: "IMSLP", url: imslpSearch("Brahms Op. 119") },
          ],
        },
        {
          id: "rachmaninoff-op23-5",
          composer: "Sergei Rachmaninoff",
          title: "Prelúdio Op. 23 nº 5 (Sol menor) — (ponte: acentos e energia)",
          level: "avançado",
          technicalFocus: "ritmo e acentos",
          notes:
            "Item-ponte: não é B menor, mas treina energia rítmica e acentos que você vai precisar em passagens dramáticas sem virar pancada.",
          links: [
            { label: "YouTube", url: ytSearch("Rachmaninoff Prelude Op 23 No 5 piano") },
            { label: "Spotify", url: spotifySearch("Rachmaninoff Op. 23 No. 5") },
            { label: "Apple Music", url: appleSearch("Rachmaninoff Op. 23 No. 5") },
            { label: "IMSLP", url: imslpSearch("Rachmaninoff Op. 23") },
          ],
        },
      ],
    },
  },

  {
    slug: "fsharp-minor",
    label: "F♯ menor",
    mode: "minor",
    pitchClass: "F♯",
    motto:
      "Fá sustenido menor é um céu noturno bem nítido: frio, brilhante e profundo. Aqui, a técnica vira ‘astronomia’: você precisa de rota, não de força.",
    estimatedReadingMinutes: 20,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "F♯ menor tem três sustenidos (F#, C#, G#) e a sensação natural é ‘mão indo pra dentro do teclado’. Se você tenta controlar isso por dedo, trava; se controla por rota do antebraço, fica elegante. O objetivo é dominar pretas sem ansiedade: dedos longos pousam, polegar entra silencioso, punho estável (não rígido) e som escuro sem virar baque.",
      exercises: [
        {
          id: "scale-fsharp-minor-natural",
          title: "Escala de F♯ menor (natural)",
          subtitle: "pretas como casa",
          exampleNotes: "F# G# A B C# D E F#",
          notes: [
            "Pense em ‘morar’ nas pretas: dedos longos nelas, sem escorregar.",
            "Se o polegar faz barulho no cruzamento, o braço chegou tarde.",
            "Treine em p pra obrigar controle fino.",
          ],
        },
        {
          id: "scale-fsharp-minor-harmonic",
          title: "Escala de F♯ menor (harmônica)",
          subtitle: "E# (sim, E#) sem susto",
          exampleNotes: "F# G# A B C# D E# F#",
          notes: [
            "Teoricamente é E# (mesma tecla do F natural), mas o cérebro precisa entender função. Isso melhora leitura e consciência tonal.",
            "O salto D → E# revela rota: antecipe o posicionamento.",
          ],
        },
        {
          id: "scale-fsharp-minor-melodic",
          title: "Escala de F♯ menor (melódica)",
          subtitle: "subindo (D# e E#), descendo natural",
          exampleNotes: "Subindo: F# G# A B C# D# E# F# | Descendo: F# E D C# B A G# F#",
          notes: [
            "Não deixe as alterações virarem ‘surpresa’. Antecipe e mantenha o mesmo timbre.",
            "Na descida, não relaxe a ponto de perder clareza.",
          ],
        },
        {
          id: "arpeggio-fsharp-minor",
          title: "Arpejo de F♯ menor",
          subtitle: "gesto único + braço guiando",
          exampleNotes: "F# A C# F# | F# C# A F#",
          notes: [
            "Arpejo bom parece um arco. Se parece degrau, o braço está atrasado.",
            "Use dedos longos nas pretas (C#) e mantenha a concha firme.",
          ],
        },
        {
          id: "hanon-1-in-fsharp-minor",
          title: "Hanon nº 1 (em F♯ menor) — transposição",
          subtitle: "coordenação em terreno com 3 sustenidos",
          notes: [
            "Excelente pra revelar ‘aperto’ no polegar e ansiedade nas pretas.",
            "Faça lento e com borda nítida. Velocidade sem borda é borrão.",
          ],
        },
        {
          id: "hanon-6-in-fsharp-minor",
          title: "Hanon nº 6 (em F♯ menor)",
          subtitle: "4º e 5º dedos sem colapso",
          notes: [
            "Em tonalidades com muitas pretas, o 5º dedo ‘some’ porque a mão muda de geometria. Traga ele de volta com micro-rotação.",
            "Curto e bem feito: 2–3 min total.",
          ],
        },
        {
          id: "broken-chords-fsharp-minor",
          title: "Acordes quebrados em F♯ menor (i–VI–III–VII)",
          subtitle: "harmonia andando sem peso",
          notes: [
            "Progressão típica: F#m–D–A–E. Treine o fluxo harmônico como se fosse respiração.",
            "Se a mão esquerda bate, reduza altura do dedo e use peso do braço.",
          ],
        },
        {
          id: "voicing-fsharp-minor",
          title: "Voicing em F♯ menor",
          subtitle: "melodia canta, internas sustentam",
          notes: [
            "Treine camadas: melodia em mf, internas em p.",
            "Se a melodia não aparece, abaixe as internas. Não ‘esprema’ a melodia.",
          ],
        },
        {
          id: "staccato-fsharp-minor",
          title: "Staccato elástico em F♯ menor",
          subtitle: "ataque claro, corpo solto",
          notes: [
            "Staccato bom é precisão, não agressão.",
            "Se ficar duro, volte ao non-legato e reconstrua.",
          ],
        },
        {
          id: "micro-routine-fsharp-minor",
          title: "Micro-rotina (3 minutos): rota antes do dedo",
          subtitle: "p → mf → p",
          notes: [
            "1 min: escala natural em p.",
            "1 min: arpejo em mf com gesto único.",
            "1 min: acordes quebrados F#m–D–A–E em p com voicing.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "Curadoria em F♯ menor (10+). Prioridade para obras em F♯ menor; no máximo alguns itens-ponte bem justificados.",
      items: [
        {
          id: "chopin-op48-2",
          composer: "Frédéric Chopin",
          title: "Noturno Op. 48 nº 2 (F♯ menor) — drama com disciplina",
          level: "avançado",
          technicalFocus: "cantabile + controle de clímax",
          notes:
            "Treina a coisa mais difícil do romantismo: crescer sem perder clareza e sem virar pancada.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Nocturne Op 48 No 2 F sharp minor") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 48 No. 2") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 48 No. 2") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 48") },
          ],
        },
        {
          id: "chopin-op44",
          composer: "Frédéric Chopin",
          title: "Polonaise-Fantaisie Op. 61 (A♭ maior) — (ponte: arquitetura) ",
          level: "avançado",
          technicalFocus: "planejamento e voicing",
          notes:
            "Item-ponte: não é F♯ menor, mas treina arquitetura de som e narrativa — útil para repertório denso em F♯ menor.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Polonaise Fantaisie Op 61") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 61") },
            { label: "Apple Music", url: appleSearch("Chopin Op. 61") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 61") },
          ],
        },
        {
          id: "scriabin-op8-12",
          composer: "Alexander Scriabin",
          title: "Estudo Op. 8 nº 12 (D# menor) — (ponte: energia e técnica)",
          level: "avançado",
          technicalFocus: "energia e resistência",
          notes:
            "Item-ponte: não é F♯ menor, mas treina energia e controle em teclas pretas, útil para o ‘território’ de F♯ menor.",
          links: [
            { label: "YouTube", url: ytSearch("Scriabin Etude Op 8 No 12") },
            { label: "Spotify", url: spotifySearch("Scriabin Op. 8 No. 12") },
            { label: "Apple Music", url: appleSearch("Scriabin Op. 8 No. 12") },
            { label: "IMSLP", url: imslpSearch("Scriabin Op. 8") },
          ],
        },
        {
          id: "bach-wtc2-fsharp-minor",
          composer: "J. S. Bach",
          title: "Cravo Bem Temperado, Livro II: Prelúdio e Fuga em F♯ menor (BWV 883)",
          level: "avançado",
          technicalFocus: "contraponto e clareza",
          notes:
            "Bach em F♯ menor é treino de mente fria: clareza e direção em textura densa.",
          links: [
            { label: "YouTube", url: ytSearch("Bach BWV 883 F sharp minor prelude fugue piano") },
            { label: "Spotify", url: spotifySearch("BWV 883") },
            { label: "Apple Music", url: appleSearch("BWV 883") },
            { label: "IMSLP", url: imslpSearch("BWV 883") },
          ],
        },
        {
          id: "mozart-k475",
          composer: "W. A. Mozart",
          title: "Fantasia K. 475 (C menor) — (ponte: drama clássico)",
          level: "avançado",
          technicalFocus: "contrastes e clareza",
          notes:
            "Item-ponte: treina drama clássico sem peso — habilidade essencial pra tocar modo menor com elegância.",
          links: [
            { label: "YouTube", url: ytSearch("Mozart Fantasia K 475 piano") },
            { label: "Spotify", url: spotifySearch("Mozart K. 475") },
            { label: "Apple Music", url: appleSearch("Mozart K. 475") },
            { label: "IMSLP", url: imslpSearch("K. 475") },
          ],
        },
        {
          id: "rachmaninoff-op3-2",
          composer: "Sergei Rachmaninoff",
          title: "Morceaux de fantaisie Op. 3 nº 2 ‘Prelúdio em C# menor’ — (ponte: peso)",
          level: "avançado",
          technicalFocus: "peso sem dureza",
          notes:
            "Item-ponte: território de pretas e peso. Ensina a sustentar som grande sem esmagar teclas — útil no universo de F♯ menor.",
          links: [
            { label: "YouTube", url: ytSearch("Rachmaninoff Prelude Op 3 No 2 C sharp minor") },
            { label: "Spotify", url: spotifySearch("Rachmaninoff Op. 3 No. 2") },
            { label: "Apple Music", url: appleSearch("Rachmaninoff Op. 3 No. 2") },
            { label: "IMSLP", url: imslpSearch("Rachmaninoff Op. 3") },
          ],
        },
        {
          id: "schumann-op16-2",
          composer: "Robert Schumann",
          title: "Kreisleriana Op. 16 nº 2 (B♭ maior) — (ponte: vozes e turbulência) ",
          level: "avançado",
          technicalFocus: "vozes internas e energia",
          notes:
            "Item-ponte: Schumann te obriga a controlar turbulência sem perder vozes. Ajuda a tocar F♯ menor com densidade organizada.",
          links: [
            { label: "YouTube", url: ytSearch("Schumann Kreisleriana Op 16 No 2") },
            { label: "Spotify", url: spotifySearch("Schumann Kreisleriana Op. 16") },
            { label: "Apple Music", url: appleSearch("Schumann Kreisleriana Op. 16") },
            { label: "IMSLP", url: imslpSearch("Kreisleriana Op. 16") },
          ],
        },
        {
          id: "tchaikovsky-op19-2",
          composer: "P. I. Tchaikovsky",
          title: "6 Pieces Op. 19 nº 2 ‘Nocturne’ (F♯ menor) — canto e pedal",
          level: "avançado",
          technicalFocus: "cantabile e pedal limpo",
          notes:
            "Treina cantar em cima de harmonia com cuidado de pedal. Se borrar, o drama vira névoa sem desenho.",
          links: [
            { label: "YouTube", url: ytSearch("Tchaikovsky Nocturne Op 19 No 2 F sharp minor") },
            { label: "Spotify", url: spotifySearch("Tchaikovsky Op. 19 No. 2") },
            { label: "Apple Music", url: appleSearch("Tchaikovsky Op. 19 No. 2") },
            { label: "IMSLP", url: imslpSearch("Tchaikovsky Op. 19") },
          ],
        },
        {
          id: "field-nocturne-fsharp-minor",
          composer: "John Field",
          title: "Noturno em F♯ menor (seleção) — o DNA do noturno",
          level: "avançado",
          technicalFocus: "cantabile e acompanhamento aveludado",
          notes:
            "Field é a raiz do noturno: ensina a mão esquerda a ser seda e a direita a ser voz.",
          links: [
            { label: "YouTube", url: ytSearch("John Field nocturne F sharp minor") },
            { label: "Spotify", url: spotifySearch("John Field nocturne F sharp minor") },
            { label: "Apple Music", url: appleSearch("John Field nocturne F sharp minor") },
            { label: "IMSLP", url: imslpSearch("John Field nocturne F sharp minor") },
          ],
        },
        {
          id: "grieg-op54-4-bridge",
          composer: "Edvard Grieg",
          title: "Lyric Pieces Op. 54 nº 4 ‘Notturno’ (Si menor) — (ponte: neblina controlada)",
          level: "avançado",
          technicalFocus: "pedal e cor",
          notes:
            "Item-ponte: mesma estética de noite e cor. Ajuda a pensar o som de F♯ menor com ‘luz fria’ sem borrar.",
          links: [
            { label: "YouTube", url: ytSearch("Grieg Notturno Op 54 No 4 piano") },
            { label: "Spotify", url: spotifySearch("Grieg Op. 54 No. 4") },
            { label: "Apple Music", url: appleSearch("Grieg Op. 54 No. 4") },
            { label: "IMSLP", url: imslpSearch("Grieg Op. 54") },
          ],
        },
      ],
    },
  },
  {
    slug: "c-major",
    label: "C Maior",
    mode: "major",
    pitchClass: "C",
    motto:
      "Clareza é uma superpotência: se tudo parece ‘fácil’ em Dó Maior, é porque você ainda não está ouvindo de verdade.",
    estimatedReadingMinutes: 18,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "Dó Maior é a vitrine cruel: sem sustenidos/bemóis pra ‘disfarçar’ nada, qualquer tensão vira neon. Aqui, você usa o terreno plano pra lapidar precisão de ataque, controle de peso e independência de dedos — sem trapacear com o pedal. O objetivo é construir um toque que aguente escrutínio: som consistente, articulação que não quebra no meio da frase e uma mão que não vira um ‘garfo rígido’.",
      exercises: [
        {
          id: "hanon-1",
          title: "Hanon nº 1",
          subtitle: "igualdade de dedos, sem ‘dedo rei’",
          exampleNotes:
            "Padrão-base (Hanon nº 1): C E F G A G F E D | depois: D F G A B A G F E | (continue subindo o ponto de partida)",
          notes: notes(
            "Toque como se cada dedo tivesse o mesmo sobrenome — nada de privilegiar 1 e 2.",
            "Procure micro-rotação do antebraço para estabilizar 4 e 5 sem travar o punho.",
            "Se o som fica ‘duro’, a causa comum é elevar demais os dedos: pense em dedos curtos, articulação mínima e peso controlado.",
            "Regra de ouro: quando um dedo desce, o resto do braço não precisa ‘cair junto’. Ataque é local; peso é global.",
          ),
        },
        {
          id: "czerny-599-1",
          title: "Czerny Op. 599 nº 1",
          subtitle: "coordenação simples, leitura limpa",
          notes: [
            "A meta não é velocidade: é previsibilidade do ataque.",
            "Conte em voz baixa (sim, sério). Você está treinando o cérebro a não ‘apagar’ no automático.",
            "Se a mão esquerda ‘late’ (bate), diminua a altura do dedo e aumente a intenção harmônica: ela é base, não protagonista.",
          ],
        },
        {
          id: "hanon-2",
          title: "Hanon nº 2",
          subtitle: "padrão repetitivo = microscópio de defeitos",
          notes: [
            "Use o tédio a seu favor: o exercício não está ‘te dando música’, então você precisa fornecer consciência.",
            "Faça 3 passagens: (1) legato total, (2) staccato curto e leve, (3) portato (quase staccato) — e observe como o braço reage.",
            "Se a mão enrijece no staccato, você está confundindo ‘soltar rápido’ com ‘bater’.",
          ],
        },
        {
          id: "czerny-599-8",
          title: "Czerny Op. 599 nº 8",
          subtitle: "fluxo de mão e antecipação visual",
          notes: [
            "Leia 1 compasso à frente. O dedo sempre chega atrasado quando o olho chega atrasado.",
            "Treine com metrônomo lento, mas com ‘mentalidade rápida’: o cérebro tem que prever, não reagir.",
          ],
        },
        {
          id: "czerny-599-19",
          title: "Czerny Op. 599 nº 19",
          subtitle: "saltos pequenos, aterrissagem silenciosa",
          notes: [
            "Em saltos, o erro comum é ‘pular com o dedo’. Quem se move é o antebraço, o dedo só finaliza.",
            "Teste: faça o salto sem tocar a tecla (no ar). Se o corpo treme, a rota está ruim.",
          ],
        },
        {
          id: "hanon-6",
          title: "Hanon nº 6",
          subtitle: "apoio de 4º e 5º dedos com rotação mínima",
          exampleNotes: "C D E F G | G F E D C (varie articulação)",
          notes: notes(
            "4 e 5 são ‘irmãos siameses’ por tendões: independência total é mito; coordenação inteligente é a meta.",
            "Use rotação como um volante pequeno: quase invisível. Se parecer ‘dança’, é demais.",
            "Micro-rotina prática (2–3 min): (1) toque lento em mf, (2) repita em p (controle fino), (3) repita em staccato leve sem ‘bater’. Se qualquer etapa ficar feia, volte uma casa: você achou o limite do seu controle.",
            "Erro clássico: tentar ‘fortalecer o dedo’ apertando. O que fortalece é repetição com gesto bom. Se doer, pare: dor é sinal de mecânica ruim, não de progresso.",
            "Hack de atenção: coloque uma moeda leve (ou papel dobrado) no dorso da mão. Se ela cair, você está mexendo demais o pulso em vez de rotacionar minimamente o antebraço.",
          ),
        },
        {
          id: "scales-c-major",
          title: "Escala de C Maior (prática guiada)",
          subtitle: "legato real, polegar silencioso",
          exampleNotes: scaleNotes("C", "D", "E", "F", "G", "A", "B", "C"),
          notes: notes(
            "O polegar não deve ‘cavar’ a tecla. Ele entra de lado com a unha apontando para o próximo dedo — sensação de deslize.",
            "Treine mãos separadas em dinâmica baixa: controle é mais difícil quando o som não ‘mascara’ irregularidade.",
            "Meta de qualidade: volume contínuo, sem degraus nos cruzamentos.",
          ),
        },
        {
          id: "arpeggio-c-major",
          title: "Arpejo de C Maior",
          subtitle: "alinhamento e trajetória do braço",
          exampleNotes: "C E G C | C G E C (1–3–5–1)",
          notes: notes(
            "Não ‘torça’ o punho pra alcançar: o braço viaja junto.",
            "A mão forma uma concha estável; os dedos mudam dentro dela.",
          ),
        },
        {
          id: "double-notes-3rds-c-major",
          title: "Terças em C Maior (opcional, mas poderoso)",
          subtitle: "tensão sob controle",
          notes: [
            "Terças são detector de rigidez. Faça pouco volume, muita qualidade.",
            "Se travar, volte: primeiro ‘encoste’ as teclas sem descer (pré-contato) e só então toque.",
          ],
        },
        {
          id: "staccato-control",
          title: "Staccato consciente (2 notas alternadas)",
          subtitle: "soltar rápido sem contrair",
          notes: [
            "Staccato bom é ‘quente’: sai rápido, mas o corpo fica disponível.",
            "Pense em ‘ping’ elástico, não em martelo.",
          ],
        },
        {
          id: "voicing-basic",
          title: "Voz superior destacada (acordes simples)",
          subtitle: "mão direita canta, o resto sustenta",
          notes: [
            "A mão não tem um volume: ela tem camadas. Treine tocar 2 níveis ao mesmo tempo.",
            "Se a voz de cima some, você está apertando as outras notas demais.",
          ],
        },
        {
          id: "czerny-599-2",
          title: "Czerny Op. 599 nº 2",
          subtitle: "regularidade + controle de legato",
          notes: [
            "Use este estudo como laboratório de igualdade: notas ‘sem importância’ não existem.",
            "Se o dedo ‘pula’ demais, o som fica picotado. Mantenha a mão perto da tecla.",
            "Meta: legato convincente sem pedal, com dinâmica uniforme.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "Aqui vai a curadoria com foco em música que ensina algo (e não só ‘soa bonitinha’). Use as obras como laboratório de som: articulação, vozes, timing, harmonia implícita.",
      items: [
        {
          id: "bach-minuet-g-major",
          composer: "J. S. Bach (atribuído/coleções pedagógicas)",
          title: "Minueto em Sol Maior (BWV Anh. 114) — relaciona com C pela clareza de frase",
          level: "iniciante",
          technicalFocus: "fraseado, articulação e mão esquerda ‘educada’",
          notes:
            "Não é ‘peça de criança’: é peça de arquitetura. Faça perguntas de harmonia com os dedos.",
          links: [
            { label: "YouTube", url: ytSearch("BWV Anh 114 Minuet G major piano") },
            { label: "Spotify", url: spotifySearch("BWV Anh 114 Minuet") },
            { label: "IMSLP", url: imslpSearch("BWV Anh. 114") },
          ],
        },
        {
          id: "clementi-op36-1",
          composer: "Muzio Clementi",
          title: "Sonatina Op. 36 nº 1 (I mov.)",
          level: "iniciante",
          technicalFocus: "escala brilhante, clareza de textura clássica",
          notes:
            "Ouça o ‘sorriso’ rítmico: não é correria, é leveza com coluna vertebral.",
          links: [
            { label: "YouTube", url: ytSearch("Clementi Op 36 No 1 first movement") },
            { label: "Spotify", url: spotifySearch("Clementi Sonatina Op. 36 No. 1") },
            { label: "Apple Music", url: appleSearch("Clementi Sonatina Op. 36 No. 1") },
            { label: "IMSLP", url: imslpSearch("Clementi Op. 36 No. 1") },
          ],
        },
        {
          id: "mozart-k545-1",
          composer: "W. A. Mozart",
          title: "Sonata K. 545 (I mov.)",
          level: "intermediário",
          technicalFocus: "clareza de vozes, mão esquerda discreta, timing clássico",
          notes:
            "O ‘fácil’ aqui é armadilha: Mozart não perdoa dedo ansioso nem dinâmica sem motivo.",
          links: [
            { label: "YouTube", url: ytSearch("Mozart K545 first movement piano") },
            { label: "Spotify", url: spotifySearch("Mozart K. 545") },
            { label: "Apple Music", url: appleSearch("Mozart K. 545") },
            { label: "IMSLP", url: imslpSearch("K. 545") },
          ],
        },
        {
          id: "schumann-op68-1",
          composer: "Robert Schumann",
          title: "Melodia (Álbum para a Juventude, Op. 68 nº 1)",
          level: "iniciante",
          technicalFocus: "cantabile, equilíbrio de mãos, fraseado vocal",
          notes:
            "Faça a mão direita cantar como se tivesse consoantes e vogais. Piano é fala.",
          links: [
            { label: "YouTube", url: ytSearch("Schumann Op 68 No 1 Melody") },
            { label: "Spotify", url: spotifySearch("Schumann Album for the Young Op. 68 No. 1") },
            { label: "Apple Music", url: appleSearch("Schumann Op. 68 No. 1") },
            { label: "IMSLP", url: imslpSearch("Schumann Op. 68") },
          ],
        },
        {
          id: "tchaikovsky-op39-9",
          composer: "Piotr Ilyich Tchaikovsky",
          title: "The New Doll (Album for the Young, Op. 39 nº 9)",
          level: "iniciante",
          technicalFocus: "toque delicado, pedal sutil, narrativa",
          notes:
            "Pense em ‘mini-orquestra’: o toque é pequeno, mas a intenção é grande.",
          links: [
            { label: "YouTube", url: ytSearch("Tchaikovsky Op 39 No 9 The New Doll") },
            { label: "Spotify", url: spotifySearch("Tchaikovsky Op. 39 No. 9") },
            { label: "Apple Music", url: appleSearch("Tchaikovsky The New Doll Op. 39 No. 9") },
            { label: "IMSLP", url: imslpSearch("Tchaikovsky Op. 39") },
          ],
        },
        {
          id: "burgmuller-op100-2",
          composer: "Friedrich Burgmüller",
          title: "Arabesque (25 Estudos Fáceis, Op. 100 nº 2)",
          level: "intermediário",
          technicalFocus: "leveza, staccato inteligente, coordenação",
          notes:
            "Não confunda staccato com ‘bateu e saiu’. É salto com aterrissagem silenciosa.",
          links: [
            { label: "YouTube", url: ytSearch("Burgmuller Op 100 No 2 Arabesque") },
            { label: "Spotify", url: spotifySearch("Burgmuller Op. 100 No. 2") },
            { label: "Apple Music", url: appleSearch("Burgmuller Arabesque Op. 100 No. 2") },
            { label: "IMSLP", url: imslpSearch("Burgmuller Op. 100") },
          ],
        },
        {
          id: "beethoven-op49-2-1",
          composer: "L. v. Beethoven",
          title: "Sonata Op. 49 nº 2 (I mov.)",
          level: "intermediário",
          technicalFocus: "clareza clássica com ‘energia’ beethoveniana",
          notes:
            "Beethoven em miniatura: fraseado com direção, não decorativo.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Op 49 No 2 first movement") },
            { label: "Spotify", url: spotifySearch("Beethoven Op. 49 No. 2") },
            { label: "Apple Music", url: appleSearch("Beethoven Op. 49 No. 2") },
            { label: "IMSLP", url: imslpSearch("Beethoven Op. 49 No. 2") },
          ],
        },
        {
          id: "debussy-clair-de-lune",
          composer: "Claude Debussy",
          title: "Clair de Lune (Suite Bergamasque) — C Maior como base de ‘luz’",
          level: "avançado",
          technicalFocus: "vozes internas, pedal ‘limpo’, rubato controlado",
          notes:
            "Pedal é lente, não cobertor. Se borrar, você perdeu o foco da fotografia.",
          links: [
            { label: "YouTube", url: ytSearch("Debussy Clair de Lune piano") },
            { label: "Spotify", url: spotifySearch("Debussy Clair de Lune") },
            { label: "Apple Music", url: appleSearch("Debussy Clair de Lune") },
            { label: "IMSLP", url: imslpSearch("Suite bergamasque") },
          ],
        },
        {
          id: "chopin-prelude-7",
          composer: "Frédéric Chopin",
          title: "Prelúdio Op. 28 nº 7",
          level: "intermediário",
          technicalFocus: "harmonia implícita, rubato leve, voz superior",
          notes:
            "Curto não é simples: é concentrado. Cada acorde tem um ‘porquê’ emocional.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Op 28 No 7 piano") },
            { label: "Spotify", url: spotifySearch("Chopin Op. 28 No. 7") },
            { label: "Apple Music", url: appleSearch("Chopin Prelude Op. 28 No. 7") },
            { label: "IMSLP", url: imslpSearch("Chopin Op. 28") },
          ],
        },
        {
          id: "satie-gymnopedie-1",
          composer: "Erik Satie",
          title: "Gymnopédie nº 1",
          level: "intermediário",
          technicalFocus: "controle de tempo, som aveludado, simplicidade consciente",
          notes:
            "A dificuldade é manter a calma sem virar sonolência. ‘Lento’ não é ‘mole’.",
          links: [
            { label: "YouTube", url: ytSearch("Satie Gymnopedie No 1 piano") },
            { label: "Spotify", url: spotifySearch("Satie Gymnopedie No. 1") },
            { label: "Apple Music", url: appleSearch("Satie Gymnopedie No. 1") },
            { label: "IMSLP", url: imslpSearch("Gymnopedies") },
          ],
        },
        {
          id: "bach-wtc1-prelude-c",
          composer: "J. S. Bach",
          title: "Prelúdio em Dó Maior (Cravo Bem Temperado, Livro I)",
          level: "intermediário",
          technicalFocus: "controle de harmonia contínua, legato e direção",
          notes:
            "Esse prelúdio é um ‘scan’ do seu controle de tempo: se o pulso vacilar, a harmonia parece tropeçar.",
          links: [
            { label: "YouTube", url: ytSearch("Bach WTC I Prelude in C major BWV 846 piano") },
            { label: "Spotify", url: spotifySearch("BWV 846 Prelude") },
            { label: "Apple Music", url: appleSearch("BWV 846 Prelude") },
            { label: "IMSLP", url: imslpSearch("BWV 846") },
          ],
        },
        {
          id: "haydn-hob-xvi-7",
          composer: "Joseph Haydn",
          title: "Sonata Hob. XVI:7 (seleção de movimentos/trechos) — classicismo afiado",
          level: "avançado",
          technicalFocus: "clareza formal, articulação e humor rítmico",
          notes:
            "Haydn é a ciência do ‘timing’. A piada musical só funciona se o ritmo for cirúrgico.",
          links: [
            { label: "YouTube", url: ytSearch("Haydn Sonata Hob XVI 7 piano") },
            { label: "Spotify", url: spotifySearch("Haydn Hob. XVI:7") },
            { label: "Apple Music", url: appleSearch("Haydn Hob. XVI:7") },
            { label: "IMSLP", url: imslpSearch("Hob. XVI:7") },
          ],
        },
        {
          id: "bartok-mikrokosmos",
          composer: "Béla Bartók",
          title: "Mikrokosmos (seleção de peças em Dó/relacionadas) — alfabetização moderna",
          level: "intermediário",
          technicalFocus: "ritmo, independência e leitura limpa",
          notes:
            "Bartók é antidoto contra ‘clássico automático’: te obriga a pensar ritmo e acento.",
          links: [
            { label: "YouTube", url: ytSearch("Bartok Mikrokosmos piano") },
            { label: "Spotify", url: spotifySearch("Bartok Mikrokosmos") },
            { label: "Apple Music", url: appleSearch("Bartok Mikrokosmos") },
            { label: "IMSLP", url: imslpSearch("Mikrokosmos") },
          ],
        },
        {
          id: "beethoven-ecossaise",
          composer: "L. v. Beethoven",
          title: "Ecossaise(s) (seleção) — ritmo e humor sem sentimentalismo",
          level: "iniciante",
          technicalFocus: "precisão rítmica, staccato elegante",
          notes:
            "Peça curta, mas ótima pra treinar ‘energia contida’: leve e precisa, sem perder a graça.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Ecossaise piano") },
            { label: "Spotify", url: spotifySearch("Beethoven Ecossaise") },
            { label: "Apple Music", url: appleSearch("Beethoven Ecossaise") },
            { label: "IMSLP", url: imslpSearch("Beethoven Ecossaise") },
          ],
        },
        {
          id: "mendelssohn-songs-without-words",
          composer: "Felix Mendelssohn",
          title: "Songs Without Words (seleção) — cantabile sob controle",
          level: "avançado",
          technicalFocus: "melodia cantada + acompanhamento discreto",
          notes:
            "Esse repertório ensina uma habilidade adulta: tocar bonito sem ficar mole.",
          links: [
            { label: "YouTube", url: ytSearch("Mendelssohn Songs Without Words piano") },
            { label: "Spotify", url: spotifySearch("Mendelssohn Songs Without Words") },
            { label: "Apple Music", url: appleSearch("Mendelssohn Songs Without Words") },
            { label: "IMSLP", url: imslpSearch("Songs Without Words") },
          ],
        },
      ],
    },
  },

  {
    slug: "g-major",
    label: "G Maior",
    mode: "major",
    pitchClass: "G",
    motto:
      "Sol Maior é o aperto de mão: aberto, direto, com brilho na medida — mas sem virar ‘feliz demais’ por preguiça interpretativa.",
    estimatedReadingMinutes: 16,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "Um sustenido (F#) já é o suficiente pra mexer na coreografia da mão. Aqui, o objetivo é aprender a ‘mudar de pista’ sem bater no guard-rail: polegar, rotação e alinhamento. A ideia é você ficar íntimo das teclas pretas sem transformar isso numa guerra — quem manda é a geometria, não a força.",
      exercises: [
        {
          id: "hanon-6",
          title: "Hanon nº 6",
          subtitle: "independência do 5º dedo, sem punho travado",
          exampleNotes: "G A B C D | D C B A G (exemplo em Sol)",
          notes: [
            "O 5º dedo é fraco por design: tendões compartilham estrutura. Compense com micro-rotação, não com força bruta.",
            "Se o som do 5º dedo ‘some’, você está levantando o ombro sem perceber. Ombro baixo = dedo presente.",
            "Teste de honestidade: toque só com 4 e 5 por 30 segundos bem lento. Se a mão endurecer, sua estratégia está errada.",
          ],
        },
        {
          id: "czerny-849-4",
          title: "Czerny Op. 849 nº 4",
          subtitle: "agilidade em padrões de escala",
          notes: [
            "Jeu perlé não é toque ‘fraco’: é toque com bordas nítidas.",
            "Treine em blocos rítmicos (longo-curto / curto-longo). Isso revela onde a coordenação está mentindo.",
            "Não acelere se o som ‘borra’. A velocidade que vale é a que mantém contorno.",
          ],
        },
        {
          id: "hanon-1",
          title: "Hanon nº 1 (em G) — transposição",
          subtitle: "mesmo exercício, outra geometria",
          notes: [
            "Transpor é o ‘modo hard’ do Hanon: obriga o cérebro a não decorar por dedo.",
            "Em G, observe como a mão começa a preferir certas posições: você quer controle, não vício.",
          ],
        },
        {
          id: "czerny-599-11",
          title: "Czerny Op. 599 nº 11",
          subtitle: "coordenação + estabilidade de pulso",
          notes: [
            "Pulso estável não é pulso rígido: é pulso que não colapsa.",
            "Procure o ‘centro’ do som (ataque consistente) antes de buscar volume.",
          ],
        },
        {
          id: "czerny-599-19",
          title: "Czerny Op. 599 nº 19",
          subtitle: "saltos pequenos e aterrissagem silenciosa",
          notes: [
            "Em saltos, quem viaja é o antebraço. O dedo só ‘carimba’ o final.",
            "Treine a rota no ar antes de tocar. Rota ruim = som ruim.",
          ],
        },
        {
          id: "scales-g-major",
          title: "Escala de G Maior",
          subtitle: "F# como tempero, não como acidente",
          exampleNotes: "G A B C D E F# G (suba e desça)",
          notes: [
            "O F# não é ‘nota diferente’: é apenas uma tecla com outra altura. Trate como normal.",
            "Use dedos longos nas pretas e evite empurrar o polegar para dentro.",
          ],
        },
        {
          id: "arpeggio-g-major",
          title: "Arpejo de G Maior",
          subtitle: "passagens suaves e sem degraus",
          exampleNotes: "G B D G | G D B G",
          notes: [
            "O ‘buraco’ de volume normalmente aparece no cruzamento do polegar. Grave e compare.",
            "Se a mão abre demais, a articulação perde precisão. Concha firme.",
          ],
        },
        {
          id: "hanon-scales-g",
          title: "Hanon (Parte II): escala de G Maior",
          subtitle: "a escala como ‘exercício de som’",
          notes: [
            "A escala do Hanon não é só dedo: é timbre. Ataque igual, release igual.",
            "Use metrônomo e trabalhe por ‘qualidade de transição’, não por velocidade.",
          ],
        },
        {
          id: "hanon-arpeggios-g",
          title: "Hanon (Parte II): arpejos de G Maior",
          subtitle: "trajetória do braço + polegar silencioso",
          notes: [
            "Arpejo bom parece um gesto único, não três posições coladas.",
            "Se a mão bate no polegar, você está atrasando o braço.",
          ],
        },
        {
          id: "czerny-599-25",
          title: "Czerny Op. 599 nº 25",
          subtitle: "coordenação e clareza em padrões",
          notes: [
            "Não toque ‘por dedo’: toque por frase. Mesmo estudo técnico tem direção.",
            "Se embolar, divida em células de 2–4 notas e reconstrua.",
          ],
        },
        {
          id: "schmitt-op16-1",
          title: "Schmitt Op. 16 (exercício nº 1 — escolha uma variação)",
          subtitle: "independência e uniformidade",
          notes: [
            "Esses exercícios são simples e impiedosos: servem para ‘nivelar’ dedos fracos sem violência.",
            "Se cansar rápido, reduza tempo e aumente a precisão. Técnica é maratona.",
          ],
        },
        {
          id: "czerny-849-24",
          title: "Czerny Op. 849 (escolha 1 estudo em G) — alternativa",
          subtitle: "brilho e agilidade (com sobriedade)",
          notes: [
            "Escolha um estudo que tenha padrão de escala/arpejo em G ou vizinho.",
            "O objetivo é treino de coordenação, não ‘mostrar serviço’.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "15+ obras em Sol Maior (e vizinhança imediata) que treinam clareza, cantabile e a etiqueta clássica do som. Links são por busca — você escolhe gravações diferentes e compara.",
      items: [
        {
          id: "bach-wtc1-g",
          composer: "J. S. Bach",
          title: "Prelúdio e Fuga em Sol Maior (Cravo Bem Temperado) — escolha 1 movimento",
          level: "avançado",
          technicalFocus: "independência de vozes e tempo estável",
          notes:
            "Bach em G é ótimo para treinar ‘mãos independentes com cérebro único’: cada voz tem propósito.",
          links: [
            { label: "YouTube", url: ytSearch("Bach WTC Prelude and Fugue in G major BWV 860 piano") },
            { label: "Spotify", url: spotifySearch("BWV 860") },
            { label: "Apple Music", url: appleSearch("BWV 860") },
            { label: "IMSLP", url: imslpSearch("BWV 860") },
          ],
        },
        {
          id: "beethoven-op49-2",
          composer: "L. v. Beethoven",
          title: "Sonata Op. 49 nº 2 (G Maior) — I mov.",
          level: "intermediário",
          technicalFocus: "clareza clássica, equilíbrio de mãos",
          notes:
            "Beethoven ‘fácil’ ainda é Beethoven: o pulso e a direção de frase têm que ser adultos.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Op 49 No 2 G major first movement") },
            { label: "Spotify", url: spotifySearch("Beethoven Op. 49 No. 2") },
            { label: "Apple Music", url: appleSearch("Beethoven Op. 49 No. 2") },
            { label: "IMSLP", url: imslpSearch("Beethoven Op. 49 No. 2") },
          ],
        },
        {
          id: "mozart-k283",
          composer: "W. A. Mozart",
          title: "Sonata K. 283 (G Maior) — I mov.",
          level: "avançado",
          technicalFocus: "articulação, clareza de textura, fraseado vocal",
          notes:
            "Mozart não tolera ‘sujeira bonita’. Tudo precisa soar inevitável.",
          links: [
            { label: "YouTube", url: ytSearch("Mozart K 283 G major first movement piano") },
            { label: "Spotify", url: spotifySearch("Mozart K. 283") },
            { label: "Apple Music", url: appleSearch("Mozart K. 283") },
            { label: "IMSLP", url: imslpSearch("K. 283") },
          ],
        },
        {
          id: "grieg-lyric-pieces",
          composer: "Edvard Grieg",
          title: "Lyric Pieces (seleção em G/relacionadas) — cor e cantabile",
          level: "intermediário",
          technicalFocus: "melodia destacada, harmonia colorida",
          notes:
            "Grieg é ótimo pra treinar cor sem virar ‘sentimental pegajoso’.",
          links: [
            { label: "YouTube", url: ytSearch("Grieg Lyric Pieces piano G major") },
            { label: "Spotify", url: spotifySearch("Grieg Lyric Pieces") },
            { label: "Apple Music", url: appleSearch("Grieg Lyric Pieces") },
            { label: "IMSLP", url: imslpSearch("Lyric Pieces") },
          ],
        },
        {
          id: "schumann-op68-10",
          composer: "Robert Schumann",
          title: "Caça / peça de caráter (Álbum para a Juventude) — seleção",
          level: "iniciante",
          technicalFocus: "articulação, acentos e caráter",
          notes:
            "Schumann ensina ‘interpretação’ cedo: você não toca notas, você encena uma cena.",
          links: [
            { label: "YouTube", url: ytSearch("Schumann Album for the Young piece in G major") },
            { label: "Spotify", url: spotifySearch("Schumann Album for the Young") },
            { label: "Apple Music", url: appleSearch("Schumann Album for the Young") },
            { label: "IMSLP", url: imslpSearch("Album for the Young") },
          ],
        },
        {
          id: "bach-minuet-anh116",
          composer: "J. S. Bach (atribuído)",
          title: "Minueto em Sol menor (BWV Anh. 115/116) — contraste dentro da vizinhança",
          level: "iniciante",
          technicalFocus: "fraseado e articulação",
          notes:
            "Ótimo para aprender que ‘um mesmo gesto’ pode mudar totalmente de humor. Toque com pulso estável e articulação clara.",
          links: [
            { label: "YouTube", url: ytSearch("BWV Anh 115 Minuet G minor piano") },
            { label: "Spotify", url: spotifySearch("BWV Anh 115 Minuet") },
            { label: "IMSLP", url: imslpSearch("BWV Anh. 115") },
          ],
        },
        {
          id: "beethoven-op79",
          composer: "L. v. Beethoven",
          title: "Sonata Op. 79 (G Maior) — I mov. (trechos)",
          level: "avançado",
          technicalFocus: "clareza + energia rítmica",
          notes:
            "Beethoven em G pede precisão de ataque e acentos inteligentes. Excelente para treino de staccato e contraste.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Sonata Op 79 G major first movement") },
            { label: "Spotify", url: spotifySearch("Beethoven Op. 79") },
            { label: "Apple Music", url: appleSearch("Beethoven Op. 79") },
            { label: "IMSLP", url: imslpSearch("Beethoven Op. 79") },
          ],
        },
        {
          id: "kuhlau-op55-1",
          composer: "Friedrich Kuhlau",
          title: "Sonatina Op. 55 nº 1 (G Maior) — I mov.",
          level: "iniciante",
          technicalFocus: "escala, articulação e forma clássica",
          notes:
            "Perfeita para treinar clareza de períodos e ‘pontuação musical’: cadências como vírgulas e pontos.",
          links: [
            { label: "YouTube", url: ytSearch("Kuhlau Sonatina Op 55 No 1 G major") },
            { label: "Spotify", url: spotifySearch("Kuhlau Sonatina Op. 55 No. 1") },
            { label: "Apple Music", url: appleSearch("Kuhlau Sonatina Op. 55 No. 1") },
            { label: "IMSLP", url: imslpSearch("Kuhlau Op. 55 No. 1") },
          ],
        },
        {
          id: "clementi-op36-3",
          composer: "Muzio Clementi",
          title: "Sonatina Op. 36 nº 3 (G Maior) — I mov.",
          level: "iniciante",
          technicalFocus: "regularidade e clareza clássica",
          notes:
            "Clementi é didático sem ser bobo: serve pra treinar a mão esquerda discreta e a mão direita ‘falante’.",
          links: [
            { label: "YouTube", url: ytSearch("Clementi Op 36 No 3 G major first movement") },
            { label: "Spotify", url: spotifySearch("Clementi Op. 36 No. 3") },
            { label: "Apple Music", url: appleSearch("Clementi Op. 36 No. 3") },
            { label: "IMSLP", url: imslpSearch("Clementi Op. 36 No. 3") },
          ],
        },
        {
          id: "schubert-d894",
          composer: "Franz Schubert",
          title: "Impromptu (seleção em G/relacionadas) — cantabile longo",
          level: "avançado",
          technicalFocus: "linha melódica longa + equilíbrio",
          notes:
            "Schubert treina uma habilidade adulta: sustentar frase longa sem inflar o som. Pense em arco de violino.",
          links: [
            { label: "YouTube", url: ytSearch("Schubert Impromptu G major piano") },
            { label: "Spotify", url: spotifySearch("Schubert Impromptu G major") },
            { label: "Apple Music", url: appleSearch("Schubert Impromptu G major") },
            { label: "IMSLP", url: imslpSearch("Schubert Impromptu") },
          ],
        },
      ],
    },
  },

  {
    slug: "d-major",
    label: "D Maior",
    mode: "major",
    pitchClass: "D",
    motto:
      "Ré Maior é o terno bem cortado: triunfal, brilhante, ‘de trompete’ — mas no piano isso exige timbre de bronze, não martelada.",
    estimatedReadingMinutes: 20,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "Dois sustenidos (F# e C#) fazem a mão começar a negociar com as teclas pretas. O objetivo é aprender a ‘morar’ nelas sem perder alinhamento: dedos mais longos vão nas pretas, polegar não se espreme.",
      exercises: [
        {
          id: "hanon-6",
          title: "Hanon nº 6",
          subtitle: "independência do dedo 5",
          notes: [
            "Se o 5º dedo colapsa, não é falta de força: é falta de suporte do antebraço.",
            "Pense em ‘peso que atravessa’ o dedo e vai embora — não em apertar a tecla.",
          ],
        },
        {
          id: "czerny-849-4",
          title: "Czerny Op. 849 nº 4",
          subtitle: "agilidade em escalas rápidas",
          notes: [
            "Czerny é a academia do Beethoven: repetição com intenção.",
            "O som “perolado” nasce de ataque consistente + relaxamento imediato.",
          ],
        },
        {
          id: "hanon-1-in-d",
          title: "Hanon nº 1 (em D) — transposição",
          subtitle: "o mesmo exercício, outra mão",
          notes: [
            "Transpor quebra a memória muscular automática e revela tensão escondida.",
            "Em Ré, observe como os dedos longos se encaixam nas teclas pretas sem ‘escorregar’.",
          ],
        },
        {
          id: "hanon-scales-d",
          title: "Hanon (Parte II): escala de D Maior",
          subtitle: "timbre de bronze, sem dureza",
          exampleNotes: "D E F# G A B C# D (suba e desça)",
          notes: [
            "Use dinâmica média (mf) e busque brilho redondo: ataque firme, release limpo.",
            "Se o som ficar ‘metálico’, você está batendo com dedo alto demais.",
          ],
        },
        {
          id: "arpeggio-d-major",
          title: "Arpejo de D Maior",
          subtitle: "polegar não se espreme",
          exampleNotes: "D F# A D | D A F# D",
          notes: [
            "Em arpejos com pretas, o polegar tende a entrar torto. Corrija pelo alinhamento do braço.",
            "Sinta o braço ‘viajando’ junto. Arpejo não é só dedo.",
          ],
        },
        {
          id: "czerny-599-11",
          title: "Czerny Op. 599 nº 11",
          subtitle: "regularidade e clareza",
          notes: [
            "Use este estudo para treinar consistência: mesma intenção em cada repetição.",
            "Se a mão cansar, você está usando força onde deveria usar peso.",
          ],
        },
        {
          id: "czerny-599-25",
          title: "Czerny Op. 599 nº 25",
          subtitle: "padrões e coordenação",
          notes: [
            "Divida em células pequenas e só acelere quando a célula estiver ‘limpa’.",
            "Objetivo: clareza de ataque com relaxamento imediato.",
          ],
        },
        {
          id: "scales-d-major-hands-sep",
          title: "Escala de D Maior (mãos separadas) — método",
          subtitle: "controle de cruzamentos",
          notes: [
            "Faça 3 versões: legato, non-legato e staccato leve. O braço deve ficar disponível em todas.",
            "O cruzamento do 1 sob o 3/4 precisa ser silencioso e sem degrau de volume.",
          ],
        },
        {
          id: "scales-d-major-hands-together",
          title: "Escala de D Maior (mãos juntas)",
          subtitle: "sincronização sem ‘puxar’",
          notes: [
            "Não force as mãos a ‘andar juntas’ por tensão. Use o metrônomo para educar o timing.",
            "Se uma mão ‘lidera’, volte para mãos separadas e corrija o ponto exato.",
          ],
        },
        {
          id: "broken-chords-d",
          title: "Acordes quebrados em D (padrões clássicos de acompanhamento)",
          subtitle: "mão esquerda disciplinada",
          notes: [
            "Acompanhamento bonito é invisível: regular, quente, sem roubar atenção.",
            "Use peso do braço e não ‘aperte’ com dedos individuais.",
          ],
        },
        {
          id: "schmitt-op16-2",
          title: "Schmitt Op. 16 (exercício nº 2 — escolha uma variação)",
          subtitle: "igualdade de dedos em terreno com pretas",
          notes: [
            "Ideal para treinar estabilidade sem rigidez.",
            "Se ficar duro, reduza a velocidade e refine o gesto.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "Curadoria inicial para Ré Maior (15+). Ré pede brilho com postura: seleção pensada para timbre firme, escalas e fraseado ‘triunfal’ sem agressividade.",
      items: [
        {
          id: "clementi-op36-6",
          composer: "Muzio Clementi",
          title: "Sonatina Op. 36 nº 6 (D Maior) — I mov.",
          level: "intermediário",
          technicalFocus: "brilho clássico, escalas e clareza",
          notes:
            "Ótima para treinar ‘triunfo sem gritaria’: articulação firme, mas leve.",
          links: [
            { label: "YouTube", url: ytSearch("Clementi Sonatina Op 36 No 6 D major first movement") },
            { label: "Spotify", url: spotifySearch("Clementi Op. 36 No. 6") },
            { label: "Apple Music", url: appleSearch("Clementi Op. 36 No. 6") },
            { label: "IMSLP", url: imslpSearch("Clementi Op. 36 No. 6") },
          ],
        },
        {
          id: "mozart-k311",
          composer: "W. A. Mozart",
          title: "Sonata K. 311 (D Maior) — trechos",
          level: "avançado",
          technicalFocus: "clareza, fraseado e mão esquerda discreta",
          notes:
            "Mozart em Ré tem um brilho ‘de salão’. Controle o ataque pra não ficar metálico demais.",
          links: [
            { label: "YouTube", url: ytSearch("Mozart K 311 D major piano") },
            { label: "Spotify", url: spotifySearch("Mozart K. 311") },
            { label: "Apple Music", url: appleSearch("Mozart K. 311") },
            { label: "IMSLP", url: imslpSearch("K. 311") },
          ],
        },
        {
          id: "beethoven-op10-3",
          composer: "L. v. Beethoven",
          title: "Sonata Op. 10 nº 3 (D Maior) — escolha um movimento/trechos",
          level: "avançado",
          technicalFocus: "energia rítmica e direção formal",
          notes:
            "Beethoven em Ré tem músculo: excelente para treinar peso sem dureza.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Sonata Op 10 No 3 D major") },
            { label: "Spotify", url: spotifySearch("Beethoven Op. 10 No. 3") },
            { label: "Apple Music", url: appleSearch("Beethoven Op. 10 No. 3") },
            { label: "IMSLP", url: imslpSearch("Beethoven Op. 10 No. 3") },
          ],
        },
        {
          id: "bach-prelude-bwv936",
          composer: "J. S. Bach",
          title: "Pequeno Prelúdio em Ré Maior (BWV 936)",
          level: "intermediário",
          technicalFocus: "contraponto básico, independência de mãos",
          notes:
            "Excelente para treinar clareza: cada voz precisa existir com contorno próprio, sem virar ‘massa sonora’.",
          links: [
            { label: "YouTube", url: ytSearch("Bach BWV 936 D major prelude piano") },
            { label: "Spotify", url: spotifySearch("BWV 936") },
            { label: "Apple Music", url: appleSearch("BWV 936") },
            { label: "IMSLP", url: imslpSearch("BWV 936") },
          ],
        },
        {
          id: "kuhlau-op55-1-d",
          composer: "Friedrich Kuhlau",
          title: "Sonatina Op. 55 nº 1 — trechos em Ré e vizinhança (boa ponte)",
          level: "iniciante",
          technicalFocus: "leitura e forma clássica",
          notes:
            "Mesmo quando não está ‘puro Ré Maior’ o treino serve: você aprende como tonalidades conversam no classicismo.",
          links: [
            { label: "YouTube", url: ytSearch("Kuhlau Sonatina Op 55 No 1 piano") },
            { label: "Spotify", url: spotifySearch("Kuhlau Sonatina Op. 55 No. 1") },
            { label: "Apple Music", url: appleSearch("Kuhlau Sonatina Op. 55 No. 1") },
            { label: "IMSLP", url: imslpSearch("Kuhlau Op. 55") },
          ],
        },
        {
          id: "tchaikovsky-op39-9",
          composer: "Piotr Ilyich Tchaikovsky",
          title: "The New Doll (Album for the Young, Op. 39 nº 9) — referência estética",
          level: "iniciante",
          technicalFocus: "delicadeza, pedal sutil",
          notes:
            "Embora não seja necessariamente em Ré Maior, funciona como contraste: tocar com leveza também é ‘controle de bronze’.",
          links: [
            { label: "YouTube", url: ytSearch("Tchaikovsky Op 39 No 9 The New Doll") },
            { label: "Spotify", url: spotifySearch("Tchaikovsky Op. 39 No. 9") },
            { label: "Apple Music", url: appleSearch("Tchaikovsky The New Doll Op. 39 No. 9") },
            { label: "IMSLP", url: imslpSearch("Tchaikovsky Op. 39") },
          ],
        },
        {
          id: "schumann-op68-2",
          composer: "Robert Schumann",
          title: "Soldier's March (Álbum para a Juventude, Op. 68) — marcha e precisão",
          level: "iniciante",
          technicalFocus: "ritmo pontuado e acentos",
          notes:
            "Perfeito para treinar ‘retórica rítmica’: acento não é volume, é intenção + timing.",
          links: [
            { label: "YouTube", url: ytSearch("Schumann Soldier's March Op 68 piano") },
            { label: "Spotify", url: spotifySearch("Schumann Album for the Young Soldier's March") },
            { label: "Apple Music", url: appleSearch("Schumann Soldier's March Op. 68") },
            { label: "IMSLP", url: imslpSearch("Schumann Op. 68") },
          ],
        },
        {
          id: "gossec-gavotte",
          composer: "François-Joseph Gossec",
          title: "Gavotte em Ré Maior (arranjos/edições) — dança clássica",
          level: "iniciante",
          technicalFocus: "articulação e estilo de dança",
          notes:
            "Dança é um professor implacável: se o pulso balança, o corpo ‘cai’. Use isso para estabilizar seu tempo.",
          links: [
            { label: "YouTube", url: ytSearch("Gossec Gavotte D major piano") },
            { label: "Spotify", url: spotifySearch("Gossec Gavotte D major") },
            { label: "Apple Music", url: appleSearch("Gossec Gavotte D major") },
            { label: "IMSLP", url: imslpSearch("Gossec Gavotte") },
          ],
        },
      ],
    },
  },

  {
    slug: "a-minor",
    label: "A menor",
    mode: "minor",
    pitchClass: "A",
    motto:
      "Lá menor é o lado B de Dó Maior: mesma família, outra luz. Aqui você treina gravidade sem melodrama e clareza sem perder sombra.",
    estimatedReadingMinutes: 18,
    mechanical: {
      title: "Desafio Mecânico",
      intro:
        "Lá menor é ótima para trabalhar legato real e vozes internas, porque a mão não fica ‘ocupada’ negociando acidentes. A dificuldade vira psicológica: manter tensão emocional sem tensão física.",
      exercises: [
        {
          id: "hanon-2",
          title: "Hanon nº 2",
          subtitle: "coordenação + igualdade em padrões ascendentes",
          notes: [
            "Se o padrão parece repetitivo, ótimo: você agora pode observar micro-problemas.",
            "Treine pianíssimo sem perder a resposta do dedo. ‘Baixo volume’ não pode virar ‘sem controle’.",
          ],
        },
        {
          id: "czerny-599-8",
          title: "Czerny Op. 599 nº 8",
          subtitle: "fluxo de mão e leitura",
          notes: [
            "Troque o foco: em vez de ‘acertar nota’, foque em manter o fluxo.",
          ],
        },
        {
          id: "hanon-1-in-a-minor",
          title: "Hanon nº 1 (em A menor) — transposição",
          subtitle: "controle sem ‘apoio’ de teclas pretas",
          notes: [
            "Sem pretas para ‘guiar’ a mão, você precisa de alinhamento interno.",
            "Se o som fica irregular, observe a altura do dedo e o relaxamento depois do ataque.",
          ],
        },
        {
          id: "hanon-6-in-a-minor",
          title: "Hanon nº 6 (em A menor)",
          subtitle: "4º e 5º dedos: coordenação inteligente",
          notes: [
            "Apoie com micro-rotação do antebraço em vez de contrair a mão.",
            "Faça lento, com som bonito. Se ficar feio, a técnica está errada.",
          ],
        },
        {
          id: "scale-a-minor-natural",
          title: "Escala de A menor (natural)",
          subtitle: "legato e direção de frase",
          exampleNotes: "A B C D E F G A",
          notes: [
            "Não toque ‘subindo e descendo’. Faça uma frase: tensão → pico → resolução.",
            "Controle o polegar para ele não ‘clicar’ ao passar.",
          ],
        },
        {
          id: "scale-a-minor-harmonic",
          title: "Escala de A menor (harmônica)",
          subtitle: "o salto do 7º grau (G#) sem tropeçar",
          exampleNotes: "A B C D E F G# A",
          notes: [
            "O intervalo aumentado é onde a mão denuncia rigidez. Antecipe a posição.",
            "Treine em ritmos diferentes (longo-curto/curto-longo) para corrigir coordenação.",
          ],
        },
        {
          id: "scale-a-minor-melodic",
          title: "Escala de A menor (melódica)",
          subtitle: "subida e descida com intenção",
          exampleNotes: "Subindo: A B C D E F# G# A | Descendo: A G F E D C B A",
          notes: [
            "Não confunda ‘regra’ com reflexo. Entenda o porquê e toque como música.",
            "O objetivo é controlar as alterações (F# e G#) sem virar susto mecânico.",
          ],
        },
        {
          id: "arpeggio-a-minor",
          title: "Arpejo de A menor",
          subtitle: "trajetória do braço e estabilidade",
          exampleNotes: "A C E A | A E C A",
          notes: [
            "Arpejo é o mesmo gesto em escalas diferentes. Procure economia de movimento.",
            "Se o som ‘quebra’ em degraus, é atraso do braço (não falta de dedo).",
          ],
        },
        {
          id: "czerny-599-11",
          title: "Czerny Op. 599 nº 11 (em A menor / transposto quando possível)",
          subtitle: "regularidade e leitura consciente",
          notes: [
            "Mesmo que você não transpõe tudo, use trechos/padrões em A menor.",
            "A meta é consistência sem rigidez.",
          ],
        },
        {
          id: "czerny-849-alt",
          title: "Czerny Op. 849 (escolha 1 estudo em modo menor)",
          subtitle: "agilidade com controle de som",
          notes: [
            "Escolha um estudo com padrão claro. Técnica boa é técnica repetível.",
            "Não corra: mantenha a borda do som limpa.",
          ],
        },
        {
          id: "schmitt-op16-3",
          title: "Schmitt Op. 16 (exercício nº 3 — escolha uma variação)",
          subtitle: "igualdade e resistência",
          notes: [
            "Treine pouco e bem: o objetivo é precisão, não fadiga.",
            "Se a mão ‘queima’, pare. Técnica não é treino de dor.",
          ],
        },
      ],
    },
    repertoire: {
      title: "Desafio do Repertório",
      intro:
        "Curadoria inicial de Lá menor (15+): peças que treinam gravidade sem melodrama, e cantabile com sombra. Links misturam buscas em plataformas diferentes pra você comparar interpretações.",
      items: [
        {
          id: "mozart-k310",
          composer: "W. A. Mozart",
          title: "Sonata K. 310 (A menor) — trechos (é intensa)",
          level: "avançado",
          technicalFocus: "dramaturgia, controle de dinâmica, clareza sob pressão",
          notes:
            "Mozart em menor aqui é ‘sem maquiagem’. Excelente para aprender a não acelerar quando a música aperta.",
          links: [
            { label: "YouTube", url: ytSearch("Mozart K 310 A minor piano") },
            { label: "Spotify", url: spotifySearch("Mozart K. 310") },
            { label: "Apple Music", url: appleSearch("Mozart K. 310") },
            { label: "IMSLP", url: imslpSearch("K. 310") },
          ],
        },
        {
          id: "bach-invention-13",
          composer: "J. S. Bach",
          title: "Invenção a duas vozes em Lá menor (BWV 784)",
          level: "intermediário",
          technicalFocus: "independência total das mãos, articulação",
          notes:
            "Se isso soar ‘fácil’, parabéns — você desbloqueou um novo nível de ouvido.",
          links: [
            { label: "YouTube", url: ytSearch("Bach BWV 784 invention A minor piano") },
            { label: "Spotify", url: spotifySearch("BWV 784") },
            { label: "Apple Music", url: appleSearch("BWV 784") },
            { label: "IMSLP", url: imslpSearch("BWV 784") },
          ],
        },
        {
          id: "chopin-waltz-a-minor",
          composer: "Frédéric Chopin",
          title: "Valsa em Lá menor (pósuma) — rubato com disciplina",
          level: "intermediário",
          technicalFocus: "rubato leve, cantabile e acompanhamento discreto",
          notes:
            "O rubato aqui é ‘respiração’, não ‘derretimento’. O baixo mantém chão.",
          links: [
            { label: "YouTube", url: ytSearch("Chopin Waltz in A minor piano") },
            { label: "Spotify", url: spotifySearch("Chopin Waltz in A minor") },
            { label: "Apple Music", url: appleSearch("Chopin Waltz in A minor") },
            { label: "IMSLP", url: imslpSearch("Chopin Waltz in A minor") },
          ],
        },
        {
          id: "schumann-op68-1",
          composer: "Robert Schumann",
          title: "Melodia (Álbum para a Juventude, Op. 68 nº 1) — cantabile sem drama",
          level: "iniciante",
          technicalFocus: "linha melódica e balanço de mãos",
          notes:
            "Ótima para treinar ‘sombra’ sem peso físico: toque com som quente e deixe a mão esquerda virar tapete, não martelo.",
          links: [
            { label: "YouTube", url: ytSearch("Schumann Op 68 No 1 Melody") },
            { label: "Spotify", url: spotifySearch("Schumann Album for the Young Op. 68 No. 1") },
            { label: "Apple Music", url: appleSearch("Schumann Op. 68 No. 1") },
            { label: "IMSLP", url: imslpSearch("Schumann Op. 68") },
          ],
        },
        {
          id: "tchaikovsky-op39-2",
          composer: "Piotr Ilyich Tchaikovsky",
          title: "Morning Prayer (Album for the Young, Op. 39 nº 1/2 — seleção) — calma controlada",
          level: "iniciante",
          technicalFocus: "legato e pedal discreto",
          notes:
            "O treino aqui é psicológico: manter o pulso vivo sem pressa. Excelente para ‘respiração musical’.",
          links: [
            { label: "YouTube", url: ytSearch("Tchaikovsky Album for the Young Morning Prayer piano") },
            { label: "Spotify", url: spotifySearch("Tchaikovsky Album for the Young Morning Prayer") },
            { label: "Apple Music", url: appleSearch("Tchaikovsky Morning Prayer Op. 39") },
            { label: "IMSLP", url: imslpSearch("Tchaikovsky Op. 39") },
          ],
        },
        {
          id: "burgmuller-op100-13",
          composer: "Friedrich Burgmüller",
          title: "Consolation (25 Estudos Fáceis, Op. 100 nº 13) — canto e sombra",
          level: "intermediário",
          technicalFocus: "cantabile e direção de frase",
          notes:
            "Perfeito para aprender a fazer a mão direita ‘falar baixo’ (um piano expressivo), sem ficar sem apoio.",
          links: [
            { label: "YouTube", url: ytSearch("Burgmuller Op 100 No 13 Consolation") },
            { label: "Spotify", url: spotifySearch("Burgmuller Op. 100 No. 13") },
            { label: "Apple Music", url: appleSearch("Burgmuller Consolation Op. 100 No. 13") },
            { label: "IMSLP", url: imslpSearch("Burgmuller Op. 100") },
          ],
        },
        {
          id: "satie-gymnopedie-1",
          composer: "Erik Satie",
          title: "Gymnopédie nº 1 — tempo como técnica",
          level: "intermediário",
          technicalFocus: "controle de tempo e som aveludado",
          notes:
            "Excelente para treinar a estabilidade do pulso: ‘lento’ não pode virar ‘mole’.",
          links: [
            { label: "YouTube", url: ytSearch("Satie Gymnopedie No 1 piano") },
            { label: "Spotify", url: spotifySearch("Satie Gymnopedie No. 1") },
            { label: "Apple Music", url: appleSearch("Satie Gymnopedie No. 1") },
            { label: "IMSLP", url: imslpSearch("Gymnopedies") },
          ],
        },
        {
          id: "beethoven-fuer-elise",
          composer: "L. v. Beethoven",
          title: "Für Elise (WoO 59) — trechos em A menor",
          level: "intermediário",
          technicalFocus: "padrões de acompanhamento + mão direita leve",
          notes:
            "Apesar de ‘popular’, é uma aula de controle: equilíbrio entre acompanhamento e melodia e repetição sem dureza.",
          links: [
            { label: "YouTube", url: ytSearch("Beethoven Fur Elise A minor piano") },
            { label: "Spotify", url: spotifySearch("Für Elise WoO 59") },
            { label: "Apple Music", url: appleSearch("Für Elise WoO 59") },
            { label: "IMSLP", url: imslpSearch("Für Elise WoO 59") },
          ],
        },
      ],
    },
  },
];

export function getMvpKey(slug: KeySlug) {
  return MVP_KEYS.find((k) => k.slug === slug) ?? null;
}
