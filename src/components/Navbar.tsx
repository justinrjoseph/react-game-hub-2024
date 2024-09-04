import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';

import LightModeSwitch from './LightModeSwitch';
import Search from './Search';

const Navbar = ():JSX.Element => {
  return (
    <HStack padding='.625rem'>
      <Image src={logo} boxSize='3.75rem' />
      <Search />
      <LightModeSwitch />
    </HStack>
  );
}

export default Navbar;