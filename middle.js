const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");
// const assertArraysEqual = function (eqArrays) {
//   if (eqArrays) {
//     console.log(`🟢 Assertion Passed: Arrays are equal === ${eqArrays}`);
//   }
//   if (!eqArrays) {
//     console.log(`🔴 Assertion Failed: Arrays are equal !== ${eqArrays}`);
//   }
// }

// const eqArrays = function (array1, array2) {
//   if (array1 == null || array2 == null) { return false};
//   if (array1.length !== array2.length) { return false}; 
//   for (let i = 0; i < array1.length; i++) {
//     const element = array1[i];
//       if (element !== array2[i]) {
//           return false;
//       }
//   }
//   return true;
// }

const middle = function (array) {
  let newArray = [];
  
  if (array.length < 3) {
    return newArray;
  }

  if (array.length % 2 !== 0) {
    let i = Math.floor((array.length / 2));
    newArray.push(array[i]);
  }

  if (array.length % 2 === 0) {
    let x = ((array.length / 2) - 1);
    let y = (array.length / 2);
    newArray.push(array[x], array[y]);
  }
  return newArray;
}

// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));

module.exports = middle;