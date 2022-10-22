//function that takes in string and returns a count of each of the letters in string 
const countLetters = function(string) {

  const newObject = {};
  //assume case for letters does not matter , treat "T" === "t"
  for (const letters of string) {

    if (newObject[letters]) {
      newObject[letters] += 1;
    } else {
      newObject[letters] = 1;
    }
    // newObject[letters] is to access each value from the for loop, if it exist increase the count by 1 otherwise assign a base value of 1
  }

  return newObject;
};

module.exports = countLetters;

