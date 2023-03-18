import React from 'react';
import { Box, Card, Flex, Heading, Text, Image } from 'rebass';
import styled from 'styled-components';
import { Header } from '../../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Menu = styled.ul`
  list-style-type: none;
  margin: 30px 0 0;
  padding: 0;
`;

const CategoryItem = styled.li`
  padding: 8px 16px;

  &:hover {
    background-color: red;
  }
`;

const Shop: React.FC = () => {
  const categories = [
    'jackets',
    'shirts',
    'tops/sweaters',
    'sweatshirts',
    'pants',
    'shorts',
    't-shirts',
    'hats',
    'bags',
  ];
  const images = [
    { url: 'https://via.placeholder.com/200', subtext: 'Image 1' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 2' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 3' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 4' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 5' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 6' },
  ];

  return (
    <div>
      <Header />
      <Flex flexDirection={'column'} px={3} pt={5}>
        <Box
          sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
          }}
        >
          <Menu>
            {categories.map((item, index) => (
              <CategoryItem key={index}>
                <Text fontFamily={'Courier New'}>{item.toLowerCase()}</Text>
              </CategoryItem>
            ))}
          </Menu>
          <Card width={256}>
            <Image src={'https://via.placeholder.com/200'} />
            <Heading>text here</Heading>
          </Card>
        </Box>
      </Flex>
    </div>
  );
};

export default Shop;
