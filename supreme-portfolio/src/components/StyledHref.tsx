import { Text } from 'rebass';
import React from 'react';
import styled from 'styled-components';

export type LinkProps = {
  href: string;
  text: string;
};

const StyledRouterLink = styled.a`
  text-decoration: none;
`;

const StyledText = styled(Text)`
  &:hover {
    background-color: red;
    color: white;
  }
`;
const StyledHref = ({ href, text }: LinkProps) => {
  return (
    <StyledRouterLink href={href}>
      <StyledText
        fontFamily={'Courier New'}
        fontSize={12}
        display={'inline-block'}
        color={'red'}
      >
        {text}
      </StyledText>
    </StyledRouterLink>
  );
};

export default StyledHref;
