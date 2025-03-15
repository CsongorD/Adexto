"use client";

import NextImage from "next/image";
import { useEffect, useState } from "react";
import styles from "./Image.module.css";

const Image = ({ src, alt, small, priority = false, onLoad = () => {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={styles["blur-load"] + ` ${isLoaded ? styles["loaded"] : ""}`}
      style={{ backgroundImage: isLoaded ? `url(${small})` : "none" }}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        className={styles["image"]}
        onLoad={onLoad}
        priority={priority}
        placeholder={small ? "blur" : "empty"}
        blurDataURL={small}
      />
    </div>
  );
};

export default Image;
