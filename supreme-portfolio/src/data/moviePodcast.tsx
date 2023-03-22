import img1 from '../images/behindThePlot1.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const moviePodcast = {
  id: 'moviePodcast',
  projectName: 'Behind the Plot Horror Podcast',
  images: [img1],
  tags: ['MEDIA'],
  technologies: ['Ableton'],
  price: 128,
  description: (
    <Text>
      Lights, camera, action! Our{' '}
      <StyledHref
        href={'https://soundcloud.com/user-658205794'}
        text={'podcast'}
      />{' '}
      takes center stage as three cinephiles dive into the world of obscure
      horror flicks. While we all love a good scare, it's no secret that many
      spine-chilling films leave us with a hauntingly bad aftertaste when it
      comes to storylines.
      <br />
      <br />
      That's where we come in, dissecting these hidden gems of terror and
      sharing our verdicts with fellow thrill-seekers. As the maestro behind the
      catchy intro and outro jingles, I've set the tone for our eerie escapades.
      And if you happen to notice any quirky audio mixing, well, that's my
      signature touch. So join us, if you dare, for a bone-chilling cinematic
      experience!
    </Text>
  ),
};

export default moviePodcast;
