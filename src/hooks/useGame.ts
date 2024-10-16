import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Game } from '../models/game';
import ApiClient from '../services/api-client';

import { CACHE_KEY_GAME } from './constants';

const apiClient = new ApiClient<Game>('/games');

export default (slug: string): UseQueryResult<Game, Error> =>
  useQuery<Game, Error, Game>({
    queryKey: [...CACHE_KEY_GAME, slug],
    queryFn: () => apiClient.getSingle(slug)
  });