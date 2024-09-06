import { useState, useEffect } from 'react';

import { AxiosRequestConfig, CanceledError } from 'axios';

import { ApiRes } from '../models/game';
import apiClient from '../services/api-client';

export interface Payload<T> {
  isLoading: boolean;
  data: T[];
  error: string | null;
}

function useData<T>(
  { endpoint, reqConfig = {}, deps }: {
  endpoint: 'games' | 'genres' | 'platforms/lists/parents';
  reqConfig?:AxiosRequestConfig;
  deps?:any[]
}): Payload<T> {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient.get<ApiRes<T>>(`/${endpoint}`, {
      signal: controller.signal,
      ...reqConfig
    })
      .then(({ data }) => {
        setData(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, deps || []);

  return { data, error, isLoading };
}

export default useData;