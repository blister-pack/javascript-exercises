const convertToCelsius = function (fahrenToConvert) {
  let convertedTemp = (fahrenToConvert - 32) * (5 / 9);
  return parseFloat(convertedTemp.toFixed(1));
};

const convertToFahrenheit = function (celsiusToConvert) {
  let convertedTemp = (celsiusToConvert * (9 / 5) + 32);
  return parseFloat(convertedTemp.toFixed(1));
};

// convertToCelsius(100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
