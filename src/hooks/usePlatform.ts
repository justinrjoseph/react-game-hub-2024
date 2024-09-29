import { extractName } from '../helpers';

import usePlatforms from './usePlatforms';

export function usePlatform(id?: number, defaultName:'' | 'Platforms' = '') {
  const { data: platforms } = usePlatforms();

  return extractName(platforms, id, defaultName);
}