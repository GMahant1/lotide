//import eqArrays function 
const eqArrays = require("./eqArrays");

//assertion test that checks if two arrays are equal 
const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
  }

  if (!eqArrays(array1, array2)) {
    console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;
