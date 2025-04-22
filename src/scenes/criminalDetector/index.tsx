import HeaderView from "../../components/headerView";
import ModelViewer from "../../components/modelViewer";
import Footerbase from "../../components/footerbase";
import MainManu from "../../components/mainMenu";

import { COLOR } from "../../assets/constants/color";
import UserImageUploader from "../../components/userImageUploader";
import CriminalProfileView from "../../components/criminalProfileView";

const CriminalDetectorScreen = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <HeaderView />
      <div className="w-full pt-5 flex overflow-y-auto">
        <MainManu />
        <div className="flex-col w-full">
          <div className="flex h-fit grow p-2 xl:ps-10 justify-between gap-10 flex-wrap">
            <UserImageUploader percentage="70" />
            <ModelViewer
              model="thief"
              enableTextBar={true}
              text="Bad person"
              textColor={COLOR.fontRedColor}
              enableAddNewCriminalButton={true}
              enableLocationButton={true}
            />
          </div>
          <CriminalProfileView />
        </div>
      </div>
      <Footerbase />
    </div>
  );
};
export default CriminalDetectorScreen;
