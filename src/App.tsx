import { useState } from 'react';

import { Grid, GridItem, Show } from '@chakra-ui/react'

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import Genres from './components/Genres';
import Platforms from './components/Platforms';
import { GameQuery, Genre, Platform } from './models/game';

function App(): JSX.Element {
  /* const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null); */
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
        <Genres selection={gameQuery.genre}
          select={(genre) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
    </Show>

    <GridItem area='main'>
      <Platforms selection={gameQuery.platform}
        select={(platform) => setGameQuery({ ...gameQuery, platform })} />
      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>;
}

export default App;
