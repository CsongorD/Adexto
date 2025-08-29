import { MapPin, Phone, Mail } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="space-y-8">
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          ADEXTO DOO
        </h2>
        
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 mt-1 text-primary-500" />
            <p>Servo Mihalja BB, 23206 Zrenjanin (Mužlja)</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 mt-1 text-primary-500" />
            <div>
              <p>Tel: <a href="tel:+381668822339" className="text-primary-600 hover:text-primary-700 transition-colors duration-300">+381 66 8822 339</a></p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 mt-1 text-primary-500" />
            <div>
              <p>Email: <a href="mailto:info@adexto.com" className="text-primary-600 hover:text-primary-700 transition-colors duration-300">info@adexto.com</a></p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 space-y-2">
            <p><span className="font-medium">Matični broj:</span> 20289635</p>
            <p><span className="font-medium">PIB:</span> 105002449</p>
          </div>
        </div>
      </div>

      <div className="card p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          RADNO VREME
        </h3>
        
        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between items-center">
            <span>Ponedeljak - Petak:</span>
            <span className="font-medium text-primary-600">07:00 - 15:00</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Subota, nedelja i praznici:</span>
            <span className="font-medium text-gray-600">po dogovoru</span>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            Molimo Vas da zovete samo tokom našeg radnog vremena.
          </p>
        </div>
      </div>

      <div className="card p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          KAKO DO NAS
        </h3>
        
        <p className="text-gray-700 leading-relaxed">
          Krenite prema Mužlji iz Zrenjanina. Kod Gomexa skrenite desno u ulicu
          Servo Mihalja. Vozite 2.5 km dok ne vidite žuti objekat sa leve strane.
        </p>
      </div>
    </div>
  );
};

export default ContactCard;