import universe from '../images/universe.png';
import { Text } from 'rebass';

const wendysHorses = {
  id: 'wendysHorses',
  projectName: 'Wendy horses',
  images: [universe],
  tags: ['SWE', 'WEBDEV', 'UI'],
  technologies: ['Java', 'Git'],
  price: 128,
  description: (
    <Text>
      This is a sample description for the World Famous Hooded Sweatshirt. You
      can update this description with the actual product details.
    </Text>
  ),
};

export default wendysHorses;
