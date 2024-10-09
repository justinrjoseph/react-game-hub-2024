import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatforms from '../hooks/usePlatforms';
import { usePlatform } from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const Platforms = (): JSX.Element | null => {
  const platformId = useGameQueryStore(store => store.gameQuery.platformId);
  const setPlatformId = useGameQueryStore(store => store.setPlatformId);

  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  const selectedPlatform = usePlatform(platformId, 'Platforms');

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((item) => {
          return (
            <MenuItem key={item.id} onClick={() => setPlatformId(item.id)}>
              {item.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default Platforms;