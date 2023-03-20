import img1 from '../images/cameraSensor1.jpg';
import img2 from '../images/cameraSensor2.jpg';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const cameraSensor = {
  id: 'cameraSensor',
  projectName: 'Image Data Processing',
  images: [img1, img2],
  tags: ['CV'],
  technologies: ['Matlab'],
  price: 128,
  description: (
    <Text>
      <StyledHref
        href={'https://github.com/Masdaofdisasda/evc-camera-sensors'}
        text={'This program'}
      />{' '}
      can take raw image data as the input, then demosaic it and then process it
      further. It can apply gamma correction, set the white balance and even
      generate a histogram for the image. The framework for this was provided by
      the university course.
    </Text>
  ),
};

export default cameraSensor;
