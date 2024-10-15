import { Outlet } from 'react-router-dom';

import { Box} from '@chakra-ui/react';

import Navbar from '../components/Navbar';

const Layout = () => {
	return (
		<>
      <Navbar />

      <Box padding='.625rem'>
        <Outlet />
      </Box>
    </>
	);
}

export default Layout;