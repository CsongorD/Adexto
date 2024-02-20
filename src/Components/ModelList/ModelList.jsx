import React, { useEffect, useState } from "react";

import "./ModelList.css";
import ImageComponent from "../ImageComponent/ImageComponent";

const ModelList = ({ models, paginate, currentPage, loading }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(false);

  let imgInd = direction ? 0 : models[0].images.length - 1;

  useEffect(() => {
    setImageIndex(imgInd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  let model = models[0];

  let modelNumber = model.model;
  let modelImages = model.images;

  function showPrevImage() {
    if (imageIndex === 0) {
      setDirection(false);
      paginate(currentPage - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  function showNextImage() {
    if (imageIndex === modelImages.length - 1) {
      setDirection(true);
      paginate(currentPage + 1);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  const currentImage = modelImages[imageIndex];

  return (
    <div className="models-container">
      <h1 className="title">Model {modelNumber}</h1>

      <div className="image-slider">
        <div className="image-slider-btn prev" onClick={() => showPrevImage()}>
          <box-icon id="arrow-btn" name="chevron-left" type="solid"></box-icon>
        </div>

        <div className="image-slider-img">
          <ImageComponent
            src={currentImage}
            alt={"img-" + { modelNumber }}
            loading="lazy"
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
