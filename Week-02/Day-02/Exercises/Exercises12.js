'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
var a = 10;
var b = 20;
var c = 30;

console.log("Surface Area: " + (a*b + b*c + a*c) * 2);
console.log("Volume:  " + a * b * c);
