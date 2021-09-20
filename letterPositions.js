const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function (sentence) {
  const results = {};
  let newSentence = sentence.split(" ").join("")

  for (let i = 0; i < newSentence.length; i++){
    if (results[newSentence[i]]) { //checks if the letter exists if yes then just add the new position
      results[newSentence[i]].push(i) 
    } else {
      results[newSentence[i]] = [i] //if the result does not exist then just give it a value of its position      }
    }
  }
  return results;
}

module.exports = letterPositions;


