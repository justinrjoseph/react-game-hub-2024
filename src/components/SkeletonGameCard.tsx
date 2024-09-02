import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonGameCard = (): JSX.Element => {
  return (
    <Card inlineSize='28.375rem' borderRadius={10} overflow='hidden'>
      <Skeleton blockSize='18.75rem' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default SkeletonGameCard;