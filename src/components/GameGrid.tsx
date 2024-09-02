import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';

import GameCard from './GameCard';
import SkeletonGameCard from './SkeletonGameCard';

const GameGrid = (): JSX.Element => {
  const { data, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4
      }}
        padding='.625rem'
        spacing='.625rem'>
        {isLoading && [...Array(12).keys()].map((_, i) => {
          return <SkeletonGameCard key={i} />;
        })}
        {!isLoading && data.map((item) => {
          return <GameCard key={item.id} game={item} />
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;