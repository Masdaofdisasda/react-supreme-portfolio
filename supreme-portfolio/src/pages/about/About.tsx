import React from 'react';
import Page from '../../components/Page';
import { Flex, Text } from 'rebass';

const About: React.FC = () => {
  return (
    <Page>
      <Flex justifyContent={'center'} py={6}>
        <Flex flexDirection={'column'}>
          <Text fontFamily={'Courier New'} fontSize={12} width={'400px'} mb={2}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Text>
          <Text fontFamily={'Courier New'} fontSize={12} width={'400px'} mb={2}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Text>
          <Text fontFamily={'Courier New'} fontSize={12} width={'400px'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Text>
        </Flex>
      </Flex>
    </Page>
  );
};

export default About;
