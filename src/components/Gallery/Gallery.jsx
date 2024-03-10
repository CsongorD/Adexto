import "./Gallery.css";
import GalleryList from "../GalleryList/GalleryList";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="title">GALERIJA</h1>
      <GalleryList />
    </div>
  );
};

export default Gallery;
