import Sponza from './Sponza';
import React, { useEffect, useRef } from 'react';
import { DirectionalLight, Vector3 } from 'three';
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from '@react-three/postprocessing';

const Scene = React.memo(function Scene() {
  const lightPosition = new Vector3(2, 20, 1.5);
  const lightRef = useRef<DirectionalLight>(null);
  useEffect(() => {
    if (lightRef.current) {
      const shadowCamera = lightRef.current.shadow.camera;
      shadowCamera.left = -10;
      shadowCamera.right = 10;
      shadowCamera.top = 10;
      shadowCamera.bottom = -10;
      shadowCamera.near = 0.5;
      shadowCamera.far = 50;
      shadowCamera.updateProjectionMatrix();
    }
  }, []);

  return (
    <>
      <directionalLight
        intensity={5}
        position={lightPosition}
        castShadow={true}
        shadow-mapSize={[1024, 1024]}
        shadowBias={0.1}
        ref={lightRef}
      />
      <hemisphereLight groundColor={0x696969} intensity={0.8} />
      <fog attach="fog" args={['#ffffff', 1, 50]} />
      <Sponza />
      <EffectComposer>
        <Bloom
          kernelSize={3}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.1}
          intensity={0.7}
        />
        <ToneMapping maxLuminance={4} middleGrey={0.9} />
      </EffectComposer>
    </>
  );
});

export default Scene;
