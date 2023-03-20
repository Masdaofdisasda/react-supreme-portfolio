import img1 from '../images/ecouture1.jpg';
import img2 from '../images/ecouture2.png';
import img3 from '../images/ecouture3.png';
import img4 from '../images/ecouture4.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const fashionAppDesign = {
  id: 'fashionAppDesign',
  projectName: 'Fashion App "ECOuture"',
  images: [img1, img2, img3, img4],
  tags: ['UI', 'MUSIC'],
  technologies: ['Figma,', 'After Effects,', 'Ableton'],
  price: 128,
  description: (
    <Text>
      Over the course of one semester we had to design and present an app
      prototype. In our group of four we decided to create a tool for the topic
      "sustainable living".
      <br />
      <br />
      ECOtoure makes the user aware of his shopping habits and helps combat the
      fast fashion industry. I pitched the idea originally to the group and
      created some mockups and later screen designs.
      <br />
      <br />
      We also produced an {''}
      <StyledHref
        href={'https://youtu.be/d4uZRdqVliY'}
        text={'advertisement'}
      />{' '}
      for the app, where I did the music and voice over as well as some of the
      animations.
    </Text>
  ),
};

export default fashionAppDesign;
