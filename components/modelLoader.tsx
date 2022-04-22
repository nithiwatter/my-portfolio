import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import Model from './model';
import { useCheckMounted } from '../utils/hooks';

function ModelLoader() {
  const { mounted } = useCheckMounted();

  // prevent rendering three-js on server side (otherwise would cause hydration differences)
  if (!mounted) return null;

  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
}

export default ModelLoader;
