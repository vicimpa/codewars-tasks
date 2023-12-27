function byte(n: number) {
  return Math.min(255, Math.max(0, n));
}

export function rgb(r: number, g: number, b: number): string {
  let output = 0;

  [r, g, b].forEach((e, i, d) => {
    output = output | (
      byte(e) << (d.length - 1 - i) * 8
    );
  });

  return output.toString(16).padStart(6, '0').slice(-6).toUpperCase();
}