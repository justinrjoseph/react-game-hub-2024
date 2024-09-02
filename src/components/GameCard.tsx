import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';

import { Game } from '../models/game';
import createCroppedImageUrl from '../services/image-url';

import AverageScore from './AverageScore';
import GameCardWrapper from './GameCardWrapper';
import PlatformIcons from './PlatformIcons';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props): JSX.Element => {
  return (
    <GameCardWrapper>
      <Card>
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
    </GameCardWrapper>
  );
}

export default GameCard;