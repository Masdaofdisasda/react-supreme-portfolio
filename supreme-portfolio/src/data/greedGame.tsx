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
  technologies: ['OpenGL,', 'C++'],
  price: 128,
  description: (
    <Text>
      Greed is a 3D game where you have have to collect gold to win, but the
      more you collect the slower you will be. A friend and I developed this
      game, which got featured on the TU Wien computer graphics {''}
      <StyledHref
        href={'https://www.cg.tuwien.ac.at/courses/CG/HallOfFame/2022S'}
        text={'Hall of Fame'}
      />
      .
      <br />
      <br />I developed the graphics engine using OpenGL 4.6 with the newer AZDO
      features like indirect rendering and bindless textures. The engine
      supports PCF shadow maps, HDR rendering and tone mapping as well as color
      grading and even particle simulations and volumetric lights. It can als
      use KTX textures and do frustum culling
      <br />
      <br /> It can be downloaded either from the TU Wien page or directly from
      the{' '}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/cgue22-greed'}
        text={'GitHub repo'}
      />
      . Greed should run on any machine as long as it has dedicated graphics
      card. We also created a{' '}
      <StyledHref href={'https://youtu.be/l_ucd9Kc4S4'} text={'trailer'} /> for
      it.
    </Text>
  ),
};

export default greedGame;
