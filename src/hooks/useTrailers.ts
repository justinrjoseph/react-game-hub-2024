import { useQuery, UseQueryResult } from '@tanstack/react-query';

import HttpClient, { ApiRes } from '../services/http-client';

import Trailer from '../models/trailer';

export default (slug: string): UseQueryResult<ApiRes<Trailer>, Error> => {
  const trailerService = new HttpClient<Trailer>(`/games/${slug}/movies`);

  return useQuery<ApiRes<Trailer>, Error, ApiRes<Trailer>>({
    queryKey: ['trailers', slug],
    queryFn: () => trailerService.getAll()
  })
};