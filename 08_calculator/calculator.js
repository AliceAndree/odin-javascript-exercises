const add = function (firstNumber, secondNumber) {
  const sum = firstNumber + secondNumber;
  return sum;
};

const subtract = function (firstNumber, secondNumber) {
  const subtraction = firstNumber - secondNumber;
  return subtraction;
};

const sum = function (array) {
  const totalSum = array.reduce((total, num) => total + num, 0);
  return totalSum;
};

const multiply = function (array) {
  const totalProduct = array.reduce((total, num) => total * num);
  return totalProduct;
};

const power = function (numberOne, numberTwo) {
  const totalPower = Math.pow(numberOne, numberTwo);
  return totalPower;
};

const factorial = function (num) {
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
