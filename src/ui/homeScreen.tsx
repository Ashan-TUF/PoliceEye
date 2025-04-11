import sriLankaLogo from "../../src/assets/images/sriLnkaPoliceLogo.png";
import HeaderView from "../components/headerView";
import MenuBarView from "../components/menuBarView";
import dashboardIcon from "../assets/icons/dashboard.png";
import detectorIcon from "../assets/icons/detector.png";
import prisonersIcon from "../assets/icons/prisoners.png";
import appointmentsIcon from "../assets/icons/appointments.png";
import gangsIcon from "../assets/icons/gangs.png";
import officerIcon from "../assets/icons/officer.png";
import noticeIcon from "../assets/icons/notice.png";
import menuIcon from "../assets/icons/menu.png";
import profileIcon from "../assets/icons/profile.png";
import settingIcon from "../assets/icons/setting.png";
import moonIcon from "../assets/icons/moon.png";
import logoutIcon from "../assets/icons/logout.png";
const HomeScreen = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <HeaderView />
      <div className="flex w-full pt-5">
        <div className="bg-white h-fit w-10 ml-2 pt-5 pb-5 top-5 rounded-4xl flex flex-col gap-4 items-center justify-center">
          <img
            src={menuIcon}
            alt="menu icon"
            className="w-5 h-5 hover:opacity-60 cursor-pointer"
          />
          <img
            src={profileIcon}
            alt="profile icon"
            className="w-5 h-5 hover:opacity-60 cursor-pointer"
          />
          <img
            src={settingIcon}
            alt="setting icon"
            className="w-5 h-5 hover:opacity-60 cursor-pointer"
          />
          <img
            src={moonIcon}
            alt="moon icon"
            className="w-5 h-5 hover:opacity-60 cursor-pointer"
          />
          <img
            src={logoutIcon}
            alt="logout icon"
            className="w-5 h-5 hover:opacity-60 cursor-pointer"
          />
        </div>
        <div className="bg-white p-5 pb-10 h-fit w-80 ms-20 top-5 rounded-4xl">
          <p className="text-2xl text-[#2C2C2C] text-center font-semibold leading-none">
            පොලිස් ඇස
          </p>
          <p className="text-base text-[#2C2C2C] -mt-1 text-center ps-20">
            Police Eye
          </p>
          <MenuBarView
            text="Dashboard"
            icon={dashboardIcon}
            onClick={() => {
              console.log("Login Clicked");
            }}
          />
          <MenuBarView
            text="Criminal Detector"
            icon={detectorIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Manage Prisoners"
            icon={prisonersIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Manage Appointments"
            icon={appointmentsIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Identified Gangs"
            icon={gangsIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Manage Officers"
            icon={officerIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Manage Notice Board"
            icon={noticeIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
        </div>
        <div className="flex flex-col items-center grow">
          <img
            src={sriLankaLogo}
            alt="Sri Lanka Logo"
            className="w-25 h-30 blur-xs"
          />
          <p className="text-xl text-[#2C2C2C] mt-4">CEYLON POLICE</p>
        </div>
      </div>
      <p className="fixed w-full bottom-5 text-sm text-center text-[#2C2C2C]">
        Developed by <b>Ashan Kavindu</b> | © 2025.
      </p>
    </div>
  );
};
export default HomeScreen;
