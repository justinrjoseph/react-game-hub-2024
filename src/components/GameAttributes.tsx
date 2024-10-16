import { SimpleGrid } from '@chakra-ui/react';

import { Game } from '../models/game';

import AverageScore from './AverageScore';
import TermAndDefinitions from './TermAndDefinitions';

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as='dl' columns={2} rowGap='2rem' marginBlock='1rem'>
      <TermAndDefinitions term='Platforms'>
        {game.parent_platforms
          .map((item) => item.platform)
          .map(({ name }) => <dd key={name}>{name}</dd>)}
      </TermAndDefinitions>
      <TermAndDefinitions term='Metascore'>
        <dd>
          <AverageScore score={game.metacritic} />
        </dd>
      </TermAndDefinitions>
      <TermAndDefinitions term='Genres'>
        {game.genres.map(({ name }) => <dd key={name}>{name}</dd>)}
      </TermAndDefinitions>
      <TermAndDefinitions term='Publishers'>
        {game.publishers.map(({ name }) => <dd key={name}>{name}</dd>)}
      </TermAndDefinitions>
    </SimpleGrid>
  );
}

export default GameAttributes;