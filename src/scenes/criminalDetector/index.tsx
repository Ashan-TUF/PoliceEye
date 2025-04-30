import HeaderView from "../../components/headerView";
import ModelViewer from "../../components/modelViewer";
import Footerbase from "../../components/footerbase";
import MainManu from "../../components/mainMenu";

import { COLOR } from "../../assets/constants/color";
import UserImageUploader, { DetectedUser } from "../../components/userImageUploader";
import CriminalProfileView from "../../components/criminalProfileView";
import { CriminalRecordView, criminalRecordViewProps} from "../../components/criminalRecordView";
import { useState } from "react";

const criminalRecords: criminalRecordViewProps[] = [
  {
    crime: "Drug possession and trafficking",
    dateOftheCrime: new Date("2024-12-01"),
    numberOfMurders: 0,
    criminalCategory: "Drug-related Offences",
    placeOfArrest: "Ganemulla",
    dateOfArrest: new Date("2024-12-02"),
    dateOfRelease: new Date("2025-01-15"),
    descriptionOfTheCrime:
      "Caught with 30g of heroin and suspected to be distributing across multiple districts.",
  },
  {
    crime: "Armed robbery at jewelry store",
    dateOftheCrime: new Date("2024-10-20"),
    numberOfMurders: 1,
    criminalCategory: "Crimes Against Property",
    placeOfArrest: "Colombo 07",
    dateOfArrest: new Date("2024-10-21"),
    dateOfRelease: new Date("2025-04-01"),
    descriptionOfTheCrime:
      "Used firearms to rob a jewelry store and caused the death of a security guard.",
  },
];

const CriminalDetectorScreen = () => {
  const [prediction, setPrediction] = useState("0.0");
  const [detectedUser, setDetectedUser] = useState<DetectedUser | null>(null);
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <HeaderView />
      <div className="w-full pt-5 flex overflow-y-auto">
        <MainManu />
        <div className="flex-col w-full">
          <div className="flex h-fit grow p-2 xl:ps-10 justify-between gap-10 flex-wrap">
            <UserImageUploader onPredictionUpdate={setPrediction} prediction={prediction} setDetectedUser={setDetectedUser}/>
            <ModelViewer
              model="thief"
              enableTextBar={true}
              text="Bad person"
              textColor={COLOR.fontRedColor}
              enableAddNewCriminalButton={true}
              enableLocationButton={true}
            />
          </div>
          {detectedUser && <CriminalProfileView userData={detectedUser}/>}
          <div className="flex flex-col gap-5 w-full h-fit p-2 mb-16 mt-10">
            <p className="text-2xl font-semibold ms-10">
              Criminal Records - {criminalRecords.length}
            </p>
            {criminalRecords.map((record, index) => (
              <CriminalRecordView key={index} data={record} />
            ))}
          </div>
        </div>
      </div>
      <Footerbase />
    </div>
  );
};
export default CriminalDetectorScreen;
