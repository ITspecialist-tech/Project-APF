import { readFileSync } from "fs";
import YAML from "yaml";

const config = YAML.parse(readFileSync("public/admin/config.yml", "utf8"));
console.log("collections count:", config.collections.length);
console.log("collection names:", config.collections.map((c) => c.name));

const allNames = [];
for (const col of config.collections) {
  allNames.push({ type: "collection", name: col.name });
  if (col.files) {
    for (const f of col.files) {
      allNames.push({ type: "file", collection: col.name, name: f.name });
    }
  }
}
console.log("\nAll names:", allNames);

const fileNames = allNames.filter((n) => n.type === "file").map((n) => n.name);
const dupFiles = fileNames.filter((n, i) => fileNames.indexOf(n) !== i);
console.log("\nDuplicate file template names:", dupFiles);

const colNames = config.collections.map((c) => c.name);
const dupCols = colNames.filter((n, i) => colNames.indexOf(n) !== i);
console.log("Duplicate collection names:", dupCols);

console.log("\nFull JSON:", JSON.stringify(config, null, 2).slice(0, 500));
