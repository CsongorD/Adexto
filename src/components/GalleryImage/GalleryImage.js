import Image from "../Image/Image";
import styles from "./GalleryImage.module.css";

const GalleryImage = ({ image: { path, small }, index }) => {
  const priority = index < 6 ? true : false;

  return (
    <div className={styles["gallery-image-container"]}>
      <Image
        alt={`gallery-image-${index}`}
        src={path}
        small={small}
        priority={priority}
      />
    </div>
  );
};

export default GalleryImage;
