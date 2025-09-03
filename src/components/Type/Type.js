import Image from "../Image/Image";

const Type = ({ type, index }) => {
  const { number, weight, path, small, height, width, price } = type;
  const priority = index < 6 ? true : false;

  return (
    <div className="card p-6 hover:scale-105 transition-all duration-300">
      <div className="grid grid-cols-3 gap-4 items-center mb-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary-600 mb-1">
            {number}
          </h3>
          <p className="text-sm text-gray-500">Model</p>
        </div>
        
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-900 mb-1">
            {weight} KG
          </p>
          <p className="text-sm text-gray-500">Težina</p>
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold text-primary-600 mb-1">
            {price} €
          </p>
          <p className="text-sm text-gray-500">Cena</p>
        </div>
      </div>
      
      <div className="relative mb-6 rounded-lg overflow-hidden border border-gray-200">
        <div className="aspect-[16/5] bg-gray-50">
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
        <div className="flex-1 rounded-md bg-gray-100 p-1.5 text-center sm:rounded-lg sm:p-2">
          <div className="text-xs font-semibold text-gray-900 sm:text-sm">
            {height} mm
          </p>
          <p className="text-sm text-gray-500">Visina</p>
        </div>

        <div className="flex-1 rounded-md bg-gray-100 p-1.5 text-center sm:rounded-lg sm:p-2">
          <div className="text-xs font-semibold text-gray-900 sm:text-sm">
            {width} mm
          </p>
          <p className="text-sm text-gray-500">Širina</p>
        </div>
      </div>
    </div>
  );
};

export default Type;