import LoadingIcon from "../LoadingIcon/LoadingIcon";
import styles from "./ImageLoading.module.css";

const ImageLoading = () => {
  return (
    <div className={styles["image-loading"]}>
      <div className={styles["image-loading-container"]}>
        <LoadingIcon />
      </div>
    </div>
  );
};

export default ImageLoading;
