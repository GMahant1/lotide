const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const middle = require("../middle");

assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]));
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]));
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5,]), [1]));