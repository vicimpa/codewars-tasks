export function order(words: string): string {
  return words
    .split(' ')
    .map(e => ({
      word: e,
      num: +e.replace(/[^\d]/g, '')
    }))
    .sort((a, b) => a.num - b.num)
    .map(e => e.word)
    .join(' ');
}