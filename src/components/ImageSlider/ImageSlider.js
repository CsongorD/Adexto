import NextIcon from "../Icons/NextIcon";
import PrevIcon from "../Icons/PrevIcon";
import Image from "../Image/Image";
import styles from "./ImageSlider.module.css";

const ImageSlider = ({
  currentImage,
  modelNumber,
  handleLoad,
  showPrevImage,
  showNextImage,
}) => {
  const { path, small } = currentImage;

  return (
    <div className={styles["image-slider"]}>
      <div
        className={styles["image-slider-button"] + " " + styles.prev}
        onClick={showPrevImage}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && showPrevImage()}
      >
        <PrevIcon className={styles["arrow-icon"]} />
      </div>
      <div className={styles["image-slider-image"]}>
        <Image
          src={path}
          small={small}
          alt={"img-" + modelNumber}
          priority={true}
          onLoad={handleLoad}
        />
      </div>
      <div
        className={styles["image-slider-button"] + " " + styles.next}
        onClick={showNextImage}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && showNextImage()}
      >
        <NextIcon className={styles["arrow-icon"]} />
      </div>
    </div>
  );
};
export default ImageSlider;
