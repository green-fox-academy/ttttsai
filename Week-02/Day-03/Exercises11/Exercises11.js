// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//
var outPut = [" ","%"," ","%"," ","%"," ", "%" ];
for(var i = 0; i < 8; i ++){
    console.log(outPut.reverse().toString().replace(/,/g,''));
}