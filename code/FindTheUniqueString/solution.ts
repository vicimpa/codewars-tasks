export function findUniq(arr: string[]): string {
  const map = new Map<string, number>();
  const data = new Map<string, string>();
  const set = new Set<string>();

  for (const str of arr) {
    set.clear();

    for (const c of str.toLowerCase()) {
      if (c !== ' ')
        set.add(c);
    }

    const key = [...set].sort().join('');
    const count = map.get(key) ?? 0;
    map.set(key, count + 1);
    data.set(str, key);
  }

  for (const [key, count] of map) {
    if (count === 1) {
      for (const [word, currentKey] of data) {
        if (key === currentKey)
          return word;
      }
    }
  }

  return '';
}