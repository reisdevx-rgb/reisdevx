import { useEffect, useMemo, useRef, useState, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import phoneScreenUrl from '@/assets/phone-screen.png';

function PhoneModel() {
  const texture = useLoader(THREE.TextureLoader, phoneScreenUrl);

  const materials = useMemo(() => ({
    body: new THREE.MeshStandardMaterial({
      color: '#0a0a0a',
      roughness: 0.2,
      metalness: 0.85,
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
      roughness: 0.2,
    }),
  }), [texture]);

  const bodyGeometry = useMemo(() => {
    const shape = new THREE.Shape()
      .moveTo(-1.4, -3)
      .lineTo(1.4, -3)
      .quadraticCurveTo(1.6, -3, 1.6, -2.8)
      .lineTo(1.6, 2.8)
      .quadraticCurveTo(1.6, 3, 1.4, 3)
      .lineTo(-1.4, 3)
      .quadraticCurveTo(-1.6, 3, -1.6, 2.8)
      .lineTo(-1.6, -2.8)
      .quadraticCurveTo(-1.6, -3, -1.4, -3);
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 4,
    });
  }, []);

  return (
    <group>
      <mesh geometry={bodyGeometry} material={materials.body} />
      <mesh position={[0, 0, 0.36]} material={materials.screen}>
        <planeGeometry args={[3.05, 5.85]} />
      </mesh>
      <mesh position={[0, -2.7, 0.37]} material={materials.frame}>
        <boxGeometry args={[1, 0.05, 0.01]} />
      </mesh>
    </group>
  );
}

export function ThreeDPhone() {
  const [mounted, setMounted] = useState(false);
  const [canvasKey, setCanvasKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle WebGL context loss by remounting the canvas
  const handleCreated = ({ gl }: { gl: THREE.WebGLRenderer }) => {
    const canvas = gl.domElement;
    const onLost = (e: Event) => {
      e.preventDefault();
    };
    const onRestored = () => {
      setCanvasKey((k) => k + 1);
    };
    canvas.addEventListener('webglcontextlost', onLost as EventListener);
    canvas.addEventListener('webglcontextrestored', onRestored as EventListener);
  };

  return (
    <div
      ref={containerRef}
      className="w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-auto lg:h-[600px] relative"
    >
      {mounted && (
        <Canvas
          key={canvasKey}
          dpr={[1, 1.5]}
          gl={{ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: false }}
          camera={{ position: [0, 0, 15], fov: 35 }}
          onCreated={handleCreated}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.6} />

          <Suspense fallback={null}>
            <PhoneModel />
            <Environment preset="city" />
          </Suspense>

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableDamping
            dampingFactor={0.1}
            rotateSpeed={0.8}
          />
        </Canvas>
      )}
    </div>
  );
}
