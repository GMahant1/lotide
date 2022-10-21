//function takes in a collection of items and returns a specific subset of those items
const countOnly = function(allItems, itemsToCount) {

  const result = {};

  for (const item of allItems) {

    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }

  return result;
};

module.exports = countOnly;
