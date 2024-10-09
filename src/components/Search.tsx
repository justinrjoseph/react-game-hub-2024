import { useRef } from 'react';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

import useGameQueryStore from '../store';

const Search = (): JSX.Element => {
  const setSearch = useGameQueryStore(store => store.setSearch);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();

      inputRef.current && setSearch(inputRef.current.value);
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input borderRadius={20}
          placeholder='Search games...'
          variant='filled'
          ref={inputRef} />
      </InputGroup>
    </form>
  );
}

export default Search;