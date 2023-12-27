const RADIUS = 3390;
const DEGREE = 0.0174533;

const { sin, cos, sqrt, atan2 } = Math;

function toRadians(degrees: number) {
  return degrees * DEGREE;
}

function haversine(radius: number, lat1: number, lon1: number, lat2: number, lon2: number) {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a = (0
    + sin(dLat / 2) * sin(dLat / 2)
    + cos(toRadians(lat1)) * cos(toRadians(lat2))
    * sin(dLon / 2) * sin(dLon / 2)
  );

  return radius * 2 * atan2(sqrt(a), sqrt(1 - a));
}

function parse(c: string) {
  return (
    c
      .split(',')
      .map(e => (
        ''
        + (e.endsWith('S') || e.endsWith('W') ? '-' : '')
        + e.replace(/[^\d\.]/g, '')
      ))
      .map(Number)
  );
}

function accuracy(n: number, a = 1) {
  if (a === 1) return n | 0;
  return ((n / a) | 0) * a;
}

export function saveMark(c1: string, c2: string): string {
  const [lat1, lon1] = parse(c1);
  const [lat2, lon2] = parse(c2);
  const result = haversine(RADIUS, lat1, lon1, lat2, lon2);
  return accuracy(result, 10) + 'KM';
}
