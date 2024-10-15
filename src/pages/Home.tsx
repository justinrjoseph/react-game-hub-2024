import { Show, Grid, GridItem, HStack } from '@chakra-ui/react';

import DynamicHeading from '../components/DynamicHeading';
import GameGrid from '../components/GameGrid';
import Genres from '../components/Genres';
import Platforms from '../components/Platforms';
import SortBy from '../components/SortBy';

const Home = () => {
  return (
    <Grid templateAreas={{
      base: `'main'`, // mobile
      lg: `'aside main'`
    }}
    templateColumns={{
      base: '1fr',
      lg: '12.5rem 1fr'
    }}>
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
    </Grid>
  )
}

export default Home;