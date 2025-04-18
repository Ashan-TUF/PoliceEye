import dashboardIcon from "../assets/icons/dashboard.png";
import registrationIcon from "../assets/icons/registration.png";
import detectorIcon from "../assets/icons/detector.png";
import prisonersIcon from "../assets/icons/prisoners.png";
import appointmentsIcon from "../assets/icons/appointments.png";
import gangsIcon from "../assets/icons/gangs.png";
import officerIcon from "../assets/icons/officer.png";
import noticeIcon from "../assets/icons/notice.png";
import MenuBarView from "./menuBarView";
const menuItems = [
    { text: "Dashboard", icon: dashboardIcon },
    { text: "Registration", icon: registrationIcon },
    { text: "Criminal Detector", icon: detectorIcon },
    { text: "Manage Prisoners", icon: prisonersIcon },
    { text: "Appointments", icon: appointmentsIcon },
    { text: "Identified Gangs", icon: gangsIcon },
    { text: "Manage Officers", icon: officerIcon },
    { text: "Notice Board", icon: noticeIcon },
  ];
const MainManu = () => {
return (
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
          {/* <TheifModel /> */}
        </div>
);
}
export default MainManu;