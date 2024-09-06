import { useRef } from 'react';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  search: (term: string) => void;
}

const Search = ({ search }: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();

      inputRef.current && search(inputRef.current.value);
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