import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  ContactShadows,
  OrbitControls,
  Loader,
  PerspectiveCamera,
} from '@react-three/drei';

import Model from './model';
import { useCheckMounted } from '../utils/hooks';

function ModelLoader() {
  // const cameraRef = React.useRef<THREE.PerspectiveCamera>();
  const { mounted } = useCheckMounted();

  // prevent rendering three-js on server side (otherwise would cause hydration differences)
  if (!mounted) return null;

  return (
    <>
      <Canvas shadows>
        <PerspectiveCamera
          makeDefault
          position={[0, 1, 3]}
          fov={75}
          zoom={1.4}
        />
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 4, 7.5]} intensity={0.5} />
        <Suspense fallback={null}>
          <Model position={[0, -0.3, 0]} />
          <OrbitControls />
          <ContactShadows
            position={[0, -0.3, 0]}
            scale={7.5}
            opacity={0.25}
            frames={1}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default ModelLoader;
