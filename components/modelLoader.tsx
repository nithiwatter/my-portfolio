import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

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
      </Suspense>
    </Canvas>
  );
}

export default ModelLoader;
