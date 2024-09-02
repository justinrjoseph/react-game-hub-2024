export type Name = 'PC' |
'Nintendo' |
'PlayStation' |
'Xbox' |
'Apple Macintosh' |
'Linux' |
'iOS' |
'Android' |
'Web';

export type Slug = 'pc' |
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
  name: Name;
  slug: Slug;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export interface GamesRes {
  count: number;
  results: Game[];
};