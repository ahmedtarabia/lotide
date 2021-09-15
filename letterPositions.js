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

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function (arr1, arr2) {
  for( let i = 0; i < arr1.length; i++){
    if( arr1[i] !== arr2[i]) {
      return false
    } 
  }
  return true
}

// Function Implementation

const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected)
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

// test code
assertArraysEqual(letterPositions("hello").e, [1]);

console.log(letterPositions("hello"))
