import { assert } from "chai";

import { calculate } from "./solution";

describe("operate", function () {
  it("should return a valid single input number", function () {
    assert.equal(calculate('1'), 1);
    assert.equal(calculate('1.1'), 1.1);
  });

  it("should perform simple single operations", function () {
    assert.equal(calculate('1+1'), 2);
    assert.equal(calculate('1-1'), 0);
    assert.equal(calculate('2$2'), 1);
    assert.equal(calculate('2*2'), 4);
  });

  it('should work with decimal numbers', function () {
    assert.equal(calculate('1.1+1.9'), 3);
    assert.equal(calculate('9$4'), 2.25);
    assert.equal(calculate('1.5*3'), 4.5);
    assert.equal(calculate('5-43.2'), -38.2);
  });

  it('should accept many of same operator', function () {
    assert.equal(calculate('5+5+5+5'), 20);
    assert.equal(calculate('5-5-5-5'), -10);
    assert.equal(calculate('5*5*5*5'), 625);
    assert.equal(calculate('5$5$5$5'), 0.04);
  });

  it('should calculate everything thrown at it', function () {
    assert.equal(calculate('1+1-1'), 1);
    assert.equal(calculate('5*6$2+5-10'), 10);
    assert.equal(calculate('1*1*1*1*1*1$1$1$1$1+1-1+9-1'), 9);
    assert.equal(calculate('1000$2.5$5+5-5+6$6'), 81);
  });

  it('should throw input error for bad inputs', function () {
    assert.equal(calculate('5*6$2&5-10'), '400: Bad request');
    assert.equal(calculate('5/10'), '400: Bad request');
    assert.equal(calculate('p'), '400: Bad request');
    assert.equal(calculate('9^9'), '400: Bad request');
  });
});