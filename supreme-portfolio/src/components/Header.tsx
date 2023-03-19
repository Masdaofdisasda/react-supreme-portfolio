import {Flex} from 'rebass';
import React from 'react';
import {Logo} from './Logo';

export const Header = () => {
  return (
    <Flex alignContent={'center'} justifyContent={'center'} pt={6}>
        <Logo darkBackground={false}/>
    </Flex>
  );
};
