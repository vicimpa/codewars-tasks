import { assert } from "chai";

import { decodeMorse } from "./solution";

const Test = {
  expect: (...args: any[]) => (assert as any)(...args),
  assertEquals: (...args: any[]) => (assert as any).equal(...args),
};

describe("Example from description", function () {
  it('HEY JUDE', () => {
    Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });
});

describe("Your own tests", function () {
  it('Something', () => {
    // your tests
  });
});