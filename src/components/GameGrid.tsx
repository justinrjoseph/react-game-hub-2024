import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';

import GameCard from './GameCard';
import SkeletonGameCard from './SkeletonGameCard';

const GameGrid = (): JSX.Element => {
  const { games, error, isLoading } = useGames();

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
        {!isLoading && games.map((game) => {
          return <GameCard key={game.id} game={game} />
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;