import { useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query';

import ms from 'ms';

import { Game } from '../models/game';
import ApiClient, { ApiRes } from '../services/api-client';

import { CACHE_KEY_GAMES } from './constants';
import useGameQueryStore from '../store';

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

export default (): UseInfiniteQueryResult<ApiRes<Game>, Error> => {
  const gameQuery = useGameQueryStore(store => store.gameQuery);

  return useInfiniteQuery<ApiRes<Game>, Error, ApiRes<Game>>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
        params: {
          search: gameQuery.search,
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          page: pageParam,
          page_size: gameQuery.pageSize
        }
      }),
    staleTime: ms('24h'),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next) return;

      return allPages.length + 1;
    }
  });
};