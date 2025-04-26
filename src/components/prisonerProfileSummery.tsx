import profileIcon from "../assets/icons/user.png";
import cameraOutLineIcon from "../assets/icons/cameraOutLine.png";
interface PrisonerInfoProps {
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

interface PrisonerProfileSummeryProps {
  data: PrisonerInfoProps;
  img?: string;
  enableCameraView?: boolean;
}

export const PrisonerProfileSummery: React.FC<PrisonerProfileSummeryProps> = ({
  data,
  img,
  enableCameraView,
}) => {
  const formattedLabels: Record<keyof PrisonerInfoProps, string> = {
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
          <div
            className={`${
              img ? "" : "p-5 rounded-full bg-[#F8FAFC]"
            } w-fit h-fit`}
          >
            <img
              src={img || profileIcon}
              alt="profile icon"
              className={`${img ? "rounded-full w-40 h-40" : "w-26 h-26 "}`}
            />
          </div>
          {enableCameraView && (
            <div className="w-fit h-fit rounded-full bg-[#F8FAFC] p-2 relative -top-10 ms-20 cursor-pointer">
              <img
                src={cameraOutLineIcon}
                alt="change profile picture"
                className="w-6 h-6"
              />
            </div>
          )}
          <p className={`text-sm ${enableCameraView ? "-mt-8" : "mt-2"}`}>
            {data.nic}
          </p>
        </div>
        <div className="bg-white w-2/3 h-fit p-10 rounded-3xl mt-auto mb-auto">
          {Object.entries(data)
            .filter(([key]) => key !== "nic")
            .map(([key, value]) => (
              <p className="text-sm text-gray-700 mb-2" key={key}>
                <span className="font-semibold">
                  {formattedLabels[key as keyof PrisonerInfoProps]}:
                </span>{" "}
                {key === "dob" ? new Date(value as Date).toDateString() : value}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};
