import { useQuery, UseQueryResult } from '@tanstack/react-query';

import ms from 'ms';

import { Game } from '../models/game';
import ApiClient from '../services/api-client';

import { CACHE_KEY_GAME } from './constants';

const apiClient = new ApiClient<Game>('/games');

export default (slug: string): UseQueryResult<Game, Error> => {
  return useQuery<Game, Error, Game>({
    queryKey: [...CACHE_KEY_GAME, slug],
    queryFn: () => apiClient.getSingle(slug)
  });
};