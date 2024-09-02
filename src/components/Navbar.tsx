import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';

import LightModeSwitch from './LightModeSwitch';

const Navbar = ():JSX.Element => {
  return (
    <HStack justifyContent='space-between' padding='.625rem'>
      <Image src={logo} boxSize='3.75rem' />
      <LightModeSwitch />
    </HStack>
  );
}

export default Navbar;