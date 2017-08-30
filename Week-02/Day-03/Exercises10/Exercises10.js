'use strict';

var lineCount = 6;


// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

function printDiagonal(number){
    var outPut = [];
    for(var i = 0; i < number; i++){
        outPut[i] = Array(number).fill("%");
        for(var j = 1; j < number-1; j++){
            if(i !== 0 && i !== number-1 && j !== i ){
                outPut[i][j] = " ";
            }
        }
        console.log(outPut[i].join(" "));
    }
}

printDiagonal(lineCount);