declare class Game {
  constructor(map?: string);
  open(x: number, y: number): string;
  read(map: string);
}

declare const game: Game;
declare function open(y: number, x: number): string;
declare function solveMine(map: string, n: number): string;