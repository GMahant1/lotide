//function that takes in an array and a callback and returns a new array based on callback results
const map = function (array, callback) {

  const results = [];

  if (!Array.isArray(array)) {
    return "Input is not a valid array";
  }

  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};


module.exports = map;