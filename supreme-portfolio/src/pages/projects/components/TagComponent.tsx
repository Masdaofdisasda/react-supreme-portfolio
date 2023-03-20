import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from 'rebass';
import { AllTagProps, TagProps } from '../Projects.types';

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
    <Flex alignItems={'end'}>
      <CategoryItem
        fontFamily={'Courier New'}
        fontSize={12}
        fontWeight={isSelected ? 'bold' : 'normal'}
        color={'black'}
        justifyContent={'end'}
        textAlign={'right'}
        display={'inline-block'}
        onClick={selectTag}
      >
        {displayName.toLowerCase()}
      </CategoryItem>
    </Flex>
  );
};

export const AllTagComponent = ({ isSelected, select }: AllTagProps) => {
  function selectTag(): void {
    select(undefined);
  }

  return (
    <Flex alignItems={'end'}>
      <CategoryItem
        fontFamily={'Courier New'}
        fontSize={12}
        fontWeight={isSelected ? 'bold' : 'normal'}
        color={'black'}
        justifyContent={'end'}
        textAlign={'right'}
        display={'inline-block'}
        onClick={selectTag}
      >
        all
      </CategoryItem>
    </Flex>
  );
};
