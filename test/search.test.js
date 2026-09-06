import test from "node:test";
import assert from "node:assert/strict";
import { getStats, searchBusinesses } from "../src/search.js";
import { validateBusiness } from "../src/schema.js";

const records = [
  {
    id: "one",
    name: "One",
    category: "marketing",
    audience: "creators",
    businessModel: "subscription",
    revenueSignal: "verified revenue",
    monthlyRevenueUsd: 1000,
    acquisitionChannel: "newsletter",
    sourceUrl: "https://example.com/one",
    evidenceLevel: "high",
    tags: ["newsletter"],
    notes: "Paid product"
  },
  {
    id: "two",
    name: "Two",
    category: "sales",
    audience: "teams",
    businessModel: "vertical saas",
    revenueSignal: "pricing page",
    monthlyRevenueUsd: null,
    acquisitionChannel: "outbound",
    sourceUrl: "https://example.com/two",
    evidenceLevel: "medium",
    tags: ["crm"],
    notes: "Niche workflow"
  }
];

test("filters by query and tag", () => {
  const results = searchBusinesses(records, { query: "paid", tag: "newsletter" });
  assert.equal(results.length, 1);
  assert.equal(results[0].id, "one");
});

test("builds aggregate stats", () => {
  const stats = getStats(records);
  assert.equal(stats.total, 2);
  assert.equal(stats.withRevenueAmount, 1);
  assert.equal(stats.byBusinessModel.subscription, 1);
});

test("validates required evidence level", () => {
  assert.throws(
    () => validateBusiness({ ...records[0], evidenceLevel: "unknown" }),
    /invalid evidenceLevel/
  );
});
