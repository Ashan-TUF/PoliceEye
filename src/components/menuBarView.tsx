interface MenuBarViewProps {
  color?: string;
  text: string;
  icon?: string;
  onClick?: () => void;
}
const MenuBarView: React.FC<MenuBarViewProps> = ({
  color = "bg-[#F1EFEC]",
  text,
  icon,
  onClick,
}) => {
  return (
    <div
      className={`${color} px-5 py-5 rounded-full transition duration-300 ease-in-out shadow-md hover:bg-[#DBDBDB]/60 cursor-pointer mt-5 flex items-center justify-center gap-2 text-[#2C2C2C]`}
      onClick={onClick}
    >
      <img src={icon} alt={text} className="w-5 h-5" />
      <span className="text-base">{text}</span>
    </div>
  );
};
export default MenuBarView;
