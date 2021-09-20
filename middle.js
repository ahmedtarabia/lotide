const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

// Function Implementation



const middle = function(array) {
  let finalArr = []
  let odd = array[Math.floor((array.length - 1 ) / 2)] 
  let even = array[Math.floor(array.length/2)]
  if (array.length <= 2) {
    return finalArr
  } 
  if ( array.length % 2 === 0) {
    finalArr.push(odd, even)
  } else {
    finalArr.push(odd)
  }
  return finalArr
}

module.exports = middle;

