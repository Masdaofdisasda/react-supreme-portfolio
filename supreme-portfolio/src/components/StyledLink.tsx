import { Text } from 'rebass';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export type LinkProps = {
  routeTo: string;
  text: string;
  textColor: 'white' | 'black' | 'red';
};

const StyledRouterLink = styled(RouterLink)<{
  textColor: 'white' | 'black' | 'red';
}>`
  text-decoration: none;
  color: ${(props) => props.textColor};
`;

const StyledText = styled(Text)<{ textColor: 'white' | 'black' | 'red' }>`
  color: ${(props) => props.textColor};

  &:hover {
    background-color: red;
    color: white;
  }
`;
const StyledLink = ({ routeTo, text, textColor }: LinkProps) => {
  return (
    <StyledRouterLink to={'/' + routeTo} textColor={textColor}>
      <StyledText
        fontFamily={'Courier New'}
        fontSize={12}
        display={'inline-block'}
        textColor={textColor}
      >
        {text.toLowerCase()}
      </StyledText>
    </StyledRouterLink>
  );
};

export default StyledLink;
