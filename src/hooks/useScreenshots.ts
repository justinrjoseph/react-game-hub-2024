import { useQuery, UseQueryResult } from '@tanstack/react-query';

import Screenshot from '../models/screenshot';
import HttpClient, { ApiRes } from '../services/http-client';

export default (slug: string): UseQueryResult<ApiRes<Screenshot>, Error> => {
  const screenshotService = new HttpClient<Screenshot>(`/games/${slug}/screenshots`);

  return useQuery<ApiRes<Screenshot>, Error, ApiRes<Screenshot>>({
    queryKey: ['screenshots', slug],
    queryFn: () => screenshotService.getAll()
  })
};