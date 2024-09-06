import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import { OrderingValue, orderings } from '../models/ordering';

interface Props {
  select: (value: OrderingValue) => void;
  choice: OrderingValue;
}

const SortBy = ({ choice, select }: Props): JSX.Element => {
  const currentSort = orderings[choice];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by{currentSort && `: ${currentSort}`}
      </MenuButton>
      <MenuList>
        {(Object.keys(orderings) as OrderingValue[]).map((key) => {
          return (
            <MenuItem key={key} onClick={() => select(key)}>
              {orderings[key]}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default SortBy;