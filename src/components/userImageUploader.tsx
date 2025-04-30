import userIcon from "../assets/icons/user.png";
import cameraOutLineIcon from "../assets/icons/cameraOutLine.png";
import React, { useState } from "react";
import axios from "axios";

export interface DetectedUser {
  _id: string;
  nic: string;
  firstName: string;
  lastName: string;
  nickName: string;
  dob: string;
  nationality: string;
  address: string;
  job: string;
  mobile: string;
  email: string;
  profileImg: {
    hash: string;
    resourceUrl: string;
    directory: string;
    fileName: string;
    _id: string;
  }[];
  verificationStatus: {
    status: string;
    updatedAt: string;
  };
  registeredDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface UserImageUploaderProps {
  onPredictionUpdate: (value: string) => void;
  prediction: string;
  setDetectedUser: (user: DetectedUser | null) => void;
}

const UserImageUploader: React.FC<UserImageUploaderProps> = ({
  onPredictionUpdate,
  prediction,
  setDetectedUser,
}) => {
  const [uploading, setUploading] = useState(false);
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("imagefile", file);

    try {
      setUploading(true);
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/user-detect",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.data) {
        const { matchCofidence, user } = response.data;
        onPredictionUpdate(matchCofidence.toFixed(2));
        setDetectedUser(user);
        console.log(user);
      } else {
        onPredictionUpdate("0.0");
        setDetectedUser(null);
      }
    } catch (err) {
      console.error("Upload faild:", err);
      onPredictionUpdate("0.0");
      setDetectedUser(null);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="h-96 grow bg-white rounded-4xl shadow-lg flex flex-col gap-3 justify-center items-center">
      <p className="text-xl">Drag an image here or upload a file</p>
      <input
        type="file"
        id="image"
        className="hidden"
        onChange={handleImageChange}
      />
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
            uploading ? "text-green-300" : "text-gray-800"
          } text-start`}
        >
          {uploading ? "Uploading..." : `Prediction percentage: ${prediction}`}%
        </p>
      </div>
    </div>
  );
};

export default UserImageUploader;
