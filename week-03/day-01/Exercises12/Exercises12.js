'use strict';

function Rocket(type, fuel, launches){
    this.type = type;
    this.fuel = fuel || 0;
    this.launches = launches || 0;
    this.launch = function(){
        if(this.type === "falcon1"){
            if(this.fuel >= 1){
                this.fuel--;
                this.launches++;
            }
        } else if(this.type === "falcon9"){
            if(this.fuel >= 9){
                this.fuel -= 9;
                this.launches++;
            }
        }
    };
    this.refill = function(){
        var used = 0;
        if(this.type === "falcon1"){
            used = 5 - this.fuel;
            this.fuel = 5;
        } else if(this.type === "falcon9"){
            used = 20 - this.fuel;
            this.fuel = 20;
        }
        return used;
    };
    this.getStats = function(){
        return "name: " + this.type + ", fuel: " + this.fuel + ", launches: " + this.launches;
    };
}

// Create a SpaceX class.
// it should take 1 parameter in its constructor: the stored fuel
// it should have 4 methods:
// addRocket(rocket)
// it should add a new rocket to SpaceX that is given in its first parameter
// use the rockets from the fourth exercise.
// refillAll()
// it should refill all of its rockets with fuel and subtract the needed fuel from the storage
// launchAll()
// it should launch all the rockets
// buyFuel(amount)
// it should increase stored fuel by amount
// getStats()
// it should return its stats as a sting like: "rockets: 3, fuel: 100, launches: 1"

function SpaceX(fuel, rocketList){
    this.fuel = fuel;
    this.rocketList = rocketList || [];
    this.addRocket = function(rocket){
        this.rocketList.push(rocket);
    };
    this.refill_all = function(){
        var that = this;
        this.rocketList.forEach(function(rocket){
            var used = rocket.refill();
            that.fuel -= used;
        });
    };
    this.launch_all = function(){
        this.rocketList.forEach(function(rocket){
            rocket.launch();
        });
    };
    this.buy_fuel = function(amount){
        this.fuel += amount;
    };
    this.getStats = function(){
        var launches = 0;
        this.rocketList.forEach(function(rocket){
            launches += rocket.launches;
        });
        return "rockets: " + this.rocketList.length + ", fuel: " + this.fuel + ", launches: " + launches;
    };

}



var falcon1 = new Rocket('falcon1');
var returned_falcon9 = new Rocket('falcon9', 11, 1);

falcon1.refill(); // 5
falcon1.launch();

console.log(falcon1.getStats()); // name: falcon1, fuel: 4, launches: 1
console.log(returned_falcon9.getStats()); // name: falcon9, fuel: 11, launches: 1
var space_x = new SpaceX(100);
var falcon1 = new Rocket('falcon1', 0, 0);
var falcon9 = new Rocket('falcon9', 0, 0);
var returned_falcon9 = new Rocket('falcon9', 11, 1);

console.log(returned_falcon9.getStats()); // name: falcon9, fuel: 11

space_x.addRocket(falcon1);
space_x.addRocket(falcon9);
space_x.addRocket(returned_falcon9);

console.log(space_x.getStats()); // rockets: 3, fuel: 100, launches: 1
space_x.refill_all();
console.log(space_x.getStats()); // rockets: 3, fuel: 66, launches: 1
space_x.launch_all();
console.log(space_x.getStats()); // rockets: 3, fuel: 66, launches: 4
space_x.buy_fuel(50);
console.log(space_x.getStats()); // rockets: 3, fuel: 116, launches: 4


module.exports = {
    Rocket: Rocket,
    SpaceX: SpaceX
};