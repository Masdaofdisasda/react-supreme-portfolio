import { Card, Image } from 'rebass';
import React from 'react';
import styled from 'styled-components';
import { ThumbnailProps } from '../ProjectDetail.types';

const StyledCard = styled(Card)`
  &:hover {
    div {
      border: 1px solid lightgray;
    }

    cursor: pointer;
  }
`;

const Border = styled.div<{ selected: boolean }>`
  border: ${({ selected }) =>
    selected ? '1px solid darkgray' : '1px solid white'};
`;

export const Thumbnail = ({ imgSrc, onClick, selected }: ThumbnailProps) => {
  return (
    <StyledCard m={1}>
      <Border selected={selected}>
        <Image
          src={imgSrc}
          width={'40px'}
          onClick={() => onClick(imgSrc)}
          m={0.5}
        />
      </Border>
    </StyledCard>
  );
};
