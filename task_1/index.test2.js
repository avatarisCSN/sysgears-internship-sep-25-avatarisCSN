const testData = require("./testData");

let functions = require("./index.js");

beforeEach(() => {
    // we need this to reset state of any additional vars and functions, that can be created in index.js
    jest.resetModules();
    jest.restoreAllMocks();
    functions = require("./index.js");
});

describe("next tests", () => {
    testData.forEach((data) => {
        it(
            `${data.distance.value} ${data.distance.unit} -> ${data.convertTo}`,
            () => {
                const result = functions.convertDistanceUnits(data);

                expect(result).toHaveProperty("unit");
                expect(typeof result.unit).toBe("string");

                expect(result).toHaveProperty("value");
                expect(result.value).toEqual(expect.any(Number));

                expect(result).toStrictEqual(data.expected);
            }
        );
    });
});