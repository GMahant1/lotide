//function that takes in a string and returns all indices of letter positions 
const letterPositions = function(sentence) {

  const results = {};

  if (typeof sentence !== "string") {
    return "Input is not a valid string";
  }

  for (let i = 0; i < sentence.length; i++) {
    //assumption that letter case does not matter, "T" === "t"
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;

