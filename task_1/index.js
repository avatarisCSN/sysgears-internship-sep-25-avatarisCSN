function convertDistanceUnits(data) {
  const fs = require("fs");

  const path = require("path");
  const dataPath = path.join(__dirname, "data.json");

  const additionalConversions = JSON.parse(
      fs.readFileSync(dataPath, "utf8")
  );
  const conversions = {
    m: 1,
    cm: 0.01,
    in: 0.0254,
    ft: 0.3048,
  };

  additionalConversions.forEach((item) => {
    conversions[item.name] = item.inMeters;
  });


  const { unit, value } = data.distance;
  const to = data.convertTo;

  const meters = value * conversions[unit];
  const result = meters / conversions[to];

  return {
    unit: to,
    value: Number(result.toFixed(2)),
  };
}

module.exports = {
  convertDistanceUnits,
};
