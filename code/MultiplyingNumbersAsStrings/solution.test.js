import { assert } from "chai";
import { multiply } from "./solution";

describe('Some simple multiplications', function () {
  it('simple', function () {
    assert.strictEqual(multiply("2", "3"), "6");
    assert.strictEqual(multiply("30", "69"), "2070");
    assert.strictEqual(multiply("11", "85"), "935");
  });
});

describe('Some corner case', function () {
  it('corner cases', function () {
    assert.strictEqual(multiply("2", "0"), "0");
    assert.strictEqual(multiply("0", "30"), "0");
    assert.strictEqual(multiply("0000001", "3"), "3");
    assert.strictEqual(multiply("1009", "03"), "3027");
  });
});

describe('Some big multiplications', function () {
  it('big boys', function () {
    assert.strictEqual(multiply("98765", "56894"), "5619135910");
    assert.strictEqual(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
    assert.strictEqual(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
    assert.strictEqual(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");
  });
});