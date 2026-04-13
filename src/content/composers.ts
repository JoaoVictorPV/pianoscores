// Pequenos resumos confiáveis e “rápidos” para aparecerem no drawer.
// Ideia: dar contexto sem virar uma enciclopédia dentro da UI (o texto longo fica em `item.notes`).

type ComposerKey = string;

const BLURBS: Record<ComposerKey, string> = {
  "J. S. Bach":
    "Bach (1685–1750) é o grande arquiteto do contraponto: linhas independentes que fazem sentido juntas. Mesmo no piano moderno, estudar Bach é treinar clareza, direção e ‘ouvir vozes’ como se fossem pessoas conversando — e não um bloco de acordes.",
  "W. A. Mozart":
    "Mozart (1756–1791) parece ‘fácil’ até você tentar tocar com elegância real: clareza de textura, timing cirúrgico e fraseado vocal. É música que expõe qualquer ansiedade rítmica ou dinâmica sem motivo.",
  "L. v. Beethoven":
    "Beethoven (1770–1827) atravessa o classicismo e empurra o piano para uma linguagem mais ‘orquestral’. Estudar Beethoven é aprender energia organizada: acento com propósito, forma como narrativa e som grande sem dureza.",
  "Frédéric Chopin":
    "Chopin (1810–1849) é o laboratório do canto no piano: rubato disciplinado, pedal inteligente e voicing. O desafio não é ‘sentir muito’, é controlar camadas e timbres para a emoção aparecer sem virar borrão.",
  "Franz Schubert":
    "Schubert (1797–1828) é mestre de frase longa e harmonia que muda de cor como luz na janela. Ele treina paciência musical: sustentar linha sem inflar o volume e ouvir a harmonia ‘respirar’.",
  "Robert Schumann":
    "Schumann (1810–1856) escreve como quem descreve cenas e personagens. Excelente para treinar caráter, acento expressivo e vozes internas — sem perder clareza quando a textura fica turbulenta.",
  "Sergei Rachmaninoff":
    "Rachmaninoff (1873–1943) é pianismo de ‘camadas’: som grande, mas organizado. O trabalho real é distribuir peso, controlar voicing e manter clareza mesmo quando a escrita parece uma orquestra no teclado.",
  "Alexander Scriabin":
    "Scriabin (1872–1915) começa romântico e vai ficando cada vez mais harmônico/visionário. Estudar Scriabin é aprender tensão elástica, controle de cor e uma escuta muito fina de função harmônica.",
  "Felix Mendelssohn":
    "Mendelssohn (1809–1847) combina clareza clássica com lirismo romântico. Ótimo para cantabile e para treinar acompanhamento disciplinado: leveza com coluna vertebral.",
  "Edvard Grieg":
    "Grieg (1843–1907) explora cor harmônica e cantabile intimista. Bom para treinar timbre, pedais curtos e ‘aquecimento’ do som sem ficar sentimental pegajoso.",
  "Domenico Scarlatti":
    "Scarlatti (1685–1757) escreveu sonatas cheias de energia rítmica e articulação clara. No piano, é aula de precisão sem rigidez: rápido com leveza e borda nítida.",
  "Joseph Haydn":
    "Haydn (1732–1809) é o cientista do humor musical e da forma. Excelente para treinar timing, clareza e retórica: cada pausa e acento tem função.",
  "Piotr Ilyich Tchaikovsky":
    "Tchaikovsky (1840–1893) une lirismo direto e escrita pianística cantável. Ótimo para narrativa e para aprender a usar pedal como cor, não como cobertor.",
  "Johannes Brahms":
    "Brahms (1833–1897) exige ‘tocar por dentro’: densidade íntima, vozes internas e controle de textura. Treina camadas e som profundo sem esmagar.",
  "Claude Debussy":
    "Debussy (1862–1918) muda a ideia de harmonia e cor: pedal como lente, não como borrão. Serve para treinar transparência, timbres e controle fino de ressonância.",
  "Erik Satie":
    "Satie (1866–1925) parece simples, mas é uma aula de tempo e intenção. Ele treina calma com pulso: lento não pode virar mole.",
  "Béla Bartók":
    "Bartók (1881–1945) é alfabetização rítmica e moderna: acentos, assimetrias e clareza. Excelente antídoto contra ‘clássico automático’.",
  "Muzio Clementi":
    "Clementi (1752–1832) foi compositor, editor e pedagogo: ajudou a consolidar o piano como instrumento doméstico e profissional. Suas sonatinas são laboratório de clareza clássica, escalas e fraseado.",
  "Friedrich Burgmüller":
    "Burgmüller (1806–1874) escreveu estudos pedagógicos que parecem mini-peças. Ótimos para técnica com musicalidade: articulação, frase e caráter, sem virar ginástica vazia.",
  "François-Joseph Gossec":
    "Gossec (1734–1829) circula entre o barroco tardio e o classicismo francês. Danças como gavottes são aula de pulso e estilo: se o ritmo balança, o corpo da dança cai.",
  "John Field":
    "John Field (1782–1837) é o ‘pai do noturno’ no piano. Ele ensina a mão esquerda a ser seda e a direita a cantar com simplicidade — base direta para entender Chopin.",
  "Franz Liszt":
    "Liszt (1811–1886) é virtuosismo com arquitetura. Mesmo em trechos, ele exige planejamento de energia, vozes e narrativa — o tipo de controle que impede ‘barulho bonito’.",
};

export function getComposerBlurb(composer: string) {
  // Normaliza pequenos padrões (ex.: espaços duplos) para bater nas chaves.
  const key = composer.replace(/\s+/g, " ").trim();
  return (
    BLURBS[key] ??
    "Contexto rápido: este compositor/obra vale como laboratório de estilo. Se quiser, eu adiciono um resumo específico (com datas, época e ‘por que isso importa’ para a técnica) para este nome."
  );
}
