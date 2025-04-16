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
      className={`${color} px-5 h-12 rounded-full transition duration-300 ease-in-out shadow-md hover:opacity-50 cursor-pointer mt-5 flex items-center gap-4 text-[#2C2C2C]`}
      onClick={onClick}
    >
      {icon && (
        <div className="flex-shrink-0 ps-5">
          <img src={icon} alt={text} className="w-8 h-8" />
        </div>
      )}
      <div className="flex-grow text-center">
        <span className="text-sm">{text}</span>
      </div>
    </div>
  );
};
export default MenuBarView;
