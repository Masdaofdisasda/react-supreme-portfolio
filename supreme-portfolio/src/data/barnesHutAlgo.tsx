import img1 from '../images/barnesHut1.png';
import img2 from '../images/barnesHut2.gif';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const barnesHutAlgo = {
  id: 'barnesHutAlgo',
  projectName: 'Barnes-Hut Algorithm',
  images: [img1, img2],
  tags: ['SWE'],
  technologies: ['Java'],
  price: 128,
  description: (
    <Text>
      Get ready to explore the cosmos like never before! My colleague and I
      brought to life the mesmerizing dance of up to 10,000 planets in
      real-time, thanks to our implementation of the ingenious Barnes-Hut
      algorithm. By focusing on clusters of planets rather than each individual
      celestial body, we've significantly reduced the simulation's complexity.
      <br />
      <br />
      As the mastermind behind the Oct-tree structure crucial to this algorithm,
      I've ensured a seamless and captivating{' '}
      <StyledHref
        href={
          'https://github.com/Masdaofdisasda/Barnes-Hut_Universe_Simulation/blob/master/src/UniverseTree.java'
        }
        text={'experience'}
      />{' '}
      for all you space enthusiasts. So buckle up and prepare to be awed by the
      waltz of the planets!
    </Text>
  ),
};

export default barnesHutAlgo;
