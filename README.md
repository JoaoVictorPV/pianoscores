# Cronograma de Piano

**Entre numa tonalidade. Saia com um mundo novo na cabeça.**

Um roteiro online para ensino/estudo de piano com uma pegada de **dicionário enciclopédico interativo**.

O “portal” é o **Círculo das Quintas**: ao tocar em uma tonalidade, você abre um **Simpósio de Estudo** com 4 células:

1) **Desafio Mecânico** (Hanon/Czerny + biomecânica e prática guiada)
2) **Desafio de Afeto** (escala/arpejo + caráter/timbre)
3) **Desafio do Contexto** (história/biografia/política)
4) **Desafio do Repertório** (curadoria com links para YouTube/Spotify/Apple Music/IMSLP)

## Sem banco de dados

O app não usa banco de dados.

Ele salva no **LocalStorage** apenas o progresso do usuário:
- exercícios marcados
- repertório marcado
- “tonalidade concluída”
- streak semanal (baseado em tonalidades concluídas)

## MVP (conteúdo inicial)

- C Maior
- G Maior
- D Maior
- A menor

## Rodando localmente

Pré-requisito: Node.js + npm.

```bash
npm install
npm run dev
```

Abra: http://localhost:3000

## Build

```bash
npm run build
```

## Deploy na Vercel (passo a passo)

1) Entre em https://vercel.com/
2) Clique em **Add New → Project**
3) Importe o repositório do GitHub: `JoaoVictorPV/pianoscores`
4) A Vercel deve detectar automaticamente **Next.js**
5) Clique em **Deploy**

Depois disso, qualquer push na branch **main** vai gerar novo deploy automaticamente.

## Observações

- O projeto foi pensado para **iPad-first**, tema escuro premium, drawer e leitura longa com tópicos expansíveis.
- Links de áudio/partitura são externos (YouTube/Spotify/Apple/IMSLP).

---

## Créditos e stack

- Next.js + TypeScript
- TailwindCSS
- Radix UI (Dialog/Accordion/ScrollArea)
- Zustand + Zod (LocalStorage robusto)
