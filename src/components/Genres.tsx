import { HStack, Image, Link, List, ListItem, Spinner } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import { Genre } from '../models/game';
import createCroppedImageUrl from '../services/image-url';

interface Props {
  select: (genre: Genre) => void,
  selection: Genre | null;
}

const Genres = ({ select, selection }: Props): JSX.Element | null => {
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
              <Link href='#' fontSize='lg'
                fontWeight={selection?.id === item.id ? 'bold' : ''}
                onClick={() => select(item)}>
                {item.name}
              </Link>
            </HStack>
          </ListItem>
        );})}
    </List>
  );
}

export default Genres;