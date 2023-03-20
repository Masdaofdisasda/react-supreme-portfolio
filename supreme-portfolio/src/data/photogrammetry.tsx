import img1 from '../images/photogrammetry1.png';
import img2 from '../images/photogrammetry2.jpg';
import img3 from '../images/photogrammetry3.jpg';
import { Text } from 'rebass';

const photogrammetry = {
  id: 'photogrammetry',
  projectName: 'Photogrammetry & 3D Modelling',
  images: [img1, img2, img3],
  tags: ['CG', 'CV'],
  technologies: ['Blender,', 'AutoDesk Recap'],
  price: 128,
  description: (
    <Text>
      This shoe model was created using photogrammetry, which means I took about
      200 pictures from multiple angles and waited a day for them to be
      processed, only for it to turn out wrong and I need to try it again. The
      image was created in Blenders Cycle renderer.
    </Text>
  ),
};

export default photogrammetry;
