import img1 from '../images/galeShapely1.png';
import img2 from '../images/galeShapely2.png';
import { ProjectItem } from '../hooks/useProjects';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const galeShapleyAlgo = {
  id: 'galeShapleyAlgo',
  projectName: 'Gale–Shapley Algorithm',
  images: [img1, img2],
  tags: ['SWE'],
  technologies: ['Java'],
  price: 128,
  description: (
    <Text>
      I implemented the Gale-Shapley algorithm and compared it against other
      algorithms for solving the Stable Matching Problem. The implementation can
      be found
      <StyledHref
        href={
          'https://github.com/Masdaofdisasda/dsa-assignments/blob/master/P1/src/main/java/exercise/StudentSolutionImplementation.java'
        }
        text={'here'}
      />
      .
    </Text>
  ),
} as ProjectItem;

export default galeShapleyAlgo;
