// function that takes in an array and returns everything except the first element

const tail = function(array) {

  let newArray = [];

  if (!Array.isArray(array)) {
    return "Input is not a valid array";
  }

  if (Array.isArray(array)) {
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

module.exports = tail;