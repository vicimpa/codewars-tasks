const { floor } = Math;

const number = (n: number): number[] => (
  n ? number(floor(n * .1)).concat(n % 10) : []
);

export function nextBigger(num: number) {
  const numArray = number(num);
  let i = numArray.length - 1;
  let j = numArray.length - 1;

  while (i > 0 && numArray[i - 1] >= numArray[i]) {
    i--;
  }

  if (i <= 0)
    return -1;

  while (numArray[j] <= numArray[i - 1]) {
    j--;
  }

  [numArray[i - 1], numArray[j]] = [numArray[j], numArray[i - 1]];

  j = numArray.length - 1;

  while (i < j) {
    [numArray[i], numArray[j]] = [numArray[j], numArray[i]];
    i++;
    j--;
  }

  return parseInt(numArray.join(''), 10);
}