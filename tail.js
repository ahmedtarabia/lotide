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

// let actual = [2,1,3]
// let result = tail(actual)
// let expected = [1,3]
// // test code

// assertEqual(actual, expected);
// assertEqual([3,12,10]);
// assertEqual('Ahmed', 'Ahmed');
// assertEqual(1,12);

// Test Case:Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words); // no need to capture the return value since we are not checking it
console.log(result);
assertEqual(words.length, 3); // original array should still have 3 elements!

