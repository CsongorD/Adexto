import GalleryList from "../GalleryList/GalleryList";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles["gallery"]}>
      <h1 className="title">GALERIJA</h1>
      <GalleryList />
    </div>
  );
};

export default Gallery;
