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
      When life gives you raw image data, you manipulate it until you get
      oranges. This nifty{' '}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/evc-camera-sensors'}
        text={'program'}
      />{' '}
      can demosaic raw images, apply gamma correction, and set the white balance
      like a pro. It even generates histograms for the image, making it (almost)
      the Swiss Army knife of image processing. While I'd love to take all the
      credit, I must admit that my trusty university lab provided the framework.
      Regardless, next time you're faced with a pixel puzzle, this script can
      make it make sense.
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
