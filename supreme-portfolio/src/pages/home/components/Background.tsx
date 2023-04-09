import styled from 'styled-components';
import { useGLTF } from '@react-three/drei';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { PerspectiveCamera, Vector3 } from 'three';

extend({ PerspectiveCamera });

const Camera: React.FC = () => {
  const { camera } = useThree();
  const typedCamera = camera as PerspectiveCamera;

  useFrame(() => typedCamera.updateMatrixWorld());

  useEffect(() => {
    typedCamera.position.set(8, 1.8, 0.5);
    typedCamera.lookAt(new Vector3(0, 1.8, 0));
  }, [typedCamera]);

  return null;
};

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

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isObject3D) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}

const Background: React.FC = () => {
  return (
    <StyledCanvas gl={{ antialias: false }} dpr={[1, 1.5]} shadows>
      <directionalLight
        intensity={5}
        position={[2, 20, 1]}
        castShadow={true}
        shadow-mapSize={1024}
      />
      <Model />
      <Camera />
    </StyledCanvas>
  );
};

export default Background;
