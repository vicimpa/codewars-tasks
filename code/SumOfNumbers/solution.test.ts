import { assert } from "chai";

import { getSum } from "./solution";

describe("getSum", function () {
  it("Sample Tests", function () {
    assert.strictEqual(getSum(0, -1), -1);
    assert.strictEqual(getSum(0, 1), 1);
  });
});