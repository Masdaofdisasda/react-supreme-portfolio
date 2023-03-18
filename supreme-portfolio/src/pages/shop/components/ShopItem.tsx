import React from 'react';
import styled from 'styled-components';
import { Card, Image, Text } from 'rebass';

const StyledCard = styled(Card)`
  &:hover {
    div {
      font-weight: bold;
    }
    img {
      border: 1px solid darkgray;
    }
  }
`;

const ShopItem = () => {
  return (
    <StyledCard width={150}>
      <Image
        src={
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302'
        }
      />
      <Text
        fontFamily={'Courier New'}
        fontSize={12}
        color={'black'}
        justifyContent={'end'}
        pt={2}
      >
        project
      </Text>
    </StyledCard>
  );
};

export default ShopItem;
