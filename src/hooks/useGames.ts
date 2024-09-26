import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Game, GameQuery } from '../models/game';
import apiClient, { ApiRes } from '../services/api-client';

import { CACHE_KEY_GAMES } from './constants';

export default (gameQuery: GameQuery): UseQueryResult<ApiRes<Game>, Error> =>
  useQuery<ApiRes<Game>, Error, ApiRes<Game>>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: () => apiClient
      .get<ApiRes<Game>>('/games', {
        params: {
          search: gameQuery.search,
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering
        }
      })
      .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs.
  }
);