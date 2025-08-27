import NextIcon from "../Icons/NextIcon";
import PrevIcon from "../Icons/PrevIcon";
import Image from "../Image/Image";

const ImageSlider = ({
  currentImage,
  modelNumber,
  handleLoad,
  showPrevImage,
  showNextImage,
  loading = false
}) => {
  const { path, small } = currentImage;

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="card p-4">
        <div className="relative">
          {/* Loading overlay */}
          {loading && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 rounded-lg">
              <div className="loading-spinner"></div>
            </div>
          )}
          
          {/* Image container */}
          <div className="aspect-[16/10] rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={path}
              small={small}
              alt={`Model ${modelNumber}`}
              priority={true}
              onLoad={handleLoad}
            />
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={showPrevImage}
            disabled={loading}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PrevIcon className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={showNextImage}
            disabled={loading}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <NextIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;