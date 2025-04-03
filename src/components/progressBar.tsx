import { useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

const ProgressBar = () => {
  const { progress } = useProgress();
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedProgress((prev) => {
        if (prev < progress) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return progress;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  const getColor = () => {
    const r = Math.round(232 + (77 - 232) * (animatedProgress / 100));
    const g = Math.round(37 + (150 - 37) * (animatedProgress / 100));
    const b = Math.round(97 + (255 - 97) * (animatedProgress / 100));

    return `rgb(${r}, ${g}, ${b})`;
  };
  return (
    <div className="absolute w-80 text-center bottom-20">
      <p className="text-center mt-5 text-xl">පොලිස් ඇස (Police Eye)</p>
      <p className="text-sm">
        To create a beautiful land for future generations to live in{" "}
        <b>freedom</b> without <b>fear</b>.
      </p>
      <p className="text-white text-center font-bold mb-2 mt-5">
        {Math.round(animatedProgress)}% Loading...
      </p>
      <div className="w-full bg-gray-800 rounded-full h-1">
        <div
          className="h-full rounded-full transition-all duration-50"
          style={{
            width: `${animatedProgress}%`,
            backgroundColor: getColor(),
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
