import { HStack, Image } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import logo from '../assets/logo.webp';

import LightModeSwitch from './LightModeSwitch';
import Search from './Search';

const Navbar = (): JSX.Element => {
  return (
    <HStack padding='.625rem' marginBlockEnd='1.25rem'>
      <Link to="/" className='home'>
        <Image src={logo} boxSize='3.75rem' />
      </Link>
      <Search />
      <LightModeSwitch />
    </HStack>
  );
}

export default Navbar;