const ContactCard = () => {
  return (
    <div className="space-y-8">
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          ADEXTO DOO
        </h2>
        
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 mt-1 text-primary-500">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>Servo Mihalja BB, 23206 Zrenjanin (Mužlja)</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 mt-1 text-primary-500">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <p>Tel: <a href="tel:+381668822339" className="text-primary-600 hover:text-primary-700 transition-colors duration-300">+381 66 8822 339</a></p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 mt-1 text-primary-500">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
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