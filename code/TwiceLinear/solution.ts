export function dblLinear(n: number) {
  const results = [1];
  let i = 0, j = 0;

  while (results.length <= n) {
    const a = 2 * results[i] + 1;
    const b = 3 * results[j] + 1;

    if (a <= b) {
      results.push(a);
      i++;
      if (a === b) {
        j++;
      }
    } else {
      results.push(b);
      j++;
    }
  }

  return results[n];
}