import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';

import { Game } from '../models/game';
import createCroppedImageUrl from '../services/image-url';

import AverageScore from './AverageScore';
import Emoji from './Emoji';
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
          <HStack justifyContent='space-between' marginBlockEnd='.625rem'>
            <PlatformIcons platforms={game.parent_platforms
              .map((item) => item.platform)} />
            <AverageScore score={game.metacritic} />
          </HStack>
          <Heading fontSize='2xl'>
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </GameCardWrapper>
  );
}

export default GameCard;