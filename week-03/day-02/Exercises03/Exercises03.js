'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array

function selectLastEvenNumber(arr, callback) {
  for(var i = arr.length-1; i >= 0; i--){   
    if(arr[i] % 2 === 0) {
      callback(arr[i]);
      break;
    }
  }
}

function printNumber(num) {
  console.log(num);
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8