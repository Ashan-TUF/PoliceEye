import sriLankaLogo from "../../src/assets/images/sriLnkaPoliceLogo.png";
import MenuBarView from "../components/menuBarView";
import lockIcon from "../assets/icons/lock.png";
const HomeScreen = () => {
  return (
    <>
      <div className="flex w-full pt-5">
        <div className="bg-white p-5 h-40 w-10 ms-2 top-5 rounded-4xl"></div>
        <div className="bg-white p-5 h-[900px] w-100 ms-20 top-5 rounded-4xl ">
          <p className="text-2xl text-[#2C2C2C] text-center font-semibold leading-none">
            පොලිස් ඇස
          </p>
          <p className="text-base text-[#2C2C2C] -mt-1 text-center ps-20">
            Police Eye
          </p>
          <MenuBarView
            text="Login"
            icon={lockIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Login"
            icon={lockIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Login"
            icon={lockIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Login"
            icon={lockIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Login"
            icon={lockIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Login"
            icon={lockIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Login"
            icon={lockIcon}
            onClick={() => {
              console.log("Login clicked");
            }}
          />
          <MenuBarView
            text="Login"
            icon={lockIcon}
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
      <p className="absolute bottom-5  left-1/2 transform -translate-x-1/2 text-[#2C2C2C]">
        Developed by <b>Ashan Kavindu</b> | © 2025.
      </p>
    </>
  );
};
export default HomeScreen;
