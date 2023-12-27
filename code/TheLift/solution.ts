export const findNearest = (n: number, array: number[]) => {
  let index = -1;
  let value = Infinity;

  for (let i = 0; i < array.length; i++) {
    const current = Math.abs(array[i] - n);

    if (current < value) {
      index = i;
      value = current;
    }
  }

  return array[index];
};

export const finatable = (n: any): number | null => {
  if (typeof n === 'number' && isFinite(n))
    return n;

  return null;
};

export const findMaxDir = (requests: TRequest[]) => {
  let sum = 0;
  for (const { dir } of requests) {
    sum += dir;
  }
  sum /= Math.abs(sum);
  return isNaN(sum) ? 0 : sum;
};

export const findMax = (dir: number, array: number[]) => {
  if (dir < 0)
    return Math.min(...array);

  return Math.max(...array);
};

type TRequest = {
  now: number;
  need: number;
  dir: number;
};

export const theLift = (
  queues: number[][],
  capacity: number
): number[] => {
  console.log(queues, capacity);
  const requests = queues.reduce((acc, row, now) => {
    row.forEach((need) => {
      acc.push({
        now,
        need,
        dir: now < need ? 1 : -1
      });
    });

    return acc;
  }, [] as TRequest[]);

  const visited: number[] = [];
  const liftStore: TRequest[] = [];

  let dir = 1;
  let current = 0;
  let previewCurrent = -1;

  while (true) {
    if (previewCurrent !== current) {
      visited.push(current);
      previewCurrent = current;
    } else {
      return visited;
    }

    let i = -1;

    while (
      true
      && (i = liftStore.findIndex(
        e => e.need === current
      )) !== -1
    ) {
      liftStore.splice(i, 1);
    }

    while (
      true
      && (i = requests.findIndex(
        e => e.now === current && e.dir === dir
      )) !== -1
      && capacity > liftStore.length
    ) {
      liftStore.push(...requests.splice(i, 1));
    }

    let maxDir = 1;

    let nextCurrent = (null
      ?? (
        findNearest(current, [
          ...liftStore.filter(e => e.dir === dir).map(e => e.need),
          ...requests.filter(e => e.dir === dir).map(e => e.now)
        ])
      )
      ?? (
        dir = -dir,
        findNearest(current, [
          ...requests.filter(e => e.dir === dir).map(e => e.now)
        ])
      )

      ?? 0
    );

    if (nextCurrent > 0) {
      const find = requests.find(e => e.now === nextCurrent);
      if (find) {
        const maybeNextCurrent = findMax(
          -find.dir,
          requests
            .filter(e => e.dir === find.dir)
            .map(e => e.now)
        );

        if (maybeNextCurrent !== null)
          nextCurrent = maybeNextCurrent;
      }
    }

    current = nextCurrent;
  }
};