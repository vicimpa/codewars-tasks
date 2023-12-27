const operator = (op: string, a: string | number, b: string | number): string => {
  a = +a;
  b = +b;

  if (isNaN(a) || isNaN(b))
    throw 'Invalid input';

  switch (op) {
    case '+': return String(a + b);
    case '-': return String(a - b);
    case '*': return String(a * b);
    case '$': return String(a / b);
  }

  throw 'Unknow operator';
};

const OPERATOR = /[\+\-\*\$]/;

const tokenizer = (str: string): string[] => {
  const output: (string)[] = [];

  for (let i = 0; i < str.length; i++) {
    let segment = '';
    let c = str[i];

    if (c === ' ') continue;

    for (; i < str.length; i++) {
      c = str[i];
      if (c === ' ') continue;
      if (OPERATOR.test(c)) break;
      segment += c;
    }

    output.push(segment || '0');
    if (OPERATOR.test(c)) {
      output.push(c);
      continue;
    }
  }

  return output;
};

export const calculate = (sum: string): string | number => {
  const tokens = tokenizer(sum);
  let i = -1;

  try {
    while ((i = tokens.findIndex(e => '*$'.includes(e))) != -1) {
      const [a, o, b] = tokens.splice(i - 1, 3);
      tokens.splice(i - 1, 0, operator(o, a, b));
    }

    while ((i = tokens.findIndex(e => '+-'.includes(e))) != -1) {
      const [a, o, b] = tokens.splice(i - 1, 3);
      tokens.splice(i - 1, 0, operator(o, a, b));
    }

    if (tokens.length > 1)
      throw 'Error';

    if (isNaN(+tokens[0]))
      throw 'Error';
  } catch (e) {
    return '400: Bad request';
  }

  return +tokens[0];
};