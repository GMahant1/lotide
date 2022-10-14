const eqArrays = function (array1, array2) {
  if (array1 == null || array2 == null) { return false};
  if (array1.length !== array2.length) { return false}; 
  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
      if (element !== array2[i]) {
          return false;
      }
  }
  return true;
}

const assertArraysEqual = function (eqArrays) {
  if (eqArrays) {
    console.log(`🟢 Assertion Passed: Arrays are equal === ${eqArrays}`);
  }
  if (!eqArrays) {
    console.log(`🔴 Assertion Failed: Arrays are equal !== ${eqArrays}`);
  }
}

const without = function (array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++ ) {
    if (array1[i] !== array2[i]) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
}

//console.log(without([1, 2, 3], [1]));
//console.log(without(["1", "2", "3"], [1, 2, "3"]));

//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;