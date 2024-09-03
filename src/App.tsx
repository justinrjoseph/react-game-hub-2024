import { Grid, GridItem, Show } from '@chakra-ui/react'

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App(): JSX.Element {
  return <Grid templateAreas={{
    base: `'nav' 'main'`, // mobile
    lg: `'nav nav' 'aside main'`
  }}
  templateColumns={{
    base: '1fr',
    lg: '12.5rem 1fr'
  }}>
    <GridItem area='nav' bg='coral'>
      <Navbar />
    </GridItem>

    <Show above='lg'>
      <GridItem area='aside' paddingInline='.75rem'>
        <GenreList />
      </GridItem>
    </Show>

    <GridItem area='main'>
      <GameGrid />
    </GridItem>
  </Grid>;
}

export default App;
