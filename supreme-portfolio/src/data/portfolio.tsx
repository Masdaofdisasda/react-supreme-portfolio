import img1 from '../images/portfolio.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const portfolio = {
  id: 'portfolio',
  projectName: 'Supreme Portfolio Website',
  images: [img1],
  tags: ['WEBDEV'],
  technologies: ['React,', 'Typescript,', 'Rebass'],
  price: 128,
  description: (
    <Text>
      Breathing new life into my dated WordPress portfolio, I embarked on a
      mission to recreate the essence of a world famoues online shop using the
      React framework. You're now witnessing the fruits of that labor!
      <br />
      <br /> I've artfully woven together styled components and select Rebass
      elements to achieve a sleek and minimalistic design. Seamlessly deployed
      with Netlify from my{' '}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/react-supreme-portfolio'}
        text={'GitHub repository'}
      />
      , this revitalized portfolio now stands as a testament to my creativity
      and technical ability.
      <br />
      <br />
      Supreme please don't sue me.
    </Text>
  ),
};

export default portfolio;
