
function generateAsteroidLocation() {
  const randomCoordinate = () => Math.floor(Math.random() * 101);

  return {
    x: randomCoordinate(),
    y: randomCoordinate(),
    z: randomCoordinate(),
  };
}

function f(zondPoint, asteroidLocation) {
  const dx = asteroidLocation.x - zondPoint.x;
  const dy = asteroidLocation.y - zondPoint.y;
  const dz = asteroidLocation.z - zondPoint.z;

  return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
}

function findAsteroidLocation(asteroid) {

  const firstPoint = { x: 0, y: 0, z: 0 };
  const xPoint = { x: 1, y: 0, z: 0 };
  const yPoint = { x: 0, y: 1, z: 0 };

  const d0 = f(firstPoint, asteroid);
  const dx = f(xPoint, asteroid);
  const dy = f(yPoint, asteroid);

  const x = Math.round((1 - (dx ** 2 - d0 ** 2)) / 2);
  const y = Math.round((1 - (dy ** 2 - d0 ** 2)) / 2);
  const z = Math.round(Math.sqrt(Math.max(0, d0 ** 2 - x ** 2 - y ** 2)));

  return {
    result: {
      location: { x, y, z },
      probes: {
        count: 3,
        coordinates: [firstPoint, xPoint, yPoint],
      },
    },
  };
}

module.exports = {
  generateAsteroidLocation,
  f,
  findAsteroidLocation,
};
