import { create } from 'zustand';

import { PAGE_SIZE }  from './hooks/constants';
import { GameQuery } from './models/game';
import { OrderingValue } from './models/ordering';

interface Store {
  gameQuery: GameQuery;
  setSearch: (search: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setOrdering: (ordering: OrderingValue) => void;
}

const pageSize = { pageSize: PAGE_SIZE };

const useGameQueryStore = create<Store>(set => ({
  gameQuery: { ...pageSize },
  setSearch: (search) => set(_ => ({ gameQuery: { search, ...pageSize } })),
  setGenreId: (genreId) => set(store => {
    return { gameQuery: { ...store.gameQuery, genreId } };
  }),
  setPlatformId: (platformId) => set(store => {
    return { gameQuery: { ...store.gameQuery, platformId } };
  }),
  setOrdering: (ordering) => set(store => {
    return { gameQuery: { ...store.gameQuery, ordering } };
  })
}));

export default useGameQueryStore;