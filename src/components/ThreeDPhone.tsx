import { useMemo } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import phoneScreenUrl from '@/assets/phone-screen.png';

function PhoneModel() {
  const texture = useLoader(THREE.TextureLoader, phoneScreenUrl);

  const materials = useMemo(() => ({
    body: new THREE.MeshStandardMaterial({
      color: '#0a0a0a',
      roughness: 0.1,
      metalness: 0.9,
    }),
    screen: new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.1,
      transparent: true,
      side: THREE.DoubleSide,
    }),
    frame: new THREE.MeshStandardMaterial({
      color: '#222222',
      metalness: 1,
      roughness: 0.1,
    }),
  }), [texture]);

  return (
    <group>

      {/* Rounded Phone Body */}
      <mesh material={materials.body} castShadow receiveShadow>
        <extrudeGeometry args={[
          new THREE.Shape()
            .moveTo(-1.4, -3)
            .lineTo(1.4, -3)
            .quadraticCurveTo(1.6, -3, 1.6, -2.8)
            .lineTo(1.6, 2.8)
            .quadraticCurveTo(1.6, 3, 1.4, 3)
            .lineTo(-1.4, 3)
            .quadraticCurveTo(-1.6, 3, -1.6, 2.8)
            .lineTo(-1.6, -2.8)
            .quadraticCurveTo(-1.6, -3, -1.4, -3),
          { depth: 0.3, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 5 }
        ]} />
      </mesh>
      
      {/* Screen with texture */}
      <mesh position={[0, 0, 0.2]} material={materials.screen}>
        <planeGeometry args={[3.05, 5.85]} />
      </mesh>
      
      {/* Detail: Home indicator line */}
      <mesh position={[0, -2.7, 0.21]} material={materials.frame}>
        <boxGeometry args={[1, 0.05, 0.01]} />
      </mesh>
    </group>
  );
}

export function ThreeDPhone() {
  return (
    <div className="w-full aspect-[4/5] md:aspect-auto md:h-[600px] relative">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 35 }}>
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
