import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { AnimationMixer, Group } from "three";
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

  if (animations.length > 0 && !mixerRef.current) {
    mixerRef.current = new AnimationMixer(scene);
    animations.forEach((clip) => {
      const action = mixerRef.current!.clipAction(clip);
      action.play();
    });
  }

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[0.4, 0.4, 0.4]}
      rotation={[0, Math.PI / 6, 0]}
      position={[0, 0, 0]}
    />
  );
}
