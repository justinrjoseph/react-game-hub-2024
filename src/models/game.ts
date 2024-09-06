import { OrderingValue } from './ordering';
import { Platform } from './platform';

interface BaseGame {
  id: number;
  name: string;
}

export interface Genre extends BaseGame {
  image_background: `https://media.rawg.io/media/games/${string}/${string}.jpg`
}

export interface Game extends BaseGame {
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface GameQuery {
  search: string;
  genre: Genre | null;
  platform: Platform | null;
  ordering: OrderingValue;
}

export interface ApiRes<T> {
  count: number;
  results: T[];
};