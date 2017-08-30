'use strict';

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`
var aj = [3, 4, 5, 6, 7];

console.log("With the built in method: " + aj.reverse());

aj.reverse();

var tmpArr = [];
for(var i = 0; i < aj.length; i++){
    tmpArr[i] = aj[aj.length-1-i];
}
aj = tmpArr;
console.log("With creating a new temp array and a loop: " + aj);