// "use client";

// import { useCallback, useState } from "react";
// import styles from "./Image.module.css";

// const Image = ({ src, alt, loading = "lazy", small, onLoad = () => {} }) => {
//   const [imageIsLoaded, setImageIsLoaded] = useState(false);

//   const handleLoad = useCallback(() => {
//     setImageIsLoaded(true);
//     onLoad();
//   }, [onLoad]);

//   return (
//     <div
//       className={
//         styles["blur-load"] + ` ${imageIsLoaded ? styles["loaded"] : ""}`
//       }
//       style={{ backgroundImage: imageIsLoaded ? "none" : `url(${small})` }}
//     >
//       <img
//         src={src}
//         alt={alt}
//         loading={loading}
//         onLoad={handleLoad}
//         fetchPriority={loading === "lazy" ? "low" : "high"}
//       />
//     </div>
//   );
// };

// export default Image;

"use client";

import NextImage from "next/image";
import { useCallback, useState } from "react";
import styles from "./Image.module.css";

const Image = ({ src, alt, small, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`${styles["blur-load"]} ${isLoaded ? styles["loaded"] : ""}`}
      style={{ backgroundImage: isLoaded ? `url(${small})` : "none" }}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        className={styles["image"]}
        onLoad={handleLoad}
        priority={priority}
        placeholder={small ? "blur" : "empty"}
        blurDataURL={small}
      />
    </div>
  );
};

export default Image;
