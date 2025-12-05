import React from 'react';

const Lights = () => (
  <>
    <ambientLight intensity={0.4} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <hemisphereLight skyColor={'#ffffff'} groundColor={'#222222'} intensity={0.5} />
  </>
);

export default Lights;