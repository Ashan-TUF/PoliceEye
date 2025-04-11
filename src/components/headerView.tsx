import sriLankaLogo from "../../src/assets/images/sriLnkaPoliceLogo.png";
import searchIcon from "../../src/assets/icons/search.png";
import cameraIcon from "../../src/assets/icons/camera.png";
import menuIcon from "../assets/icons/menu.png";
import BellView from "./bellView";

const HeaderView = () => {
  return (
    <div className="w-full md:px-10 md:mt-5">
      <div className="bg-white md:rounded-full flex justify-between px-2 md:px-6 py-2 shadow-md h-15 gap-5">
        <div className="flex items-center justify-center w-10 bg-[#f3f3f3] md:hidden">
          <img
            src={menuIcon}
            alt="menu icon"
            className="w-5 h-5 hover:opacity-60 cursor-pointer"
          />
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
    </div>
  );
};

export default HeaderView;
