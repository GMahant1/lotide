const test = "hello world";

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
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


//console.log(letterPositions(test));

module.exports = letterPositions;

// results[sentence[0]] = result[sentence[0]].push(i);
// result = {h: [0]}

// result[h].push()