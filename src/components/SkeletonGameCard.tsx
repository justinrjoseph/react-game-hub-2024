import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

import GameCardWrapper from './GameCardWrapper';

const SkeletonGameCard = (): JSX.Element => {
  return (
    <GameCardWrapper>
      <Card>
        <Skeleton blockSize='21rem' />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardWrapper>
  );
}

export default SkeletonGameCard;