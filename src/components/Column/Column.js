import Image from "../Image/Image";

const Column = ({ column }) => {
  const { name, path, small, options } = column;
  
  return (
    <div className="card p-6 hover:scale-105 transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
        {name}
      </h3>
      
      <div className="relative mb-6 rounded-lg overflow-hidden border border-gray-200">
        <div className="aspect-[3/4] bg-gray-50">
          <Image src={path} alt={name} small={small} priority={false} />
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900 text-center mb-4">
          Dostupne dužine:
        </h4>
        
        <div className="space-y-3">
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
              <div className="text-lg font-bold text-primary-600">
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