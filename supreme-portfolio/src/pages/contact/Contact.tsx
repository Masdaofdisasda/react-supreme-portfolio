import React, { useState } from 'react';
import Page from '../../components/Page';
import { Box, Flex, Text } from 'rebass';
import styled from 'styled-components';

const StyledInput = styled.input`
  font-family: 'Courier New', monospace;
  font-size: 12px;
`;

const StyledButton = styled.button`
  font-family: 'Courier New', monospace;
  font-size: 12px;
  background: red;
  color: white;
  text-decoration: none;
  border: none;
  padding: 3px 0.5rem 2px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 10em;
`;

const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [body, setBody] = useState<string>();

  const username = 'david.koeppl75';
  const domain = 'gmail';
  const tld = 'com';

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (firstName && lastName && body) {
      const email = `${username}@${domain}.${tld}`;
      window.location.href = `mailto:${email}?&body=${encodeURIComponent(
        'Hi David,\n' + body + '\nSincerely,\n' + firstName + ' ' + lastName
      )}`;
    }
  };

  return (
    <Page>
      <Flex pt={5}>
        <Box width={1 / 2}>
          <Flex justifyContent={'end'} pr={2}>
            <Text fontFamily={'Courier New'} fontSize={12}>
              contact me
            </Text>
          </Flex>
        </Box>
        <Box width={1 / 2} alignItems={'start'}>
          <Flex justifyContent={'start'} pl={2}>
            <form onSubmit={handleSubmit}>
              <Flex flexDirection={'column'}>
                <Flex pb={2}>
                  <Box pr={2}>
                    <StyledInput
                      type="text"
                      id="first name"
                      name="first name"
                      placeholder={'first name'}
                      required
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </Box>
                  <Box>
                    <StyledInput
                      type="text"
                      id="last name"
                      name="last name"
                      placeholder={'last name'}
                      required
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </Box>
                </Flex>
                <label htmlFor={'message'}>
                  <Text fontFamily={'Courier New'} fontSize={12}>
                    message
                  </Text>
                </label>
                <Box width={'100%'} pb={2}>
                  <StyledTextArea
                    id="message"
                    name="message"
                    required
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                  ></StyledTextArea>
                </Box>
                <Box>
                  <StyledButton type="submit">send</StyledButton>
                </Box>
              </Flex>
            </form>
          </Flex>
        </Box>
      </Flex>
    </Page>
  );
};

export default Contact;
