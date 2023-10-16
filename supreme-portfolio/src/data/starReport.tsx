import img1 from '../images/starReport.png';
import { Text } from 'rebass';

const starReport = {
  id: 'starReport',
  projectName: 'Differentiable Rendering Paper',
  images: [img1],
  tags: ['CG', 'MEDIA'],
  technologies: ['LaTex'],
  price: 128,
  description: (
    <Text>
      In this report, the current state of differentiable rendering in computer
      graphics is presented. Differentiable rendering makes it possible to apply
      machine learning methodologies to rendering applications. This enables
      novel optimization strategies that can be utilized to reconstruct a 3D
      mesh from an image, help with material design or even train robots to move
      in fluid liquids.
    </Text>
  ),
};

export default starReport;
