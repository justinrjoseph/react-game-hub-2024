export interface Game {
  id: number;
  name: string;
}

export interface GamesRes {
  count: number;
  results: Game[];
};