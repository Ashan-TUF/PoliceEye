import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimationMixer, Group } from "three";
import * as THREE from "three";

import profileIcon from "../assets/images/Ashan-Prof.jpg";

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
      rotation={[-0.2, 6.5, 0]}
      position={[0.3, -2.2, 0]}
    />
  );
}

export function PoliceModel() {
  return (
    <div className="relative bg-white rounded-3xl h-96 w-fit hidden xl:flex shadow-lg cursor-pointer text-center items-end justify-end pe-5">
      <div className="absolute h-fit bg-white/80  w-fit z-20 rounded-3xl shadow-2xl flex items-center justify-center ps-5 pe-5 mb-5 hover:scale-105 transition-all duration-300">
        <img
          src={profileIcon}
          alt="police icon"
          className="w-10 h-10 m-2 hover:opacity-60 hover:scale-110 cursor-pointer rounded-full"
        />
        <p className="text-black/80">Welcome! A.K.Kalupahana</p>
      </div>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={30} />
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
