const removeFromArray = function (array, valueToRemove) {
  let valueToRemoveIndex = array.indexOf(valueToRemove);
  array.splice(valueToRemoveIndex, 1);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
