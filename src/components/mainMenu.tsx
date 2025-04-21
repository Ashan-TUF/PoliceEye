import dashboardIcon from "../assets/icons/dashboard.png";
import registrationIcon from "../assets/icons/registration.png";
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
import MenuBarView from "./menuBarView";
import { useNavigate } from "react-router-dom";

const MainManu = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", icon: dashboardIcon, path: "/home" },
    { text: "Registration", icon: registrationIcon, path: "/registration" },
    {
      text: "Criminal Detector",
      icon: detectorIcon,
      path: "/criminalDetector",
    },
    { text: "Manage Prisoners", icon: prisonersIcon, path: "/managePrisoners" },
    { text: "Appointments", icon: appointmentsIcon, path: "/appointments" },
    { text: "Identified Gangs", icon: gangsIcon, path: "/identifiedGangs" },
    { text: "Manage Officers", icon: officerIcon, path: "/manageOfficers" },
    { text: "Notice Board", icon: noticeIcon, path: "/noticeBoard" },
  ];

  const miniMenuItems = [
    { icon: menuIcon, text: "Menu", path: "/home" },
    { icon: profileIcon, text: "Profile", path: "/profile" },
    { icon: settingIcon, text: "Setting", path: "/settings" },
    { icon: moonIcon, text: "Moon", path: "/darkMode" },
    { icon: logoutIcon, text: "Logout", path: "/" },
  ];

  return (
    <>
      <div className="bg-white h-fit w-10 ml-2 pt-5 pb-5 top-5 rounded-4xl flex-col gap-4 items-center justify-center  hidden xl:flex">
        {miniMenuItems.map(({ icon, text, path }, index) => (
          <img
            key={index}
            src={icon}
            alt={text}
            className="w-5 h-5 hover:opacity-60 hover:scale-110 cursor-pointer"
            onClick={() => navigate(path)}
          />
        ))}
      </div>
      <div className="hidden xl:flex flex-col bg-white w-80 ms-20 p-5 pb-10 h-fit top-5 rounded-4xl ">
        <p className="text-2xl text-[#2C2C2C] text-center font-semibold leading-none">
          පොලිස් ඇස
        </p>
        <p className="text-base text-[#2C2C2C] -mt-1 text-center ps-20">
          Police Eye
        </p>
        {menuItems.map(({ text, icon, path }) => (
          <MenuBarView
            key={text}
            text={text}
            icon={icon}
            onClick={() => navigate(path)}
          />
        ))}
        {/* <TheifModel /> */}
      </div>
    </>
  );
};
export default MainManu;
