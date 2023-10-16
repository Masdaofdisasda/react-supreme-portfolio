import React from 'react';
import Page from '../../components/Page';
import pdf from '../../images/Resume.pdf';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Courier New', monospace;
  font-size: 12px;
  background: red;
  color: white;
  text-decoration: none;
  border: none;
  padding: 3px 0.5rem 2px;

  &:hover {
    background-color: white;
    color: red;
    border: 1px solid red;
    cursor: pointer;
  }
`;
const Resume: React.FC = () => {
  return (
    <Page>
      <Flex justifyContent={'center'} py={6}>
        <Flex flexDirection={'column'} width={'80%'}>
          <object data={pdf} type="application/pdf" width="100%" height="600px">
            <Text
              fontFamily={'Courier New'}
              fontSize={12}
              width={'400px'}
              mb={2}
            >
              This resume could not be displayed.
            </Text>
          </object>
          <Flex justifyContent={'center'} py={3}>
            <a href={pdf} download="Koeppl David Resume.pdf">
              <StyledButton>Download Resume</StyledButton>
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Page>
  );
};

export default Resume;
