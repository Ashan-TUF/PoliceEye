import warningIcon from "../assets/icons/warning.png";
import React from "react";

interface ProfileImage {
  resourceUrl: string;
}
interface CriminalUser {
  firstName: string;
  lastName: string;
  nickName?: string;
  dob: string;
  nationality: string;
  address: string;
  job: string;
  sex?: string;
  nic: string;
  profileImg: ProfileImage[];
}
interface CriminalProfileViewProps {
  userData: CriminalUser;
}

const CriminalProfileView: React.FC<CriminalProfileViewProps> = ({
  userData,
}) => {
  const {
    firstName,
    lastName,
    nickName,
    dob,
    nationality,
    address,
    job,
    sex = "N/A",
    nic,
    profileImg,
  } = userData;

  const criminalData = {
    fullName: `${firstName} ${lastName}`,
    nickName: nickName || "-",
    dob: new Date(dob).toLocaleDateString(),
    age: new Date().getFullYear() - new Date(dob).getFullYear(),
    nic: nic,
    sex: sex,
    nationality: nationality,
    address: address,
    job: job,
  };

  const summary = {
    NumberOfCrimes: "02",
    NumberOfMurders: "00",
    NumberOfArrests: "01",
    Gang: "_",
    nicknames: "",
  };

  return (
    <div className="flex w-full p-2">
      <div className="flex flex-col gap-5 w-1/3">
        <p className="text-2xl font-semibold ms-10">Profile</p>
        <img
          src={profileImg[0]?.resourceUrl || ""}
          alt="profile image"
          className="w-40 h-40 lg:w-52 lg:h-52 rounded-full border-2 border-[#FA4040] mx-auto"
        />
        <span className="text-sm flex items-center justify-center">
          <img src={warningIcon} alt="" className="w-6 h-6" />
          <span className="text-sm">Criminal Detected!</span>
        </span>
      </div>
      <div className="w-2/3 2xl:w-2/4 pt-5 p-1 2xl:p-5">
        <div className="rounded-3xl bg-white flex flex-col p-5">
          {Object.entries(criminalData).map(([key, value]) => (
            <p className="text-sm" key={key}>
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}{" "}
              : {value}
            </p>
          ))}
        </div>
      </div>
      <div className="bg-white h-72 rounded-3xl grow hidden 2xl:flex flex-col shadow-lg p-5">
        <p className="text-2xl mb-5">Summary</p>
        {Object.entries(summary).map(([key, value]) => (
          <p className="text-sm" key={key}>
            {key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}{" "}
            : {value}
          </p>
        ))}
      </div>
    </div>
  );
};
export default CriminalProfileView;
