'use strict';

const test = require('tape');
const RocketAndSpace = require('./Exercises12');

test("Tests for Rocket and Space class", function(t){
    var falcon1 = new RocketAndSpace.Rocket('falcon1');
    var returned_falcon9 = new RocketAndSpace.Rocket('falcon9', 11, 1);

    t.equal(falcon1.getStats(), "name: falcon1, fuel: 0, launches: 0", "Construct rocket1 well");
    t.equal(returned_falcon9.getStats(), "name: falcon9, fuel: 11, launches: 1", "Construct rocket2 well");

    falcon1.refill();
    falcon1.launch();

    t.equal(falcon1.getStats(), "name: falcon1, fuel: 4, launches: 1", "Falcon1 has been refilled and launched once");

    var space_x = new RocketAndSpace.SpaceX(100);
    var falcon1 = new RocketAndSpace.Rocket('falcon1', 0, 0);
    var falcon9 = new RocketAndSpace.Rocket('falcon9', 0, 0);
    var returned_falcon9 = new RocketAndSpace.Rocket('falcon9', 11, 1);

    space_x.addRocket(falcon1);
    space_x.addRocket(falcon9);
    space_x.addRocket(returned_falcon9);

    t.equal(space_x.getStats(), "rockets: 3, fuel: 100, launches: 1", "We have add 3 rocket in the space");
    space_x.refill_all();
    t.equal(space_x.getStats(), "rockets: 3, fuel: 66, launches: 1", "We have refilled the 3 rocket in the space");
    space_x.launch_all();
    t.equal(space_x.getStats(), "rockets: 3, fuel: 66, launches: 4", "We have launched the 3 rocket");
    space_x.buy_fuel(50);
    t.equal(space_x.getStats(), "rockets: 3, fuel: 116, launches: 4", "We have just buy 50 fuel to the space");
    
    t.end();
});

