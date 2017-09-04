'use strict';

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type
function CarStore(cars){
    this.carList = cars;
    this.addCar = function(type, price, year){
        this.carList.push({
            type: type,
            price: price,
            year: year
        });
    };
    this.getSumPrice = function(){
        var sum = 0;
        this.carList.forEach(function(value){
            sum += value.price;
        });
        return sum;
    };
    this.getOldestCarType = function(){
        var oldest = 2017;
        var oldestType = "";
        this.carList.forEach(function(value){
            if(oldest > value.year){
                oldest = value.year;
                oldestType = value.type;
            }
        });
        return oldestType;
    };
    this.deleteCarByType = function(type){
        var loc = -1;
        this.carList.forEach(function(value, index){
            if(value.type === type){
                loc = index;
            }
        });
        if(loc !== -1){
            this.carList.splice(loc, 1);
        }
    };
}


var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];

var carStore = new CarStore(cars);

carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000
console.log(carStore.getOldestCarType()); // 'Trabant'
carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000


module.exports = CarStore;