
function deltaStr(v: number) {
  if (!v) return '';
  if (v > 0) return '+' + v;
  if (v < 0) return '' + v;
}

type TStruct = [
  element: number,
  delta: number,
  count: number
];

export function arrayToString(arr: number[]) {
  const struct = arr.reduce((acc, e, i, d) => {
    let last = acc.at(-1);

    if (!last || last[1] !== e - d[i - 1]) {
      last = [e, d[i + 1] - e, 0];
      acc.push(last);
    }

    last[2]++;

    return acc;
  }, [] as TStruct[]);

  for (let i = 0; i < struct.length; i++) {
    const data = struct[i];
    const prev = struct[i - 1];

    if (data[2] == 2) {
      if (prev) {
        const [v, d, c] = prev;
        const p = v + d * (c - 1);

        if (data[0] - p === data[1]) {
          data[0] = p;
          data[2]++;
          prev[2]--;

          if (!prev[2]) {
            struct.splice(i - 1, 1);
            i--;
          }
          continue;
        }
      }

      data[2] = 1;
      struct.splice(i + 1, 0, [data[0] + data[1], -1, 1]);
      i++;
    }
  }

  return struct.map(([e, d, c]) => {
    let output = `${e}`;
    if (c > 2)
      output += `:${c}${deltaStr(d)}`;
    return output;
  }).join(',');
}


export function stringToArray(str: string): number[] {
  return str
    .split(',')
    .reduce((acc, str) => {
      const [num, dop = '1'] = str.split(':');
      const [count, delta] = dop.replace(/^\-?(\d+)([^$]+)?$/, (_, count, delta) => {
        return `${count}:${delta ?? 0}`;
      }).split(':').map(Number);

      for (let i = 0; i < count; i++)
        acc.push(+num + delta * i);

      return acc;
    }, [] as number[]);
}
