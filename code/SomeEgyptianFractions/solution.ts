function parse(number: string): number[] {
  if (number.includes('/'))
    return number.split("/").map(Number);

  let d = 1;
  let n = +number;

  if (isNaN(n))
    throw new Error('Unknow input!');

  while ((n | 0) !== n) {
    d *= 10;
    n *= 10;
  }

  return parse(`${n}/${d}`);
}

export function decompose(number: string): string[] {
  let [num, den] = parse(number);
  const result: string[] = [];

  if (num > den) {
    const C = num / den | 0;
    result.push(`${C}`);
    num -= C * den;
  }

  while (num > 0) {
    let nextDenominator = Math.ceil(den / num);
    result.push(`1/${nextDenominator}`);
    num = num * nextDenominator - den;
    den = den * nextDenominator;
  }

  return result;
}