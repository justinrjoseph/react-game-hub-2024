import { extractName } from '../helpers';

import useGenres from './useGenres';

export function useGenre(id?: number) {
  const { data: genres } = useGenres();

  return extractName(genres, id);
}