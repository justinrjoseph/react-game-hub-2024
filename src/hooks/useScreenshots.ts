import { useQuery, UseQueryResult } from '@tanstack/react-query';

import Screenshot from '../models/screenshot';
import ApiClient, { ApiRes } from '../services/api-client';

export default (slug: string): UseQueryResult<ApiRes<Screenshot>, Error> => {
  const apiClient = new ApiClient<Screenshot>(`/games/${slug}/screenshots`);

  return useQuery<ApiRes<Screenshot>, Error, ApiRes<Screenshot>>({
    queryKey: ['screenshots', slug],
    queryFn: apiClient.getAll
  })
};