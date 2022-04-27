import React, { Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import * as THREE from 'three';

import Model from './compressedModel';
import { AnimationState, useAnimationState } from '../utils/animation-provider';

const initialPosition: [x: number, y: number, z: number] = [0, 1, 3];
const initialZoom = 0.6;

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

function CanvasWrapper() {
  const [initialVisible, setInitialVisible] = React.useState(false);
  const cameraRef = React.useRef<THREE.PerspectiveCamera>();
  const frameRef = React.useRef(0);
  const animationState = useAnimationState();
  const visible = animationState === AnimationState.On;

  React.useEffect(() => {
    // delay animation by 1 second to prevent concurrent janky animations
    // with spring animating on-enter texts
    const timer = setTimeout(() => setInitialVisible(true), 1000);

    return () => clearTimeout(timer);
  }, []);

  useFrame(() => {
    if (!initialVisible) return;

    // This function runs at the native refresh rate inside of a shared render-loop
    const camera = cameraRef.current as THREE.PerspectiveCamera;
    if (frameRef.current <= 100) {
      const frame = frameRef.current;

      const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
      const zoomLevel = (0.4 / 100) * frame;

      camera.position.y = initialPosition[1];
      camera.position.x =
        initialPosition[0] * Math.cos(rotSpeed) +
        initialPosition[2] * Math.sin(rotSpeed);
      camera.position.z =
        initialPosition[2] * Math.cos(rotSpeed) -
        initialPosition[0] * Math.sin(rotSpeed);
      camera.zoom = initialZoom + zoomLevel;
      camera.updateProjectionMatrix();

      frameRef.current += 1;
    }
  });

  // Total Blocking Time - high (because the model is quite large (8 MB))
  // Also, the shadows adds to the time
  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={initialPosition}
        fov={75}
        zoom={initialZoom}
      />
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 4, 7.5]} intensity={0.5} />
      <Suspense fallback={null}>
        <Model position={[0, -0.8, 0]} visible={initialVisible && visible} />
        <ContactShadows
          position={[0, -0.8, 0]}
          scale={7.5}
          opacity={0.25}
          frames={1}
          visible={initialVisible && visible}
        />
        <OrbitControls autoRotate />
      </Suspense>
    </>
  );
}

export default CanvasWrapper;
