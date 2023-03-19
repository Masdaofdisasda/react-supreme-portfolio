import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';
import { Logo } from '../../components/Logo';
import Background from './components/Background';

const List = styled.ul`
  list-style-type: none;
  margin: 48px 0 0;
  padding: 0;
`;

const Item = styled.li`
  padding: 6px 0;

  &:hover {
    background-color: red;
  }
`;

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: white;
  &:hover {
    background-color: red;
  }
`;

const Home: React.FC = () => {
  const menuItems = ['news', 'projects', 'about', 'resume', 'contact'];

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
              <StyledLink to={item}>
                <Text fontFamily={'Courier New'} fontSize={12}>
                  {item.toLowerCase()}
                </Text>
              </StyledLink>
            </Item>
          ))}
        </List>
      </Flex>
    </>
  );
};

export default Home;
