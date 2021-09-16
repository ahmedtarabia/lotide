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
//map higher order function
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

//test cases:

console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]));
