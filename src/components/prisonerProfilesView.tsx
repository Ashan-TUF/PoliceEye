import { PrisonerProfileRecord } from "./prisonerProfileRecord";
import profile from "../assets/images/Ashan-Prof.jpg";
import { useNavigate } from "react-router-dom";

export const PrisonerProfilesView = () => {
  const navigate = useNavigate();

  const viewPrisonerProfile = (prisonerCode: string) => {
    navigate(`/managePrisonerProfile/${prisonerCode}`);
  };

  const prisonerData = [
    {
      profilePic: profile,
      prisonerCode: "200123",
      fullName: "Ashan Kavindu Kalupahana",
      cellNumber: "313",
      releaseStatus: "Released",
    },
    {
      profilePic: profile,
      prisonerCode: "200124",
      fullName: "John Doe",
      cellNumber: "314",
      releaseStatus: "Released",
    },
    {
      profilePic: profile,
      prisonerCode: "200125",
      fullName: "Jane Doe",
      cellNumber: "315",
      releaseStatus: "Released",
    },
  ] as const;

  return (
    <div className="flex flex-col gap-3 h-fit w-full p-2 xl:ps-10 mb-10 xl:mb-20">
      <p className="text-2xl font-semibold">Prisoner Profiles</p>
      <div className="flex w-full h-fit text-sm">
        <div className="w-1/6 hidden xl:block" />
        <div className="w-1/3 xl:w-1/6 text-center">Prisoner_code</div>
        <div className="w-1/3 xl:w-1/6 text-center">Full_name</div>
        <div className="hidden xl:block xl:w-1/6 text-center">Cell_number</div>
        <div className="w-1/3 xl:w-1/6 text-center">Release_status</div>
      </div>

      <div className="flex flex-col gap-1">
        {prisonerData.map((prisoner) => (
          <PrisonerProfileRecord
            key={prisoner.prisonerCode}
            data={prisoner}
            onViewProfile={viewPrisonerProfile}
          />
        ))}
      </div>
    </div>
  );
};
