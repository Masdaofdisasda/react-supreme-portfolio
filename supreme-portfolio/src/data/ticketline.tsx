import img1 from '../images/ticketline1.png';
import img2 from '../images/ticketline2.png';
import img3 from '../images/ticketline3.png';
import img4 from '../images/ticketline4.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';

const ticketline = {
  id: 'ticketline',
  projectName: 'Online Shop "Ticketline"',
  images: [img1, img2, img3, img4],
  tags: ['SWE', 'WEBDEV', 'UI'],
  technologies: ['Spring Boot,', 'Angular,', 'Figma,', 'Git'],
  price: 128,
  description: (
    <Text>
      Looking for tickets to your favorite show? Look no further than {''}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/ticketline'}
        text={'Ticketline'}
      />
      ! We've got you covered with a comprehensive lineup of artists, events,
      and an array of exciting features. Users can easily log in to search for
      their favorite artists or events, or even browse by venues. With the
      ability to select seats, buy or reserve tickets, and effortlessly cancel
      if plans change, we've made the ticketing experience a breeze.
      <br />
      <br />
      As an added bonus, you can create new venues, add seating plans, edit
      events, set ticket prices, post news, and manage users, all within our
      intuitive platform.
      <br />
      <br />
      My contributions to this project include crafting{' '}
      <StyledHref
        href={
          'https://www.figma.com/proto/sEHUdG066cEy9XnkqSz22v/Ticketline-UI-Mockups?page-id=0%3A1&node-id=1-5&viewport=-2589%2C2494%2C0.81&scaling=scale-down&starting-point-node-id=1%3A5&show-proto-sidebar=1\n'
        }
        text={'sleek UI designs'}
      />{' '}
      using Figma and taking part in requirement engineering. As the Usability
      Engineer and Frontend Lead of our team, I made it my mission to deliver an
      exceptional user experience that sets Ticketline apart from the
      competition.
    </Text>
  ),
};

export default ticketline;
