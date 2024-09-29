import { Heading, HStack, Image, Link, List, ListItem, Spinner } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import { Genre } from '../models/game';
import createCroppedImageUrl from '../services/image-url';

interface Props {
  select: (genre: Genre) => void,
  selectedGenreId?: number;
}

const Genres = ({ select, selectedGenreId }: Props): JSX.Element | null => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner marginBlock='.625rem' />;

  return (
    <>
      <Heading fontSize='2xl' marginBlockEnd='1.25rem'>Genres</Heading>
      <List marginBlock='.625rem'>
        {genres.results.map((item) => {
          return (
            <ListItem key={item.id} paddingBlock='.3125rem'>
              <HStack>
                <Image boxSize='2rem'
                  borderRadius={8}
                  objectFit='cover'
                  src={createCroppedImageUrl(item.image_background)} />
                <Link href='#' fontSize='lg'
                  fontWeight={selectedGenreId === item.id ? 'bold' : ''}
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