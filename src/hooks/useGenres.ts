import { useQuery, UseQueryResult } from '@tanstack/react-query';

import genres from '../assets/data/genres';
import { ApiRes, Genre } from '../models/game';
import apiClient from '../services/api-client';

import { CACHE_KEY_GENRES } from './constants';

export default (): UseQueryResult<ApiRes<Genre>, Error> =>
  useQuery<ApiRes<Genre>, Error, ApiRes<Genre>>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () => apiClient
      .get<ApiRes<Genre>>('/genres')
      .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs.
    initialData: { count: genres.length, results: genres }
  });