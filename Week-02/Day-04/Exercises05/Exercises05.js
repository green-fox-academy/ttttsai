'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];
while(girls.length > 0 || boys.length > 0) {
    if(girls.length){
        order.push(girls.shift());
    }
    if(boys.length){
        order.push(boys.shift());
    }
}

console.log(order);