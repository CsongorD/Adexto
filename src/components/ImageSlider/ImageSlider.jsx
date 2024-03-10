import "./ImageSlider.css";
import Image from "../Image/Image";
import NextIcon from "../Icons/NextIcon";
import PrevIcon from "../Icons/PrevIcon";
const ImageSlider = ({
  showPrevImage,
  currentImagePath,
  currentImageSmall,
  modelNumber,
  handleLoad,
  showNextImage,
}) => {
  return (
    <div className="image-slider">
      <div className="image-slider-button prev" onClick={() => showPrevImage()}>
        <PrevIcon />
      </div>
      <div className="image-slider-image">
        <Image
          src={currentImagePath}
          small={currentImageSmall}
          alt={"img-" + modelNumber}
          loading={modelNumber === "1" ? "eager" : "lazy"}
          onLoad={() => handleLoad()}
        />
      </div>
      <div className="image-slider-button next" onClick={() => showNextImage()}>
        <NextIcon />
      </div>
    </div>
  );
};
export default ImageSlider;
