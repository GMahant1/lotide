//function that takes in an array and a callback and returns the first element that meets the criteria specified in callback
const takeUntil = function (array, callback) {

  let newArray = [];

  if (!Array.isArray(array)) {
    return "Input is not a valid array";
  }
  
  for (let item of array) {
    //loop through array until the call back equates to false, push everthing looped so far
    if(!callback(item)) {
      newArray.push(item);
    } else {
      break;
    }
  }

  return newArray; 
}

module.exports = takeUntil;