const fibonacci = function (thNumber) {
  if (Math.sign(thNumber) === -1) {
    return "OOPS";
  }
  const fib = [0, 1];
  for (let i = 2; i <= thNumber; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[thNumber];
};

// Do not edit below this line
module.exports = fibonacci;
