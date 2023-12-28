import { assert } from "chai";
import fs from "fs";
import { join } from "path";
import "./solution";

class Game {
  /** 
   * @type {string[][]} 
   */
  #map = [[]];

  /** 
   * @param {string?} map 
   */
  constructor(map) {
    if (map)
      this.read(map);
  }

  /**
   * 
   * @param {number} y 
   * @param {number} x 
   * @returns {string}
   */
  open(y, x) {
    const map = this.#map;

    if (map[y][x] == 'x') {
      assert.strictEqual(" a mine!", " a safe position");
      console.log([y, x]);
      return "open a mine, Booom!";
    }

    else return map[y][x];
  }

  /** 
   * @param {string} map 
   */
  read(map) {
    this.#map = map.split("\n").map(x => x.split(" "));
  }
}

const game = new Game("1 1 x");

/**
 * @param {number} y 
 * @param {number} x 
 */
function open(y, x) {
  game.open(y, x);
}

const solveMine = new Function('open', 'game', `
  ${fs.readFileSync(join(import.meta.dir, 'solution.js'), 'utf-8')}
  
  return solveMine
`)(open, game);

describe("Basic Tests", function () {
  it("It should works for basic tests", function () {
    var map = `? ? ? ? ? ?
? ? ? ? ? ?
? ? ? 0 ? ?
? ? ? ? ? ?
? ? ? ? ? ?
0 0 0 ? ? ?`,
      result =
        `1 x 1 1 x 1
2 2 2 1 2 2
2 x 2 0 1 x
2 x 2 1 2 2
1 1 1 1 x 1
0 0 0 1 1 1`;

    game.read(result);
    assert.equal(solveMine(map, 6), result);

    var map =
      `0 ? ?
0 ? ?`,
      result =
        `0 1 x
0 1 1`;
    game.read(result);
    assert.equal(solveMine(map, 1), "?");

    var map =
      `0 ? ?
0 ? ?`,
      result =
        `0 2 x
0 2 x`;
    game.read(result);
    assert.equal(solveMine(map, 2), result);

    var map =
      `? ? ? ? 0 0 0
? ? ? ? 0 ? ?
? ? ? 0 0 ? ?
? ? ? 0 0 ? ?
0 ? ? ? 0 0 0
0 ? ? ? 0 0 0
0 ? ? ? 0 ? ?
0 0 0 0 0 ? ?
0 0 0 0 0 ? ?`,
      result =
        `1 x x 1 0 0 0
2 3 3 1 0 1 1
1 x 1 0 0 1 x
1 1 1 0 0 1 1
0 1 1 1 0 0 0
0 1 x 1 0 0 0
0 1 1 1 0 1 1
0 0 0 0 0 1 x
0 0 0 0 0 1 1`;
    game.read(result);
    assert.equal(solveMine(map, 6), result);
  });
});