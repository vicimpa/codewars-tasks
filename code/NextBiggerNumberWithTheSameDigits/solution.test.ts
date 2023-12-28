import { assert } from "chai";

import { nextBigger } from "./solution";

describe("Basic tests", () => {
  it("Small numbers", () => {
    assert.strictEqual(nextBigger(12), 21);
    assert.strictEqual(nextBigger(513), 531);
    assert.strictEqual(nextBigger(2017), 2071);
    assert.strictEqual(nextBigger(414), 441);
    assert.strictEqual(nextBigger(144), 414);
  });
  it("Bigger numbers", () => {
    assert.strictEqual(nextBigger(123456789), 123456798);
    assert.strictEqual(nextBigger(1234567890), 1234567908);
    assert.strictEqual(nextBigger(9876543210), -1);
    assert.strictEqual(nextBigger(9999999999), -1);
    assert.strictEqual(nextBigger(59884848459853), 59884848483559);
  });
});
