import img1 from '../images/wendys1.png';
import img2 from '../images/wendys2.png';
import img3 from '../images/wendys3.png';
import { Text } from 'rebass';
import StyledHref from '../components/StyledHref';
import StyledLink from '../components/StyledLink';

const wendysHorses = {
  id: 'wendysHorses',
  projectName: 'Information System "Wendy\'s Friends"',
  images: [img1, img2, img3],
  tags: ['SWE', 'WEBDEV'],
  technologies: ['Spring Boot,', 'Angular,', 'Git'],
  price: 128,
  description: (
    <Text>
      Managing your stable of horses has never been easier, thanks to{' '}
      <StyledHref
        href={'https://github.com/Masdaofdisasda/wendys-friends'}
        text={"Wendy's Friends"}
      />
      ! This intuitive platform allows you to add horses and link them to their
      parents and respective owners. With a comprehensive overview of all your
      equine companions and a detailed tree view to visualize their family
      lineage, horse management is now a breeze.
      <br />
      <br />
      This project served as an introduction to web development, utilizing
      Angular, Spring Boot, and SQL databases. The experience gained from
      Wendy's Horses provided a solid foundation, which I later built upon while
      working on the{' '}
      <StyledLink
        routeTo={'projects/ticketline'}
        text={'Ticketline'}
        textColor={'red'}
      />{' '}
      project, further deepening my knowledge and expertise in these
      cutting-edge technologies."
    </Text>
  ),
};

export default wendysHorses;
