import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

import { Game } from '../models/game';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props): JSX.Element => {
  return (
    <Card borderRadius='.625rem' overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;