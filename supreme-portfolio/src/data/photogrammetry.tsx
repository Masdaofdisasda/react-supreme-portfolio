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
      Introducing this detailed pair of Nike Air Travis Scott 1s, brought to
      life through the magic of photogrammetry! With over 200 snapshots captured
      from various angles and patiently waiting for the day-long processing. The
      final stunning image, rendered with Blender's impressive Cycles
      path-tracing renderer, stands as a testament to my love for sneakers and
      computer graphics.
    </Text>
  ),
};

export default photogrammetry;
