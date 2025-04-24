import profileIcon from "../assets/icons/user.png";
import cameraOutLineIcon from "../assets/icons/cameraOutLine.png";
export const PrisonerProfileSummery = () => {
  return (
    <div className="flex flex-col gap-2 grow h-fit bg-amber-400">
      <p className="text-2xl font-semibold">Prisoner Profile</p>
     <div className="flex">
     <div className="flex flex-col justify-center items-center w-1/2 h-fit bg-red-400 ">
        <div className="w-fit h-fit p-5 rounded-full bg-[#F8FAFC]">
          <img src={profileIcon} alt="profile icon" className="w-26 h-26" />
        </div>
        <div className="w-fit h-fit rounded-full bg-[#F8FAFC] p-2 relative -top-10 ms-20">
          <img src={cameraOutLineIcon} alt="" className="w-6 h-6" />
        </div>
      </div>
      <div className="bg-green-400 w-1/2 h-96"></div>
     </div>
    </div>
  );
};
