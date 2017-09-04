'use strict';

const test = require('tape');
const Circle = require('./Exercises09');

test("Test for Circle constructor:", function(t){
    let circle = new Circle(4);
    t.equal(circle.radius, 4, "Circle's radius is 4");
    t.equal(circle.getCircumference(), 25.132741228718345, "This circle's circumference is 25.132741228718345");
    t.equal(circle.getArea(), 50.26548245743669, "This circle's area is 50.26548245743669");
    t.equal(circle.toString(), "Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669", "Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669");

    t.end();
});
