import { useState } from 'react';

import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import Genres from './components/Genres';
import Platforms from './components/Platforms';
import SortBy from './components/SortBy';
import { GameQuery } from './models/game';

function App(): JSX.Element {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return <Grid templateAreas={{
    base: `'nav' 'main'`, // mobile
    lg: `'nav nav' 'aside main'`
  }}
  templateColumns={{
    base: '1fr',
    lg: '12.5rem 1fr'
  }}>
    <GridItem area='nav' bg='coral' marginBlockEnd='1.25rem'>
      <Navbar />
    </GridItem>

    <Show above='lg'>
      <GridItem area='aside' paddingInline='.75rem'>
        <Genres choice={gameQuery.genre}
          select={(genre) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
    </Show>

    <GridItem area='main'>
      <HStack spacing={5}>
        <Platforms choice={gameQuery.platform}
          select={(platform) => setGameQuery({ ...gameQuery, platform })} />
        <SortBy choice={gameQuery.ordering}
          select={(ordering) => setGameQuery({ ...gameQuery, ordering })} />
      </HStack>

      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>;
}

export default App;
