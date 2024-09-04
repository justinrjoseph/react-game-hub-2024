import { Game, Genre, Platform } from '../models/game';

import useData, { Payload } from './useData';

export default (genre: Genre | null, platform: Platform | null): Payload<Game> =>
  useData<Game>({
    endpoint: 'games',
    reqConfig: genre || platform
      ? { params: { genres: genre?.id, platforms: platform?.id } }
      : {},
    deps: [genre?.id, platform?.id]
  }
);