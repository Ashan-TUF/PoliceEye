import React from "react";

interface ButtonViewProps {
  color?: string;
  text: string;
  icon?: string;
  onClick?: () => void;
}

const ButtonView: React.FC<ButtonViewProps> = ({
  color = "bg-[#EA7300]",
  text,
  icon,
  onClick,
}) => {
  return (
    <div
      className={`${color} text-white px-5 py-2 rounded-full transition duration-300 ease-in-out shadow-md hover:bg-[#424242]/60 cursor-pointer mt-5 flex items-center justify-center gap-2`}
      onClick={onClick}
    >
      <img src={icon} alt={text} className="w-5 h-5" />
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default ButtonView;
