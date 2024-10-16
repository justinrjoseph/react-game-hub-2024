import { useQuery, UseQueryResult } from '@tanstack/react-query';

import ApiClient, { ApiRes } from '../services/api-client';

import { Trailer } from '../models/trailer';

export default (slug: string): UseQueryResult<ApiRes<Trailer>, Error> => {
  const apiClient = new ApiClient<Trailer>(`/games/${slug}/movies`);

  return useQuery<ApiRes<Trailer>, Error, ApiRes<Trailer>>({
    queryKey: ['trailers', slug],
    queryFn: apiClient.getAll
  })
};