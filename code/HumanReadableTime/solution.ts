function format(n: number) {
  return n.toString().padStart(2, '0');
}

export function humanReadable(seconds: number): string {
  const s = format((seconds % 60) | 0);
  const m = format((seconds /= 60) % 60 | 0);
  const h = format((seconds /= 60) | 0);
  return `${h}:${m}:${s}`;
}