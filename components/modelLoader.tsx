import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls } from '@react-three/drei';

import Model from './model';
import { useCheckMounted } from '../utils/hooks';

function ModelLoader() {
  const { mounted } = useCheckMounted();

  // prevent rendering three-js on server side (otherwise would cause hydration differences)
  if (!mounted) return null;

  return (
    <Canvas shadows camera={{ position: [0, 0.6, 3], fov: 70, zoom: 1.4 }}>
      <ambientLight intensity={2} />
      <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <Suspense fallback={null}>
        <Model position={[0, -0.3, 0]} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default ModelLoader;
