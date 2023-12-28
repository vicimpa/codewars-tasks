// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { computeRanges } from "./solution";

type Options<T> = {
  createRandom: (_?: any) => T,
  op: (a: T, b: T) => T,
  numTests: number,
  log: boolean,
};
function customRandomTest<T>(
  size: number,
  numRanges: number,
  options: Partial<Options<T>>,
) {
  const defaultOptions: Options<any> = {
    createRandom: _ => Math.floor(Math.random() * 10),
    op: (a, b) => a + b,
    numTests: 10,
    log: false
  };
  const { createRandom, op, numTests, log } = { ...defaultOptions, ...options };
  describe('Custom test', () => {
    for (let i = 0; i < numTests; i++) {
      it(`n=${size} m=${numRanges}`, () => {
        const arr = new Array(size).fill(0).map(createRandom);
        const ranges: [number, number][] = [];
        for (let i = 0; i < numRanges; i++) {
          let s = Math.floor(arr.length * Math.random());
          let e = s + Math.floor((arr.length - s) * Math.random() + 1);
          ranges.push([s, e]);
        }

        if (log) {
          console.log('arr:', arr);
          console.log('ranges:', ranges);
        }

        let res = computeRanges([...arr], op, [...ranges]);
        let expected = ranges.map(x => arr.slice(...x).reduce(op));
        if (log) {
          console.log('res:     ', res);
          console.log('expected:', expected);
        }
        assert.deepEqual(res, ranges.map(x => arr.slice(...x).reduce(op)));
      });
    }
  });
}

customRandomTest(4, 4, {
  log: true,
});

describe("Number tests", function () {
  const sum: (a: number, b: number) => number = (a, b) => a + b;
  const max: (a: number, b: number) => number = (a, b) => Math.max(a, b);
  const gcd: (a: number, b: number) => number = (a, b) => a < b ? gcd(b, a) : b === 0 ? a : gcd(b, a % b);

  it("sum", function () {
    assert.deepEqual(
      computeRanges([1, 5, 8, 5, 1, 8], sum, [[0, 4], [0, 6], [2, 4], [1, 4]]),
      [19, 28, 13, 18]
    );
  });

  it("max", function () {
    assert.deepEqual(
      computeRanges([2, 4, 9, 1, 1, 14, 7], max, [[0, 2], [2, 7], [1, 4], [4, 5], [5, 7], [2, 5]]),
      [4, 14, 9, 1, 14, 9]
    );
  });

  it('gcd', function () {
    assert.deepEqual(
      computeRanges([0, 0, 4, 75, 12, 0, 16, 5], gcd, [[1, 4], [2, 6], [0, 1], [1, 4], [4, 7]]),
      [1, 1, 0, 1, 4]
    );
  });
});

describe("Function composition test", function () {
  it('function composition', function () {
    const a = (x: number) => x * 2; // num -> num
    const b = (x: number) => 'abcd'.repeat(x); // num -> str
    const c = (x: string) => x.split('').map(ch => ch.charCodeAt(0) - 'a'.charCodeAt(0)); // str -> [num]
    const d = (x: number[]) => x.filter(x => x % 2); // [num] -> [num]
    const e = (x: number[]) => x.join(' | '); // [num] -> str
    function compose<T, U, V>(f: (t: T) => U, g: (u: U) => V): (t: T) => V {
      return (t: T) => g(f(t));
    }
    let res = computeRanges<any>([a, b, c, d, e], compose, [[0, 3], [1, 2], [1, 4], [3, 5]]);
    assert.deepEqual(res[0](1), [0, 1, 2, 3, 0, 1, 2, 3]);
    assert.deepEqual(res[1](2), 'abcdabcd');
    assert.deepEqual(res[2](3), [1, 3, 1, 3, 1, 3]);
    assert.deepEqual(res[3]([1, 2, 4, 10, 6, 11, 185]), '1 | 11 | 185');
  });
});

describe('Matrix tests', function () {
  const mmult = (A: number[][], B: number[][]) => {
    const n = A.length;
    const m = B[0].length;
    const k = A[0].length;
    return new Array(n).fill(0).map(
      (_, i) => new Array(m).fill(0).map(
        (_, j) => new Array(k).fill(0).map((_, k) => A[i][k] * B[k][j]).reduce((a, b) => a + b)
      )
    );
  };

  const ms = [
    [
      [0, 1, 4, 1, 0],
      [2, 2, 1, 0, 0],
      [1, 0, 0, 2, 1],
      [1, 0, 0, 3, 1],
      [1, 0, 2, 2, 1],
    ], [
      [1, 2, 0],
      [1, 2, 0],
      [1, 2, 0],
      [1, 0, 1],
      [1, 0, 1],
    ], [
      [1, 2],
      [2, 1],
      [4, 0]
    ], [
      [2, 1],
      [0, 1]
    ]
  ];
  const ranges: [number, number][] = [[0, 2], [1, 3], [0, 3], [2, 4]];
  it('matrix mult', function () {
    let res = computeRanges(ms, mmult, ranges);
    assert.deepEqual(res, [
      [
        [6, 10, 1],
        [5, 10, 0],
        [4, 2, 3],
        [5, 2, 4],
        [6, 6, 3]
      ], [
        [5, 4],
        [5, 4],
        [5, 4],
        [5, 2],
        [5, 2]
      ], [
        [30, 22],
        [25, 20],
        [20, 10],
        [25, 12],
        [30, 18]
      ], [
        [2, 3],
        [4, 3],
        [8, 4]
      ]
    ]);
  });
});