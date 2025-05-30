import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SplashModel } from "../../components/splashModel";
import ProgressBar from "../../components/progressBar";
import sriLankaLogo from "../../assets/images/sriLnkaPoliceLogo.png";

const SplashScreen = () => {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }} className="cursor-grab">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={100} />
        <SplashModel url="../models/justice law goddess.glb" />
        <OrbitControls />
      </Canvas>
      <img
        src={sriLankaLogo}
        alt="Sri Lanka Logo"
        className="absolute top-5 w-25 h-30 blur-xs"
      />
      <p className="absolute top-35 text-5xl text-[#2C2C2C]">CEYLON POLICE</p>
      <ProgressBar />
      <p className="absolute bottom-5 text-[#2C2C2C]">
        Developed by <b>Ashan Kavindu</b> | © 2025.
      </p>
    </div>
  );
};
export default SplashScreen;
