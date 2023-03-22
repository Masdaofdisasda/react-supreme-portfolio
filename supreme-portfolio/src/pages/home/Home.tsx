import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { Logo } from '../../components/Logo';
import Background from './components/Background';
import useNavItems from '../../hooks/useNavItems';
import StyledLink from '../../components/StyledLink';

const List = styled.ul`
  list-style-type: none;
  margin: 48px 0 0;
  padding: 0;
`;

const Item = styled.li`
  padding: 4px 0;
`;

const Home: React.FC = () => {
  const menuItems = useNavItems();

  return (
    <>
      <Background />
      <Flex
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
      </Flex>
    </>
  );
};

export default Home;
