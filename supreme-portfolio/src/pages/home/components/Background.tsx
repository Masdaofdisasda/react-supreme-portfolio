import styled from 'styled-components';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

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

function Model() {
  const gltf = useGLTF('/models/Sponza.gltf');
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}

const Background: React.FC = () => {
  return (
    <StyledCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </StyledCanvas>
  );
};

export default Background;
