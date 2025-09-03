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
            <div key={index} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                <span className="font-medium">{option.length.toFixed(1)}m</span>
                <span className="text-gray-500"> (ukupna: {option.full_length}m)</span>
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