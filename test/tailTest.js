// const assertEqual = require ('../assertEqual')
// const tail = require ('../tail')

// // Test Case:Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// let result = tail(words); // no need to capture the return value since we are not checking it
// assertEqual(result.length, words.length-1)
// assertEqual(result[0], 'Lighthouse')
// assertEqual(result[1], 'Labs')

// assertEqual(words.length, 3); // original array should still have 3 elements!


const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse','Labs']);
  });
  it("returns [2, 3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]); 
  });
});