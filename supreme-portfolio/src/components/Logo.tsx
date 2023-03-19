import { Box, Flex, Text } from 'rebass';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: white;
`;

type LogoProps = {
  darkBackground: boolean;
};
export const Logo = (props: LogoProps) => {
  const [dateTime, setDateTime] = useState('');

  const updateDateTimeString = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = String(minutes).padStart(2, '0');

    setDateTime(
      `${day}/${month}/${year} ${formattedHours}:${formattedMinutes}${ampm} VIE`
    );
  };

  useEffect(() => {
    updateDateTimeString();
    const interval = setInterval(() => {
      updateDateTimeString();
    }, 60 * 1000); // Update every full minute

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  return (
    <Flex flexDirection={'column'}>
      <StyledLink to={'/'}>
        <Box
          bg={'red'}
          fontFamily={'Futura'}
          fontStyle={'italic'}
          fontWeight={'bold'}
          fontSize={36}
          color={'white'}
          textAlign={'center'}
        >
          Wolum
        </Box>
      </StyledLink>
      <Text
        fontFamily={'Courier New'}
        fontSize={12}
        color={props.darkBackground ? 'white' : 'black'}
        justifyContent={'center'}
        textAlign={'center'}
        pt={3}
      >
        {dateTime}
      </Text>
    </Flex>
  );
};
