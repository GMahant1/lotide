//function takes in two arrays and returns true if they are equal or false otherwise
const eqArrays = function (array1, array2) {

  if (!Array.isArray(array1) || !Array.isArray(array2)) {return false};

  if (array1 == null || array2 == null) { return false};

  if (array1.length !== array2.length) { return false}; 

  for (let i = 0; i < array1.length; i++) {
    
    const element = array1[i];
      if (element !== array2[i]) {
          return false;
      }
  }
  return true;
}

module.exports = eqArrays;
