'use strict';

// Create a Sharpie constructor

// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount by the width

const test = require('tape');
const Sharpie = require('./Exercises07');


test("Test for Sharpie constructor:", function(t){
    let sharpie1 = new Sharpie("Red", 12.3);
    sharpie1.use();
    t.equal(sharpie1.inkAmount, 100-12.3, "It's been used");
    t.equal(sharpie1.color, "Red", "It's a Red Sharpie");
    t.end();
});

