const palindromes = function (string) {
  const alphabetical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const filteredString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphabetical.includes(character))
    .join("");
  const reversedString = filteredString.split("").reverse().join("");

  if (filteredString === reversedString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
