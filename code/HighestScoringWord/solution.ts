const CHAR_A = 'a'.charCodeAt(0);

function weight(str: string) {
  let sum = 0;

  for (const c of str) {
    sum += c.charCodeAt(0) - CHAR_A + 1;
  }

  return sum;
}

export function high(str: string): string {
  let currentWord = '';
  let maxWord = '';
  let maxWeight = 0;

  for (const char of str + ' ') {
    if (char === ' ') {
      const w = weight(currentWord);

      if (w > maxWeight) {
        maxWeight = w;
        maxWord = currentWord;
      }

      currentWord = '';
      continue;
    }

    currentWord += char;
  }

  return maxWord;
};