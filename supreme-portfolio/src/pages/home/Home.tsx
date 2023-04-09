import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { Logo } from '../../components/Logo';
import useNavItems from '../../hooks/useNavItems';
import StyledLink from '../../components/StyledLink';
import { SocialLinks } from './components/SocialLinks';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const List = styled.ul`
  list-style-type: none;
  margin: 48px 0 0;
  padding: 0;
`;

const Item = styled.li`
  padding: 4px 0;
`;

const StyledCanvas = styled(Canvas)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  filter: brightness(1);
`;

const Overlay = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

function Model() {
  const gltf = useGLTF('/models/Sponza.gltf');
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}

const Home: React.FC = () => {
  const menuItems = useNavItems();

  return (
    <>
      <StyledCanvas
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 10, 0], fov: 50, near: 0.01, far: 100 }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model />
      </StyledCanvas>
      <Overlay
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        justifyItems={'center'}
        height={'100vh'}
      >
        <Logo darkBackground={true} />
        <List>
          {menuItems.map((item, index) => (
            <Item key={index}>
              <StyledLink text={item} routeTo={item} textColor={'white'} />
            </Item>
          ))}
        </List>
        <SocialLinks />
      </Overlay>
    </>
  );
};

export default Home;
