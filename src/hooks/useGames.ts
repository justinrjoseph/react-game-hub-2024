import { useState, useEffect } from 'react';

import { Game, GamesRes } from '../models/game';
import apiClient from '../services/api-client';
import {CanceledError} from 'axios';

function useGames(): { games: Game[]; error: string; isLoading:boolean; } {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient.get<GamesRes>('/games', { signal: controller.signal })
      .then(({ data }) => {
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}

export default useGames;