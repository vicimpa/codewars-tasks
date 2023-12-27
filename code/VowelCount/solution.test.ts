import { assert } from "chai";

import * as solution from "./solution";

describe("getCount", function () {
  it("should pass a sample test", function () {
    assert.strictEqual(solution.Kata.getCount("abracadabra"), 5);
  });
});