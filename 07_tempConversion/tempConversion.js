const convertToCelsius = function (fahrenToConvert) {
  let convertedTemp = (fahrenToConvert - 32) * (5 / 9);
  return parseFloat(convertedTemp.toFixed(2));
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
