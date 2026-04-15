import fs from "node:fs";

const deep = fs.readFileSync("src/content/repertoireDeepDive.ts", "utf8");
// Batch 81–120 (0-based slice 80..120)
// De-dupe inside the slice because the repertoire list may include intentional repeats
// (same piece used as reference in different keys).
const ids = Array.from(
  new Set(JSON.parse(fs.readFileSync("docs/repertoire_ids.json", "utf8")).slice(80, 120)),
);

const done = [];
const missing = [];

for (const id of ids) {
  if (deep.includes(`"${id}": {`)) done.push(id);
  else missing.push(id);
}

console.log(`next40 done: ${done.length}`);
console.log(`next40 missing: ${missing.length}`);
if (done.length) {
  console.log("\nDone IDs:\n" + done.join("\n"));
}
if (missing.length) {
  console.log("\nMissing IDs:\n" + missing.join("\n"));
}
