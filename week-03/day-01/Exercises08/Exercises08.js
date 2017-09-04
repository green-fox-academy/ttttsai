'use strict';
// Create an Animal constructor

// Every animal has a hunger value, which is a number
// Every animal has a thirst value, which is a number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one
// Create a Farm constructor

// Every farm has list of Animals
// Every farm has slots which defines the number of free places for animals
// Every farm can breed() which creates a new animal if there's place for it
// Every farm can slaughter() which removes the least hungry animal
function Animal(){
    this.hunger = 50;
    this.thirst = 50;
    this.eat = function(){
        this.hunger--;
    };
    this.drink = function(){
        this.thirst--;
    };
    this.play = function(){
        this.hunger++;
        this.thirst++;
    }
}

function Farm(slots){
    this.animals = [];
    this.slots = slots;
    this.breed = function(){
        if(this.slots > 0){
            this.animals.push(new Animal());
            this.slots--;
        }
    };
    this.slaughter = function(){
        this.animals.sort(function(animal1, animal2){
            return animal1.hunger > animal2.hunger;
        });
        this.animals.shift();
    };
}

module.exports = {
    Animal: Animal,
    Farm: Farm
};