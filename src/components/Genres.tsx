import { Heading, HStack, Image, Link, List, ListItem, Spinner } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import createCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const Genres = (): JSX.Element | null => {
  const genreId = useGameQueryStore(store => store.gameQuery.genreId);
  const setGenreId = useGameQueryStore(store => store.setGenreId);

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
                  fontWeight={genreId === item.id ? 'bold' : ''}
                  onClick={() => setGenreId(item.id)}>
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