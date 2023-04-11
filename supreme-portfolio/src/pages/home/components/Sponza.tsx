import { useGLTF } from '@react-three/drei';
import React, { useEffect, useMemo } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';

function Sponza() {
  const gltf = useGLTF('/models/Sponza.gltf');
  const material = useMemo(() => {
    return new MeshStandardMaterial({
      color: 0x696969,
      roughness: 0.3,
      metalness: 0,
    });
  }, []);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isObject3D) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
      if (child instanceof Mesh) {
        child.material = material;
      }
    });
  }, [gltf, material]);

  return (
    <mesh castShadow={true} receiveShadow={true}>
      <primitive object={gltf.scene} position={[0, 0, 0]} />
    </mesh>
  );
}

export default Sponza;
