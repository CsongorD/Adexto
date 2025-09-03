import Image from "../Image/Image";

const Characteristic = ({ characteristic }) => {
  const { path, text, small } = characteristic;
  
  return (
    <div className="card p-6 text-center group hover:scale-105 transition-all duration-300">
      <div className="w-20 h-20 mx-auto mb-4 relative group-hover:scale-110 transition-transform duration-300">
        <Image 
          src={path} 
          alt={text + "-logo"} 
          small={small} 
          priority={false} 
        />
      </div>
      <p className="text-gray-700 font-medium leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default Characteristic;