import "./ModelList.css";
import { useEffect, useState } from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

const ModelList = ({ model, paginate, currentPage }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [currentModel, setCurrentModel] = useState(null);
  const [isPrev, setIsPrev] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentModel(model);
    setImageIndex(isPrev ? model.images.length - 1 : 0);
  }, [currentPage, model, isPrev]);

  if (!currentModel || !model) {
    return <LoadingIcon />;
  }
  if (currentModel.images.length === 0) {
    return <div>No images found for this model!</div>;
  }

  let modelNumber = currentModel.model;
  let modelImages = currentModel.images;
  let currentImage = modelImages[imageIndex];
  const { path: currentImagePath, small: currentImageSmall } = currentImage;

  function handleLoad() {
    setLoading(false);
  }

  function showPrevImage() {
    if (!loading && !(modelNumber == 1 && imageIndex === 0)) {
      if (imageIndex === 0) {
        paginate(currentPage - 1);
        setIsPrev(true);
      } else {
        setImageIndex((prevIndex) => prevIndex - 1);
      }
      setLoading(true);
    }
  }
  function showNextImage() {
    if (
      !loading &&
      !(modelNumber == 155 && imageIndex === model.images.length - 1)
    ) {
      if (imageIndex === modelImages.length - 1) {
        paginate(currentPage + 1);
        setIsPrev(false);
      } else {
        setImageIndex((prevIndex) => prevIndex + 1);
      }
      setLoading(true);
    }
  }
  return (
    <div className="model-list">
      <h1 className="title">Model {modelNumber}</h1>
      <ImageSlider
        showPrevImage={showPrevImage}
        currentImagePath={currentImagePath}
        currentImageSmall={currentImageSmall}
        modelNumber={modelNumber}
        handleLoad={handleLoad}
        showNextImage={showNextImage}
      />
    </div>
  );
};

export default ModelList;
