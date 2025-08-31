import Image from "../Image/Image";

const Type = ({ type, index }) => {
  const { number, weight, path, small, height, width, price } = type;
  const priority = index < 6 ? true : false;

  return (
    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-100 p-3 sm:p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* Header with key info */}
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <div className="text-center">
          <div className="text-lg sm:text-xl font-bold text-gray-900">{number}</div>
          <div className="text-xs text-gray-500">Model</div>
        </div>
        
        <div className="text-center">
          <div className="text-xs sm:text-sm font-semibold text-gray-700">{weight} KG</div>
          <div className="text-xs text-gray-500">Težina</div>
        </div>
        
        <div className="text-center">
          <div className="text-lg sm:text-xl font-bold text-primary-600">{price} €</div>
          <div className="text-xs text-gray-500">Cena</div>
        </div>
      </div>
      
      {/* Image */}
      <div className="relative mb-3 sm:mb-4 rounded-lg overflow-hidden bg-gray-50">
        <div className="aspect-[16/5]">
          <Image
            src={path}
            small={small}
            alt={`type-${number}`}
            priority={priority}
          />
        </div>
      </div>
      
      {/* Dimensions */}
      <div className="flex gap-2">
        <div className="flex-1 bg-gray-50 rounded-md sm:rounded-lg p-1.5 sm:p-2 text-center">
          <div className="text-xs sm:text-sm font-semibold text-gray-900">{height} mm</div>
          <div className="text-xs text-gray-500">Visina</div>
        </div>
        
        <div className="flex-1 bg-gray-50 rounded-md sm:rounded-lg p-1.5 sm:p-2 text-center">
          <div className="text-xs sm:text-sm font-semibold text-gray-900">{width} mm</div>
          <div className="text-xs text-gray-500">Širina</div>
        </div>
      </div>
    </div>
  );
};

export default Type;