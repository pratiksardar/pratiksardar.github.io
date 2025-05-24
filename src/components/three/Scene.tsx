"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import AbstractBackground from './AbstractBackground';

const Scene = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#a78bfa" />
          <AbstractBackground />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.7} fade />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene; 