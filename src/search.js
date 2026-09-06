function includesText(value, query) {
  return String(value || "").toLowerCase().includes(query);
}

export function searchBusinesses(records, filters = {}) {
  const query = filters.query?.trim().toLowerCase();
  const tag = filters.tag?.trim().toLowerCase();
  const model = filters.model?.trim().toLowerCase();
  const category = filters.category?.trim().toLowerCase();
  const minRevenue = filters.minRevenue === undefined ? undefined : Number(filters.minRevenue);

  return records
    .filter((record) => {
      if (query) {
        const haystack = [
          record.name,
          record.category,
          record.audience,
          record.businessModel,
          record.revenueSignal,
          record.acquisitionChannel,
          record.notes,
          ...(record.tags || [])
        ];

        if (!haystack.some((value) => includesText(value, query))) {
          return false;
        }
      }

      if (tag && !record.tags.some((item) => item.toLowerCase() === tag)) {
        return false;
      }

      if (model && record.businessModel.toLowerCase() !== model) {
        return false;
      }

      if (category && record.category.toLowerCase() !== category) {
        return false;
      }

      if (!Number.isNaN(minRevenue) && minRevenue !== undefined) {
        if (record.monthlyRevenueUsd === null || record.monthlyRevenueUsd < minRevenue) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      const revenueA = a.monthlyRevenueUsd ?? -1;
      const revenueB = b.monthlyRevenueUsd ?? -1;
      return revenueB - revenueA || a.name.localeCompare(b.name);
    });
}

export function getStats(records) {
  const byBusinessModel = {};
  const byCategory = {};
  const byEvidenceLevel = {};

  for (const record of records) {
    byBusinessModel[record.businessModel] = (byBusinessModel[record.businessModel] || 0) + 1;
    byCategory[record.category] = (byCategory[record.category] || 0) + 1;
    byEvidenceLevel[record.evidenceLevel] = (byEvidenceLevel[record.evidenceLevel] || 0) + 1;
  }

  return {
    total: records.length,
    withRevenueAmount: records.filter((record) => typeof record.monthlyRevenueUsd === "number").length,
    byBusinessModel,
    byCategory,
    byEvidenceLevel
  };
}
