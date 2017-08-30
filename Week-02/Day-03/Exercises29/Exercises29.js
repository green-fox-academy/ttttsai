'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
function printDiagonal(number){
    var outPut = [];
    for(var i = 0; i < number; i++){
        outPut[i] = Array(number).fill("0");
        outPut[i][number-1-i] = "1";
        console.log(outPut[i].join(" "));
    }
}

printDiagonal(4);
printDiagonal(5);
