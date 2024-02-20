import { useState, useEffect } from "react";
import "./ImageComponent.css";

const ImageComponent = ({ src, alt, loading, className, small }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageIsLoaded(true);
    };

    img.src = src;
  }, [src]);

  return (
    <div
      className={"blur-load " + (imageIsLoaded ? "loaded" : "")}
      style={
        // imageIsLoaded
        //   ? {}
        //   :
        {
          backgroundImage: `url(${small})`,
        }
      }
    >
      <img src={src} alt={alt} loading={loading} />
    </div>
  );
};

export default ImageComponent;
