import React, { CSSProperties } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';

import CanvasWrapper from './canvasWrapper';
import { useCheckMounted } from '../utils/hooks';

const styles: { [key: string]: CSSProperties } = {
  container: {
    width: 200,
    height: 100,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0.375rem',
    background: 'rgba(23, 23, 23, 0.5)',
  },
};

function ModelLoader() {
  // const cameraRef = React.useRef<THREE.PerspectiveCamera>();
  const { mounted } = useCheckMounted();

  // prevent rendering three-js on server side (otherwise would cause hydration differences)
  if (!mounted) return null;

  return (
    <>
      <Canvas dpr={window.devicePixelRatio}>
        <CanvasWrapper />
      </Canvas>
      <Loader containerStyles={styles.container} innerStyles={styles.inner} />
    </>
  );
}

export default ModelLoader;
