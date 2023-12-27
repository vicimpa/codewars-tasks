/**
 * @param {string} str
 * @return {string}
 */
function removeZero(str) {
  let output = '', isZero = true;

  for (let i = 0; i < str.length; i++) {
    if (isZero && str[i] === '0' && i != str.length - 1)
      continue;

    isZero = false;
    output += str[i];
  }

  return output;
}

/**
 * @param {string} a 
 * @param {string} b
 * @return {string}
 */
function plus(a, b) {
  const max = Math.max(a.length, b.length);
  let output = '';
  let memory = 0;
  let add = 0;

  const dA = max - a.length;
  const dB = max - b.length;

  for (let i = max - 1; i >= 0 || memory; i--) {
    const vA = +(a[i - dA] ?? '0');
    const vB = +(b[i - dB] ?? '0');
    const res = vA + vB + memory;

    add = (res % 10);
    memory = (res / 10) | 0;
    output = add + output;
  }

  return removeZero(output);
}

/**
 * @param {string} a 
 * @param {string} b
 * @return {string}
 */
export function multiply(a, b) {
  let sum = '0';

  for (let i = b.length - 1, s = 0; i >= 0; i--, s++) {
    let current = '0';
    const B = +b[i];

    for (let j = a.length - 1, d = 0; j >= 0; j--, d++) {
      const A = +a[j];
      const res = String(A * B);
      current = plus(current, res + '0'.repeat(d));
    }

    sum = plus(sum, current + '0'.repeat(s));
  }

  return sum;
};


/**
 * @param {string} a 
 * @param {string} b
 * @return {string}
 */
function fakeMultiply(a, b) {
  return (BigInt(a) * BigInt(b)).toString();
};
