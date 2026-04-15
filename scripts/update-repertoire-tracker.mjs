import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const KEYS_PATH = path.join(ROOT, "src", "content", "keys.ts");
const DEEPDIVE_PATH = path.join(ROOT, "src", "content", "repertoireDeepDive.ts");
const OUT_DIR = path.join(ROOT, "docs");
const OUT_PATH = path.join(OUT_DIR, "repertoire_deepdive_tracker.md");
const IDS_PATH = path.join(OUT_DIR, "repertoire_ids.json");
const FIRST40_PATH = path.join(OUT_DIR, "repertoire_first40_ids.json");

function readText(p) {
  return fs.readFileSync(p, "utf8");
}

function extractManualIds(deepDiveSource) {
  // Match object keys inside MANUAL: { "id": { ... } }
  const manualBlock = deepDiveSource.match(/const\s+MANUAL\b[\s\S]*?=\s*\{([\s\S]*?)\n\};/);
  if (!manualBlock) return new Set();
  const body = manualBlock[1];

  const ids = new Set();
  const rx = /\n\s*"([a-z0-9-]+)"\s*:\s*\{/g;
  let m;
  while ((m = rx.exec(body))) ids.add(m[1]);
  return ids;
}

function parseRepertoireFromKeys(keysSource) {
  // Simple line-based parser to avoid importing TS.
  // IMPORTANT: keys.ts contains many type definitions above the actual data.
  // We only parse the `export const MVP_KEYS = [...]` block to avoid false matches.
  const start = keysSource.indexOf("export const MVP_KEYS");
  if (start === -1) return [];
  const slice = keysSource.slice(start);

  const stopAt = slice.indexOf("export function getMvpKey");
  const dataBlock = stopAt === -1 ? slice : slice.slice(0, stopAt);

  const lines = dataBlock.split(/\r?\n/);
  const out = [];

  let currentKeySlug = null;
  let inRepertoire = false;
  let inItems = false;
  let braceDepth = 0;
  let currentItemLines = [];

  const pushItemIfComplete = () => {
    if (!currentItemLines.length) return;
    const chunk = currentItemLines.join("\n");
    const id = chunk.match(/\bid:\s*"([^"]+)"/)?.[1];
    const composer = chunk.match(/\bcomposer:\s*"([^"]+)"/)?.[1];
    const title = chunk.match(/\btitle:\s*"([^"]+)"/)?.[1];
    if (id && composer && title && currentKeySlug) {
      out.push({ keySlug: currentKeySlug, id, composer, title });
    }
    currentItemLines = [];
  };

  for (const line of lines) {
    const slugMatch = line.match(/\bslug:\s*"([a-z0-9-]+)"/);
    if (slugMatch) currentKeySlug = slugMatch[1];

    if (line.includes("repertoire:")) {
      inRepertoire = true;
      continue;
    }
    if (inRepertoire && line.includes("items:")) {
      inItems = true;
      continue;
    }
    if (inItems) {
      // Detect start of item object.
      // Important: only treat as a repertoire item start when we're NOT already inside
      // a different object literal (e.g. link objects like `{ label: "YouTube", ... }`).
      if (braceDepth === 0 && line.trim().startsWith("{")) {
        braceDepth = 1;
        currentItemLines = [line];
        continue;
      }

      if (braceDepth > 0) {
        currentItemLines.push(line);
        // Update brace depth.
        const opens = (line.match(/\{/g) || []).length;
        const closes = (line.match(/\}/g) || []).length;
        braceDepth += opens - closes;
        if (braceDepth === 0) {
          pushItemIfComplete();
        }
        continue;
      }

      // End of items array.
      if (line.trim().startsWith("],")) {
        inItems = false;
        inRepertoire = false;
        continue;
      }
    }
  }

  return out;
}

function groupByKey(items) {
  const map = new Map();
  for (const it of items) {
    if (!map.has(it.keySlug)) map.set(it.keySlug, []);
    map.get(it.keySlug).push(it);
  }
  return map;
}

function main() {
  const keysSource = readText(KEYS_PATH);
  const deepDiveSource = readText(DEEPDIVE_PATH);
  const manualIds = extractManualIds(deepDiveSource);
  const items = parseRepertoireFromKeys(keysSource);

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const grouped = groupByKey(items);
  const keys = Array.from(grouped.keys());

  // Also export an ordered list of repertoire IDs (in the same order as the tracker).
  const orderedIds = [];

  const lines = [];
  lines.push("# Tracker — Deepdives de Repertório");
  lines.push("");
  lines.push("Este arquivo lista **todas as obras sugeridas no site** (repertório) e marca automaticamente quais já têm deepdive manual (enciclopédico) implementado.");
  lines.push("");
  lines.push("**Legenda:**");
  lines.push("- [x] Deepdive manual completo (override em `src/content/repertoireDeepDive.ts`)");
  lines.push("- [ ] Ainda usando deepdive automático (fallback)");
  lines.push("");
  lines.push(`Gerado por: \`node scripts/update-repertoire-tracker.mjs\``);
  lines.push("");

  let total = 0;
  let done = 0;

  for (const keySlug of keys) {
    lines.push(`## ${keySlug}`);
    lines.push("");
    for (const it of grouped.get(keySlug)) {
      const isDone = manualIds.has(it.id);
      total++;
      if (isDone) done++;
      orderedIds.push(it.id);
      lines.push(`- ${isDone ? "[x]" : "[ ]"} **${it.composer}** — ${it.title}  _(id: \`${it.id}\`)_`);
    }
    lines.push("");
  }

  lines.unshift(`> Progresso: **${done}/${total}** deepdives manuais (enciclopédicos) implementados.`);
  lines.unshift("");

  fs.writeFileSync(OUT_PATH, lines.join("\n"), "utf8");
  fs.writeFileSync(IDS_PATH, JSON.stringify(orderedIds, null, 2), "utf8");
  fs.writeFileSync(FIRST40_PATH, JSON.stringify(orderedIds.slice(0, 40), null, 2), "utf8");
  console.log(`Wrote: ${path.relative(ROOT, OUT_PATH)} (${done}/${total} done)`);
  console.log(`Wrote: ${path.relative(ROOT, IDS_PATH)} (total: ${orderedIds.length})`);
  console.log(`Wrote: ${path.relative(ROOT, FIRST40_PATH)} (total: ${Math.min(40, orderedIds.length)})`);
}

main();
