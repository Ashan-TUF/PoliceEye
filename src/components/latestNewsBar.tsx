import profileIcon from "../assets/images/Ashan-Prof.jpg";

const LatestNewsBar = () => {
  return (
    <div className="flex rounded-4xl bg-[#F3F3F3] p-8 items-center h-12 cursor-pointer">
      <img
        src={profileIcon}
        alt="police icon"
        className="w-12 h-12 m-2 hover:opacity-60 hover:scale-110 cursor-pointer rounded-full"
      />
      <div className="flex-col">
        <p className="font-medium">Hello</p>
        <p className="">Hello</p>
      </div>
    </div>
  );
};
export default LatestNewsBar;
