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
  tags: ['UI', 'MEDIA'],
  technologies: ['Figma,', 'After Effects,', 'Ableton'],
  price: 128,
  description: (
    <Text>
      During a single semester, our team of four embarked on a mission to design
      and present an app prototype that would tackle the theme of "sustainable
      living." We joined forces to develop{' '}
      <StyledHref
        href={
          'https://www.figma.com/proto/uPTZxLSXMX4xorhKLNAld5/IID_Project_Ecouture?page-id=1011%3A3346&node-id=1011-3639&starting-point-node-id=1011%3A3639'
        }
        text={'ECOtoure'}
      />
      , an innovative tool that encourages users to reflect on their shopping
      habits and combat the fast fashion industry.
      <br />
      <br />
      As the original visionary behind ECOtoure, I pitched the concept to the
      group and crafted mockups that eventually evolved into polished screen
      designs. Our creative collaboration also gave rise to an eye-catching {''}
      <StyledHref
        href={'https://youtu.be/d4uZRdqVliY'}
        text={'advertisement'}
      />{' '}
      for the app, showcasing not only my musical ability and voice-over skills
      but also my flair for animation. Join us in our quest to make the world a
      more sustainable place, one mindful shopping choice at a time!
    </Text>
  ),
};

export default fashionAppDesign;
