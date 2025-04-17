import HeaderView from "../../components/headerView";
import MenuBarView from "../../components/menuBarView";
import dashboardIcon from "../../assets/icons/dashboard.png";
import detectorIcon from "../../assets/icons/detector.png";
import prisonersIcon from "../../assets/icons/prisoners.png";
import appointmentsIcon from "../../assets/icons/appointments.png";
import gangsIcon from "../../assets/icons/gangs.png";
import officerIcon from "../../assets/icons/officer.png";
import noticeIcon from "../../assets/icons/notice.png";
import menuIcon from "../../assets/icons/menu.png";
import profileIcon from "../../assets/icons/profile.png";
import settingIcon from "../../assets/icons/setting.png";
import moonIcon from "../../assets/icons/moon.png";
import logoutIcon from "../../assets/icons/logout.png";
// import LineChart from "../../components/lineChart";
import PieChart from "../../components/pieChart";
import { PoliceModel } from "../../components/policeModel";
import LatestNewsBar from "../../components/latestNewsBar";
import { TheifModel } from "../../components/theifModel";
import Footerbase from "../../components/footerbase";

const menuItems = [
  { text: "Dashboard", icon: dashboardIcon },
  { text: "Criminal Detector", icon: detectorIcon },
  { text: "Manage Prisoners", icon: prisonersIcon },
  { text: "Manage Appointments", icon: appointmentsIcon },
  { text: "Identified Gangs", icon: gangsIcon },
  { text: "Manage Officers", icon: officerIcon },
  { text: "Manage Notice Board", icon: noticeIcon },
];

const HomeScreen = () => {
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
        <div className="hidden xl:flex flex-col bg-white w-80 ms-20 p-5 pb-10 h-fit top-5 rounded-4xl ">
          <p className="text-2xl text-[#2C2C2C] text-center font-semibold leading-none">
            පොලිස් ඇස
          </p>
          <p className="text-base text-[#2C2C2C] -mt-1 text-center ps-20">
            Police Eye
          </p>
          {menuItems.map(({ text, icon }) => (
            <MenuBarView
              key={text}
              text={text}
              icon={icon}
              onClick={() => console.log(`${text} clicked`)}
            />
          ))}
          <TheifModel />
        </div>
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
export default HomeScreen;
