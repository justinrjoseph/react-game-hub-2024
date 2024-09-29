import { useState } from 'react';

import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'

import DynamicHeading from './components/DynamicHeading';
import GameGrid from './components/GameGrid';
import Genres from './components/Genres';
import Navbar from './components/Navbar';
import Platforms from './components/Platforms';
import SortBy from './components/SortBy';
import { GameQuery } from './models/game';

function App(): JSX.Element {
  const [gameQuery, setGameQuery] = useState<GameQuery>({ pageSize: 20 } as GameQuery);

  return <Grid templateAreas={{
    base: `'nav' 'main'`, // mobile
    lg: `'nav nav' 'aside main'`
  }}
  templateColumns={{
    base: '1fr',
    lg: '12.5rem 1fr'
  }}>
    <GridItem area='nav' marginBlockEnd='1.25rem'>
      <Navbar search={(search) => setGameQuery({ ...gameQuery, search })} />
    </GridItem>

    <Show above='lg'>
      <GridItem area='aside' marginInline='.75rem'>
        <Genres selectedGenreId={gameQuery.genreId}
          select={({ id: genreId }) => setGameQuery({ ...gameQuery, genreId })} />
      </GridItem>
    </Show>

    <GridItem area='main' marginInlineEnd='.75rem'>
      <DynamicHeading gameQuery={gameQuery} />
      <HStack spacing={5}>
        <Platforms selectedPlatformId={gameQuery.platformId}
          select={({ id: platformId }) => setGameQuery({ ...gameQuery, platformId })} />
        <SortBy choice={gameQuery.ordering}
          select={(ordering) => setGameQuery({ ...gameQuery, ordering })} />
      </HStack>

      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>;
}

export default App;
