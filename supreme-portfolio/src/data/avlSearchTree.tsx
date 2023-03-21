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
      Ever wondered what would happen if a balanced binary tree hit the gym and
      got into tip-top shape? Meet the AVL tree! In this project, I pitted the
      AVL tree against its classic binary tree cousin in a thrilling search
      performance showdown. Curious to know which tree stands tall in the end?
      Check out the implementation{' '}
      <StyledHref
        href={
          'https://github.com/Masdaofdisasda/dsa-assignments/blob/master/P3/src/main/java/exercise/StudentSolutionImplementation.java'
        }
        text={'here'}
      />{' '}
      and see the battle of the binary trees for yourself!
    </Text>
  ),
};

export default avlSearchTree;
