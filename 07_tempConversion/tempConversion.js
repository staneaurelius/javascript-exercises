const convertToCelsius = function(fahrenheitDegree) {
  const celsiusDegree = (fahrenheitDegree - 32) * 5 / 9;
  let roundedCelsiusDegree = Math.round(celsiusDegree * 10) / 10;
  return roundedCelsiusDegree;
};

const convertToFahrenheit = function(celsiusDegree) {
  const fahrenheitDegree = celsiusDegree * 9 / 5 + 32;
  let roundedfahrenheitDegree = Math.round(fahrenheitDegree * 10) / 10
  return roundedfahrenheitDegree;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
