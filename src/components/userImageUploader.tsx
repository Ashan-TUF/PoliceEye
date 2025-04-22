import userIcon from "../assets/icons/user.png";
import cameraOutLineIcon from "../assets/icons/cameraOutLine.png";
import React from "react";

interface UserImageUploaderProps {
  percentage?: string;
}

const UserImageUploader: React.FC<UserImageUploaderProps> = ({
  percentage,
}) => {
  return (
    <div className="h-96 grow bg-white rounded-4xl shadow-lg flex flex-col gap-3 justify-center items-center">
      <p className="text-xl">Drag an image here or upload a file</p>
      <input type="file" id="image" className="hidden"/>
      <label htmlFor="image" className="cursor-pointer">
        <div className="w-fit h-fit p-5 rounded-full bg-[#F8FAFC]">
          <img src={userIcon} alt=" user Icon" className="w-25 h-25" />
        </div>
        <div className="w-fit h-fit rounded-full bg-[#F8FAFC] p-2 relative -top-10 ms-20">
          <img src={cameraOutLineIcon} alt=" camera Icon" className="w-6 h-6" />
        </div>
      </label>
      <div className="relative w-full px-5 -bottom-5">
        <p
          className={`${
            percentage ? "text-green-300" : "text-gray-800"
          } text-start`}
        >
          Prediction percentage: {percentage ?? "0.0"}%
        </p>
      </div>
    </div>
  );
};

export default UserImageUploader;
