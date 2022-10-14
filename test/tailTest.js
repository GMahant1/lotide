const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require("chai").assert;


describe("#tail", () => {

  it("returns 'Hello', 'Hey' for ['Hi', 'Hello', 'Hey']", () => {
    assert.deepEqual(tail(["Hi", "Hello", "Hey"]), ['Hello', 'Hey']);
  });

  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });

});