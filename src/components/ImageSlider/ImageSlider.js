import NextIcon from "../Icons/NextIcon";
import PrevIcon from "../Icons/PrevIcon";
import Image from "../Image/Image";

const ImageSlider = ({
  currentImage,
  modelNumber,
  handleLoad,
  showPrevImage,
  showNextImage,
  loading = false,
}) => {
  const { path, small } = currentImage;

  return (
    <div className="relative mx-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
      <div className="group relative">
        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-white/60 backdrop-blur-sm sm:rounded-2xl">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600 sm:h-8 sm:w-8"></div>
          </div>
        )}

        {/* Image container */}
        <div className="aspect-[16/9] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm sm:rounded-2xl">
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
          className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-200 bg-white/80 opacity-0 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 group-hover:opacity-100 sm:left-4 sm:h-10 sm:w-10"
        >
          <PrevIcon className="h-3 w-3 text-gray-700 sm:h-4 sm:w-4" />
        </button>

        <button
          onClick={showNextImage}
          disabled={loading}
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-200 bg-white/80 opacity-0 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 group-hover:opacity-100 sm:right-4 sm:h-10 sm:w-10"
        >
          <NextIcon className="h-3 w-3 text-gray-700 sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
