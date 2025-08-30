"use client";

import useImages from "../../hooks/useImages";
import ImageLoading from "../ImageLoading/ImageLoading";
import MedalList from "../MedalList/MedalList";

const AboutUs = () => {
  const [medals, error] = useImages("medal");

  if (error) throw error;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O <span className="text-primary-500">nama</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naša priča o kvalitetu i pouzdanosti
          </p>
        </div>


        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Company story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Naša priča</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Preduzeće <span className="font-semibold text-primary-500">Adexto d.o.o</span> osnovano je 2007 godine u Zrenjaninu. 
                Naša firma je prva na teritoriji Balkana počela sa izradom betonskih proizvoda novom tehnologijom—
                <span className="font-semibold text-primary-500">armirani vibro beton</span>, izuzetne izdržljivosti i trajnosti. 
                Takođe, jedini smo dobitnici sertifikata <span className="font-semibold text-primary-600">"FIRMA OD POVERENJA"</span>.
              </p>
            </div>
            
            {/* Business info */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Poslovni koncept</h4>
                <p className="text-gray-700 leading-relaxed">
                  Adexto će na jednostavan način ponuditi prodaju i postavljanje betonskih ograda.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Naša vizija</h4>
                <p className="text-gray-700 leading-relaxed">
                  Želja nam je da vam približimo novine u betonskoj proizvodnji kroz asortiman naših proizvoda i da budemo još bolji.
                </p>
              </div>
            </div>
          </div>
          
          {/* Medals */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Naša priznanja</h3>
                <p className="text-sm text-gray-500">Sertifikati kvaliteta i poverenja</p>
              </div>
              
              {medals ? (
                <div className="grid grid-cols-3 gap-4">
                  {medals.map((medal, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="w-full aspect-square rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all duration-300 group-hover:scale-105 p-3">
                        <img 
                          src={medal.path} 
                          alt={`medal-${index}`} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center">
                  <ImageLoading />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;