import headphones from '../images/headphones.jpg';
import { Text } from 'rebass';

const resume = {
  id: 'resume',
  projectName: 'Resume/CV',
  images: [headphones],
  tags: ['MEDIA'],
  technologies: ['Latex'],
  price: 128,
  description: (
    <Text>
      This is a sample description for the World Famous Hooded Sweatshirt. You
      can update this description with the actual product details.
    </Text>
  ),
};

export default resume;
