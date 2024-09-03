import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import createCroppedImageUrl from '../services/image-url';

const GenreList = (): JSX.Element => {
  const { data } = useGenres();

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