export const isPangram = (phrase: string): boolean => {
  phrase = phrase.replace(/[^a-z]/gi, '').toLowerCase();
  return new Set(phrase).size === 26;
};