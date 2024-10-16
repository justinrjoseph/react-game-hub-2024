import { useParams } from 'react-router-dom';

import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';

import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';

const GameDetails = () => {
  const { slug } = useParams<{ slug: string }>();

	const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap='2rem'>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>

        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer slug={game.slug} />
        <GameScreenshots slug={game.slug} />
      </GridItem>
    </SimpleGrid>
  );
}

export default GameDetails;