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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  
  const result = eqObjects(actual, expected)
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !==  ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 4 }, { b: 2, a: '1' })
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })
assertObjectsEqual({ a: '2', b: 2 }, { b: 2, a: '1' })