import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  selection: any;
}

const SortBy = ({ selection }: Props): JSX.Element => {
  // const {} = useSort();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selection?.name || 'Order by'}
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
        {/* {data.map((item) => {
          return (
          <MenuItem key={item.id} onClick={() => select(item)}>
            {item.name}
          </MenuItem>
          );
        })} */}
      </MenuList>
    </Menu>
  );
}

export default SortBy;