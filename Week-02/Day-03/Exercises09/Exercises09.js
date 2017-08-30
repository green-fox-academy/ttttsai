'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

function printSquare(number){
    var outPut = [];
    for(var i = 0; i < number; i++){
        if(i === 0 || i === number - 1){
            outPut[i] = Array(number).fill("%");
        }else{
            outPut[i] = Array(number).fill(" ");
            outPut[i][0] = "%";
            outPut[i][number-1] = "%";
        }
        
        console.log(outPut[i].join(""));
    }
}

printSquare(lineCount);
printSquare(4);
printSquare(9);