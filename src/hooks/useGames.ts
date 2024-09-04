import { Game, GameQuery } from '../models/game';

import useData, { Payload } from './useData';

export default (gameQuery: GameQuery): Payload<Game> =>
  useData<Game>({
    endpoint: 'games',
    reqConfig: {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering
      }
    },
    deps: [gameQuery]
  }
);