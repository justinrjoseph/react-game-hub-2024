import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'

import DynamicHeading from './components/DynamicHeading';
import GameGrid from './components/GameGrid';
import Genres from './components/Genres';
import Navbar from './components/Navbar';
import Platforms from './components/Platforms';
import SortBy from './components/SortBy';

function App(): JSX.Element {
  return <Grid templateAreas={{
    base: `'nav' 'main'`, // mobile
    lg: `'nav nav' 'aside main'`
  }}
  templateColumns={{
    base: '1fr',
    lg: '12.5rem 1fr'
  }}>
    <GridItem area='nav' marginBlockEnd='1.25rem'>
      <Navbar />
    </GridItem>

    <Show above='lg'>
      <GridItem area='aside' marginInline='.75rem'>
        <Genres />
      </GridItem>
    </Show>

    <GridItem area='main' marginInlineEnd='.75rem'>
      <DynamicHeading />
      <HStack spacing={5}>
        <Platforms />
        <SortBy />
      </HStack>

      <GameGrid />
    </GridItem>
  </Grid>;
}

export default App;
