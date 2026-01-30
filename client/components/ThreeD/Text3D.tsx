import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

interface Text3DProps {
  text: string;
  color?: string;
  scale?: number;
}

function Text3DContent({ text, color = "#8B5CF6", scale = 1 }: Text3DProps) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      <Text
        fontSize={3 * scale}
        fontWeight="bold"
        letterSpacing={-0.06}
        position={[0, 0, 0]}
        maxWidth={1000}
        lineHeight={1}
        textAlign="center"
        font="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
      >
        {text}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Text>

      {/* Light */}
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -10, 10]} intensity={1.5} color={color} />
      <ambientLight intensity={0.6} />
    </group>
  );
}

export function Text3D(props: Text3DProps) {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
      }}
      camera={{ position: [0, 0, 8], fov: 50 }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <Text3DContent {...props} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0}
        autoRotate={true}
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}

export default Text3D;
