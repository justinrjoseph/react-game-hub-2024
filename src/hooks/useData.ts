import { useState, useEffect } from 'react';

import { CanceledError } from 'axios';

import { ApiRes } from '../models/game';
import apiClient from '../services/api-client';

export interface Payload<T> {
  data: T[];
  error: string;
  isLoading:boolean;
}

function useData<T>(endpoint:'games' | 'genres'): Payload<T> {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient.get<ApiRes<T>>(`/${endpoint}`, { signal: controller.signal })
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
  }, []);

  return { data, error, isLoading };
}

export default useData;