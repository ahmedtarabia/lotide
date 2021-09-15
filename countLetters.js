// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};
const countLetters = function(sentence) {
  let newSentence = sentence.toLowerCase()
  let result = {}
  for (const letter of newSentence){
    if( letter !== ' ') { //ignores the spaces in the sentence
      if ( result[letter]) { //checks if the letter exists if yes then just increment by 1
        result[letter] += 1 
      } else {
        result[letter] = 1 //if the result does not exist then just give it a value of 1
      }
    }
  }
  return result
}



// test code

console.log(countLetters('Ahmed hey how ar r') )