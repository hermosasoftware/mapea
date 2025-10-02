import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

// Componente del modelo 3D del dron
function DroneGLTF() {
  const meshRef = useRef<THREE.Group>(null);
  
  // Cargar el modelo GLB desde public
  const { scene } = useGLTF('/3d/dji_m350_with_zenmuse_l2_lidar_scanner.glb');
  
  // Animación de rotación suave
  useFrame((state) => {
    if (meshRef.current) {
      // Rotación muy sutil en Y para mantener centrado
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      // Flotación muy sutil
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive 
        object={scene} 
        scale={[2.2, 2.2, 2.2]} 
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

// Componente de loading
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
    </div>
  );
}

// Props del componente principal
interface DroneModelProps {
  className?: string;
  autoRotate?: boolean;
  enableControls?: boolean;
  backgroundImage?: string;
}

export const DroneModel: React.FC<DroneModelProps> = ({ 
  className = "", 
  autoRotate = true,
  enableControls = true,
}) => {

  return (
    <div 
      className={`w-full h-full ${className}`} 
    >
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ 
          position: [0, 0, 8], 
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Iluminación */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Entorno HDR para reflejos realistas */}
          <Environment preset="city" />
          
          {/* Controles de presentación con rotación automática */}
          <PresentationControls
            enabled={enableControls}
            global
            cursor={enableControls}
            snap
            speed={1}
            zoom={0.8}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 2, Math.PI / 2]}
          >
            {/* Modelo del dron */}
            <DroneGLTF />
          </PresentationControls>
          
          {/* Controles de órbita opcionales */}
          {enableControls && (
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              autoRotate={autoRotate}
              autoRotateSpeed={0.5}
              minDistance={5}
              maxDistance={15}
              target={[0, 0, 0]}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI - Math.PI / 6}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

// Precargar el modelo para mejor rendimiento
useGLTF.preload('/3d/dji_m350_with_zenmuse_l2_lidar_scanner.glb');