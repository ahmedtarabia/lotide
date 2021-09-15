const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

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


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);