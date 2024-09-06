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

export interface BasePlatform {
  id: number;
  name: PlatformName;
  slug: PlatformSlug;
}

export interface Platform extends BasePlatform {
  platforms: (BasePlatform & {
    games_count: number,
    image_background: `https://media.rawg.io/media/${'screenshots' | 'games'}/${string}.${'jpg' | 'jpeg'}`,
    image: string | null,
    year_start: number | null,
    year_end: number | null
  })[];
}