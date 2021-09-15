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

// test code

assertArraysEqual(middle([1]),[ ]);
assertArraysEqual(middle([1, 2]),[ ]);

assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);

assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
