import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  color: string;
  type: 'sphere' | 'box' | 'torus';
  scale?: number;
}

export const FloatingGeometry = ({ position, color, type, scale = 1 }: FloatingGeometryProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  const renderGeometry = () => {
    switch (type) {
      case 'sphere':
        return <Sphere args={[0.5 * scale, 32, 32]} />;
      case 'box':
        return <Box args={[0.8 * scale, 0.8 * scale, 0.8 * scale]} />;
      case 'torus':
        return <Torus args={[0.6 * scale, 0.2 * scale, 16, 100]} />;
      default:
        return <Sphere args={[0.5 * scale, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {renderGeometry()}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.7}
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
};