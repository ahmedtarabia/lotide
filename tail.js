const assertEqual = require('./assertEqual');

const tail = function(arr) {
  if (arr === [] || arr.length === 1) {
    return undefined;
  } else {
    return arr.slice(1 , arr.length);
  }
};

module.exports = tail;