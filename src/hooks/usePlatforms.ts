import { useQuery, UseQueryResult } from '@tanstack/react-query';

import ms from 'ms';

import platforms from '../assets/data/platforms';
import Platform from '../models/platform';
import ApiClient, { ApiRes } from '../services/api-client';

import { CACHE_KEY_PLATFORMS } from './constants';

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

export default (): UseQueryResult<ApiRes<Platform>, Error> =>
  useQuery<ApiRes<Platform>, Error, ApiRes<Platform>>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: { count: platforms.length, results: platforms }
  });