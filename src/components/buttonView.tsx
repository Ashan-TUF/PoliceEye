import React from "react";

interface ButtonViewProps {
  color?: string; // Optional color prop
  text: string;
}

const ButtonView: React.FC<ButtonViewProps> = ({ color = "#EA7300", text }) => {
  return (
    <div className="w-full flex justify-center items-center">
    <input
      type="button"
      value={text}
      className={`${color} text-white p-2 pe-5 ps-5 rounded-full transition duration-1000 ease-in-out shadow-md shadow-[#afafaf] hover:bg-[#424242]/60 cursor-pointer  hidden md:block`}
      onClick={() => console.log("Button clicked")}
    />
    </div>
  );
};

export default ButtonView;
