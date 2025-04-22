interface ModelButtonProps {
  icon: string;
  text: string;
  onClick: () => void;
}
const ModelButton: React.FC<ModelButtonProps> = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="hover:opacity-60 hover:scale-110 cursor-pointer rounded-full"
    >
      <img src={icon} alt={text} className="w-5 h-5" />
    </button>
  );
};
export default ModelButton;
