import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../models/platform';
import { usePlatform } from '../hooks/usePlatform';

interface Props {
  select: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const Platforms = ({ select, selectedPlatformId }: Props): JSX.Element | null => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  const selectedPlatform = usePlatform(selectedPlatformId, 'Platforms');

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((item) => {
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