const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];
const words2 = []
const words3 = [ '32' , '100', '101' ,'40', '9223']

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words2, word => word[0]);
console.log(results2);

const results3 = map(words3, word => word[0]);
console.log(results3);

console.log(assertArraysEqual(results1, ['g','c','t','m','t']));
console.log(assertArraysEqual(results2, []));
console.log(assertArraysEqual(results3, ['3', '1', '1', '4', '9']));