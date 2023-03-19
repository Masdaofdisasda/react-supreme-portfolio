import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1678257355149-6eda1755b1a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')
    no-repeat center center fixed;
  background-size: cover;
  z-index: -1;
  filter: brightness(0.27);
`;

const Background: React.FC = () => {
  return <BackgroundContainer />;
};

export default Background;
