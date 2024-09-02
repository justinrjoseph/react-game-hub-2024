import { Grid, GridItem, Show } from '@chakra-ui/react'

import Navbar from './components/Navbar';

function App(): JSX.Element {
  return <Grid templateAreas={{
    base: `'nav' 'main'`, // mobile
    lg: `'nav nav' 'aside main'`
  }}>
    <GridItem area='nav' bg='coral'>
      <Navbar />
    </GridItem>

    <Show above='lg'>
      <GridItem area='aside'>Aside</GridItem>
    </Show>

    <GridItem area='main'>Main</GridItem>
  </Grid>;
}

export default App;
