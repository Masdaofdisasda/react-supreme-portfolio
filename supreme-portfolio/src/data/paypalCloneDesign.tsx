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
      Meet{' '}
      <StyledHref
        href={
          'https://www.figma.com/proto/u0OlazPmlhHkh8X2oQwBc9/Pay2Peer?page-id=0%3A1&node-id=59-6333&starting-point-node-id=59%3A6333'
        }
        text={'"Pay2Peer"'}
      />{' '}
      the brainchild of our team of four. We designed a clever app that takes
      the hassle out of transferring and requesting money, making it a breeze to
      split expenses among friends.
      <br />
      <br />
      Designed with Material Design guidelines in mind, our app delivers a
      visually appealing and user-friendly experience that makes managing
      finances just a bit more enjoyable. Get ready to embrace a more amusing
      way to handle money!
    </Text>
  ),
};

export default paypalCloneDesign;
