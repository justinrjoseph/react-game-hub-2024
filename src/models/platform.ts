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