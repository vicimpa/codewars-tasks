export function findOutlier(integers: number[]): number {
  const sorted = [...integers].sort((a, b) => (a & 1) - (b & 1));
  return sorted[(sorted[0] & 1) === (sorted[1] & 1) ? sorted.length - 1 : 0];
}
