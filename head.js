const head = function(arr){
  return arr[0];
}
console.log(head([5,4,3]))


// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};
// test code

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);
assertEqual('Ahmed', 'Ahmed');
assertEqual(1,12);


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");