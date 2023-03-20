import img1 from '../images/mailServer1.png';
import img2 from '../images/mailServer2.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const mailServer = {
  id: 'mailServer',
  projectName: 'Mail Client & Server',
  images: [img1, img2],
  tags: ['SWE'],
  technologies: ['Java,', 'Gradle,', 'Git'],
  price: 128,
  description: (
    <Text>
      In the distributed systems lab I learned to build a basic email server.
      <br />
      <br />
      In the {''}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/dslab-assignment-1'}
        text={'first part'}
      />{' '}
      of the lab a message transfer protocol, a message access protocol as well
      as multithreaded transfer, mailbox and monitoring servers were
      implemented.
      <br />
      <br />
      The{' '}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/dslab-assignment-1'}
        text={'second part'}
      />{' '}
      was a group project were the codebase from the first part was updated with
      a domain lookup for the servers, a more secure transfer protocol and a way
      to check for message integrity as well as a command line client interface.
    </Text>
  ),
};

export default mailServer;
