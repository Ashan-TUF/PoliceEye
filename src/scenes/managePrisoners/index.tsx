import { COLOR } from "../../assets/constants/color";
import CriminalProfileView from "../../components/criminalProfileView";
import Footerbase from "../../components/footerbase";
import HeaderView from "../../components/headerView";
import MainManu from "../../components/mainMenu";
import ModelViewer from "../../components/modelViewer";
import { PrisonerProfileSummery } from "../../components/prisonerProfileSummery";

export const ManagePrisonersScreen = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <HeaderView />
      <div className="w-full pt-5 flex overflow-y-auto">
        <MainManu />
        <div className="flex flex-col w-full">
          <div className="flex h-fit grow p-2 xl:ps-10 justify-between gap-10 flex-wrap">
            <PrisonerProfileSummery />
            <ModelViewer
              model="prisoner"
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
