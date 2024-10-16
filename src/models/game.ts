import { OrderingValue } from './ordering';
import Platform from './platform';

interface BaseModel {
  id: number;
  name: string;
  slug: string;
}

interface Game extends BaseModel {
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[],
  publishers: { name: string }[];
  metacritic: number;
  rating_top: number;
  added: number;
  description_raw: string;
}

export interface Genre extends BaseModel {
  image_background: `https://media.rawg.io/media/games/${string}/${string}.jpg`;
}

export interface GameQuery {
  search?: string;
  genreId?: number;
  platformId?: number;
  ordering?: OrderingValue;
  page?: number;
  pageSize?: number;
}

export default Game;