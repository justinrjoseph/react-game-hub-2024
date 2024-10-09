import { Heading } from '@chakra-ui/react';

import { useGenre }  from '../hooks/useGenre';
import { usePlatform }  from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const DynamicHeading = (): JSX.Element => {
  const gameQuery = useGameQueryStore(store => store.gameQuery);

  const selectedPlatform = usePlatform(gameQuery.platformId);
  const selectedGenre = useGenre(gameQuery.genreId);

  return (
    <Heading as='h1' fontSize='5xl' blockSize='2.375rem' lineHeight='2rem' marginBlockEnd={5}>
      {`${selectedPlatform} ${selectedGenre} Games`}
    </Heading>
  );
}

export default DynamicHeading;