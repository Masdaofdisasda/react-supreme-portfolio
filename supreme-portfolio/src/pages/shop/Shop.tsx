import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Logo = styled.img`
  width: 200px;
  margin-top: 100px;
`;

const Content = styled.div`
  display: flex;
  margin-top: 50px;
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-right: 50px;
`;

const CategoryListItem = styled.li`
  color: white;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
`;

const ItemImage = styled.img`
  width: 100%;
`;

const ItemName = styled.p`
  margin-top: 10px;
  font-weight: bold;
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
  const items = Array(12).fill({
    imageUrl: 'https://via.placeholder.com/200',
    name: 'Item Name',
  });

  return (
    <Container>
      <Header />
      <Logo
        src="https://www.supremenewyork.com/images/Supreme_logo.png"
        alt="Supreme Logo"
      />
      <Content>
        <CategoryList>
          {categories.map((category) => (
            <CategoryListItem key={category}>
              {category.toUpperCase()}
            </CategoryListItem>
          ))}
        </CategoryList>
        <Grid>
          {items.map((item, index) => (
            <Item key={index}>
              <ItemImage src={item.imageUrl} alt={item.name} />
              <ItemName>{item.name}</ItemName>
            </Item>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default Shop;
