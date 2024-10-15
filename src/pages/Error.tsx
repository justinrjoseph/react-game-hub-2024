import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { Box, Heading, Text } from '@chakra-ui/react';

import Navbar from '../components/Navbar';

const Error = () => {
  return (
    <>
      <Navbar />
      <Box padding='.625rem'>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(useRouteError())
            ? 'That page does not exist.'
            : 'An unexpected error occurred.'}
        </Text>
      </Box>
    </>
  )
}

export default Error;