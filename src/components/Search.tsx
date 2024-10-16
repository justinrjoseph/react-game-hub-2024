import { useRef } from 'react';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate}  from 'react-router-dom';

import useGameQueryStore from '../store';

const Search = (): JSX.Element => {
  const setSearch = useGameQueryStore(store => store.setSearch);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();

      if (inputRef.current) {
        setSearch(inputRef.current.value);
        navigate('/');
      }
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