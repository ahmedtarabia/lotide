const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// test code

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS