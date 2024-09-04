import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatforms from '../hooks/usePlatforms';

const Platforms = (): JSX.Element | null => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
      <MenuList>
        {data.map((item) => <MenuItem key={item.id}>{item.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
}

export default Platforms;