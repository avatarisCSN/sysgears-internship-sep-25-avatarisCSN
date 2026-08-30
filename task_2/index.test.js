const data = [
  { name: "John", email: "john2@mail.com" },
  { name: "John", email: "john1@mail.com" },
  { name: "Jane", email: "jane@mail.com" },
  { name: "John", email: "john3@mail.com" },
  { name: "Maria", email: "maria@mail.com" },
  { name: "Peter", email: "peter@mail.com" },
];

let functions = require("./index.js");

beforeEach(() => {
  // we need this to reset state of any additional vars and functions, that can be created in index.js
  jest.resetModules();
  jest.restoreAllMocks();
  functions = require("./index.js");
});

describe("Базові тести", () => {
  it("Вихідні дані відповідають умовам завдання і повертаються в правильному форматі", () => {
    const condition = {
      include: [{ name: "John" }],
      sortBy: ["email"],
    };
    const result = functions.filterData(data, condition);

    expect(result).toHaveProperty("result");
    expect(Array.isArray(result.result)).toBe(true);

    result.result.forEach((item) => {
      expect(item).toBeInstanceOf(Object);
    });

    expect(result).toStrictEqual({
      result: [
        { name: "John", email: "john1@mail.com" },
        { name: "John", email: "john2@mail.com" },
        { name: "John", email: "john3@mail.com" },
      ],
    });
  });

  it("застосовує include, exclude та сортування", () => {
    const source = [
      { name: "John", email: "john2@mail.com", city: "Kyiv" },
      { name: "Jane", email: "jane@mail.com", city: "Lviv" },
      { name: "John", email: "john1@mail.com", city: "Kyiv" },
      { name: "John", email: "john3@mail.com", city: "Odesa" },
    ];

    const condition = {
      include: [{ name: "John" }],
      exclude: [{ city: "Odesa" }],
      sortBy: ["city", "email"],
    };

    const result = functions.filterData(source, condition);

    expect(result).toStrictEqual({
      result: [
        { name: "John", email: "john1@mail.com", city: "Kyiv" },
        { name: "John", email: "john2@mail.com", city: "Kyiv" },
      ],
    });
  });

  it("порожній масив", () => {
    const condition = {
      include: [{ name: "Alex" }],
    };
    const result = functions.filterData(data, condition);

    expect(result).toStrictEqual({ result: [] });
  });

  it("початковий масив не змінено", () => {
    const source = [
      { name: "John", email: "john2@mail.com" },
      { name: "Jane", email: "jane@mail.com" },
      { name: "John", email: "john1@mail.com" },
    ];
    const original = [...source];

    const condition = { sortBy: ["email"] };
    functions.filterData(source, condition);

    expect(source).toStrictEqual(original);
  });
});
