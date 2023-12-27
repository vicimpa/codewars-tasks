export class Kata {
  static getCount(str: string): number {
    return str.replace(/[^aeiou]/g, '').length;
  }
}