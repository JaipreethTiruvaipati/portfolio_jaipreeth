import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        
        <Environment preset="forest" />
        
        {/* Floating sacred geometry */}
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <FloatingGeometry position={[-3, 2, -2]} color="#8B9B47" type="sphere" scale={0.8} />
        </Float>
        
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.7}>
          <FloatingGeometry position={[3, -1, -1]} color="#D4A574" type="torus" scale={0.6} />
        </Float>
        
        <Float speed={0.8} rotationIntensity={0.7} floatIntensity={0.3}>
          <FloatingGeometry position={[0, 3, -3]} color="#8B9B47" type="box" scale={0.7} />
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
          <FloatingGeometry position={[-2, -2, -2]} color="#D4A574" type="sphere" scale={0.5} />
        </Float>
        
        <Float speed={0.9} rotationIntensity={0.6} floatIntensity={0.4}>
          <FloatingGeometry position={[2, 1, -4]} color="#8B9B47" type="torus" scale={0.9} />
        </Float>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};