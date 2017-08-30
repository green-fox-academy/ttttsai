'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(num){
    var sum = 0;
    for(var i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum(1));
console.log(sum(10));