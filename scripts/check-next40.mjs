import fs from "node:fs";

const deep = fs.readFileSync("src/content/repertoireDeepDive.ts", "utf8");
const ids = JSON.parse(fs.readFileSync("docs/repertoire_ids.json", "utf8")).slice(40, 80);

const done = [];
const missing = [];

for (const id of ids) {
  if (deep.includes(`"${id}": {`)) done.push(id);
  else missing.push(id);
}

console.log(`next40 done: ${done.length}`);
console.log(`next40 missing: ${missing.length}`);
if (missing.length) {
  console.log("\nMissing IDs:\n" + missing.join("\n"));
}
