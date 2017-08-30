'use strict';

var lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount

function printTriangle(number){
    for(var i = 1; i <= number; i++){
        var j = i;
        var outPut = "";
        while(j--){
            outPut += "*";
        }
        console.log(outPut);
    }
}

printTriangle(lineCount);