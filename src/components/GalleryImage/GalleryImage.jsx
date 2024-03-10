import "./GalleryImage.css";
import Image from "../Image/Image";
const GalleryImage = ({ image, index }) => {
  
  const { path, small } = image;
  const loadingType = index < 6 ? "eager" : "lazy";

  return (
    <div className="gallery-image-container">
      <Image
        alt={"gallery-image-" + index}
        src={path}
        small={small}
        loading={loadingType}
      />
    </div>
  );
};
export default GalleryImage;
