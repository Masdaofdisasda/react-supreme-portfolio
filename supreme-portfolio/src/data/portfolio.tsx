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
      I needed to update my old Wordpress portfolio, so I had the idea of
      recreating a famous online shop in React and now you are looking at it. It
      was styled with styled components and some components from Rebass and is
      deployed with Netlify from the{' '}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/react-supreme-portfolio'}
        text={'GitHub repo'}
      />
      .
      <br />
      <br />
      Supreme please don't sue me.
    </Text>
  ),
};

export default portfolio;
