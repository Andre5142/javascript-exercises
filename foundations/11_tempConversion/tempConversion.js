const convertToCelsius = function (fahrenheit) {
  //(x − 32) × ⁠5/9°C
  let celsius = (fahrenheit - 32) * 5 / 9 * 10
  return Math.round(celsius) / 10
}

const convertToFahrenheit = function (celsius) {
  //(x × ⁠9/5+32)°F
  let fahrenheit = (celsius * 9 / 5 + 32) * 10
  return Math.round(fahrenheit) / 10
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
