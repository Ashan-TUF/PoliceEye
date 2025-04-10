import bellIcon from "../../src/assets/icons/bell.png";

const BellView = () => {
  return (
    <div className="flex items-center gap-2 bg-[#f3f3f3] p-5 rounded-full max-w-md ">
      <div className="relative max-w-[200px] overflow-hidden hidden lg:inline">
        <span className="text-[#E83F25] text-xs block whitespace-nowrap">
          A criminal gang member...
        </span>
        <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#f3f3f3] to-transparent pointer-events-none"></div>
      </div>

      <div className="relative">
        <img
          src={bellIcon}
          alt="bell Icon"
          className="w-5 h-5 hover:opacity-50 cursor-pointer"
        />
        <div className="absolute top-0 right-1 translate-x-1/2 -translate-y-1/2 rounded-full w-1.5 h-1.5 bg-[#E83F25]"></div>
      </div>
    </div>
  );
};

export default BellView;
