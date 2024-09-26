import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import { GameQuery } from '../models/game';

import GameCard from './GameCard';
import SkeletonGameCard from './SkeletonGameCard';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props): JSX.Element => {
  const { data: games, error, isLoading } = useGames(gameQuery);

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    }}
      marginBlockStart='2rem'
      spacing={6}>
      {isLoading && [...Array(12).keys()].map((_, i) => {
        return <SkeletonGameCard key={i} />;
      })}
      {!isLoading && games.results.map((item) => {
        return <GameCard key={item.id} game={item} />
      })}
    </SimpleGrid>
  );
}

export default GameGrid;