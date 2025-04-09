import bellIcon from "../../src/assets/icons/bell.png";

const BellView = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="">A criminal gang member..</span>
      <img
        src={bellIcon}
        alt="bell Icon"
        className="w-5 h-5 hover:opacity-50 cursor-pointer"
      />
    </div>
  );
};

export default BellView;
