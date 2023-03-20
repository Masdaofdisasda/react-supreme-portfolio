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
      To simulate the movement of upto 10000 planets in real time me and another
      colleague implemented the Barnes-Hut algorithm which reduces the
      complexity of the simulation by only looking at clusteres of planets
      instead of each one. We needed an Oct-tree structure for this algorithm to
      work, which {''}
      <StyledHref
        href={
          'https://github.com/Masdaofdisasda/Barnes-Hut_Universe_Simulation/blob/master/src/UniverseTree.java'
        }
        text={'I implemented'}
      />
      .
    </Text>
  ),
};

export default barnesHutAlgo;
