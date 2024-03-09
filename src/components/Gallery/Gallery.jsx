import "./Gallery.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const Gallery = ({ gallery }) => {
  if (!gallery) {
    return <ErrorComponent text={"gallery"} />;
  }
  return (
    <div className="gallery">
      <h1 className="title">GALERIJA</h1>
      <div className="gallery-container">
        {gallery?.map((image, index) => (
          <div key={index} className="img-container">
            <ImageComponent
              alt={"gallery-image-" + index}
              src={image.path}
              small={image.small}
              preload={index < 6 ? "preload" : ""}
              loading={index < 6 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
