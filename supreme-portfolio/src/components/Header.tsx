import { Flex } from 'rebass';
import React, { memo } from 'react';
import { Logo } from './Logo';

const Header = memo(function Header() {
  return (
    <Flex alignContent={'center'} justifyContent={'center'} pt={6}>
      <Logo darkBackground={false} />
    </Flex>
  );
});

export default Header;
