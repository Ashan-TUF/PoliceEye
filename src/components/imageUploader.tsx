import closeIcon from "../assets/icons/close.png";
import imageUploaderIcon from "../assets/icons/imageUploader.png";
type Props = {
  onClose: () => void;
};
const ImageUploader = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-30">
      <div className="w-11/12 xl:w-2/4 h-fit bg-white rounded-xl shadow-xl p-6">
        <div className="flex justify-end">
          <img
            src={closeIcon}
            alt="close icon"
            className="w-6 h-6 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-10 mb-10">
          <p className="text-gray-700">Drag an image here or upload a file</p>
          <input type="file" className="hidden" id="image"/>
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={imageUploaderIcon}
              alt="image uploader icon"
              className="w-[200px] h-[200px] hover:opacity-70 transition"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
