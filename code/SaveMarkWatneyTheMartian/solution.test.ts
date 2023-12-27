import { assert } from "chai";

import { saveMark } from "./solution";

describe('Example Tests', () => {
  it('tests', () => {
    assert.equal(saveMark('48.23° N, 89.10° E', '48.84° N, 89.40° E'), '30KM');
    assert.equal(saveMark('52.10° S, 56.25° W', '52.10° N, 56.25° W'), '6160KM');
    assert.equal(saveMark('11.28° S, 78.98° E', '21.28° S, 75.56° E'), '620KM');
  });
});