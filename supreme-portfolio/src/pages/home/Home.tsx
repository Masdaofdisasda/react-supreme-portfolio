import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Text } from 'rebass';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: grey;
`;

const Menu = styled.ul`
  list-style-type: none;
  margin: 30px 0 0;
  padding: 0;
`;

const Item = styled.li`
  padding: 8px 16px;
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
    <Container>
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
      <Menu>
        {menuItems.map((item, index) => (
          <Item key={index}>
            <StyledLink to={item}>
              <Text fontFamily={'Courier New'}>{item.toLowerCase()}</Text>
            </StyledLink>
          </Item>
        ))}
      </Menu>
    </Container>
  );
};

export default Home;
