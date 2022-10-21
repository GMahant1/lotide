// function used to check if two values are equal, returns true if equal and false otherwise

const assertEqual = function(actual, expected) {

  if (typeof actual === "undefined" || typeof expected === "undefined" ) {
    console.log("Input is undefined");
  }
  
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};




module.exports = assertEqual;