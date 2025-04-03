import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SplashModel } from "./splashModel";
import ProgressBar from "../components/progressBar";

const SplashScreen = () => {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center">
      <p className="absolute top-20 text-4xl">බන්ධනාගාරය</p>

      <ProgressBar />
      <Canvas className="bg-cover" camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={10} />
        <SplashModel url="../models/notorius_face_abstract_geometry_animation_loop.glb" />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
export default SplashScreen;
