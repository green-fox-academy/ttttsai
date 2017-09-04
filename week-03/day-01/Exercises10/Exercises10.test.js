'use strict';

const test = require('tape');
const PirateHorde = require('./Exercises10');

test("Test for PirateHorde constructor:", function(t){
    let pirates = [
        {name: 'Jack', gold: 4, hasWoodenLeg: true},
        {name: 'Bob', gold: 0, hasWoodenLeg: false},
        {name: 'Olaf', gold: 3, hasWoodenLeg: true},
        {name: 'Steve', gold: 2, hasWoodenLeg: true},
        {name: 'Ian', gold: 10, hasWoodenLeg: false},
      ];
    let pirateHorde = new PirateHorde(pirates);

    t.deepEqual(pirateHorde.pirateList, pirates, "Contruct pirateHorde ready");
    //pirateHorde.addPirate('Greg', 6, true);
    t.equal(pirateHorde.getSumGold(), 19, "Pirates have 19 gold");
    t.equal(pirateHorde.getLongestName(), "Steve", "Longest name is Steve");
    t.deepEqual(pirateHorde.getTheWoodenLegNames(), ['Jack', 'Olaf', 'Steve'], "Jack, Olaf and Steve have wooden leg");
    t.end();
});
