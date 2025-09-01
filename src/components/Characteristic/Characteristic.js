import { DollarSign, Hammer, Lock, Shield, Wrench } from "lucide-react";

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
    <div className="card group flex h-40 flex-col items-center justify-center p-4 text-center transition-all duration-300 hover:scale-105 sm:h-44 sm:p-6 lg:h-48">
      <div className="sm:w-18 sm:h-18 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-100 sm:mb-4 lg:h-20 lg:w-20">
        <IconComponent className="h-8 w-8 text-primary-600 sm:h-9 sm:w-9 lg:h-10 lg:w-10" />
      </div>
      <p className="text-xs font-medium leading-relaxed text-gray-700 sm:text-sm">
        {text}
      </p>
    </div>
  );
};

export default Characteristic;
