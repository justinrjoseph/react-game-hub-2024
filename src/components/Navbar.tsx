import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';

import LightModeSwitch from './LightModeSwitch';
import Search from './Search';

interface Props {
  search: (term: string) => void;
}

const Navbar = ({ search }: Props): JSX.Element => {
  return (
    <HStack padding='.625rem'>
      <Image src={logo} boxSize='3.75rem' />
      <Search search={search} />
      <LightModeSwitch />
    </HStack>
  );
}

export default Navbar;