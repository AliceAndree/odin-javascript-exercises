const convertToCelsius = function (fahrenheit) {
  let fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
  let roundedCelsius = Math.round(fahrenheitToCelsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function (celsius) {
  let celsiusToFahrenheit = celsius * 1.8 + 32;
  let roundedFahrenheit = Math.round(celsiusToFahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
