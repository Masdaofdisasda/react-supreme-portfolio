import styled from 'styled-components';
import { PerspectiveCamera, Vector3 } from 'three';
import { Canvas, extend } from '@react-three/fiber';
import React from 'react';
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from '@react-three/postprocessing';
import Camera from './Camera';
import Sponza from './Sponza';

extend({ PerspectiveCamera });

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

function Background() {
  const lightPosition = new Vector3(2, 20, 1.5);

  return (
    <StyledCanvas gl={{ antialias: false }} shadows>
      <directionalLight
        intensity={5}
        position={lightPosition}
        castShadow={true}
        shadow-mapSize={1024}
      />
      <hemisphereLight groundColor={0x696969} intensity={0.8} />
      <Sponza />
      <Camera />
      <EffectComposer>
        <Bloom
          kernelSize={3}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.1}
          intensity={0.7}
        />
        <ToneMapping maxLuminance={2} middleGrey={0.9} />
      </EffectComposer>
    </StyledCanvas>
  );
}

export default Background;
