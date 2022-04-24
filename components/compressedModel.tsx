import React from 'react';
import { useGLTF } from '@react-three/drei';

type ModelProps = {
  position?: [number, number, number];
  visible?: boolean;
};

function Model({ position = [0, 0, 0], visible = false }: ModelProps) {
  // by default, this cannot use a static import syntax
  // still considered a static asset inside /public folder, but not a static
  // immutable asset in .next/static folder (no Cache-Control: public, max-age=31536000, immutable)
  // still reachable via /models/(*.\.glb) through url
  // default headers are public, max-age=0 (A)
  // when hosted on Vercel, the edge uses public, max-age=0, must-revalidate (B) (can be changed via vercel.json)
  // client -> (B) edge -> (A) server
  // efficient enough - will always ask the edge, but the edge would reply with 304
  // only a few bytes transferred
  const gltf = useGLTF('/models/mumei.glb');

  // easier to load model this way rather than using gltfjsx (could mess up the model)
  return (
    <primitive object={gltf.scene} position={position} visible={visible} />
  );
}

export default Model;
