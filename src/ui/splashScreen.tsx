import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SplashModel } from "./splashModel";

const SplashScreen = () => {
  return(
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={10} />
    <SplashModel url="../models/rigged_optimus_primal__tf_rotb.glb" />
    <OrbitControls />
  </Canvas>
  );
}
export default SplashScreen;
