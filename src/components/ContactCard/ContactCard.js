import { MapPin, Phone, Mail } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="card p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
          ADEXTO DOO
        </h2>
        
        <div className="space-y-3 sm:space-y-4 text-gray-700">
          <div className="flex items-start space-x-3">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-primary-500 flex-shrink-0" />
            <p className="text-sm sm:text-base">Servo Mihalja BB, 23206 Zrenjanin (Mužlja)</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-primary-500 flex-shrink-0" />
            <div>
              <p className="text-sm sm:text-base">Tel: <a href="tel:+381668822339" className="text-primary-600 hover:text-primary-700 transition-colors duration-300">+381 66 8822 339</a></p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-primary-500 flex-shrink-0" />
            <div>
              <p className="text-sm sm:text-base">Email: <a href="mailto:info@adexto.com" className="text-primary-600 hover:text-primary-700 transition-colors duration-300">info@adexto.com</a></p>
            </div>
          </div>
          
          <div className="pt-3 sm:pt-4 border-t border-gray-200 space-y-1 sm:space-y-2">
            <p className="text-sm sm:text-base"><span className="font-medium">Matični broj:</span> 20289635</p>
            <p className="text-sm sm:text-base"><span className="font-medium">PIB:</span> 105002449</p>
          </div>
        </div>
      </div>

      <div className="card p-4 sm:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
          RADNO VREME
        </h3>
        
        <div className="space-y-2 sm:space-y-3 text-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
            <span className="text-sm sm:text-base">Ponedeljak - Petak:</span>
            <span className="font-medium text-primary-600 text-sm sm:text-base">07:00 - 15:00</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
            <span className="text-sm sm:text-base">Subota, nedelja i praznici:</span>
            <span className="font-medium text-gray-600 text-sm sm:text-base">po dogovoru</span>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            Molimo Vas da zovete samo tokom našeg radnog vremena.
          </p>
        </div>
      </div>

      <div className="card p-4 sm:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
          KAKO DO NAS
        </h3>
        
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Krenite prema Mužlji iz Zrenjanina. Kod Gomexa skrenite desno u ulicu
          Servo Mihalja. Vozite 2.5 km dok ne vidite žuti objekat sa leve strane.
        </p>
      </div>
    </div>
  );
};

export default ContactCard;