import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const KEYS_PATH = path.join(ROOT, "src", "content", "keys.ts");

function readText(p) {
  return fs.readFileSync(p, "utf8");
}

function parseRepertoireFromKeys(keysSource) {
  // Line-based parser (same spirit as update-repertoire-tracker.mjs)
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
    const level = chunk.match(/\blevel:\s*"([^"]+)"/)?.[1];
    const technicalFocus = chunk.match(/\btechnicalFocus:\s*"([^"]+)"/)?.[1];
    const notes = chunk.match(/\bnotes:\s*\n\s*"([^"]+)"/)?.[1];

    if (id && composer && title && currentKeySlug) {
      out.push({
        keySlug: currentKeySlug,
        id,
        composer,
        title,
        level,
        technicalFocus,
        notes,
      });
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

    if (!inItems) continue;

    // Start of repertoire item object (only when not nested)
    if (braceDepth === 0 && line.trim().startsWith("{")) {
      braceDepth = 1;
      currentItemLines = [line];
      continue;
    }

    if (braceDepth > 0) {
      currentItemLines.push(line);
      const opens = (line.match(/\{/g) || []).length;
      const closes = (line.match(/\}/g) || []).length;
      braceDepth += opens - closes;
      if (braceDepth === 0) pushItemIfComplete();
      continue;
    }

    // End of items array.
    if (line.trim().startsWith("],")) {
      inItems = false;
      inRepertoire = false;
      continue;
    }
  }

  return out;
}

function parseArgs(argv) {
  const args = { ids: [], slice: null, json: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--json") {
      args.json = true;
      continue;
    }
    if (a === "--slice") {
      const from = Number(argv[i + 1]);
      const to = Number(argv[i + 2]);
      if (!Number.isFinite(from) || !Number.isFinite(to)) {
        throw new Error("Uso: --slice <from> <to>");
      }
      args.slice = [from, to];
      i += 2;
      continue;
    }
    args.ids.push(a);
  }
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const keysSource = readText(KEYS_PATH);
  const items = parseRepertoireFromKeys(keysSource);

  let selected = items;
  if (args.slice) {
    selected = items.slice(args.slice[0], args.slice[1]);
  }
  if (args.ids.length) {
    const set = new Set(args.ids);
    selected = items.filter((it) => set.has(it.id));
  }

  if (args.json) {
    console.log(JSON.stringify(selected, null, 2));
    return;
  }

  for (const it of selected) {
    console.log(`${it.id} :: ${it.composer} — ${it.title} [${it.keySlug}]`);
    if (it.technicalFocus) console.log(`  foco: ${it.technicalFocus}`);
    if (it.level) console.log(`  nível: ${it.level}`);
    if (it.notes) console.log(`  notas: ${it.notes}`);
    console.log("");
  }
}

main();
