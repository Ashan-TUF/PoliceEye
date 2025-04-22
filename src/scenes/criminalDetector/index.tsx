import HeaderView from "../../components/headerView";
import ModelViewer from "../../components/modelViewer";
import LatestNewsBar from "../../components/latestNewsBar";
import Footerbase from "../../components/footerbase";
import MainManu from "../../components/mainMenu";

import { COLOR } from "../../assets/constants/color";
import UserImageUploader from "../../components/userImageUploader";

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
          <div className="h-fit p-2 xl:ps-10">
            <div className="rounded-4xl bg-white grow p-5 flex flex-col gap-5">
              <span className="text-sm">Latest News</span>
              <div className="grid grid-cols-1 gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <LatestNewsBar key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerbase />
    </div>
  );
};
export default CriminalDetectorScreen;
