import img1 from '../images/avlTree1.png';
import img2 from '../images/avlTree2.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const avlSearchTree = {
  id: 'avlSearchTree',
  projectName: 'AVL Search Tree Algorithm',
  images: [img1, img2],
  tags: ['SWE'],
  technologies: ['Java'],
  price: 128,
  description: (
    <Text>
      An AVL tree is a type of balanced binary tree. Here I have compared the
      binary search performance of one against the performance of a classic
      binary tree. The implementation can be found{' '}
      <StyledHref
        href={
          'https://github.com/Masdaofdisasda/dsa-assignments/blob/master/P3/src/main/java/exercise/StudentSolutionImplementation.java'
        }
        text={'here'}
      />
    </Text>
  ),
};

export default avlSearchTree;
