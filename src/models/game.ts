interface BaseGame {
  id: number;
  name: string;
}

export type Genre = BaseGame;

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

export interface ApiRes<T> {
  count: number;
  results: T[];
};