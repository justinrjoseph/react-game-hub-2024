import { Heading, HStack, Image, Link, List, ListItem, Spinner } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import { Genre } from '../models/game';
import createCroppedImageUrl from '../services/image-url';

interface Props {
  select: (genre: Genre) => void,
  choice: Genre | null;
}

const Genres = ({ select, choice }: Props): JSX.Element | null => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner marginBlock='.625rem' />;

  return (
    <>
      <Heading fontSize='2xl' marginBlockEnd='1.25rem'>Genres</Heading>
      <List marginBlock='.625rem'>
        {data.map((item) => {
          return (
            <ListItem key={item.id} paddingBlock='.3125rem'>
              <HStack>
                <Image boxSize='2rem'
                  borderRadius={8}
                  objectFit='cover'
                  src={createCroppedImageUrl(item.image_background)} />
                <Link href='#' fontSize='lg'
                  fontWeight={choice?.id === item.id ? 'bold' : ''}
                  onClick={() => select(item)}>
                  {item.name}
                </Link>
              </HStack>
            </ListItem>
          );})}
      </List>
    </>
  );
}

export default Genres;