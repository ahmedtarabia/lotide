const assertEqual = require('./assertEqual')


const findKeyByValue = function (tvGenres, tvShow) {
  //scan the object and return the first key... loop through object and return KEY
  const listOfKeys = Object.keys(tvGenres)
  for ( key of listOfKeys) {
    if(tvShow === tvGenres[key]) {
      return key
    }
  }
  return undefined
}


  //return undefined if not found
// return Object.keys(object).find(key => object[key] === value); //better soln. 

module.exports = findKeyByValue;

