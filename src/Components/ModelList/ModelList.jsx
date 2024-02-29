import React, { useEffect, useState } from "react";

import "./ModelList.css";
import ImageComponent from "../ImageComponent/ImageComponent";

const ModelList = ({ model, paginate, currentPage }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [mod, setMod] = useState(null);
  const [isPrev, setIsPrev] = useState(false);
  useEffect(() => {
    setMod(model);

    if (isPrev) {
      setImageIndex(model.images.length - 1);
    } else {
      setImageIndex(0);
    }
  }, [currentPage, model, isPrev]);

  if (!mod || !mod.images || !mod.model) {
    return <div>Model data is missing!</div>;
  }

  if (mod.images.length === 0) {
    return <div>No images found for this model!</div>;
  }

  let modelNumber = mod?.model;
  let modelImages = mod?.images;
  let currentImage = modelImages[imageIndex];
  let currentImagePath = currentImage.path;
  let currentImageSmall = currentImage.small;

  function showPrevImage() {
    if (imageIndex === 0) {
      paginate(currentPage - 1);
      setIsPrev(true);
    } else {
      setImageIndex((prevIndex) => prevIndex - 1);
    }
  }
  function showNextImage() {
    if (imageIndex === modelImages.length - 1) {
      paginate(currentPage + 1);
      setIsPrev(false);
    } else {
      setImageIndex((prevIndex) => prevIndex + 1);
    }
  }
  return (
    <div className="models-container">
      <h1 className="title">Model {modelNumber}</h1>
      <div className="image-slider">
        <div className="image-slider-btn prev" onClick={() => showPrevImage()}>
          <box-icon id="arrow-btn" name="chevron-left" type="solid"></box-icon>
        </div>
        <div className="image-slider-img">
          <ImageComponent
            src={currentImagePath}
            small={currentImageSmall}
            alt={"img-" + modelNumber}
            loading={modelNumber === "1" ? "eager" : "lazy"}
          />
        </div>
        <div className="image-slider-btn next" onClick={() => showNextImage()}>
          <box-icon id="arrow-btn" type="solid" name="chevron-right"></box-icon>
        </div>
      </div>
    </div>
  );
};

export default ModelList;
