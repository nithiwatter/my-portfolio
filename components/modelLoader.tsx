import React, { CSSProperties } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, useContextBridge } from '@react-three/drei';

import CanvasWrapper from './canvasWrapper';
import { AnimationStateContext } from '../utils/animation-provider';
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
  const ContextBridge = useContextBridge(AnimationStateContext);
  const { mounted } = useCheckMounted();

  // prevent rendering three-js on server side (otherwise would cause hydration differences)
  if (!mounted) return null;

  return (
    <>
      <Canvas dpr={window.devicePixelRatio} frameloop="demand">
        <ContextBridge>
          <CanvasWrapper />
        </ContextBridge>
      </Canvas>
      <Loader containerStyles={styles.container} innerStyles={styles.inner} />
    </>
  );
}

export default ModelLoader;
