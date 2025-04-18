import HeaderView from "../../components/headerView";
import menuIcon from "../../assets/icons/menu.png";
import profileIcon from "../../assets/icons/profile.png";
import settingIcon from "../../assets/icons/setting.png";
import moonIcon from "../../assets/icons/moon.png";
import logoutIcon from "../../assets/icons/logout.png";
import PieChart from "../../components/pieChart";
import { PoliceModel } from "../../components/policeModel";
import LatestNewsBar from "../../components/latestNewsBar";
import Footerbase from "../../components/footerbase";
import MainManu from "../../components/mainMenu";

const CriminalDetectorScreen = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <HeaderView />
      <div className="w-full pt-5 flex overflow-y-auto">
        <div className="bg-white h-fit w-10 ml-2 pt-5 pb-5 top-5 rounded-4xl flex-col gap-4 items-center justify-center  hidden xl:flex">
          {[menuIcon, profileIcon, settingIcon, moonIcon, logoutIcon].map(
            (icon, index) => (
              <img
                key={index}
                src={icon}
                alt="slider icon"
                className="w-5 h-5 hover:opacity-60 hover:scale-110 cursor-pointer"
              />
            )
          )}
        </div>
        
       <MainManu/>
        <div className="flex-col w-full">
          <div className="flex h-fit grow p-2 xl:ps-10 justify-between gap-10 flex-wrap">
            {/* <LineChart/> */}
            <PieChart />
            <PoliceModel />
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
