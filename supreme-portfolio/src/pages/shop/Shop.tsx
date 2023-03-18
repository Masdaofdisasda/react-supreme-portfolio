import React from 'react';
import { Box, Card, Flex, Heading, Text, Image } from 'rebass';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import ShopItem from './components/ShopItem';

const Menu = styled.ul`
  list-style-type: none;
  margin: 0 0 0;
  padding: 0;
`;

const CategoryItem = styled(Text)`
  &:hover {
    background-color: red;
    color: white;
  }
`;

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 20px;
`;

const Shop: React.FC = () => {
  const categories = [
    'all',
    'comp. vis',
    'comp. graphics',
    'sw engineering',
    'web dev',
    'ui design',
    'music',
    'game dev',
  ];
  const images = [
    { url: 'https://via.placeholder.com/200', subtext: 'Image 1' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 2' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 3' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 4' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 5' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 6' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 3' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 4' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 5' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 2' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 3' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 4' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 5' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 6' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 3' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 4' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 5' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 2' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 3' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 4' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 5' },
    { url: 'https://via.placeholder.com/200', subtext: 'Image 6' },
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
          <Box width={'20%'}>
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
          <Box width={'70%'}>
            <GridContainer>
              {images.map((image, index) => (
                <ImageItem key={index}>
                  <ShopItem />
                </ImageItem>
              ))}
            </GridContainer>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Shop;
