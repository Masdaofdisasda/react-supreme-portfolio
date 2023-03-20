import img1 from '../images/aStarAlgo1.png';
import img2 from '../images/aStarAlgo2.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const aStarAlgo = {
  id: 'aStarAlgo',
  projectName: 'A* Algorithm',
  images: [img1, img2],
  tags: ['SWE'],
  technologies: ['Java'],
  price: 128,
  description: (
    <Text>
      The A* algorithm is a generalized version of the famous Dijsktra
      algorithm. I implemented the algorithm with heuristics for the manhattan
      distance and the euclidean distance and compared it against shortest path
      and no heuristic. The code can be found{' '}
      <StyledHref
        href={
          'https://github.com/Masdaofdisasda/dsa-assignments/blob/master/P2/src/main/java/exercise/StudentSolutionImplementation.java'
        }
        text={'here'}
      />
      .
    </Text>
  ),
};

export default aStarAlgo;
