'use strict';

var lineCount = 7;

// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

function printDiamond(number){
    var middle = number / 2 ;
    var arr = [];
    for(var i = 0; i < number; i++){
        arr[i] = [];
        if(i < middle){
            for(var j = number - 1 - i; j > 0; j--){
                arr[i].push(" ");
            }
            for(j = 0; j < 2*i + 1; j++){
                arr[i].push("*");
            }
        }else{
            arr[i] = arr[number-1-i];
        }       
        
        console.log(arr[i].join(""));
    }
}

printDiamond(lineCount);
printDiamond(9);
printDiamond(5);