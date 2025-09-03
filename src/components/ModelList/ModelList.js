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
    return (
      <div className="flex justify-center py-12">
        <LoadingIcon />
      </div>
    );
  }

  if (currentModel.images.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500">No images found for this model!</p>
      </div>
    );
  }

  let modelNumber = currentModel.model;
  let modelImages = currentModel.images;
  let currentImage = modelImages[imageIndex];

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
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
          <span className="rounded-lg border-2 border-primary-300 px-3 py-1">
            {" "}
            Model {modelNumber}
          </span>
        </h2>
        <p className="text-sm text-gray-600 sm:text-base">
          Slika {imageIndex + 1} od {modelImages.length}
        </p>
      </div>

      <ImageSlider
        currentImage={currentImage}
        modelNumber={modelNumber}
        handleLoad={handleLoad}
        showPrevImage={showPrevImage}
        showNextImage={showNextImage}
        loading={loading}
      />
    </div>
  );
};

export default ModelList;
