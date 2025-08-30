import Image from "../Image/Image";

const Column = ({ column }) => {
  const { name, path, small, options } = column;
  
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <div className="aspect-[4/5] bg-gray-50">
          <Image src={path} alt={name} small={small} priority={false} />
        </div>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <h3 className="text-sm font-semibold text-gray-900">
            {name}
          </h3>
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="text-sm font-medium text-gray-600 mb-3 text-center">
          Dostupne dužine
        </h4>
        
        <div className="space-y-2">
          {options.map((option, index) => (
            <div key={index} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-600">
                <span className="font-medium text-gray-900">{option.length.toFixed(1)}m</span>
                <span className="text-gray-500 ml-1">({option.full_length}m)</span>
              </div>
              <div className="text-sm font-bold text-primary-600">
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