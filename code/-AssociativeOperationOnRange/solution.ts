export function computeRanges<T>(
  arr: T[],
  op: (a: T, b: T) => T,
  ranges: [number, number][]
): T[] {
  const results: T[][] = [];

  let x = 0;
  let y = arr.length;

  const pushResult = (x: number, y: number) => {
    const array = results[x] ?? (results[x] = []);

    if (array[y] !== undefined)
      return;

    if (x === y) {
      array[y] = arr[y];
      return;
    }

    array[y] = arr
      .slice(x, y)
      .reduce(op);
  };

  while (x < arr.length && y >= 0) {
    for (let i = y; i >= x; i--)
      pushResult(x, i);
    for (let i = x; i <= y; i++)
      pushResult(i, y);

    y--;
    x++;
  }

  return ranges.map(([a, b]) => results[a][b]);
}