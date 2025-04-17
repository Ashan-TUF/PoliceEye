import sriLankaLogo from "../../src/assets/images/sriLnkaPoliceLogo.png";
import searchIcon from "../../src/assets/icons/search.png";
import cameraIcon from "../../src/assets/icons/camera.png";
import menuIcon from "../assets/icons/menu.png";
import BellView from "./bellView";
import { useState } from "react";

import DashboardIcon from "../assets/icons/dashboard.png";
import DetectorIcon from "../assets/icons/detector.png";
import PrisonersIcon from "../assets/icons/prisoners.png";
import AppointmentsIcon from "../assets/icons/appointments.png";
import GangsIcon from "../assets/icons/gangs.png";
import OfficerIcon from "../assets/icons/officer.png";
import NoticeIcon from "../assets/icons/notice.png";
import ProfileIcon from "../assets/icons/profile.png";
import SettingIcon from "../assets/icons/setting.png";
import MoonIcon from "../assets/icons/moon.png";
import LogoutIcon from "../assets/icons/logout.png";
import ImageUploader from "./imageUploader";

const HeaderView = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showImageUploader, setShowImageUploader] = useState(false);

  const toggleMenu = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <nav className="w-full md:px-10 md:mt-5">
        <div className="bg-white md:rounded-full flex justify-between px-2 md:px-6 py-2 shadow-md h-15 gap-5">
          <div className="flex items-center justify-center w-10 bg-[#f3f3f3] xl:hidden">
            <button onClick={toggleMenu}>
              <img
                src={menuIcon}
                alt="menu icon"
                className="w-5 h-5 hover:opacity-60 cursor-pointer"
              />
            </button>
          </div>

          <div className="items-center gap-4 hover:opacity-50 cursor-pointer hidden md:flex">
            <img
              src={sriLankaLogo}
              alt="Sri Lanka Logo"
              className="w-12 h-12 blur-xs"
            />
            <span className="text-xl font-semibold text-[#2C2C2C] hidden lg:inline">
              CEYLON POLICE
            </span>
          </div>

          <div className="flex grow justify-between items-center bg-[#f3f3f3] px-4 py-2 rounded-full relative">
            <div className="grow overflow-hidden">
              <input
                type="text"
                placeholder="Search for the criminal by name, number, or photo..."
                className="w-full outline-none text-sm text-gray-700 text-ellipsis"
              />
            </div>
            <div className="flex gap-2 justify-end ms-5">
              <img
                src={cameraIcon}
                alt="camera Icon"
                className="  w-6 h-6 hover:opacity-50 cursor-pointer"
                onClick={() => setShowImageUploader(true)}
              />
              <img
                src={searchIcon}
                alt="search Icon"
                className="w-6 h-6 hover:opacity-50 cursor-pointer"
              />
            </div>
          </div>
          <BellView />
        </div>
      </nav>
      {showImageUploader && (
        <ImageUploader onClose={() => setShowImageUploader(false)} />
      )}
      <div
        className={`fixed top-0 left-0 w-full h-full z-10 bg-transparent transition-opacity duration-800 ${
          showOverlay
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 left-0 bg-white/95 w-64 h-full shadow-lg transition-transform duration-800 ease-in-out ${
            showOverlay ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="items-center gap-4 p-5 hover:opacity-50 cursor-pointer mb-5">
            <img
              src={sriLankaLogo}
              alt="Sri Lanka Logo"
              className="w-12 h-12 blur-xs"
            />
            <span className="text-xl font-semibold text-[#2C2C2C]">
              CEYLON POLICE
            </span>
          </div>
          <ul className="space-y-2 p-5">
            <li className="cursor-pointer hover:opacity-50">
              <div className="flex gap-5 items-center">
                <img src={DashboardIcon} alt="dashboard" className="w-5 h-5" />
                <span className="text-xs">Dashboard</span>
              </div>
            </li>
            <li className="cursor-pointer hover:opacity-50">
              <div className="flex gap-5 items-center">
                <img
                  src={DetectorIcon}
                  alt="Criminal Detector Icon"
                  className="w-5 h-5"
                />
                <span className="text-xs">Criminal Detector</span>
              </div>
            </li>
            <li className="cursor-pointer hover:opacity-50">
              <div className="flex gap-5 items-center">
                <img
                  src={PrisonersIcon}
                  alt="Prisoners Icon"
                  className="w-5 h-5"
                />
                <span className="text-xs">Manage Prisoners</span>
              </div>
            </li>
            <li className="cursor-pointer hover:opacity-50">
              <div className="flex gap-5 items-center">
                <img
                  src={AppointmentsIcon}
                  alt="Manage Appointment Icon"
                  className="w-5 h-5"
                />
                <span className="text-xs">Manage Appointments</span>
              </div>
            </li>
            <li className="cursor-pointer hover:opacity-50">
              <div className="flex gap-5 items-center">
                <img
                  src={GangsIcon}
                  alt="Identified Gangs Icon"
                  className="w-5 h-5"
                />
                <span className="text-xs">Identified Gangs</span>
              </div>
            </li>
            <li className="cursor-pointer hover:opacity-50">
              <div className="flex gap-5 items-center">
                <img
                  src={OfficerIcon}
                  alt="Manage Officers Icon"
                  className="w-5 h-5"
                />
                <span className="text-xs">Manage Officers</span>
              </div>
            </li>
            <li className="cursor-pointer hover:opacity-50">
              <div className="flex gap-5 items-center">
                <img
                  src={NoticeIcon}
                  alt="Manage Notice Board Icon"
                  className="w-5 h-5"
                />
                <span className="text-xs">Manage Notice Board</span>
              </div>
            </li>
          </ul>
          <div className="fixed flex w-full justify-between p-2 ps-5 pe-5 bottom-10 bg-[#f3f3f3]">
            <img
              src={ProfileIcon}
              alt="Profile Icon"
              className="w-5 h-5 hover:opacity-50 cursor-pointer"
            />
            <img
              src={SettingIcon}
              alt="Setting Icon"
              className="w-5 h-5 hover:opacity-50 cursor-pointer"
            />
            <img
              src={MoonIcon}
              alt="Moon Icon"
              className="w-5 h-5 hover:opacity-50 cursor-pointer"
            />
            <img
              src={LogoutIcon}
              alt="Logout Icon"
              className="w-5 h-5 hover:opacity-50 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderView;
