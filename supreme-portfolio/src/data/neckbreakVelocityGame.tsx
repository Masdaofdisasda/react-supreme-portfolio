import img1 from '../images/neckbreakVelocity1.png';
import img2 from '../images/neckbreakVelocity2.png';
import { Text } from 'rebass';

const neckbreakVelocityGame = {
  id: 'neckbreakVelocityGame',
  projectName: 'Neckbreak Velocity Game',
  images: [img1, img2],
  tags: ['CG', 'GAMEDEV', 'MEDIA'],
  technologies: ['Unity,', 'C#'],
  price: 128,
  description: (
    <Text>
      In Neckbreak Velocity two players can race to the finish line. The twist?
      They don't control any vehicle, they control regular humans... who run
      very fast. On the way they have to dodge other runners otherwise they will
      fall spectacularly.
      <br />
      <br />
      The game was crafted using the Unity Engine and supports keyboard & mouse
      and gamepads. The players can customize and name their characters then
      take in the beautiful graphics of Unities High Definition Rendering
      Pipeline, while listening to the custom-made soundtrack.
    </Text>
  ),
};

export default neckbreakVelocityGame;
