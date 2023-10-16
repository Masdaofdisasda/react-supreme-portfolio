import React from 'react';
import Page from '../../components/Page';
import { Flex, Text } from 'rebass';

const About: React.FC = () => {
  return (
    <Page>
      <Flex justifyContent={'center'} py={6}>
        <Flex flexDirection={'column'}>
          <Text fontFamily={'Courier New'} fontSize={12} width={'400px'} mb={2}>
            <Text
              fontFamily={'Courier New'}
              fontSize={12}
              fontWeight={'bold'}
              width={'400px'}
              mb={2}
            >
              About me:
            </Text>
            I'm David Köppl (aka Wolum), a passionate developer inspired by
            design and driven by curiosity. My journey started in 2012 when I
            decided to create an Android app to easily search for the solutions
            of my latin homework. Let's say I learned more about coding than
            Latin that year.
          </Text>
          <Text fontFamily={'Courier New'} fontSize={12} width={'400px'} mb={2}>
            <Text
              fontFamily={'Courier New'}
              fontSize={12}
              fontWeight={'bold'}
              width={'400px'}
              mb={2}
            >
              What I Do:
            </Text>
            My professional expertise lies in full-stack web development and I
            am currently studying visual computing. Over the years, I've worked
            on various projects building web applications and digitalizing
            manual processes. Besides that I love to work on and improve my
            render engine.
          </Text>
          <Text fontFamily={'Courier New'} fontSize={12} width={'400px'} mb={2}>
            <Text
              fontFamily={'Courier New'}
              fontSize={12}
              fontWeight={'bold'}
              width={'400px'}
              mb={2}
            >
              Why Supreme-inspired?
            </Text>
            I've always been fascinated by the bold yet minimalistic design of
            Supreme. There online shop looks barely functional, yet their items
            sell out in seconds. The brand became big by imitating other brands,
            and I thought, why not draw inspiration in a similar manner?
          </Text>
          <Text fontFamily={'Courier New'} fontSize={12} width={'400px'} mb={2}>
            <Text
              fontFamily={'Courier New'}
              fontSize={12}
              fontWeight={'bold'}
              width={'400px'}
              mb={2}
            >
              Fun Facts:
            </Text>
            <ul>
              <li>My best code snippets were written late at night.</li>
              <li>I have had coffee from Java and it was absurdly strong.</li>
              <li>
                Apart from coding, I love music production/DJ-ing and cycling.
              </li>
            </ul>
          </Text>
        </Flex>
      </Flex>
    </Page>
  );
};

export default About;
