import code from '../images/code.jpg';
import { Text } from 'rebass';

const portfolio = {
  id: 'portfolio',
  projectName: 'Supreme Portfolio Website',
  images: [code],
  tags: ['WEBDEV'],
  technologies: ['React'],
  price: 128,
  description: (
    <Text>
      This is a sample description for the World Famous Hooded Sweatshirt. You
      can update this description with the actual product details.
    </Text>
  ),
};

export default portfolio;
