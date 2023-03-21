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
      Behold! The art of sending electronic pigeons.
      <br />
      <br />
      The{' '}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/dslab-assignment-1'}
        text={'first part'}
      />{' '}
      of this quest had me figure out a message transfer protocol, a message
      access protocol, and implementing multithreaded transfer, mailbox, and
      monitoring servers. Not bad, right?
      <br />
      <br />
      But wait, there's more! In the{' '}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/dslab-assignment-1'}
        text={'second part'}
      />
      , my trusty group and I joined forces to upgrade the codebase with domain
      lookup for servers, a Fort Knox-like secure transfer protocol, a message
      integrity checker, and a sleek command-line client interface. So if you
      ever need a digital postmaster, look no further!
    </Text>
  ),
};

export default mailServer;
