const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) { return false; }

  for (let key of Object.keys(object1)) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      console.log("test");
      if (!eqArrays(object1[key], object2[key])) {  
        return false; }
    }

    else { if(object1[key] !== object2[key]) {
      return false;
    }
  }
}
return true;
};


const assertEqualObjects = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects) {
    console.log(`🟢 Assertion Passed: Objects are equal  ${actual} === ${expected}`);
  } else {
   console.log(`🔴 Assertion Failed: Objects are not equal ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false

// assertEqualObjects(eqObjects(ab, ba), true);
// assertEqualObjects(eqObjects(ab, abc), false);
// assertEqualObjects(eqObjects(cd, dc), false);
// assertEqualObjects(eqObjects(cd, cd2), false);


 module.exports = assertEqualObjects;