import { Game, Genre } from '../models/game';

import useData, { Payload } from './useData';

export default (genre: Genre | null): Payload<Game> => useData<Game>({
  endpoint: 'games',
  reqConfig: genre
    ? { params: { genres: genre.id } }
    : {},
  deps: [genre?.id]
});