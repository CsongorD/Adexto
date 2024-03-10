import "./Image.css";
import { useState } from "react";

const Image = ({ src, alt, loading = "lazy", small, onLoad = () => {} }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  function handleLoad() {
    setImageIsLoaded(true);
    onLoad();
  }

  return (
    <div
      className={`blur-load ${imageIsLoaded ? "loaded" : ""}`}
      style={
        imageIsLoaded
          ? { backgroundImage: "none" }
          : { backgroundImage: `url(${small})` }
      }
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        fetchpriority={loading === "lazy" ? "low" : "high"}
      />
    </div>
  );
};

export default Image;
