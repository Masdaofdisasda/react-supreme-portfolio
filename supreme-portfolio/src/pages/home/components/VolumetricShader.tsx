import { useMemo } from 'react';
import { ShaderMaterial } from 'three';
import CustomShader from './Shaders';

type ScreenQuadProps = {
  texture: THREE.DepthTexture;
  sceneTexture: THREE.DepthTexture;
};

export function VolumetricShader({ texture, sceneTexture }: ScreenQuadProps) {
  const material = useMemo(() => {
    const shaderMaterial = new ShaderMaterial({
      uniforms: CustomShader.uniforms,
      vertexShader: CustomShader.vertexShader,
      fragmentShader: CustomShader.fragmentShader,
      depthTest: false,
      depthWrite: false,
    });

    shaderMaterial.uniforms.tShadowMap.value = texture;
    shaderMaterial.uniforms.tDiffuse.value = sceneTexture;

    return shaderMaterial;
  }, [texture, sceneTexture]);
  return (
    <mesh renderOrder={1000} scale={[2, 2, 1]}>
      <planeBufferGeometry args={[1, 1]} />
      <primitive object={material} />
    </mesh>
  );
}
