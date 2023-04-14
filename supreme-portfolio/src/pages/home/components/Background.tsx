import styled from 'styled-components';
import { PerspectiveCamera } from 'three';
import { Canvas, extend } from '@react-three/fiber';
import React from 'react';
import Camera from './Camera';
import Scene from './Scene';

extend({ PerspectiveCamera });

const StyledCanvas = styled(Canvas)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  filter: brightness(0.2);
`;

function Background() {
  return (
    <StyledCanvas
      gl={{
        antialias: false,
      }}
      shadows
    >
      <Scene />
      <Camera />
    </StyledCanvas>
  );
}

export default Background;
