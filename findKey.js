const assertEqual = require('./assertEqual')
//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
// Function Implementation

const findKey = function(object, callback) {
  const starNames = Object.keys(object) 
  for ( key of starNames ) {
    if(callback(object[key]) === true) {
      return key;
    }
  }
}

module.exports = findKey;
