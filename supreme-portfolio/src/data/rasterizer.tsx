import img1 from '../images/rasterizer1.png';
import img2 from '../images/rasterizer2.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const rasterizer = {
  id: 'rasterizer',
  projectName: 'Software Rasterizer',
  images: [img1, img2],
  tags: ['CG'],
  technologies: ['Matlab'],
  price: 128,
  description: (
    <Text>
      In an engaging lab{' '}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/evc-rasterizer'}
        text={'assignment'}
      />
      , I dove headfirst into the world of software rasterization, skillfully
      implementing it within a specified lab framework. This hands-on experience
      offered invaluable insights into the inner workings of the GPU and its
      rendering pipeline. <br />
      <br />
      Our adventure encompassed line and fill rasterization, color and depth
      interpolation, and viewport clipping, resulting in a comprehensive
      understanding of the intricate process that brings pixels to life on our
      screens just like the text you are reading now.
    </Text>
  ),
};

export default rasterizer;
