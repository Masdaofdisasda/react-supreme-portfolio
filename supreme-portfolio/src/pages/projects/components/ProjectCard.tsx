import React from 'react';
import styled from 'styled-components';
import { Card, Image, Text } from 'rebass';
import { ItemProps } from '../Projects.types';
import { Link as RouterLink } from 'react-router-dom';

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

const StyledLink = styled(RouterLink)`
  text-decoration: none;
`;

const ProjectCard = ({ images, projectName }: ItemProps) => {
  return (
    <StyledLink to={'/projects/1'}>
      <StyledCard width={150}>
        <Image src={images.at(0)} />
        <Text
          fontFamily={'Courier New'}
          fontSize={12}
          color={'black'}
          justifyContent={'end'}
          pt={2}
        >
          {projectName}
        </Text>
      </StyledCard>
    </StyledLink>
  );
};

export default ProjectCard;
