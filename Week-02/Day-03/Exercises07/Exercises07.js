'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

function printPyramid(number){
    for(var i = 0; i < number; i++){
        var output = " ".repeat(number-1-i) + "*".repeat(2*i+1);
        console.log(output);
    }
}

printPyramid(lineCount);