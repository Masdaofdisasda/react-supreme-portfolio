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
      When it comes to matters of the heart, even algorithms can have their say!
      I took on the challenge of implementing the Gale-Shapley algorithm, a
      digital matchmaker that aims to solve the Stable Matching Problem.
      <br />
      <br />
      Pitting it against other algorithms in the love-finding business, I
      discovered just how powerful a few lines of code can be in finding the
      perfect pairings. Ready to take a peek into the realm of computational
      Cupids? Check out my implementation right {''}
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
