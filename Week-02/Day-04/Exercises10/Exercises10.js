'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function printStuWithMoreCandies(arr){
    var output = [];
    arr.forEach(function(value){
        if(value.candies > 4){
            output.push(value.name);
        }
    });
    return output;
}
function calCandiesAverage(arr){
    var total = 0;
    arr.forEach(function(value){
        total += value.candies;
    });
    return total / arr.length;
}

console.log(printStuWithMoreCandies(students));
console.log(calCandiesAverage(students));