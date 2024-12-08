const findTheOldest = function (arrayOfPeople) {
  let ages = [];
  arrayOfPeople.forEach((people) => {
    if ("yearOfDeath" in people) {
      ages.push(people.yearOfDeath - people.yearOfBirth);
    } else {
      const currentYear = new Date().getFullYear();
      ages.push(currentYear - people.yearOfBirth);
    }
  });

  const biggestAge = Math.max(...ages);
  const indexOfBiggestAge = ages.indexOf(biggestAge);
  const oldestPerson = arrayOfPeople[indexOfBiggestAge];
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
