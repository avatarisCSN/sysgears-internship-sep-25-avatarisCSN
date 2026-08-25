function filterData(data, conditions) {
  let result = [...data];

  for (const [ruleName, ruleValue] of Object.entries(conditions)) {
    const rule = rules[ruleName];

    if (rule) {
      result = rule(result, ruleValue);
    }
  }

  return { result };
}

function hasFields(item, fields) {
  return Object.entries(fields).every(
      ([key, value]) => item[key] === value
  );
}

const rules = {
  include(data, patterns) {
    return data.filter((item) =>
        patterns.some((pattern) => hasFields(item, pattern))
    );
  },

  exclude(data, patterns) {
    return data.filter((item) =>
        !patterns.some((pattern) => hasFields(item, pattern))
    );
  },

  sortBy(data, keys) {
    return [...data].sort((a, b) => {
      for (const key of keys) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
      }

      return 0;
    });
  },
};

rules.sort_by = rules.sortBy;

module.exports = {
  filterData,
};
