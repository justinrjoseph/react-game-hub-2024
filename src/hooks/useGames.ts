import { useInfiniteQuery, UseInfiniteQueryResult, useQuery, UseQueryResult } from '@tanstack/react-query';

import { Game, GameQuery } from '../models/game';
import ApiClient, { ApiRes } from '../services/api-client';

import { CACHE_KEY_GAMES } from './constants';

const apiClient = new ApiClient<Game>('/games');

/* export default (gameQuery: GameQuery): UseQueryResult<ApiRes<Game>, Error> =>
  useQuery<ApiRes<Game>, Error, ApiRes<Game>>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: () => apiClient.getAll({
        params: {
          search: gameQuery.search,
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering
        }
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs.
  }
); */

export default (gameQuery: GameQuery): UseInfiniteQueryResult<ApiRes<Game>, Error> =>
  useInfiniteQuery<ApiRes<Game>, Error, ApiRes<Game>>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
        params: {
          search: gameQuery.search,
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering,
          page: pageParam,
          page_size: gameQuery.pageSize
        }
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs.
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next) return;

      return allPages.length + 1;
    }
  }
);