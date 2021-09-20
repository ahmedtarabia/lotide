const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.


const without = function(source, undesired) {
  let newArr = [ ] //automatic semicolon javascript 
  for( let i = 0; i < source.length ; i++) {
    if ( !undesired.includes(source[i])) {
      newArr.push(source[i])
    }
  }
  return newArr
}

module.exports = without;

