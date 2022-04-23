import React from 'react';
import { useGLTF } from '@react-three/drei';

type ModelProps = {
  position?: [number, number, number];
};

function Model({ position = [0, 0, 0] }: ModelProps) {
  const gltf = useGLTF('/models/mumei.glb');

  return <primitive object={gltf.scene} position={position} />;
}

export default Model;
