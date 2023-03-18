import { Box, Flex } from 'rebass';
import React from 'react';

export const Header = () => {
  return (
    <Flex alignContent={'center'} justifyContent={'center'} pt={6}>
      <Box
        bg={'red'}
        fontFamily={'Futura'}
        fontStyle={'italic'}
        fontWeight={'bold'}
        fontSize={36}
        px={2}
        color={'white'}
      >
        Wolum
      </Box>
    </Flex>
  );
};
