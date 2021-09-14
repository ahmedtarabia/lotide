const tail = function(arr) {
  if (arr === [] || arr.length === 1) {
    return undefined;
  } else {
    return arr.slice(1 , arr.length);
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

// Test Case:Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words); // no need to capture the return value since we are not checking it
assertEqual(result.length, words.length-1)
assertEqual(result[0], 'Lighthouse')
assertEqual(result[1], 'Labs')

assertEqual(words.length, 3); // original array should still have 3 elements!

