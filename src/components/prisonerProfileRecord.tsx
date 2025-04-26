import eyeIcon from "../assets/icons/eye.png";
interface PrisonerProfileRecordProps {
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

interface Props {
  data: PrisonerProfileRecordProps;
  onViewProfile?: (prisonerCode: string) => void;
}

export const PrisonerProfileRecord: React.FC<Props> = ({
  data,
  onViewProfile,
}) => {
  const { profilePic, prisonerCode, fullName, cellNumber, releaseStatus } =
    data;

  const handleView = () => {
    if (onViewProfile) {
      onViewProfile(prisonerCode);
    }
  };

  const getStatusColor = () => {
    switch (releaseStatus) {
      case "Released":
        return "text-green-400";
      case "Escaped":
        return "text-red-500";
      default:
        return "text-gray-700";
    }
  };
  return (
    <div className="flex grow rounded-2xl h-10 xl:h-fit bg-white cursor-pointer xl:cursor-default">
      <div className="hidden xl:flex w-1/6 pt-2 pb-2 xl:ps-10">
        <img
          src={profilePic}
          alt={`${fullName} profile`}
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
        <span className={`text-sm ${getStatusColor()}`}>{releaseStatus}</span>
      </div>
      <div className="hidden xl:flex w-1/6 justify-center items-center cursor-pointer">
        {onViewProfile && (
          <button
            onClick={handleView}
            className="p-2 rounded hover:bg-gray-100 transition"
            aria-label={`View profile of ${fullName}`}
          >
            <img src={eyeIcon} alt="View" className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
