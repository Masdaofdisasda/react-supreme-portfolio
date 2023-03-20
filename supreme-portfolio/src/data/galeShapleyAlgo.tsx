import code from '../images/code.jpg';
import { ProjectItem } from '../hooks/useProjects';
import { Text } from 'rebass';

const galeShapleyAlgo = {
  id: 'galeShapleyAlgo',
  projectName: 'Gale–Shapley Algorithm',
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
} as ProjectItem;

export default galeShapleyAlgo;
