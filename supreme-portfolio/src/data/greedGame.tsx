import img1 from '../images/greed1.jpg';
import img2 from '../images/greed2.jpg';
import img3 from '../images/greed3.jpg';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const greedGame = {
  id: 'greedGame',
  projectName: 'Greed 3D Game',
  images: [img1, img2, img3],
  tags: ['CG', 'GAMEDEV', 'MUSIC'],
  technologies: ['OpenGL,', 'C++,', 'Maya 3D'],
  price: 128,
  description: (
    <Text>
      Ready for a treasure hunt with a twist? Introducing Greed - a 3D game
      where your goal is to collect gold and emerge victorious. But beware, the
      more gold you snatch, the slower you'll become! Developed by yours truly
      and a fellow adventurer, our game earned a prestigious spot in the TU Wien
      Computer Graphics{' '}
      <StyledHref
        href={'https://www.cg.tuwien.ac.at/courses/CG/HallOfFame/2022S'}
        text={'Hall of Fame'}
      />
      .
      <br />
      <br />
      The graphics engine, crafted with OpenGL 4.6 and cutting-edge AZDO
      features, boasts a slew of impressive capabilities: indirect rendering,
      bindless textures, PCF shadow maps, HDR rendering, tone mapping, color
      grading, particle simulations, volumetric lights, KTX textures, and even
      frustum culling!
      <br />
      <br /> Eager to embark on your own quest for gold? Download Greed from the
      TU Wien page or directly from the{' '}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/cgue22-greed'}
        text={'GitHub repo'}
      />
      . Compatible with any machine that has a dedicated graphics card. And if
      you need a taste of the adventure beforehand, check out the thrilling{' '}
      <StyledHref href={'https://youtu.be/l_ucd9Kc4S4'} text={'trailer'} />{' '}
      we've created!
    </Text>
  ),
};

export default greedGame;
