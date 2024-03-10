import "./ImageLoading.css";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

const ImageLoading = () => {
  return (
    <div className="image-loading">
      <div className="image-loading-container">
        <LoadingIcon />
      </div>
    </div>
  );
};

export default ImageLoading;
