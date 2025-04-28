import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { AnimationMixer, Group, SpotLight } from "three";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Object3D };
  materials: { [key: string]: THREE.Material };
  animations: THREE.AnimationClip[];
};

interface ModelProps {
  url: string;
}

export function SplashModel({ url }: ModelProps) {
  const { scene, animations } = useGLTF(url) as GLTFResult;
  const modelRef = useRef<Group>(null);
  const mixerRef = useRef<AnimationMixer | null>(null);
  const spotlightRef = useRef<SpotLight>(null);

  const { mouse, viewport } = useThree();

  // Initialize animations
  useEffect(() => {
    if (animations.length > 0) {
      const mixer = new AnimationMixer(scene);
      animations.forEach((clip) => mixer.clipAction(clip).play());
      mixerRef.current = mixer;
    }
  }, [animations, scene]);

  // Animate model rotation and spotlight position
  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2; // Smooth rotation for model
    }

    if (spotlightRef.current) {
      // Smoothly follow mouse movement for spotlight
      const x = mouse.x * viewport.width * 0.5; // X position based on mouse
      const y = mouse.y * viewport.height * 0.5 + 2; // Y position based on mouse
      const z = 5; // Fixed Z distance to avoid spotlight placement too close/far

      // Lerp position to smoothly follow mouse with easing factor
      spotlightRef.current.position.lerp(new THREE.Vector3(x, y, z), 0.1);
    }
  });

  return (
    <>
      {/* Spotlight */}
      <spotLight
        ref={spotlightRef}
        intensity={500}
        distance={6}
        angle={Math.PI / 4}
        penumbra={0.05}
        decay={0.01}
        color="gold"
        castShadow
      ></spotLight>

      {/* 3D Model */}
      <primitive
        ref={modelRef}
        object={scene}
        scale={[1.4, 1.4, 1.4]}
        rotation={[0, 0.3, 0]}
        position={[0, -1.3, 0]}
        dispose={null}
      />
    </>
  );
}
