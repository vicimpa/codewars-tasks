export const perimeter = (n: number): number => {
  let sum = 1;
  let a = 1;
  let b = 0;

  while (n-- > 0) {
    let n = b + a;
    b = a;
    a = n;
    sum += n;
  }

  return sum * 4;
};