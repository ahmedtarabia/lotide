const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  for( let i = 0; i < arr1.length; i++){
    if( arr1[i] !== arr2[i]) {
      return false
    } 
  }
  return true
}

//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!



const eqObjects = function(object1, object2) {
// compare object length if not equal move on to the next
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  } 
  const listOfKeys = Object.keys(object1)
  for (const key of listOfKeys) {
    if(object1[key] !== object2[key]) {
      return false
    }
  }
  return true
}
// loop throught the keys returned by objectkeys.. 
//comapre object values..  ====
//as soon as there is no match return false. 


// else return true

//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false