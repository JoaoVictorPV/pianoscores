import fs from "node:fs";

const deep = fs.readFileSync("src/content/repertoireDeepDive.ts", "utf8");
const first = JSON.parse(fs.readFileSync("docs/repertoire_first40_ids.json", "utf8"));

const done = [];
const missing = [];

for (const id of first) {
  if (deep.includes(`"${id}": {`)) done.push(id);
  else missing.push(id);
}

console.log(`first40 done: ${done.length}`);
console.log(`first40 missing: ${missing.length}`);
if (missing.length) {
  console.log("\nMissing IDs:\n" + missing.join("\n"));
}
