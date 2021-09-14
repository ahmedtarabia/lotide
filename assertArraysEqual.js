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
  if (Array.isArray(actual) && Array.isArray(expected)) {
    const result = eqArrays(actual, expected)
    if (result) {
      console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
    }
  } else {
    console.log("Opps! not an array!")
  }
};

// test code

assertArraysEqual([1,2,3], [1, 2, 3]); // => should PASS