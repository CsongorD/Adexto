"use client";

import NextImage from "next/image";
import { useEffect, useState } from "react";
import styles from "./Image.module.css";

const Image = ({
  src,
  alt,
  small,
  priority = false,
  onLoad = () => {},
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={styles["blur-load"] + `${isLoaded ? " " + styles.loaded : ""}`}
      style={{ backgroundImage: isLoaded ? `url(${small})` : "none" }}
    >
      <NextImage
        src={src}
        alt={alt}
        className={styles["image"]}
        fill={true}
        onLoad={onLoad}
        priority={priority}
        placeholder={small ? "blur" : "empty"}
        blurDataURL={small}
        // {/* sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" */}
      />
    </div>
  );
};

export default Image;
