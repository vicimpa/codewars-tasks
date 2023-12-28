import { expect } from "chai";

import { divisibleByFive } from "./solution";

describe("divisibleByFive", function () {
  it("should return false for empty strings", () => {
    expect(divisibleByFive.test('')).to.equal(false);
  });

  it("should return true for 101", () => {
    expect(divisibleByFive.test('101')).to.equal(true);
  });

  it("should return true for 1010", () => {
    expect(divisibleByFive.test('1010')).to.equal(true);
  });

  it("should return true for 10100", () => {
    expect(divisibleByFive.test('10100')).to.equal(true);
  });

  it("should return true for (65020).toString(2)", () => {
    expect(divisibleByFive.test((65020).toString(2))).to.equal(true);
  });

  it("should return false for 10110101", () => {
    expect(divisibleByFive.test('10110101')).to.equal(false);
  });

  it("should return false for 1110001", () => {
    expect(divisibleByFive.test('1110001')).to.equal(false);
  });

  it("should return false for (21).toString(2)", () => {
    expect(divisibleByFive.test((21).toString(2))).to.equal(false);
  });

  it("should return false for (15392).toString(2)", () => {
    expect(divisibleByFive.test((15392).toString(2))).to.equal(false);
  });

  it("should return false for (23573).toString(2)", () => {
    expect(divisibleByFive.test((23573).toString(2))).to.equal(false);
  });

  it("should return false for (19344).toString(2)", () => {
    expect(divisibleByFive.test((19344).toString(2))).to.equal(false);
  });

  it("should return false for (43936).toString(2)", () => {
    expect(divisibleByFive.test((43936).toString(2))).to.equal(false);
  });

  it("should return false for (32977).toString(2)", () => {
    expect(divisibleByFive.test((32977).toString(2))).to.equal(false);
  });

  it("should return false for (328).toString(2)", () => {
    expect(divisibleByFive.test((328).toString(2))).to.equal(false);
  });

  it("should return false for (5729).toString(2)", () => {
    expect(divisibleByFive.test((5729).toString(2))).to.equal(false);
  });
});