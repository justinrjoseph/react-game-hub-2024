import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import orderings, { OrderingValue } from '../models/ordering';
import useGameQueryStore from '../store';

const SortBy = (): JSX.Element => {
  const ordering = useGameQueryStore(store => store.gameQuery.ordering);
  const setOrdering = useGameQueryStore(store => store.setOrdering);

  const currentSort = ordering ? orderings[ordering] : null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by{currentSort && `: ${currentSort}`}
      </MenuButton>
      <MenuList>
        {(Object.keys(orderings) as OrderingValue[]).map((key) => {
          return (
            <MenuItem key={key} onClick={() => setOrdering(key)}>
              {orderings[key]}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default SortBy;