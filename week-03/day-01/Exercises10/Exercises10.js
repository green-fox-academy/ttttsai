'use strict';

// Create a constructor called PirateHorde, that takes an array of pirates as a parameter:
// It should have an "addPirate" method that adds a pirate object to it's list
// It should have a "getSumGold" method that returns the sum of all pirates gold
// It should have a "getLongestName" method that returns the name of the pirate that has the longest
// It should have a "getTheWoodenLegNames" method that retuns the names of the pirates that has wooden leg

function PirateHorde(arr){
    this.pirateList = arr;
    this.addPirate = function(name, gold, hasWoodenLeg){
        this.pirateList.push({
            name: name,
            gold: gold,
            hasWoodenLeg: hasWoodenLeg
        });
    };
    this.getSumGold = function(){
        var sum = 0;
        this.pirateList.forEach(function(value){
            sum += value.gold;
        });
        return sum;
    };
    this.getLongestName = function(){
        var longestName = "";
        this.pirateList.forEach(function(value){
            if(longestName.length < value.name.length){
                longestName = value.name;
            }
        });
        return longestName;
    };
    this.getTheWoodenLegNames = function(){
        var woodName = []    
        this.pirateList.forEach(function(value){
            if(value.hasWoodenLeg){
                woodName.push(value.name);
            }
        });
        return woodName;
    };
}


var pirates = [
  {name: 'Jack', gold: 4, hasWoodenLeg: true},
  {name: 'Bob', gold: 0, hasWoodenLeg: false},
  {name: 'Olaf', gold: 3, hasWoodenLeg: true},
  {name: 'Steve', gold: 2, hasWoodenLeg: true},
  {name: 'Ian', gold: 10, hasWoodenLeg: false},
];

var pirateHorde = new PirateHorde(pirates);

pirateHorde.addPirate('Greg', 6, true);
console.log(pirateHorde.getSumGold()); // 25
console.log(pirateHorde.getLongestName()); // 'Steve'
console.log(pirateHorde.getTheWoodenLegNames()); // ['Jack', 'Olaf', 'Steve', 'Greg']

module.exports = PirateHorde;