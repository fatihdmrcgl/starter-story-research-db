const requiredFields = [
  "id",
  "name",
  "category",
  "audience",
  "businessModel",
  "revenueSignal",
  "sourceUrl",
  "evidenceLevel",
  "tags"
];

const evidenceLevels = new Set(["low", "medium", "high"]);

export function validateBusiness(record) {
  const missing = requiredFields.filter((field) => record[field] === undefined || record[field] === null);

  if (missing.length > 0) {
    throw new Error(`Business record is missing required fields: ${missing.join(", ")}`);
  }

  if (!Array.isArray(record.tags)) {
    throw new Error(`Business record ${record.id} must have a tags array.`);
  }

  if (!evidenceLevels.has(record.evidenceLevel)) {
    throw new Error(`Business record ${record.id} has invalid evidenceLevel.`);
  }

  if (record.monthlyRevenueUsd !== null && typeof record.monthlyRevenueUsd !== "number") {
    throw new Error(`Business record ${record.id} monthlyRevenueUsd must be a number or null.`);
  }

  return record;
}
