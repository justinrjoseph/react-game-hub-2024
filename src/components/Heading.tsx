import { Heading } from '@chakra-ui/react';

import { GameQuery } from '../models/game';

interface Props {
  gameQuery: GameQuery
}

const DynamicHeading = ({ gameQuery }: Props): JSX.Element => {
  return (
    <Heading as='h1' fontSize='5xl' marginBlockEnd={5}>
      {`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`}
    </Heading>
  );
}

export default DynamicHeading;