'use strict';
// Add "e" to every string in far

var far = ["appl", "fiddl", "Bruce Le", "hom"];

far.forEach(function(value,index,element){
    element[index] = value + "e";
});

console.log(far);