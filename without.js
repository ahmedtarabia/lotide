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

const without = function(source, undesired) {
  let newArr = [ ] //automatic semicolon javascript 
  for( let i = 0; i < source.length ; i++) {
    if ( !undesired.includes(source[i])) {
      newArr.push(source[i])
    }
  }
  return newArr
}


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);