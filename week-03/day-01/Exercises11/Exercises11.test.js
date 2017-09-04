'use strict';

const test = require('tape');
const CarStore = require('./Exercises11');

test("Test for PirateHorde constructor:", function(t){
    let cars = [
        {type: 'Dodge', price: 20000, year: 2012},
        {type: 'Tesla', price: 30000, year: 2015},
        {type: 'Nissan', price: 12000, year: 2010},
        {type: 'Trabant', price: 2000, year: 1980},
        {type: 'Ferrari', price: 40000, year: 2001}
      ];
    let carStore = new CarStore(cars);

    t.deepEqual(carStore.carList, cars, "Construct carStore ready");
    carStore.addCar('Smart', 18000, 2011);
    t.equal(carStore.getSumPrice(), 122000, "CarStore price sum is 122000");
    t.equal(carStore.getOldestCarType(), "Trabant", "Oldest car type is Trabant");
    carStore.deleteCarByType("Ferrari");
    t.equal(carStore.getSumPrice(), 82000, "CarStore price sum is 82000");
    t.end();
});
