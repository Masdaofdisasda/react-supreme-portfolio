import React, { memo } from 'react';
import { Flex } from 'rebass';
import useNavItems from '../hooks/useNavItems';
import StyledLink from './StyledLink';

const Footer = memo(function Footer() {
  const navItems = useNavItems();

  return (
    <Flex alignContent={'center'} justifyContent={'center'} pt={4} pb={6}>
      <Flex
        justifyContent={'start'}
        width={'45%'}
        sx={{
          gap: 3,
        }}
      >
        {navItems.map((item) => (
          <StyledLink text={item} routeTo={item} darkBackground={false} />
        ))}
      </Flex>
    </Flex>
  );
});

export default Footer;
