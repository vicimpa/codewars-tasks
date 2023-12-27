// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { isPangram } from "./solution";

describe("example", function () {
  it("test", function () {
    assert.strictEqual(isPangram("The quick brown fox jumps over the lazy dog."), true);
    assert.strictEqual(isPangram("This is not a pangram."), false);
  });
});