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
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left medals */}
          <div className="hidden lg:flex justify-center">
            {medals ? (
              <MedalList medals={medals.slice(0, 3)} />
            ) : (
              <ImageLoading />
            )}
          </div>
          
          {/* Main content */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Informacije o <span className="text-gradient">nama</span>
              </h2>
            </div>
            
            <div className="card p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Preduzeće Adexto d.o.o osnovano je 2007 godine u Zrenjaninu. Naša
                firma je prva na teritoriji Balkana počela sa izradom betonskih
                proizvoda novom tehnologijom—armirani vibro beton, izuzetne
                izdržljivosti i trajnosti. Takođe, jedini smo dobitnici sertifikata
                "FIRMA OD POVERENJA".
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Naš poslovni koncept
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Adexto će na jednostavan način ponuditi prodaju i postavljanje
                    betonskih ograda.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Naša vizija
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Želja nam je da vam približimo novine u betonskoj proizvodnji kroz
                    asortiman naših proizvoda i da budemo još bolji.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mobile medals */}
            <div className="lg:hidden flex justify-center">
              {medals ? (
                <MedalList medals={medals.slice(0, 6)} />
              ) : (
                <ImageLoading />
              )}
            </div>
          </div>
          
          {/* Right medals */}
          <div className="hidden lg:flex justify-center">
            {medals ? (
              <MedalList medals={medals.slice(3, 6)} />
            ) : (
              <ImageLoading />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;