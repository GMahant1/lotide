//function that takes in a sourceArray and an itemsToRemoveArray, returns only items in sourceArray that are not in the itemsToRemoveArray
const without = function(sourceArray, itemsToRemoveArray) {

  let newArray = [];

  if (!Array.isArray(sourceArray) || !Array.isArray(itemsToRemoveArray)) {
    return "Input is not a valid array";
  }

  sourceArray.forEach(element => {
    if (!itemsToRemoveArray.includes(element)) {
      newArray.push(element);
    }
  });

  return newArray;
};

module.exports = without;