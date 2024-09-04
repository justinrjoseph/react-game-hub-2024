interface BaseGame {
  id: number;
  name: string;
}

export interface Genre extends BaseGame {
  image_background: `https://media.rawg.io/media/games/${string}/${string}.jpg`
}

export type PlatformName = 'PC' |
'Nintendo' |
'PlayStation' |
'Xbox' |
'Apple Macintosh' |
'Linux' |
'iOS' |
'Android' |
'Web';

export type PlatformSlug = 'pc' |
'nintendo' |
'playstation' |
'xbox' |
'mac' |
'linux' |
'ios' |
'android' |
'web';

export interface Platform {
  id: number;
  name: PlatformName;
  slug: PlatformSlug;
}

export interface Game extends BaseGame {
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

export interface ApiRes<T> {
  count: number;
  results: T[];
};