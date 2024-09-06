import { OrderingValue } from './ordering';
import { Platform } from './platform';

interface BaseModel {
  id: number;
  name: string;
  slug: string;
}

export interface Game extends BaseModel {
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  added: number;
}

export interface Genre extends BaseModel {
  image_background: `https://media.rawg.io/media/games/${string}/${string}.jpg`;
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