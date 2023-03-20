import bg from '../../../images/background.png';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  z-index: -1;
  filter: brightness(0.1);
`;

const Background: React.FC = () => {
  return <BackgroundContainer />;
};

export default Background;
