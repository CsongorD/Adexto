import { Shield, DollarSign, Hammer, Lock, Wrench } from "lucide-react";

const iconMap = {
  "25 GODINA GARANCIJA": Shield,
  "POVOLJNA CENA i ISPLATIVOST": DollarSign,
  "IZDRŽLJIVOST i DUGOTRAJNOST": Hammer,
  "JEDNOSTAVNOST ODRŽAVANJA": Wrench,
  "SIGURNOST i PRIVATNOST": Lock,
};

const Characteristic = ({ characteristic }) => {
  const { text } = characteristic;
  const IconComponent = iconMap[text] || Shield;
  
  return (
    <div className="card p-4 sm:p-6 text-center group hover:scale-105 transition-all duration-300 h-40 sm:h-44 lg:h-48 flex flex-col justify-center items-center">
      <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-primary-50 rounded-full group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
        <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-primary-600" />
      </div>
      <p className="text-gray-700 font-medium leading-relaxed text-xs sm:text-sm">
        {text}
      </p>
    </div>
  );
};

export default Characteristic;