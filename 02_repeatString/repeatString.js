const repeatString = function (greeting, loopAmount) {
  if (loopAmount < 0) {
    return "ERROR";
  }
  let string = "";
  for (let i = 0; i < loopAmount; i++) {
    string += greeting;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
