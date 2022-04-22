import React from 'react';
import { Canvas } from '@react-three/fiber';

import { useCheckMounted } from '../utils/hooks';

function ModelLoader() {
  const { mounted } = useCheckMounted();

  // prevent rendering three-js on server side (otherwise would cause hydration differences)
  if (!mounted) return null;

  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}

export default ModelLoader;
