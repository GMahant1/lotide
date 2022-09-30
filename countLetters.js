const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const testString = "This is a test string"

const countLetters = function (string) {
  const newObject = {};

  for (const letters of string) {
    //console.log(letters);
    if (newObject[letters]) {
      newObject[letters] += 1
    } else {
      newObject[letters] = 1;
    }
    // newObject[letters] is to access each value from the for loop, if it exist increase the count by 1 otherwise assign a base value of 1
  }
  return newObject;
}

console.log(countLetters(testString));