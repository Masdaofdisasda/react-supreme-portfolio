import img1 from '../images/paypalClone1.png';
import img2 from '../images/paypalClone2.png';
import img3 from '../images/paypalClone3.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const paypalCloneDesign = {
  id: 'paypalCloneDesign',
  projectName: 'Payment App "Pay2Peer"',
  images: [img1, img2, img3],
  tags: ['UI'],
  technologies: ['Figma,', 'Material Design'],
  price: 128,
  description: (
    <Text>
      In a group of four we designed an{' '}
      <StyledHref
        href={
          'https://www.figma.com/proto/u0OlazPmlhHkh8X2oQwBc9/Pay2Peer?page-id=0%3A1&node-id=59-6333&starting-point-node-id=59%3A6333'
        }
        text={'app'}
      />{' '}
      for transferring and requesting money. It can also split a given amount
      among a group of people and it was designed according to the Material
      Design guidelines
    </Text>
  ),
};

export default paypalCloneDesign;
