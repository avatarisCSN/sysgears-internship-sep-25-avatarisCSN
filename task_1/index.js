function convertDistanceUnits(data) {
  const conversions = {
    m: 1,
    cm: 0.01,
    in: 0.0254,
    ft: 0.3048,
  };

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
