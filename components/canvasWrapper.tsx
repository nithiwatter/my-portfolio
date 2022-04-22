import React, { Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import * as THREE from 'three';

import Model from './model';

const initialPosition: [x: number, y: number, z: number] = [0, 1, 3];

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

function CanvasWrapper() {
  const cameraRef = React.useRef<THREE.PerspectiveCamera>();
  const frameRef = React.useRef(0);

  useFrame(() => {
    // This function runs at the native refresh rate inside of a shared render-loop
    const camera = cameraRef.current as THREE.PerspectiveCamera;
    if (frameRef.current <= 100) {
      const frame = frameRef.current;

      const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
      const zoomLevel = (0.6 / 100) * frame;

      camera.position.y = initialPosition[1];
      camera.position.x =
        initialPosition[0] * Math.cos(rotSpeed) +
        initialPosition[2] * Math.sin(rotSpeed);
      camera.position.z =
        initialPosition[2] * Math.cos(rotSpeed) -
        initialPosition[0] * Math.sin(rotSpeed);
      camera.zoom = 1 + zoomLevel;
      camera.updateProjectionMatrix();

      frameRef.current += 1;
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={initialPosition}
        fov={75}
        zoom={0.8}
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
    </>
  );
}

export default CanvasWrapper;
