'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial
function factorio(number){
    var factor = 1;
    for(var i = 1; i <= number; i++){
        factor *= i;
    }
    return factor;
}
console.log(factorio(3));
console.log(factorio(4));