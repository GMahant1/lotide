//function that takes in an object and callback and returns a slice of the array based on criteria set in callback 
const findKey = function(object, callback) {

  if (typeof object !== "object") {
    return "Input is not a valid object";
  }

  for (const key in object) {
    //loop through every key and plug it into the callback function, when cb is true return key used
    if (callback(object[key])) {
      return key;
    }
  };
};

module.exports = findKey;