import Image from "../Image/Image";

const Column = ({ column }) => {
  const { name, path, small, options } = column;

  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-xl">
      <div className="relative">
        <div className="aspect-[4/5] bg-gray-50">
          <Image src={path} alt={name} small={small} priority={false} />
        </div>
        <div className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm sm:left-3 sm:top-3 sm:px-3">
          <h3 className="text-xs font-semibold text-gray-900 sm:text-sm">
            {name}
          </h3>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <h4 className="mb-2 text-center text-xs font-medium text-gray-600 sm:mb-3 sm:text-sm">
          Dostupne dužine
        </h4>

        <div className="space-y-1 sm:space-y-2">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-md bg-gray-100 px-2 py-1.5 sm:rounded-lg sm:px-3 sm:py-2"
            >
              <div className="text-xs text-gray-600">
                <span className="font-medium text-gray-900">
                  {option.length.toFixed(1)}m
                </span>
                <span className="ml-1 text-gray-500">
                  ({option.full_length}m)
                </span>
              </div>
              <div className="text-xs font-bold text-primary-600 sm:text-sm">
                {option.price}€
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Column;
