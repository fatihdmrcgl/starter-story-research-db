import { loadBusinesses } from "./db.js";
import { getStats, searchBusinesses } from "./search.js";

const [command, ...args] = process.argv.slice(2);
const records = await loadBusinesses();

if (command === "stats") {
  console.log(JSON.stringify(getStats(records), null, 2));
} else if (command === "search") {
  const query = args.join(" ");
  const results = searchBusinesses(records, { query });
  console.log(JSON.stringify(results, null, 2));
} else {
  console.log("Usage:");
  console.log("  node src/cli.js stats");
  console.log("  node src/cli.js search <query>");
  process.exitCode = 1;
}
