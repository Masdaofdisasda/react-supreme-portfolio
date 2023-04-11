import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Color, PerspectiveCamera, Vector3 } from 'three';

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = useCallback(
    (event: { clientX: any; clientY: any }) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const x = (event.clientX / viewportWidth) * 2 - 1; // convert to normalized device coordinates
      const y = -(event.clientY / viewportHeight) * 2 + 1; // convert to normalized device coordinates
      setMousePosition({ x, y });
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
  const { camera, scene } = useThree();
  const typedCamera = camera as PerspectiveCamera;
  const { x, y } = useMousePosition();
  const target = useMemo(() => {
    return new Vector3(0, 1.8, 0);
  }, []);

  scene.background = new Color(0xffffff);

  useFrame(() => typedCamera.updateMatrixWorld());

  useEffect(() => {
    typedCamera.fov = 60;
    typedCamera.position.set(8, 1.8, 0.5);
    typedCamera.lookAt(target);
  }, [typedCamera, target]);

  useEffect(() => {
    const yTarget = target.y + y * 0.9;
    const xTarget = target.x + x * 1.6;
    typedCamera.lookAt(new Vector3(xTarget, yTarget, target.z));
  }, [x, y, typedCamera, target.y, target.x, target.z]);

  return null;
};

export default Camera;
