//function that takes in an array and returns middle most elements(s) of the array
const middle = function (array) {

  if (!Array.isArray(array)) {
    return "Input is not a valid array";
  }

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

module.exports = middle;