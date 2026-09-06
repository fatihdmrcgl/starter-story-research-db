import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { validateBusiness } from "./schema.js";

const currentDir = dirname(fileURLToPath(import.meta.url));
const defaultDataPath = join(currentDir, "..", "data", "businesses.json");

export async function loadBusinesses(dataPath = defaultDataPath) {
  const raw = await readFile(dataPath, "utf8");
  const records = JSON.parse(raw);

  if (!Array.isArray(records)) {
    throw new Error("Business database must be a JSON array.");
  }

  return records.map(validateBusiness);
}

export function getBusinessById(records, id) {
  return records.find((record) => record.id === id) || null;
}
