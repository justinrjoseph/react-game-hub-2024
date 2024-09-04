import { useState } from 'react';

import { Grid, GridItem, Show } from '@chakra-ui/react'

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import Genres from './components/Genres';
import Platforms from './components/Platforms';
import { Genre } from './models/game';

function App(): JSX.Element {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <Genres selection={selectedGenre}
          select={(genre) => setSelectedGenre(genre)} />
      </GridItem>
    </Show>

    <GridItem area='main'>
      <Platforms />
      <GameGrid selectedGenre={selectedGenre} />
    </GridItem>
  </Grid>;
}

export default App;
