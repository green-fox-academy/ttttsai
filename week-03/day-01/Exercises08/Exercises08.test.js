'use strict';

const test = require('tape');
const testObject = require('./Exercises08');


test("Test for Animal constructor:", function(t){
    let animal1 = new testObject.Animal();
    t.equal(animal1.hunger, 50, "Animal hunger default 50");
    t.equal(animal1.thirst, 50, "Animal thirst default 50");
    t.end();
});

test("Test for Farm constructor:", function(t){
    let farm1 = new testObject.Farm(3);
    t.equal(farm1.slots, 3, "This Farm has 3 slots");
    t.equal(farm1.animals.length, 0, "This Farm has no animals now");
    farm1.breed();
    farm1.breed();
    t.equal(farm1.animals.length, 2, "This Farm has 2 animals now after 2 breed");
    farm1.animals[1].eat();
    farm1.animals[1].eat();
    farm1.animals[1].eat();
    
    farm1.breed();
    t.equal(farm1.animals.length, 3, "This Farm has 3 animals now after 3 breed");
    farm1.breed();
    t.equal(farm1.animals.length, 3, "This Farm has 3 animals after 4 breed because we have only 3 slots");
    farm1.slaughter();
    t.equal(farm1.animals.length, 2, "This Farm remove the least hungry animal");

    t.end();
})

