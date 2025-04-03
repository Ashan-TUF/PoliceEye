import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SplashModel } from "./splashModel";

const SplashScreen = () => {
  return (
    <div className="w-screen h-screen">
      <p className="text-red-500 absolute">Ashan</p>

      <Canvas className="bg-cover" camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={10} />
        <SplashModel url="../models/stylized_ww1_plane.glb" />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
export default SplashScreen;
