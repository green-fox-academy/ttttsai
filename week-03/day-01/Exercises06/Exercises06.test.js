'use strict';

const test = require('tape');
const countLetterInString = require('./Exercises06');


test("Test 1:", function(t){
  t.equal(countLetterInString(0,0), 0, "It's not a string");
  t.equal(countLetterInString("apple","p"), 2, "It has 2 p in 'apple'");
  t.end();
});

