import { Text } from 'rebass';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export type LinkProps = {
  routeTo: string;
  text: string;
  darkBackground: boolean;
};

const StyledRouterLink = styled(RouterLink)<{ darkBackground: boolean }>`
  text-decoration: none;
  color: ${({ darkBackground }) => (darkBackground ? 'white' : 'black')};
`;

const StyledText = styled(Text)<{ darkBackground: boolean }>`
  color: ${({ darkBackground }) => (darkBackground ? 'white' : 'black')};

  &:hover {
    background-color: red;
    color: white;
  }
`;
const StyledLink = ({ routeTo, text, darkBackground }: LinkProps) => {
  return (
    <StyledRouterLink to={'/' + routeTo} darkBackground={darkBackground}>
      <StyledText
        darkBackground={darkBackground}
        fontFamily={'Courier New'}
        fontSize={12}
        display={'inline-block'}
      >
        {text.toLowerCase()}
      </StyledText>
    </StyledRouterLink>
  );
};

export default StyledLink;
