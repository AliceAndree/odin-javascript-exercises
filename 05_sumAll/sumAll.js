const sumAll = function (firstNumber, secondNumber) {
  const array = [];
  let lowerNumber = Math.min(firstNumber, secondNumber);
  let upperNumber = Math.max(firstNumber, secondNumber);

  if (Math.sign(firstNumber) === -1 || Math.sign(secondNumber) === -1) {
    return "ERROR";
  } else if (
    !Number.isInteger(firstNumber) ||
    !Number.isInteger(secondNumber)
  ) {
    return "ERROR";
  } else if (
    parseInt(firstNumber) !== firstNumber ||
    parseInt(secondNumber) !== secondNumber
  ) {
    return "ERROR";
  } else {
    for (let i = lowerNumber; i <= upperNumber; i++) {
      array.push(i);
    }

    let sum = 0;
    for (let i of array) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
