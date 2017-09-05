'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.

var count = fruits.map(function(value){
  var sum = 0;
  for(var i = 0; i < value.length; i++){
    if(value[i] === "e"){
      sum++;
    }
  }
  return sum;
});

console.log(count);