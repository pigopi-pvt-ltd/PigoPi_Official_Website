import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Earth = () => {
  const mesh = useRef();
  const colorMap = useLoader(TextureLoader, '/textures/8k_earth_nightmap.jpg');
  const normalMap = useLoader(TextureLoader, '/textures/8k_earth_normal_map.jpg');

  useFrame(() => {
    mesh.current.rotation.y += 0.0015;
  });

  return (
    <mesh
      ref={mesh}
      scale={2.1}
      position={[0, -4.3, 0]}
    >
      <sphereGeometry args={[2.2, 60, 64]} />
      <meshStandardMaterial map={colorMap} normalMap={normalMap} />
    </mesh>
  );
};

export default Earth;