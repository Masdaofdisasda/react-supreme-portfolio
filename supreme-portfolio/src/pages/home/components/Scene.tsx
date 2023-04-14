import Sponza from './Sponza';
import React, { useEffect, useRef } from 'react';
import { DirectionalLight, MeshBasicMaterial, Vector3 } from 'three';
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from '@react-three/postprocessing';
import { Reflector } from '@react-three/drei';

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
      <Reflector
        receiveShadow={true}
        args={[20, 10]} // Width and height of the reflector plane
        resolution={512} // Controls the reflector's resolution
        mirror={0.7} // Controls the reflector's reflectivity (0 to 1)
        mixBlur={0.5} // Controls the blur of the reflection
        mixStrength={1} // Controls the strength of the mix effect
        rotation={[-Math.PI / 2, 0, 0]} // Rotates the reflector to face upwards
        position={[0, 0, 0]}
        blur={[150, 50]}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        depthToBlurRatioBias={1}
        material={new MeshBasicMaterial({ color: 0x696969 })}
      />
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
