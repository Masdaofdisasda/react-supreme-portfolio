import code from '../images/code.jpg';
import { Text } from 'rebass';

const mailServer = {
  id: 'mailServer',
  projectName: 'Mail Client & Server',
  images: [code],
  tags: ['SWE'],
  technologies: ['Java'],
  price: 128,
  description: (
    <Text>
      This is a sample description for the World Famous Hooded Sweatshirt. You
      can update this description with the actual product details.
    </Text>
  ),
};

export default mailServer;
