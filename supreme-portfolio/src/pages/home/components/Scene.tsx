import Sponza from './Sponza';
import React, { useRef, useState } from 'react';
import { DepthTexture, DirectionalLight, Vector3 } from 'three';
import {
  Bloom,
  EffectComposer,
  SSAO,
  ToneMapping,
} from '@react-three/postprocessing';
import { useFrame, useThree } from '@react-three/fiber';
import { VolumetricShader } from './VolumetricShader';

export function Scene() {
  const { gl } = useThree();
  const lightPosition = new Vector3(2, 20, 1.5);
  const lightRef = useRef<DirectionalLight>(null);

  const [shadowMap, setShadowMap] = useState<DepthTexture>();
  const [depthMap, setDepthMap] = useState<DepthTexture>();

  useFrame(() => {
    if (!shadowMap && lightRef.current) {
      const texture = lightRef.current.shadow.map?.depthTexture;
      if (texture) {
        console.log(texture);
        setShadowMap(texture);
      }
    }

    if (!depthMap) {
      const renderTarget = gl.getRenderTarget();
      if (renderTarget) {
        console.log(renderTarget.depthTexture);
        setDepthMap(renderTarget.depthTexture);
      }
    }
  });

  return (
    <>
      <directionalLight
        intensity={5}
        position={lightPosition}
        castShadow={true}
        shadow-mapSize={[1024, 1024]}
        ref={lightRef}
      />
      <hemisphereLight groundColor={0x696969} intensity={0.8} />
      <fog attach="fog" args={['#ffffff', 1, 50]} />
      <Sponza />
      <EffectComposer>
        <SSAO />
        <Bloom
          kernelSize={3}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.1}
          intensity={0.7}
        />
        <ToneMapping maxLuminance={2} middleGrey={0.9} />
      </EffectComposer>
      {shadowMap && depthMap && (
        <VolumetricShader texture={shadowMap} sceneTexture={depthMap} />
      )}
    </>
  );
}
