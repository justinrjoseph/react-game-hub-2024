import { useState, useEffect } from 'react';

import { CanceledError } from 'axios';

import { ApiRes, Genre } from '../models/game';
import apiClient from '../services/api-client';

function useGenres(): { genres: Genre[]; error: string; isLoading:boolean; } {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient.get<ApiRes<Genre>>('/genres', { signal: controller.signal })
      .then(({ data }) => {
        setGenres(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
}

export default useGenres;