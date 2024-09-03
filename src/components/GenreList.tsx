import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import createCroppedImageUrl from '../services/image-url';

const GenreList = (): JSX.Element | null => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner marginBlock='.625rem' />;

  return (
    <List marginBlock='.625rem'>
      {data.map((item) => {
        return (
          <ListItem key={item.id} paddingBlock='.3125rem'>
            <HStack>
              <Image boxSize='2rem'
                borderRadius={8}
                src={createCroppedImageUrl(item.image_background)} />
              <Text fontSize='lg'>{item.name}</Text>
            </HStack>
          </ListItem>
        );})}
    </List>
  );
}

export default GenreList;