import { useQuery, UseQueryResult } from '@tanstack/react-query';

import ms from 'ms';

import genres from '../assets/data/genres';
import { Genre } from '../models/game';
import HttpClient, { ApiRes } from '../services/http-client';

import { CACHE_KEY_GENRES } from './constants';

const genreService = new HttpClient<Genre>('/genres');

export default (): UseQueryResult<ApiRes<Genre>, Error> =>
  useQuery<ApiRes<Genre>, Error, ApiRes<Genre>>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () => genreService.getAll(),
    staleTime: ms('24h'),
    initialData: { count: genres.length, results: genres }
  });