import { assert } from "chai";

import { multiplicationTable } from "./solution";

describe('Example Tests', () => {
  it('should work work with example tests', () => {
    assert.deepStrictEqual(multiplicationTable(1), [[1]]);
    assert.deepStrictEqual(multiplicationTable(2), [[1, 2], [2, 4]]);
    assert.deepStrictEqual(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
});
