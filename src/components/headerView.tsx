import sriLankaLogo from "../../src/assets/images/sriLnkaPoliceLogo.png";
import searchIcon from "../../src/assets/icons/search.png";
import cameraIcon from "../../src/assets/icons/camera.png";
import menuIcon from "../assets/icons/menu.png";
import BellView from "./bellView";
import { useState } from "react";

const HeaderView = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleMenu = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <nav className="w-full md:px-10 md:mt-5">
        <div className="bg-white md:rounded-full flex justify-between px-2 md:px-6 py-2 shadow-md h-15 gap-5">
          <div className="flex items-center justify-center w-10 bg-[#f3f3f3] md:hidden">
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
      <div
        className={`fixed top-0 left-0 w-full h-full z-10 bg-transparent transition-opacity duration-500 `}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 left-0 bg-white/95 w-64 h-full p-5 shadow-lg transition-transform duration-500 ease-in-out ${
            showOverlay ? "translate-x-full" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:underline">Dashboard</li>
            <li className="cursor-pointer hover:underline">Search</li>
            <li className="cursor-pointer hover:underline">Criminals</li>
            <li className="cursor-pointer hover:underline">Reports</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderView;
