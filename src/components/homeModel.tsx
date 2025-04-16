import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimationMixer, Group } from "three";
import * as THREE from "three";

type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Object3D };
  materials: { [key: string]: THREE.Material };
  animations: THREE.AnimationClip[];
};

function Model() {
  const { scene, animations } = useGLTF(
    "/models/policemanModel.glb"
  ) as GLTFResult;

  const modelRef = useRef<Group>(null);
  const mixerRef = useRef<AnimationMixer | null>(null);

  useEffect(() => {
    if (animations.length > 0 && scene && !mixerRef.current) {
      mixerRef.current = new AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixerRef.current!.clipAction(clip);
        action.play();
      });
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[2.5, 2.5, 2.5]}
      rotation={[0, Math.PI / 12, 0]}
      position={[0, -2.1, 0]}
    />
  );
}

export function HomeModel() {
  return (
    <div className="bg-white rounded-3xl h-96 w-fit hidden xl:flex shadow-lg cursor-pointer text-center items-center justify-center">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Suspense
          fallback={
            <Html>
              <p className="text-gray-500 text-lg animate-pulse">
                Loading Model...
              </p>
            </Html>
          }
        >
          <Model />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
