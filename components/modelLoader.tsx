import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';

import CanvasWrapper from './canvasWrapper';
import { useCheckMounted } from '../utils/hooks';

function ModelLoader() {
  // const cameraRef = React.useRef<THREE.PerspectiveCamera>();
  const { mounted } = useCheckMounted();

  // prevent rendering three-js on server side (otherwise would cause hydration differences)
  if (!mounted) return null;

  return (
    <>
      <Canvas shadows>
        <CanvasWrapper />
      </Canvas>
      <Loader />
    </>
  );
}

export default ModelLoader;
