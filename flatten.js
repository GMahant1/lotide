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

// const flatten = function (array) {
//   let newArray = [].concat.apply([], array);
//   return newArray
// }; 

const flatten = function (array) {
  let newArray = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      for (let x of i) {
        newArray.push(x);
      }
    } else {
      newArray.push(i);
    }
  }
  return newArray;
} 

// console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;