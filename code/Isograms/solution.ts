export function isIsogram(str: string): boolean {
  const has = new Set<string>();

  for (const char of str.toLowerCase()) {
    if (has.has(char))
      return false;

    has.add(char);
  }
  return true;
}