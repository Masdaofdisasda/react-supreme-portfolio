import React from 'react';
import styled from 'styled-components';
import { Text } from 'rebass';
import { TagProps } from '../Projects.types';

const CategoryItem = styled(Text)`
  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;

export const TagComponent = ({
  isSelected,
  select,
  tag: { displayName, tag },
}: TagProps) => {
  function selectTag(): void {
    select(tag);
  }

  return (
    <CategoryItem
      fontFamily={'Courier New'}
      fontSize={12}
      fontWeight={isSelected ? 'bold' : 'normal'}
      color={'black'}
      justifyContent={'end'}
      textAlign={'right'}
      onClick={selectTag}
    >
      {displayName.toLowerCase()}
    </CategoryItem>
  );
};
