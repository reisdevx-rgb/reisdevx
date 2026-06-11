import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function PhoneModel() {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1074&auto=format&fit=crop');
  
  const materials = useMemo(() => ({
    body: new THREE.MeshStandardMaterial({ 
      color: '#1a1a1a', 
      roughness: 0.1, 
      metalness: 0.8 
    }),
    screen: new THREE.MeshStandardMaterial({ 
      map: texture,
      roughness: 0.1,
    }),
    frame: new THREE.MeshStandardMaterial({
      color: '#333333',
      metalness: 1,
      roughness: 0.2
    })
  }), [texture]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    meshRef.current.rotation.x = Math.cos(t * 0.3) * 0.1;
  });

  return (
    <group ref={meshRef}>
      {/* Phone Body with rounded corners (using a cylinder-like box approximation or just a rounded box if we had the utility) */}
      {/* For simplicity in vanilla Three.js without extra geo libs, we'll keep the box but simulate the look */}
      <mesh material={materials.body} castShadow receiveShadow>
        <boxGeometry args={[3.2, 6.5, 0.4]} />
      </mesh>
      
      {/* Screen with "Instagram" texture */}
      <mesh position={[0, 0, 0.21]} material={materials.screen}>
        <planeGeometry args={[3, 6.2]} />
      </mesh>
      
      {/* Frame detail */}
      <mesh position={[0, 0, 0]} material={materials.frame}>
        <boxGeometry args={[3.3, 6.6, 0.38]} />
      </mesh>

      {/* Camera Module */}
      <mesh position={[0.8, 2.5, -0.21]} material={materials.frame}>
        <boxGeometry args={[1, 1, 0.1]} />
      </mesh>
    </group>
  );
}

export function ThreeDPhone() {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={35} />
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        
        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
          <PhoneModel />
        </Float>
        
        <Environment preset="city" />
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      </Canvas>
    </div>
  );
}
