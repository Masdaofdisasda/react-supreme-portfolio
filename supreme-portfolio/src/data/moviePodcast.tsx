import img1 from '../images/behindThePlot1.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const moviePodcast = {
  id: 'moviePodcast',
  projectName: 'Behind the Plot Horror Podcast',
  images: [img1],
  tags: ['MUSIC'],
  technologies: ['Ableton'],
  price: 128,
  description: (
    <Text>
      Movies are great especially horror movies but most of them have a horrible
      story. That's what started{' '}
      <StyledHref
        href={'https://soundcloud.com/user-658205794'}
        text={'this podcast'}
      />
      , which is about three guys reviewing lesser known spooky movies. The
      intro and outro jingle is from me and if you find the audio to be badly
      mixed that's also on me.
    </Text>
  ),
};

export default moviePodcast;
