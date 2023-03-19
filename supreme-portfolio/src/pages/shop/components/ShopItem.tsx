import React from 'react';
import styled from 'styled-components';
import { Card, Image, Text } from 'rebass';
import { ItemProps } from '../Shop.types';

const StyledCard = styled(Card)`
  &:hover {
    div {
      font-weight: bold;
    }
    img {
      border: 1px solid darkgray;
    }
    cursor: pointer;
  }
`;

const ShopItem = ({ image, name }: ItemProps) => {
  return (
    <StyledCard width={150}>
      <Image src={image} />
      <Text
        fontFamily={'Courier New'}
        fontSize={12}
        color={'black'}
        justifyContent={'end'}
        pt={2}
      >
        {name}
      </Text>
    </StyledCard>
  );
};

export default ShopItem;
