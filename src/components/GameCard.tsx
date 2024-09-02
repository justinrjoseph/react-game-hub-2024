import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

import { Game } from '../models/game';
import PlatformIcons from './PlatformIcons';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props): JSX.Element => {
  return (
    <Card borderRadius='.625rem' overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIcons platforms={game.parent_platforms
          .map((item) => item.platform)} />
      </CardBody>
    </Card>
  );
}

export default GameCard;