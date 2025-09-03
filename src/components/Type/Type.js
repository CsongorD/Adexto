import Image from "../Image/Image";

const Type = ({ type, index }) => {
  const { number, weight, path, small, height, width, price } = type;
  const priority = index < 6 ? true : false;

  return (
    <div className="rounded-lg border border-gray-100 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:rounded-xl sm:p-4">
      {/* Header with key info */}
      <div className="mb-3 flex items-center justify-between sm:mb-4">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900 sm:text-xl">
            {number}
          </div>
          <div className="text-xs text-gray-500">Model</div>
        </div>

        <div className="text-center">
          <div className="text-xs font-semibold text-gray-700 sm:text-sm">
            {weight} KG
          </div>
          <div className="text-xs text-gray-500">Težina</div>
        </div>

        <div className="text-center">
          <div className="text-lg font-bold text-primary-600 sm:text-xl">
            {price} €
          </div>
          <div className="text-xs text-gray-500">Cena</div>
        </div>
      </div>

      {/* Image */}
      <div className="relative mb-3 overflow-hidden rounded-lg bg-gray-50 sm:mb-4">
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
        <div className="flex-1 rounded-md bg-gray-100 p-1.5 text-center sm:rounded-lg sm:p-2">
          <div className="text-xs font-semibold text-gray-900 sm:text-sm">
            {height} mm
          </div>
          <div className="text-xs text-gray-500">Visina</div>
        </div>

        <div className="flex-1 rounded-md bg-gray-100 p-1.5 text-center sm:rounded-lg sm:p-2">
          <div className="text-xs font-semibold text-gray-900 sm:text-sm">
            {width} mm
          </div>
          <div className="text-xs text-gray-500">Širina</div>
        </div>
      </div>
    </div>
  );
};

export default Type;