import { useQuery, UseQueryResult } from '@tanstack/react-query';

import Game from '../models/game';
import gameService from '../services/game-service';

import { CACHE_KEY_GAME } from './constants';

export default (slug: string): UseQueryResult<Game, Error> =>
  useQuery<Game, Error, Game>({
    queryKey: [...CACHE_KEY_GAME, slug],
    queryFn: () => gameService.getSingle(slug)
  });