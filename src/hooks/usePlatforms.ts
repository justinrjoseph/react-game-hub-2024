import { useQuery, UseQueryResult } from '@tanstack/react-query';

import platforms from '../assets/data/platforms';
import { Platform } from '../models/platform';
import apiClient, { ApiRes } from '../services/api-client';

import { CACHE_KEY_PLATFORMS } from './constants';

export default (): UseQueryResult<ApiRes<Platform>, Error> =>
  useQuery<ApiRes<Platform>, Error, ApiRes<Platform>>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: () => apiClient
      .get<ApiRes<Platform>>('/platforms/lists/parents')
      .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs.
    initialData: { count: platforms.length, results: platforms }
  });