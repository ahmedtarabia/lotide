const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual')



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

module.exports = eqObjects;
// loop throught the keys returned by objectkeys.. 
//comapre object values..  ====
//as soon as there is no match return false. 


// else return true

