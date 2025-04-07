import ButtonView from "./buttonView";
import lockIcon from "../assets/icons/lock.png";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs">
      <div className="w-11/12 sm:w-8/12 lg:w-[500px] bg-[#F7F7F7] rounded-xl shadow-xl p-6">
        <h2 className="text-xl font-bold text-center mb-4 text-black">Login</h2>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            className="p-2 border border-gray-300 rounded-md text-[#2C2C2C]"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-md text-[#2C2C2C]"
          />
          <span className="text-sm text-[#2C2C2C] text-right mb-2 cursor-pointer hover:text-blue-600/60">
            Forgot Password?
          </span>
          <ButtonView
            color="bg-[#2C2C2C]/60"
            text="Login"
            icon={lockIcon}
            onClick={handleLogin}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginView;
