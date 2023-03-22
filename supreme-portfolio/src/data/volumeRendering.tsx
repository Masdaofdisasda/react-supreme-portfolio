import img1 from '../images/raycast1.png';
import img2 from '../images/raycast2.png';
import img3 from '../images/raycast3.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const volumeRendering = {
  id: 'volumeRendering',
  projectName: 'Direct Volume Rendering',
  images: [img1, img2, img3],
  tags: ['CG', 'WEBDEV'],
  technologies: ['ThreeJS,', 'D3,', 'WebGL'],
  price: 128,
  description: (
    <Text>
      Behold,{' '}
      <StyledHref
        href={
          'https://github.com/Masdaofdisasda/Vis1_Direct_Volume_Rendering_2022W'
        }
        text={'Direct Volume Rendering'}
      />{' '}
      unleashed on the GPU! My friend and I joined forces to harness the power
      of ThreeJS, WebGL, and D3, conjuring up a mesmerizing renderer with a
      density histogram. Our spellbinding program offers two enchanting
      rendering methods to choose from:
      <br />
      <br />
      First Hit Compositing - where adjustable iso values transform the volume
      into a surface, illuminated by the sorcery of physically based lighting.
      <br />
      <br />
      Maximum Intensity Projection - casting its magic to reveal the highest
      density value along the view ray.
      <br />
      <br />
      Both techniques employ the art of ray-casting, sending rays from the
      viewer's perspective through a 3D texture, capturing samples as they
      journey through the digital realm. Step right up and immerse yourself in
      this somewhat spooky visual experience!
    </Text>
  ),
};

export default volumeRendering;
