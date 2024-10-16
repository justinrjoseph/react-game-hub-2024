import { Image, SimpleGrid } from '@chakra-ui/react';

import useScreenshots from '../hooks/useScreenshots';

interface Props {
  slug: string;
}

const GameScreenshots = ({ slug }: Props): JSX.Element | null => {
  const { data: screenshots, error, isLoading } = useScreenshots(slug);

  if (error) throw error;

  if (isLoading) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap='1rem' marginBlockStart='1rem'>
      {screenshots?.results.map((item) => {
        return <Image key={item.id} src={item.image} />;
      })}
    </SimpleGrid>
  );
}

export default GameScreenshots;