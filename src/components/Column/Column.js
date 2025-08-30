import Image from "../Image/Image";

const Column = ({ column }) => {
  const { name, path, small, options } = column;
  
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 max-w-sm mx-auto">
      <div className="relative">
        <div className="aspect-[3/4] bg-gray-50">
          <Image src={path} alt={name} small={small} priority={false} />
        </div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <h3 className="text-base font-semibold text-gray-900">
            {name}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-base font-medium text-gray-600 mb-4 text-center">
          Dostupne dužine
        </h4>
        
        <div className="space-y-3">
          {options.map((option, index) => (
            <div key={index} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">
                <span className="font-medium text-gray-900">{option.length.toFixed(1)}m</span>
                <span className="text-gray-500 ml-1">({option.full_length}m)</span>
              </div>
              <div className="text-base font-bold text-primary-600">
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