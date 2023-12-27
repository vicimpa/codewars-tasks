import { assert } from "chai";

import * as solution from "./solution";

describe("Sample Test Cases", function () {
  it("Should return true or false", function () {
    assert.equal(solution.solution('abcde', 'cde'), true);
    assert.equal(solution.solution('abcde', 'abc'), false);
    assert.equal(solution.solution('abc', ''), true);
  });
});