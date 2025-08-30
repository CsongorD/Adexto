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
    <div className="relative max-w-5xl mx-auto">
      <div className="relative group">
        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-10 rounded-2xl">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Image container */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed opacity-0 group-hover:opacity-100"
        >
          <PrevIcon className="w-4 h-4 text-gray-700" />
        </button>
        
        <button
          onClick={showNextImage}
          disabled={loading}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed opacity-0 group-hover:opacity-100"
        >
          <NextIcon className="w-4 h-4 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;