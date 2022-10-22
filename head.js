// function that takes an array as input and returns the first element 

const head = function(array) {

  if (!Array.isArray(array)) {
    return "Input is not a valid array";
  }

  if (Array.isArray(array))

  return array[0];
}

module.exports = head;




