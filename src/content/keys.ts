export type KeyMode = "major" | "minor";

export type KeySlug =
  | "c-major"
  | "g-major"
  | "d-major"
  | "a-minor";

export type Exercise = {
  id: string;
  title: string;
  subtitle?: string;
  exampleNotes?: string; // e.g. "C D E F G"
  notes: string[];
};

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
  context: {
    title: string;
    intro: string;
    topics: { title: string; bullets: string[] }[];
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
          exampleNotes: "C D E F G F E D (padrão exemplo) — repita e desloque",
          notes: [
            "Toque como se cada dedo tivesse o mesmo sobrenome — nada de privilegiar 1 e 2.",
            "Procure micro-rotação do antebraço para estabilizar 4 e 5 sem travar o punho.",
            "Se o som fica ‘duro’, a causa comum é elevar demais os dedos: pense em dedos curtos, articulação mínima e peso controlado.",
            "Regra de ouro: quando um dedo desce, o resto do braço não precisa ‘cair junto’. Ataque é local; peso é global.",
          ],
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
          notes: [
            "4 e 5 são ‘irmãos siameses’ por tendões: independência total é mito; coordenação inteligente é a meta.",
            "Use rotação como um volante pequeno: quase invisível. Se parecer ‘dança’, é demais.",
          ],
        },
        {
          id: "scales-c-major",
          title: "Escala de C Maior (prática guiada)",
          subtitle: "legato real, polegar silencioso",
          exampleNotes: "C D E F G A B C (suba e desça, 2 oitavas se der)",
          notes: [
            "O polegar não deve ‘cavar’ a tecla. Ele entra de lado com a unha apontando para o próximo dedo — sensação de deslize.",
            "Treine mãos separadas em dinâmica baixa: controle é mais difícil quando o som não ‘mascara’ irregularidade.",
            "Meta de qualidade: volume contínuo, sem degraus nos cruzamentos.",
          ],
        },
        {
          id: "arpeggio-c-major",
          title: "Arpejo de C Maior",
          subtitle: "alinhamento e trajetória do braço",
          exampleNotes: "C E G C | C G E C (1–3–5–1)",
          notes: [
            "Não ‘torça’ o punho pra alcançar: o braço viaja junto.",
            "A mão forma uma concha estável; os dedos mudam dentro dela.",
          ],
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
    context: {
      title: "Desafio do Contexto",
      intro:
        "Em Dó Maior, dá pra falar do que o piano virou quando saiu do salão aristocrático e começou a morar no apartamento burguês: o instrumento como ‘mídia social’ do século XIX. Quem tocava bem era literalmente alguém.",
      topics: [
        {
          title: "O piano como tecnologia doméstica",
          bullets: [
            "A evolução de mecanismo e estrutura (mais tensão de corda, mais potência) mudou o que era ‘técnica’.",
            "O repertório ‘para casa’ cresce: sonatinas, álbuns infantis, peças de caráter — o mercado editorial manda muito.",
          ],
        },
        {
          title: "Neutralidade não existe",
          bullets: [
            "Mesmo ‘sem acidentes’, você escolhe retórica: fraseado, articulação e hierarquia de vozes.",
            "Ouvir vozes internas é o grande divisor entre tocar e ‘falar piano’.",
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
    context: {
      title: "Desafio do Contexto",
      intro:
        "Sol Maior é um bom lugar para falar da ascensão do repertório doméstico e do gosto burguês: música como educação moral, etiqueta e status. O piano vira ‘mobiliário sonoro’.",
      topics: [
        {
          title: "Pedagogia e mercado",
          bullets: [
            "Compositores escrevem sonatinas e coleções para vender: isso molda o que virou ‘técnica básica’.",
            "O aluno não é só artista: é consumidor. O repertório se adapta.",
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
        ...Array.from({ length: 10 }).map((_, i) => ({
          id: `g-major-extra-${i + 1}`,
          composer: "Curadoria (a preencher com obras específicas)",
          title: `Sugestão extra ${i + 1} — obra em G Maior (ou vizinha)`,
          level: "iniciante" as const,
          technicalFocus: "clareza e cantabile",
          notes:
            "Entrada planejada para ser substituída por obra específica com múltiplos links e comentário. Estrutura pronta para expansão.",
          links: [
            { label: "YouTube" as const, url: ytSearch("piano piece in G major") },
            { label: "Spotify" as const, url: spotifySearch("piano in G major") },
            { label: "Apple Music" as const, url: appleSearch("piano in G major") },
            { label: "IMSLP" as const, url: imslpSearch("G major piano") },
          ],
        })),
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
    context: {
      title: "Desafio do Contexto",
      intro:
        "Ré Maior é um portal perfeito para Viena e o século XVIII/XIX: guerras, burguesia, indústria e o piano virando um bicho mais potente. Onde tem aço e madeira, tem política.",
      topics: [
        {
          title: "Do cravo ao piano robusto",
          bullets: [
            "Mudança de mecânica e tensão de cordas altera a escrita: mais dinâmica, mais legato, mais ‘peso’.",
            "As guerras e a indústria impactam materiais; a produção em massa muda o acesso ao instrumento.",
          ],
        },
        {
          title: "Clementi vs. Mozart (o ringue elegante)",
          bullets: [
            "Duelo de 1781 diante do Imperador José II: virtuose como entretenimento de elite.",
            "Clementi foi chamado de ‘mecânico’, mas seu legado é pedagógico — e muito.",
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
        ...Array.from({ length: 12 }).map((_, i) => ({
          id: `d-major-extra-${i + 1}`,
          composer: "Curadoria (a preencher com obras específicas)",
          title: `Sugestão extra ${i + 1} — obra em D Maior (ou vizinha)`,
          level: "iniciante" as const,
          technicalFocus: "timbre brilhante e clareza",
          notes:
            "Entrada planejada para expansão com obras específicas, múltiplos links (YouTube/Spotify/Apple/IMSLP) e comentários.",
          links: [
            { label: "YouTube" as const, url: ytSearch("piano piece in D major") },
            { label: "Spotify" as const, url: spotifySearch("piano in D major") },
            { label: "Apple Music" as const, url: appleSearch("piano in D major") },
            { label: "IMSLP" as const, url: imslpSearch("D major piano") },
          ],
        })),
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
    context: {
      title: "Desafio do Contexto",
      intro:
        "Menor não é ‘triste’: é uma gramática diferente. Falar de tonalidade menor é falar de linguagem, retórica e psicologia musical — e também de como o romantismo vendeu emoção como produto.",
      topics: [
        {
          title: "As três escalas menores e a história por trás",
          bullets: [
            "Natural: herança modal e simplicidade.",
            "Harmônica: o ‘puxão’ do 7º grau para criar dominante mais forte.",
            "Melódica: solução prática para canto/linha melódica, depois ‘virou regra’ pedagógica.",
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
        ...Array.from({ length: 12 }).map((_, i) => ({
          id: `a-minor-extra-${i + 1}`,
          composer: "Curadoria (a preencher com obras específicas)",
          title: `Sugestão extra ${i + 1} — obra em A menor (ou vizinha)`,
          level: "iniciante" as const,
          technicalFocus: "cantabile e direção de frase",
          notes:
            "Entrada planejada para expansão: substituir por obra específica com links múltiplos e comentário.",
          links: [
            { label: "YouTube" as const, url: ytSearch("piano piece in A minor") },
            { label: "Spotify" as const, url: spotifySearch("piano in A minor") },
            { label: "Apple Music" as const, url: appleSearch("piano in A minor") },
            { label: "IMSLP" as const, url: imslpSearch("A minor piano") },
          ],
        })),
      ],
    },
  },
];

export function getMvpKey(slug: KeySlug) {
  return MVP_KEYS.find((k) => k.slug === slug) ?? null;
}
