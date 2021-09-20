const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  let arr = []
  let answer = array.map(callback)
  for(let i = 0; i < answer.length; i++) {
    if(answer[i]) {
      break
    }
    arr.push(array[i])
  }
  return arr
}

module.exports = takeUntil;
