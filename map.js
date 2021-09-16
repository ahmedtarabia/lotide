const words = ["ground", "control", "to", "major", "tom"];
const words2 = []
const words3 = [ '32' , '100', '101' ,'40', '9223']

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words2, word => word[0]);
console.log(results2);

const results3 = map(words3, word => word[0]);
console.log(results3);

const eqArrays = function (arr1, arr2) {
  for( let i = 0; i < arr1.length; i++){
    if( arr1[i] !== arr2[i]) {
      return false
    } 
  }
  return true
}

const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected)
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

// Test cases: 

console.log(assertArraysEqual(results1, ['g','c','t','m','t']));
console.log(assertArraysEqual(results2, []));
console.log(assertArraysEqual(results3, ['3', '1', '1', '4', '9']));

//assertArraysEqual(map([1,2,3,4,5], ))
