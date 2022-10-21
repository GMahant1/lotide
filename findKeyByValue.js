//function that takes in an object and a value and returns the first key that corresponds to that value
const findKeyByValue = function(object, value) {

  if (typeof object !== "object") {
    return "Input is not a valid object";
  }
  //Objects.keys(object) is equal to an array containing all keys used in the object
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


