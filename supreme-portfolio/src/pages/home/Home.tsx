import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { Logo } from '../../components/Logo';
import useNavItems from '../../hooks/useNavItems';
import StyledLink from '../../components/StyledLink';
import { SocialLinks } from './components/SocialLinks';
import Background from './components/Background';

const List = styled.ul`
  list-style-type: none;
  margin: 48px 0 0;
  padding: 0;
`;

const Item = styled.li`
  padding: 4px 0;
`;

const Overlay = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Home: React.FC = () => {
  const menuItems = useNavItems();

  return (
    <>
      <Background />
      <Overlay
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        justifyItems={'center'}
        height={'100vh'}
      >
        <Logo darkBackground={true} />
        <List>
          {menuItems.map((item, index) => (
            <Item key={index}>
              <StyledLink text={item} routeTo={item} textColor={'white'} />
            </Item>
          ))}
        </List>
        <SocialLinks />
      </Overlay>
    </>
  );
};

export default Home;
