import styled from 'styled-components';
import { useGLTF } from '@react-three/drei';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import React, { useCallback, useEffect, useState } from 'react';
import { ACESFilmicToneMapping, PerspectiveCamera, Vector3 } from 'three';
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from '@react-three/postprocessing';

extend({ PerspectiveCamera });

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = useCallback(
    (event: { clientX: any; clientY: any }) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    },
    []
  );

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [updateMousePosition]);

  return mousePosition;
}

const Camera: React.FC = () => {
  const { camera } = useThree();
  const typedCamera = camera as PerspectiveCamera;
  const { x, y } = useMousePosition();

  useFrame(() => typedCamera.updateMatrixWorld());

  useEffect(() => {
    typedCamera.position.set(8, 1.8, 0.5);
    typedCamera.lookAt(new Vector3(0, 1.8, 0));
  }, [typedCamera]);

  useEffect(() => {
    const target = new Vector3(0, 1.8, 0);
    const xRotation = x * 0.004; // Adjust the multiplier to control the rotation speed
    const yRotation = y * 0.003;

    target.y += yRotation;
    target.x += xRotation;
    typedCamera.lookAt(target);
  }, [x, y, typedCamera]);

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
      <ambientLight intensity={5} />
      <directionalLight
        intensity={5}
        position={[5, 20, 1]}
        castShadow={true}
        shadow-mapSize={1024}
      />
      <Model />
      <Camera />
      <EffectComposer>
        <Bloom
          kernelSize={3}
          luminanceThreshold={0.7}
          luminanceSmoothing={0.1}
          intensity={3}
        />
        <ToneMapping blendFunction={ACESFilmicToneMapping}/>
      </EffectComposer>
    </StyledCanvas>
  );
};

export default Background;
