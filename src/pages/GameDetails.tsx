import { useParams } from 'react-router-dom';

import { Heading, Spinner, Text } from '@chakra-ui/react';

import useGame from '../hooks/useGame';

const GameDetails = () => {
  const { slug } = useParams<{ slug: string }>();

	const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
}

export default GameDetails;