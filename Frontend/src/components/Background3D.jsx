import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import './Background3D.css';

function StarField() {
  const ref = useRef();
  const particlesCount = 2000;

  const particles = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;

      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.3 + 0.6, 0.8, 0.6);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return { positions, colors };
  }, [particlesCount]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.075;
    }
  });

  return (
    <Points ref={ref} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function WaveGrid() {
  const ref = useRef();
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const wave1 = Math.sin(x * 0.5 + time) * 0.3;
        const wave2 = Math.sin(y * 0.5 + time * 0.8) * 0.3;
        positions.setZ(i, wave1 + wave2);
      }
      positions.needsUpdate = true;
    }
    if (ref.current) {
      ref.current.rotation.x = Math.sin(time * 0.2) * 0.1;
      ref.current.rotation.y = time * 0.05;
    }
  });

  return (
    <group ref={ref} position={[0, -5, -10]}>
      <mesh ref={meshRef}>
        <planeGeometry args={[30, 30, 50, 50]} />
        <meshStandardMaterial
          color="#6366f1"
          wireframe
          emissive="#a855f7"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

function FloatingOrbs() {
  const orbsData = useMemo(() => [
    { position: [-8, 2, -5], color: '#6366f1', scale: 1 },
    { position: [8, -2, -8], color: '#a855f7', scale: 0.8 },
    { position: [0, 4, -6], color: '#06b6d4', scale: 1.2 },
  ], []);

  return (
    <>
      {orbsData.map((orb, index) => (
        <Orb key={index} {...orb} index={index} />
      ))}
    </>
  );
}

function Orb({ position, color, scale, index }) {
  const ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(time + index) * 0.5;
      ref.current.position.x = position[0] + Math.cos(time * 0.5 + index) * 0.3;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.015;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="background-3d">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
        
        <StarField />
        <WaveGrid />
        <FloatingOrbs />
      </Canvas>
      
      <div className="gradient-overlay"></div>
      <div className="scan-line"></div>
    </div>
  );
}