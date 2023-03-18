import React from 'react';
import { Box, Card, Flex, Heading, Text, Image } from 'rebass';
import styled from 'styled-components';
import { Header } from '../../components/Header';

const Menu = styled.ul`
  list-style-type: none;
  margin: 0 0 0;
  padding: 0;
`;

const CategoryItem = styled(Text)`
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
        <Flex>
          <Box width={'25%'}>
            <Flex justifyContent={'end'} px={3}>
              <Menu>
                {categories.map((item, index) => (
                  <li key={index}>
                    <CategoryItem
                      fontFamily={'Courier New'}
                      fontSize={12}
                      color={'black'}
                      justifyContent={'end'}
                      textAlign={'right'}
                    >
                      {item.toLowerCase()}
                    </CategoryItem>
                  </li>
                ))}
              </Menu>
            </Flex>
          </Box>
          <Box width={'75%'}>
            <Flex>
              <Card width={256}>
                <Image src={'https://via.placeholder.com/200'} />
                <Heading>text here</Heading>
              </Card>
              <Card width={256}>
                <Image src={'https://via.placeholder.com/200'} />
                <Heading>text here</Heading>
              </Card>
              <Card width={256}>
                <Image src={'https://via.placeholder.com/200'} />
                <Heading>text here</Heading>
              </Card>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Shop;
