import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimationMixer, Group } from "three";
import * as THREE from "three";

import profileIcon from "../assets/images/Ashan-Prof.jpg";

interface ModelProps {
  model: "thief" | "policeman";
  enableAddNewCriminalButton?: boolean;
  enableLocationButton?: boolean;
  enableAddNewPrisonerButton?: boolean;
  enableSwitchGenderButton?: boolean;
  enableAddNewOfficerButton?: boolean;
  enableTextBar?: boolean;
  text?: string;
}

interface GLTFResult {
  scene: THREE.Group;
  animations: THREE.AnimationClip[];
}

const MODEL_PROPERTIES = {
  thief: {
    scale: [2.5, 2.5, 2],
    rotation: [-0.2, 6.5, 0],
    position: [0.1, -2, 0],
  },
  policeman: {
    scale: [2.5, 2.5, 2.5],
    rotation: [-0.2, 6.5, 0],
    position: [0.3, -2.2, 0],
  },
};

const getModelPath = (model: "thief" | "policeman"): string =>
  `/models/${model}Model.glb`;

const AnimatedModel: React.FC<{ model: "thief" | "policeman" }> = ({
  model,
}) => {
  const { scene, animations } = useGLTF(getModelPath(model)) as GLTFResult;
  const modelRef = useRef<Group>(null);
  const mixerRef = useRef<AnimationMixer | null>(null);

  useEffect(() => {
    if (!scene || animations.length === 0) return;

    const mixer = new AnimationMixer(scene);
    animations.forEach((clip) => mixer.clipAction(clip).play());

    mixerRef.current = mixer;

    return () => {
      mixer.stopAllAction();
      mixer.uncacheRoot(scene);
    };
  }, [scene, animations]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  const props = MODEL_PROPERTIES[model];

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={props.scale}
      rotation={props.rotation}
      position={props.position}
    />
  );
};

const ModelViewer: React.FC<ModelProps> = ({
  model,
  enableAddNewCriminalButton = false,
  enableLocationButton = false,
  enableAddNewPrisonerButton = false,
  enableSwitchGenderButton = false,
  enableAddNewOfficerButton = false,
  enableTextBar = false,
  text,
}) => {
  return (
    <div className="relative bg-white rounded-3xl h-96 w-fit hidden xl:flex shadow-lg cursor-pointer text-center items-end justify-end pe-5">
      <div className="absolute h-fit bg-white/80  w-fit z-20 rounded-3xl shadow-2xl flex items-center justify-center ps-5 pe-5 mb-5 hover:scale-105 transition-all duration-300">
        <img
          src={profileIcon}
          alt="police icon"
          className="w-10 h-10 m-2 hover:opacity-60 hover:scale-110 cursor-pointer rounded-full"
        />
        {enableTextBar && (
          <p className="text-black/80">Welcome! {text}</p>
        )}
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
          <AnimatedModel model={model} />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
