import "./GalleryList.css";
import useImages from "../../hooks/useImages";
import GalleryImage from "../GalleryImage/GalleryImage";
import ImageLoading from "../ImageLoading/ImageLoading";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const GalleryList = () => {
  const [gallery, error] = useImages("gallery");

  if (error) {
    return <ErrorComponent error={error.message} />;
  }

  if (!gallery) {
    return <ImageLoading />;
  }
  return (
    <div className="gallery-list">
      {gallery.map((image, index) => (
        <GalleryImage image={image} key={index} index={index} />
      ))}
    </div>
  );
};

export default GalleryList;
