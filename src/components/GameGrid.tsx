import React from 'react';

import { ComponentWithAs, SimpleGrid, Spinner, Text, TextProps } from '@chakra-ui/react';

import InfiniteScroll from 'react-infinite-scroll-component';

import useGames from '../hooks/useGames';

import GameCard from './GameCard';
import SkeletonGameCard from './SkeletonGameCard';

const GameGrid = (): JSX.Element => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage
  } = useGames();

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = games?.pages
    .reduce((count, page) => count + page.results.length, 0) || 0;

  return (
    <InfiniteScroll dataLength={fetchedGamesCount}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner />}>
      <SimpleGrid columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4
      }}
        marginBlockStart='2rem'
        spacing={6}>
        {isLoading && [...Array(12).keys()].map((_, i) => {
          return <SkeletonGameCard key={i} />;
        })}
        {!isLoading && games.pages.map((page, i) => {
          return (
            <React.Fragment key={i}>
              {page.results.map((item) => <GameCard key={item.id} game={item} />)}
            </React.Fragment>
          );
        })}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GameGrid;