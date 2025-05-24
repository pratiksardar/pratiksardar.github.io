"use client";
import { Icosahedron, Points, PointMaterial, Sphere, Torus, Plane } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import FloatingCube from './FloatingCube';

// --- Custom Hooks (move to hooks/ if you want) ---
function useMouse() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return mouse;
}

function useScroll() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScroll(window.scrollY / max);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scroll;
}

// --- Constants ---
const PARTICLE_COUNT = 60;
const BLOB_COLORS = ["#ff00cc", "#00ffe7", "#fffb00", "#ff5e00", "#00ff85", "#00aaff", "#ff007f"];
const WIREFRAME_COLORS = ["#fff", "#ff00cc", "#00ffe7", "#fffb00", "#ff5e00", "#00ff85", "#00aaff", "#ff007f"];

export default function AbstractBackground() {
  const wireRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const blobRefs = useRef<(THREE.Mesh | null)[]>([]);
  // const icosahedronRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);
  const [wireColor, setWireColor] = useState("#fff");
  // const [wireMorph, setWireMorph] = useState(1);
  const [blobPulse, setBlobPulse] = useState(false);
  const [blobColors, setBlobColors] = useState(BLOB_COLORS.slice(0, 4));
  const [scrollY, setScrollY] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [isActive, setIsActive] = useState(false);
  const { scene } = useThree();

  const mouse = useMouse();
  const scroll = useScroll();

  // Set background color
  useEffect(() => {
    scene.background = new THREE.Color('#1a1a1a');
  }, [scene]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setLastInteraction(Date.now());
      setIsActive(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for inactivity
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteraction > 2000) { // 2 seconds of inactivity
        setIsActive(false);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [lastInteraction]);

  // Particle positions
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 2.5,
        z: (Math.random() - 0.5) * 4,
        speed: Math.random() * 0.01 + 0.005,
      });
    }
    return arr;
  }, []);

  const [burst, setBurst] = useState(false);
  const [burstTime, setBurstTime] = useState(0);

  // Animate wireframe, blobs, and particles
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const activeFactor = isActive ? 1 : 0.1; // Slow down to 10% when inactive

    // Animate wireframe
    if (wireRef.current) {
      wireRef.current.rotation.x = Math.sin(time / 2) * 0.5 * activeFactor + mouse.y * 0.5;
      wireRef.current.rotation.y = time * 0.5 * activeFactor + mouse.x * 0.5;
      wireRef.current.scale.setScalar(hovered ? 1.25 : 1);
    }

    // Animate blobs
    blobRefs.current.forEach((blob, index) => {
      if (blob) {
        // Animate position based on mouse
        blob.position.x += ((mouse.x * 2 * (index % 2 === 0 ? 1 : -1)) - blob.position.x) * 0.05;
        blob.position.y += ((mouse.y * 1.5 * (index < 2 ? 1 : -1)) - blob.position.y) * 0.05;
        blob.position.z += (Math.sin(time * 0.5 + index) * 0.5 - blob.position.z) * 0.05;

        // Animate scale based on scroll and pulse
        const scrollFactor = Math.min(scrollY * 0.001, 0.5) * activeFactor;
        const baseScale = blobPulse ? 3.5 : 3;
        const scale = baseScale * (1 + scrollFactor);
        blob.scale.setScalar(scale);

        // Animate color
        const material = blob.material as THREE.MeshStandardMaterial;
        const targetColor = new THREE.Color(blobColors[index]);
        material.color.lerp(targetColor, 0.05);
      }
    });

    // Animate icosahedron (wireframe)
    if (wireRef.current) {
      wireRef.current.rotation.y = scroll * Math.PI * 2;
    }

    // Animate particles
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        if (burst) {
          positions[i * 3] += Math.sign(positions[i * 3]) * 0.05;
          positions[i * 3 + 1] += Math.sign(positions[i * 3 + 1]) * 0.05;
          positions[i * 3 + 2] += Math.sign(positions[i * 3 + 2]) * 0.05;
        } else {
          positions[i * 3] *= 0.97;
          positions[i * 3 + 1] *= 0.97;
          positions[i * 3 + 2] *= 0.97;
        }
        positions[i * 3] += Math.sin(time + i) * 0.002 * activeFactor + (mouse.x * 0.1);
        positions[i * 3 + 1] += Math.cos(time + i) * 0.002 * activeFactor + (mouse.y * 0.1);
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
    if (burst && time - burstTime > 0.5) setBurst(false);
  });

  // Mouse move handler (for pointer events in 3D)
  const handlePointerMove = () => {
    setLastInteraction(Date.now());
    setIsActive(true);
  };

  // Click handler for all effects
  const handlePointerDown = () => {
    setBlobPulse(true);
    setTimeout(() => setBlobPulse(false), 300);
    setBlobColors((prev) => prev.map(() => BLOB_COLORS[Math.floor(Math.random() * BLOB_COLORS.length)]));
    // setWireMorph((m) => (m === 1 ? 0.7 : 1));
    setWireColor(WIREFRAME_COLORS[Math.floor(Math.random() * WIREFRAME_COLORS.length)]);
    setBurst(true);
    setBurstTime(performance.now() / 1000);
  };

  // Particle positions array
  const particlePositions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = particles[i].x;
      arr[i * 3 + 1] = particles[i].y;
      arr[i * 3 + 2] = particles[i].z;
    }
    return arr;
  }, [particles]);

  return (
    <group
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
    >
      {/* Blobs */}
      <group position={[0, 0, 0]}>
        <Sphere 
          ref={(ref) => { blobRefs.current[0] = ref; }}
          args={[0.7, 32, 32]} 
        >
          <meshStandardMaterial 
            color={blobColors[0]} 
            transparent 
            opacity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        <Torus 
          ref={(ref) => { blobRefs.current[1] = ref; }}
          args={[0.5, 0.2, 16, 32]} 
        >
          <meshStandardMaterial 
            color={blobColors[1]} 
            transparent 
            opacity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Torus>
        <Plane 
          ref={(ref) => { blobRefs.current[2] = ref; }}
          args={[1, 1]} 
        >
          <meshStandardMaterial 
            color={blobColors[2]} 
            transparent 
            opacity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Plane>
        <Sphere 
          ref={(ref) => { blobRefs.current[3] = ref; }}
          args={[0.6, 32, 32]} 
        >
          <meshStandardMaterial 
            color={blobColors[3]} 
            transparent 
            opacity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </group>

      {/* Floating Cube */}
      <group position={[2, -1, -2]}>
        <FloatingCube />
      </group>

      {/* Wireframe */}
      <Icosahedron
        ref={wireRef}
        args={[1.5, 1]}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshBasicMaterial wireframe color={wireColor} opacity={hovered ? 0.7 : 0.3} transparent />
      </Icosahedron>

      {/* Particles */}
      <Points ref={pointsRef} positions={particlePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f472b6"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}