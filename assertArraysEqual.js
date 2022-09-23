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



assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false