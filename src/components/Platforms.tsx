import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../models/game';

interface Props {
  select: (platform: Platform) => void;
  selection: Platform | null;
}

const Platforms = ({ select, selection }: Props): JSX.Element | null => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selection?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((item) => {
          return (
          <MenuItem key={item.id} onClick={() => select(item)}>
            {item.name}
          </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default Platforms;