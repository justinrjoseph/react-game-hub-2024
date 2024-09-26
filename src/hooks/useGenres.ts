import { useQuery, UseQueryResult } from '@tanstack/react-query';

import genres from '../assets/data/genres';
import { Genre } from '../models/game';
import ApiClient, { ApiRes } from '../services/api-client';

import { CACHE_KEY_GENRES } from './constants';

const apiClient = new ApiClient<Genre>('/genres');

export default (): UseQueryResult<ApiRes<Genre>, Error> =>
  useQuery<ApiRes<Genre>, Error, ApiRes<Genre>>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs.
    initialData: { count: genres.length, results: genres }
  });