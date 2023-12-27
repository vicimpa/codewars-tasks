import { expect } from "chai";

import { arrayToString, stringToArray } from "./solution";

describe('Basic Tests', () => {
  it('arrayToString', () => {
    expect(arrayToString([1, 2, 3, 4, 6, 6, 6, 6, 8, 6, 4, 2])).to.deep.equal('1:4+1,6:4,8:4-2');
    expect(arrayToString([2, 1, 6, 12, 5])).to.deep.equal('2,1,6,12,5');
    expect(arrayToString([1, 2, 3, 4, 3, 2, 1])).to.deep.equal('1:4+1,3:3-1');
    expect(arrayToString([1, 2, 3, 4, 3, 2])).to.deep.equal('1:3+1,4:3-1');
    expect(arrayToString([-1, -2, -3, -4, -3, -2])).to.deep.equal('-1:3-1,-4:3+1');
  });
  it('stringToArray', () => {
    expect(stringToArray('1:4+1,6:4,8:4-2')).to.deep.equal([1, 2, 3, 4, 6, 6, 6, 6, 8, 6, 4, 2]);
    expect(stringToArray('2,1,6,12,5')).to.deep.equal([2, 1, 6, 12, 5]);
    expect(stringToArray('1:4+1,3:3-1')).to.deep.equal([1, 2, 3, 4, 3, 2, 1]);
    expect(stringToArray('1:3+1,4:3-1')).to.deep.equal([1, 2, 3, 4, 3, 2]);
    expect(stringToArray('-1:3-1,-4:3+1')).to.deep.equal([-1, -2, -3, -4, -3, -2]);
  });

  it('appendTests', () => {
    expect(arrayToString([5, 17, 10, 13, 10, 20, 13, 11, 15, 19, 1])).to.deep.equal('5,17,10,13,10,20,13,11:3+4,1');
    expect(arrayToString([8, 7, 10, 13, 3, 1, 4, 19, 6, 19, 6, 18, 7, 6, 13, 20, 2, 5, 4])).to.deep.equal('8,7:3+3,3,1,4,19,6,19,6,18,7,6:3+7,2,5,4');
  });
});
