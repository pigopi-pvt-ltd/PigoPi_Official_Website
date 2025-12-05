import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Lightning = () => {
  const lightningRef = useRef();

  useFrame(() => {
    if (lightningRef.current) {
      lightningRef.current.position.x = Math.sin(Date.now() * 0.001) * 5;
      lightningRef.current.position.z = Math.cos(Date.now() * 0.001) * 5;
    }
  });

  return (
    <primitive
      object={new THREE.PointLight(0xffffff, 25, 40, 2)}
      ref={lightningRef}
      position={[0, 10, 0]}
    />
  );
};

export default Lightning;