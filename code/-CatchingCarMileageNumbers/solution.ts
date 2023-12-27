function isSequentiallyIncreasing(num: number): boolean {
  const numStr: string = num.toString();
  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] !== '0' && numStr[i] !== String(Number(numStr[i - 1]) + 1)) {
      return false;
    }
  }
  return true;
}

function isSequentiallyDecreasing(num: number): boolean {
  const numStr: string = num.toString();
  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] !== '0' && numStr[i] !== String(Number(numStr[i - 1]) - 1)) {
      return false;
    }
  }
  return true;
}

function isPalindrome(num: number): boolean {
  const numStr: string = num.toString();
  return numStr === numStr.split('').reverse().join('');
}

function isAwesomePhrase(num: number, awesomePhrases: number[]): boolean {
  return awesomePhrases.includes(num);
}

export function isInteresting(number: number, awesomePhrases: number[]): number {
  if (number.toString().length < 3) {
    return 0;
  } else if (isAwesomePhrase(number, awesomePhrases)) {
    return 2;
  } else if (isSequentiallyIncreasing(number) || isSequentiallyDecreasing(number) || isPalindrome(number)) {
    return 2;
  } else if (isSequentiallyIncreasing(number + 1) || isSequentiallyDecreasing(number + 1) || isPalindrome(number + 1)) {
    return 1;
  } else if (isSequentiallyIncreasing(number + 2) || isSequentiallyDecreasing(number + 2) || isPalindrome(number + 2)) {
    return 1;
  } else {
    return 0;
  }
}