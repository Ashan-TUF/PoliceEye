import Footerbase from "../../components/footerbase";
import HeaderView from "../../components/headerView";
import MainManu from "../../components/mainMenu";

export const IdentifiedGangsScreen = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <HeaderView />
      <div className="w-full pt-5 flex overflow-y-auto">
        <MainManu />
        <div className="flex flex-col w-full">
          {/* <PrisonerProfileView /> */}
        </div>
      </div>
      <Footerbase />
    </div>
  );
};
