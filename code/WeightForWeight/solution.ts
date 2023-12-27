function weight(string: string): number {
  let sum = 0;
  for (const char of string) {
    sum += +char;
  }
  return sum;
}


export function orderWeight(string: string): string {
  return string
    .split(' ')
    .map(str => ({ str, w: weight(str) }))
    .sort((a, b) => a.w !== b.w ? a.w - b.w : a.str.localeCompare(b.str))
    .map(e => e.str)
    .join(' ');
}