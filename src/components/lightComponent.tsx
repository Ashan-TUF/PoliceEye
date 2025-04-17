import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const LightComponent = () => {
  const redLightRef = useRef<THREE.DirectionalLight>(null);
  const blueLightRef = useRef<THREE.DirectionalLight>(null);
  const whiteLightRef = useRef<THREE.DirectionalLight>(null);

  const [flashState, setFlashState] = useState(true);
  const flashInterval = useRef(0);

  useFrame((state, delta) => {
    flashInterval.current += delta;

    if (flashInterval.current > 0.5) {
      setFlashState((prev) => !prev);
      flashInterval.current = 0;
    }

    if (redLightRef.current) {
      redLightRef.current.intensity = flashState ? 50 : 0;
    }

    if (blueLightRef.current) {
      blueLightRef.current.intensity = flashState ? 0 : 50;
    }
    const t = state.clock.getElapsedTime();
    const whitePulse = Math.sin(t * 2);
    if (whiteLightRef.current) {
      whiteLightRef.current.intensity = Math.max(whitePulse, 10);
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        ref={redLightRef}
        position={[5, 10, 5]}
        intensity={100}
        color="red"
      />
      <directionalLight
        ref={blueLightRef}
        position={[-5, 10, 5]}
        intensity={100}
        color="blue"
      />
      <directionalLight
        ref={whiteLightRef}
        position={[0, 15, 10]}
        intensity={100}
        color="white"
      />
    </>
  );
};

export default LightComponent;
