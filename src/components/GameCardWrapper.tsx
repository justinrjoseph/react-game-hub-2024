import {Box} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardWrapper = ({ children }:Props): JSX.Element => {
  return (
    <Box inlineSize='28.375rem' borderRadius={10} overflow='hidden'>
      {children}
    </Box>
  );
}

export default GameCardWrapper;