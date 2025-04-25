export interface PrisonerProfileRecordProps {
  profilePic: string;
  prisonerCode: string;
  fullName: string;
  cellNumber: string;
  releaseStatus:
    | "In Custody"
    | "Released"
    | "On Bail"
    | "On Parole"
    | "Transferred"
    | "Escaped"
    | "Deceased";
}

export const PrisonerProfileRecord: React.FC<{
  data: PrisonerProfileRecordProps;
}> = ({ data }) => {
  const { profilePic, prisonerCode, fullName, cellNumber, releaseStatus } =
    data;
  return (
    <div className="flex grow rounded-2xl h-10 xl:h-fit bg-white cursor-pointer">
      <div className="hidden xl:flex w-1/6 pt-2 pb-2 xl:ps-10">
        <img
          src={profilePic}
          alt="profile image"
          className="w-14 h-14 rounded-full"
        />
      </div>
      <div className="flex w-1/3 xl:w-1/6 justify-center items-center">
        <span className="text-sm">{prisonerCode}</span>
      </div>
      <div className="flex w-1/3 xl:w-1/6 justify-center items-center">
        <span className="text-sm">{fullName}</span>
      </div>
      <div className="hidden xl:flex xl:w-1/6 justify-center items-center">
        <span className="text-sm">{cellNumber}</span>
      </div>
      <div className="flex w-1/3 xl:w-1/6 justify-center items-center">
        <span
          className={`text-sm  ${
            releaseStatus === "Released"
              ? "text-green-300"
              : releaseStatus === "Escaped"
              ? "text-red-400"
              : "text-gray-700"
          }`}
        >
          {releaseStatus}
        </span>
      </div>
      <div className="hidden xl:flex w-1/6 justify-center items-center">
        <span className="text-sm">#</span>
      </div>
    </div>
  );
};
