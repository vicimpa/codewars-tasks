function limit(v = 0, min = 0, max = 0) {
  return Math.min(max, Math.max(v, min));
}

/**
 * @param {string} map 
 * @param {number} n 
 */
function solveMine(map, n) {
  const data = map
    .split('\n')
    .map(e => e.split(' '));

  const width = data[0].length;
  const height = data.length;

  while (true) {
    let changes = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (data[y][x] === '0') {
          for (let mY = -1; mY <= 1; mY++) {
            for (let mX = -1; mX <= 1; mX++) {
              let X = x + mX;
              let Y = y + mY;
              if (!mY && !mX) continue;
              if (X < 0 || Y < 0) continue;
              if (X > width - 1 || Y > height - 1) continue;
              if (data[Y][X] === '?') {
                changes++;
                data[Y][X] = game.open(Y, X);
              }
            }
          }
        }
      }
    }

    if (!changes)
      break;
  }
  console.log(data.join('\n'));

  return 123;
}