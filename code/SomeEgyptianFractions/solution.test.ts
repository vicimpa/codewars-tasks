import chai, { assert } from "chai";

import { decompose } from "./solution";

chai.config.truncateThreshold = 0;

function testing(s: string, expected: string[]) {
  assert.deepEqual(decompose(s), expected);
}

describe("Fixed Tests decompose", function () {
  it("Basic tests", function () {
    testing("3/4", ["1/2", "1/4"]);
    testing("12/4", ["3"]);
    testing("4/5", ["1/2", "1/4", "1/20"]);
    testing("0.66", ["1/2", "1/7", "1/59", "1/5163", "1/53307975"]);
  });
});