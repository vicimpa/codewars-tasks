// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { isIsogram } from "./solution";

// TODO Add your tests here
describe("example", function () {
  it("test", function () {
    assert.equal(isIsogram("Dermatoglyphics"), true);
    assert.equal(isIsogram("isogram"), true);
    assert.equal(isIsogram("aba"), false, "same chars may not be adjacent");
    assert.equal(isIsogram("moOse"), false, "same chars may not be same case");
    assert.equal(isIsogram("isIsogram"), false);
    assert.equal(isIsogram(""), true, "an empty string is a valid isogram");
  });
});