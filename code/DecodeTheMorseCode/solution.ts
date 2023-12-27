import { MORSE_CODE } from "./preloaded";

export function decodeMorse(morseCode: string): string {
  return morseCode
    .split(' ')
    .map((e, i, d) => e ? MORSE_CODE[e] : d[i - 1] == '' && e == '' ? ' ' : '')
    .join('')
    .trim();
}