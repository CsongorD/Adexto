"use client";

import useImages from "../../hooks/useImages";
import ImageLoading from "../ImageLoading/ImageLoading";
import MedalList from "../MedalList/MedalList";

const AboutUs = () => {
  const [medals, error] = useImages("medal");

  if (error) throw error;

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-20 relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            O <span className="text-gradient bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">nama</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
          {/* Main content - takes up more space */}
          <div className="lg:col-span-8 space-y-8">
            {/* Company intro card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Naša priča</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Preduzeće <span className="font-semibold text-primary-600">Adexto d.o.o</span> osnovano je 2007 godine u Zrenjaninu. 
                  Naša firma je prva na teritoriji Balkana počela sa izradom betonskih proizvoda novom tehnologijom—
                  <span className="font-semibold text-primary-600">armirani vibro beton</span>, izuzetne izdržljivosti i trajnosti. 
                  Takođe, jedini smo dobitnici sertifikata <span className="font-bold text-primary-700">"FIRMA OD POVERENJA"</span>.
                </p>
              </div>
            </div>
            
            {/* Two column cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Business concept card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Poslovni koncept</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Adexto će na jednostavan način ponuditi prodaju i postavljanje betonskih ograda.
                  </p>
                </div>
              </div>

              {/* Vision card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Naša vizija</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Želja nam je da vam približimo novine u betonskoj proizvodnji kroz asortiman naših proizvoda i da budemo još bolji.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Medals sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Naša priznanja</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
              </div>
              
              {/* Desktop medals */}
              <div className="hidden lg:block">
                {medals ? (
                  <div className="grid grid-cols-2 gap-4">
                    {medals.map((medal, index) => (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className="w-full aspect-square rounded-lg overflow-hidden">
                            <img 
                              src={medal.path} 
                              alt={`medal-${index}`} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
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
              
              {/* Mobile medals */}
              <div className="lg:hidden">
                {medals ? (
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 justify-items-center">
                    {medals.map((medal, index) => (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className="w-16 h-16 rounded-lg overflow-hidden">
                            <img 
                              src={medal.path} 
                              alt={`medal-${index}`} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
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
      </div>
    </section>
  );
};

export default AboutUs;