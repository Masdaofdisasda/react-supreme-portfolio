import React from 'react';
import Page from '../../components/Page';
import { Flex, Text } from 'rebass';

const NotFound: React.FC = () => {
  return (
    <Page>
      <Flex justifyContent={'center'} py={6}>
        <Flex flexDirection={'column'}>
          <Text fontFamily={'Courier New'} fontSize={12} width={'400px'} mb={2}>
            This page does not exist yet.
          </Text>
        </Flex>
      </Flex>
    </Page>
  );
};

export default NotFound;
