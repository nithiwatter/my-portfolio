import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Loader,
  PerspectiveCamera,
  Plane,
} from '@react-three/drei';
// import * as THREE from 'three';

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
        <directionalLight
          intensity={0.5}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <Plane
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.3, 0]}
          args={[1000, 1000]}
        >
          <meshStandardMaterial attach="material" color="white" />
        </Plane>
        <Suspense fallback={null}>
          <Model shadows position={[0, -0.3, 0]} />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default ModelLoader;
