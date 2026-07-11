"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group } from "three";

/* pastel marble objects that drift and revolve gently with scroll */
function Objects() {
  const group = useRef<Group>(null);
  useFrame(() => {
    if (!group.current) return;
    const y = window.scrollY;
    group.current.rotation.y = y * 0.0007;
    group.current.rotation.x = Math.sin(y * 0.0004) * 0.12;
  });
  return (
    <group ref={group}>
      <Float speed={1.1} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[4.6, 1.4, -3]}>
          <torusKnotGeometry args={[0.85, 0.26, 160, 24]} />
          <meshPhysicalMaterial color="#c8bee9" roughness={0.35} clearcoat={0.6} />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-4.5, 1.9, -3]}>
          <dodecahedronGeometry args={[0.95, 0]} />
          <meshPhysicalMaterial color="#f5c8b2" roughness={0.4} clearcoat={0.5} />
        </mesh>
      </Float>
      <Float speed={1.3} rotationIntensity={0.7} floatIntensity={1.4}>
        <mesh position={[-3.8, -2.2, -2.5]} rotation={[0.6, 0, 0.3]}>
          <torusGeometry args={[0.7, 0.2, 24, 72]} />
          <meshPhysicalMaterial color="#bfd6ea" roughness={0.35} clearcoat={0.6} />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.9}>
        <mesh position={[3.9, -2.3, -3]} rotation={[0.2, 0.4, 1.35]}>
          {/* a fallen column drum */}
          <cylinderGeometry args={[0.5, 0.5, 1.5, 20]} />
          <meshPhysicalMaterial color="#c2d6be" roughness={0.45} clearcoat={0.4} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.6}>
        <mesh position={[0.6, 3, -4.5]}>
          <icosahedronGeometry args={[0.55, 0]} />
          <meshPhysicalMaterial color="#e8d5a8" roughness={0.4} clearcoat={0.5} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene5() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  if (!enabled) return null;
  return (
    <div className="oly-scene" aria-hidden="true">
      <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 8], fov: 42 }}>
        <hemisphereLight args={["#fff8ef", "#d9cfe8", 0.9]} />
        <directionalLight position={[4, 6, 5]} intensity={1.1} color="#fff3e4" />
        <directionalLight position={[-5, -2, 3]} intensity={0.35} color="#cfe0f2" />
        <Objects />
      </Canvas>
    </div>
  );
}
