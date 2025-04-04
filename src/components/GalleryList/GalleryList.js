"use client";

import useImages from "../../hooks/useImages";
import GalleryImage from "../GalleryImage/GalleryImage";
import ImageLoading from "../ImageLoading/ImageLoading";
import styles from "./GalleryList.module.css";

const GalleryList = () => {
  const [gallery, error] = useImages("gallery");

  if (error) throw error;

  return (
    <div className={styles["gallery-list"]}>
      {!gallery ? (
        <ImageLoading />
      ) : (
        gallery?.map((image, index) => (
          <GalleryImage image={image} key={index} index={index} />
        ))
      )}
    </div>
  );
};

export default GalleryList;
