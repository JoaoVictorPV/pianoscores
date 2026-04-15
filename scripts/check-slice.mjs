import fs from "node:fs";

function usage() {
  console.log("Uso: node scripts/check-slice.mjs <from> <to>");
  console.log("Ex.: node scripts/check-slice.mjs 120 160  (IDs 121–160)");
  process.exit(1);
}

const from = Number(process.argv[2]);
const to = Number(process.argv[3]);
if (!Number.isFinite(from) || !Number.isFinite(to)) usage();

const deep = fs.readFileSync("src/content/repertoireDeepDive.ts", "utf8");
const ids = JSON.parse(fs.readFileSync("docs/repertoire_ids.json", "utf8")).slice(from, to);

const done = [];
const missing = [];

for (const id of ids) {
  if (deep.includes(`"${id}": {`)) done.push(id);
  else missing.push(id);
}

console.log(`slice ${from}:${to} count: ${ids.length}`);
console.log(`done: ${done.length}`);
console.log(`missing: ${missing.length}`);
if (missing.length) {
  console.log("\nMissing IDs:\n" + missing.join("\n"));
}
