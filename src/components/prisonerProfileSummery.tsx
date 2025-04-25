import profileIcon from "../assets/icons/user.png";
import cameraOutLineIcon from "../assets/icons/cameraOutLine.png";
export interface prisonerInfoProps {
  prisonerCode: string;
  fullName: string;
  nickName: string;
  dob: Date;
  old: number;
  nic: string;
  sex: "Male" | "Female" | "Others";
  nationality: string;
  address: string;
  job: string;
}

export const PrisonerProfileSummery: React.FC<{ data: prisonerInfoProps }> = ({
  data,
}) => {
  const formattedLabels: Record<keyof prisonerInfoProps, string> = {
    prisonerCode: "Prisoner code",
    fullName: "Full name",
    nickName: "Nick name",
    dob: "Date of birth",
    old: "Old",
    nic: "NIC",
    sex: "Sex",
    nationality: "Nationality",
    address: "Address",
    job: "Job",
  };

  return (
    <div className="flex flex-col gap-2 grow h-fit">
      <p className="text-2xl font-semibold">Prisoner Profile</p>
      <div className="flex">
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="w-fit h-fit p-5 rounded-full bg-[#F8FAFC]">
            <img src={profileIcon} alt="profile icon" className="w-26 h-26" />
          </div>
          <div className="w-fit h-fit rounded-full bg-[#F8FAFC] p-2 relative -top-10 ms-20">
            <img
              src={cameraOutLineIcon}
              alt="change profile picture"
              className="w-6 h-6"
            />
          </div>
          <div className="relative -top-5">
            <p className="text-sm">{data.nic}</p>
          </div>
        </div>
        <div className="bg-white w-2/3 h-fit p-10 rounded-3xl mt-auto mb-auto">
          {Object.entries(data).map(([key, value]) =>
            key !== "nic" ? (
              <p className="text-sm" key={key}>
                {formattedLabels[key as keyof prisonerInfoProps]}:{" "}
                {key === "dob" ? new Date(value as Date).toDateString() : value}
              </p>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
