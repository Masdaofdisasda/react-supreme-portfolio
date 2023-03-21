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
      Meet the A* algorithm, the cooler, more adventurous sibling of the famous
      Dijkstra algorithm. I took this fun algorithm on a journey by implementing
      it with Manhattan and Euclidean distance heuristics. Then, I set up a
      friendly race against its simpler sibling, the Shortest Path, and a
      no-heuristic contender. Want to see how it all went down? Check out the
      code{' '}
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
