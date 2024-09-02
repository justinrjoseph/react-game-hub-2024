import { useState, useEffect } from 'react';

import { Game, GamesRes } from '../models/game';
import apiClient from '../services/api-client';
import {CanceledError} from 'axios';

function useGames():{ games: Game[]; error: string } {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient.get<GamesRes>('/games', { signal: controller.signal })
      .then(({ data }) => setGames(data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
}

export default useGames;