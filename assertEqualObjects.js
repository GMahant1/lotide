//import eqArrays function
const eqArrays = require("./eqArrays");

//import eqObjects function
const eqObjects = require("./eqObjects");

//assertion test for equal objects
const assertEqualObjects = function(object1, object2) {

  const inspect = require("util").inspect;

  if (eqObjects(object1, object2)) {
    console.log(`🟢 Assertion Passed: Objects are equal  ${inspect(object1)} === ${inspect(object2)}`);
  } else {
   console.log(`🔴 Assertion Failed: Objects are not equal ${inspect(object1)} !== ${inspect(object2)}`);
  }

};

 module.exports = assertEqualObjects;

