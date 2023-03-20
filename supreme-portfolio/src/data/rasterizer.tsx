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
      As part of a lab{' '}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/evc-rasterizer'}
        text={'assignment'}
      />{' '}
      I had to implement a software rasterizer in a specified framework. This
      helps to better understand the rendering pipeline. This assignment
      included line and fill rasterization, color and depth interpolation and
      viewport clipping.
    </Text>
  ),
};

export default rasterizer;
