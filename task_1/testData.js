const testData = [
  {
    distance: {
      unit: "mm",
      value: 1000,
    },
    convertTo: "m",
    expected: {
      unit: "m",
      value: 1,
    },
  },
  {
    distance: {
      unit: "m",
      value: 0,
    },
    convertTo: "ft",
    expected: {
      unit: "ft",
      value: 0,
    },
  },
  {
    distance: {
      unit: "m",
      value: 3,
    },
    convertTo: "ft",
    expected: {
      unit: "ft",
      value: 9.84,
    },
  },
  {
    distance: {
      unit: "mm",
      value: 100,
    },
    convertTo: "ft",
    expected: {
      unit: "ft",
      value: 0.33,
    },
  },
  {
    distance: {
      unit: "mm",
      value: 500,
    },
    convertTo: "m",
    expected: {
      unit: "m",
      value: 0.5,
    },
  },
  {
    distance: {
      unit: "cm",
      value: 100,
    },
    convertTo: "m",
    expected: {
      unit: "m",
      value: 1,
    },
  },
  {
    distance: {
      unit: "cm",
      value: 100,
    },
    convertTo: "in",
    expected: {
      unit: "in",
      value: 39.37,
    },
  },
  {
    distance: {
      unit: "cm",
      value: 50,
    },
    convertTo: "in",
    expected: {
      unit: "in",
      value: 19.69,
    },
  },
  {
    distance: {
      unit: "cm",
      value: 10,
    },
    convertTo: "m",
    expected: {
      unit: "m",
      value: 0.1,
    },
  },
  {
    distance: {
      unit: "m",
      value: 1,
    },
    convertTo: "in",
    expected: {
      unit: "in",
      value: 39.37,
    },
  },
  {
    distance: {
      unit: "m",
      value: 2,
    },
    convertTo: "in",
    expected: {
      unit: "in",
      value: 78.74,
    },
  },
  {
    distance: {
      unit: "m",
      value: 1,
    },
    convertTo: "ft",
    expected: {
      unit: "ft",
      value: 3.28,
    },
  },
  {
    distance: {
      unit: "m",
      value: 1,
    },
    convertTo: "km",
    expected: {
      unit: "km",
      value: 0,
    },
  },
  {
    distance: {
      unit: "m",
      value: 500,
    },
    convertTo: "km",
    expected: {
      unit: "km",
      value: 0.5,
    },
  },
  {
    distance: {
      unit: "km",
      value: 1,
    },
    convertTo: "m",
    expected: {
      unit: "m",
      value: 1000,
    },
  },
  {
    distance: {
      unit: "in",
      value: 12,
    },
    convertTo: "ft",
    expected: {
      unit: "ft",
      value: 1,
    },
  },
  {
    distance: {
      unit: "ft",
      value: 3,
    },
    convertTo: "yd",
    expected: {
      unit: "yd",
      value: 1,
    },
  },
  {
    distance: {
      unit: "yd",
      value: 1,
    },
    convertTo: "ft",
    expected: {
      unit: "ft",
      value: 3,
    },
  },
];

module.exports = testData;