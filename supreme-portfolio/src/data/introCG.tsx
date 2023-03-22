import img1 from '../images/greed3.jpg';
import { Text } from 'rebass';

const introCG = {
  id: 'introCG',
  projectName: 'OpenGL Intro',
  images: [img1],
  tags: ['CG'],
  technologies: ['OpenGL,', 'C++'],
  price: 128,
  description: (
    <Text>
      Ready for a treasure hunt with a twist? Introducing Greed - a 3D game
      where your goal is to collect gold and emerge victorious. But beware, the
      more gold you snatch, the slower you'll become! Developed by yours truly
      and a fellow adventurer,
    </Text>
  ),
};

export default introCG;
