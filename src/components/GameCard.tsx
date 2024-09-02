import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';

import { Game } from '../models/game';
import createCroppedImageUrl from '../services/image-url';

import PlatformIcons from './PlatformIcons';
import AverageScore from './AverageScore';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props): JSX.Element => {
  return (
    <Card borderRadius='.625rem' overflow='hidden'>
      <Image src={createCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIcons platforms={game.parent_platforms
            .map((item) => item.platform)} />
          <AverageScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;