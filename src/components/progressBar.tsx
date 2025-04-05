import { useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";
import ButtonView from "./buttonView";
import { useNavigate } from "react-router-dom";
import lockIcon from "../assets/icons/lock.png";
import LoginView from "./loginView";

const ProgressBar = () => {
  const navigate = useNavigate();
  const { progress } = useProgress();
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    if (animatedProgress === 100) {
      setIsLoading(true);
    }
  }, [animatedProgress]);

  const getColor = () => {
    const r = Math.round(232 + (77 - 232) * (animatedProgress / 100));
    const g = Math.round(37 + (150 - 37) * (animatedProgress / 100));
    const b = Math.round(97 + (255 - 97) * (animatedProgress / 100));

    return `rgb(${r}, ${g}, ${b})`;
  };
  return (
    <div className="absolute w-80 text-center bottom-20">
      <p className="text-center mt-5 text-xl text-[#2C2C2C]">
        පොලිස් ඇස (Police Eye)
      </p>
      <p className="text-sm text-[#2C2C2C]">
        To create a beautiful land for future generations to live in{" "}
        <b>freedom</b> without <b>fear</b>.
      </p>

      <p
        className={
          isLoading
            ? "hidden"
            : "text-[#2C2C2C] text-center font-bold mb-2 mt-5"
        }
      >
        {Math.round(animatedProgress)}% Loading...
      </p>
      <div
        className={isLoading ? "hidden" : "w-full bg-gray-800 rounded-full h-1"}
      >
        <div
          className="h-full rounded-full transition-all duration-50"
          style={{
            width: `${animatedProgress}%`,
            backgroundColor: getColor(),
          }}
        ></div>
      </div>
      {isLoading ? (
        <>
          <LoginView />
          <ButtonView
            color="bg-blue-600/60"
            text="Login"
            icon={lockIcon}
            onClick={() => navigate("/login")}
          />
        </>
      ) : null}
    </div>
  );
};

export default ProgressBar;
