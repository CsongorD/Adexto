import "./ImageSlider.css";
import Image from "../Image/Image";
import NextIcon from "../Icons/NextIcon";
import PrevIcon from "../Icons/PrevIcon";
const ImageSlider = ({
  currentImage,
  modelNumber,
  handleLoad,
  showPrevImage,
  showNextImage,
}) => {
  const { path, small } = currentImage;

  return (
    <div className="image-slider">
      <div className="image-slider-button prev" onClick={showPrevImage}>
        <PrevIcon />
      </div>
      <div className="image-slider-image">
        <Image
          src={path}
          small={small}
          alt={"img-" + modelNumber}
          loading="eager"
          onLoad={handleLoad}
        />
      </div>
      <div className="image-slider-button next" onClick={showNextImage}>
        <NextIcon />
      </div>
    </div>
  );
};
export default ImageSlider;
