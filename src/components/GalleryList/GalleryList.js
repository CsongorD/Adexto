"use client";

import useImages from "../../hooks/useImages";
import GalleryImage from "../GalleryImage/GalleryImage";
import ImageLoading from "../ImageLoading/ImageLoading";
import styles from "./GalleryList.module.css";

const GalleryList = () => {
  const [gallery, error] = useImages("gallery");

  if (error) throw error;
  if (!gallery) return <ImageLoading />;

  return (
    <div className={styles["gallery-list"]}>
      {gallery?.map((image, index) => (
        <GalleryImage image={image} key={index} index={index} />
      ))}
    </div>
  );
};

export default GalleryList;
