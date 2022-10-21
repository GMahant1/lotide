// function that takes in an array the contains nested arrays and returns a flat version
const flatten = function(array) {

  let newArray = [];

  if (!Array.isArray(array)) {
    return "Input is not a valid array";
  }

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
};

module.exports = flatten;

