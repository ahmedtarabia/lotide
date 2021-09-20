const eqArrays = require('./eqArrays');
// Function Implementation

const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected)
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};


module.exports = assertArraysEqual