import { useState } from "react";
import "./ImageComponent.css";

const ImageComponent = ({ src, alt, loading = "lazy", small }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  function handleLoad() {
    setImageIsLoaded(true);
  }

  return (
    <div
      className={"blur-load " + (imageIsLoaded ? "loaded" : "")}
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
        onLoad={() => {
          handleLoad();
        }}
      />
    </div>
  );
};

export default ImageComponent;
