"use client";

import useImages from "../../hooks/useImages";
import ImageLoading from "../ImageLoading/ImageLoading";

const AboutUs = () => {
  const [medals, error] = useImages("medal");

  if (error) throw error;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-primary-800 sm:text-3xl lg:text-4xl">
            O <span className="text-gradient">nama</span>
          </h2>
          <p className="mx-auto max-w-3xl px-4 text-base text-primary-600 sm:text-lg lg:text-xl">
            Naša priča o kvalitetu i pouzdanosti
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Main content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Company story ee*/}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl font-semibold text-primary-800 sm:text-2xl">
                Naša priča
              </h3>
              <p className="text-base leading-relaxed text-primary-800 sm:text-lg">
                Preduzeće{" "}
                <span className="font-semibold text-primary-500">
                  Adexto d.o.o
                </span>{" "}
                osnovano je 2007 godine u Zrenjaninu. Naša firma je prva na
                teritoriji Balkana počela sa izradom betonskih proizvoda novom
                tehnologijom—
                <span className="font-semibold text-primary-500">
                  armirani vibro beton
                </span>
                , izuzetne izdržljivosti i trajnosti. Takođe, jedini smo
                dobitnici sertifikata{" "}
                <span className="font-semibold text-primary-600">
                  &quot;FIRMA OD POVERENJA&quot;
                </span>
                .
              </p>
            </div>

            {/* Business info */}
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary-800 sm:text-xl">
                  Poslovni koncept
                </h4>
                <p className="text-sm leading-relaxed text-primary-700 sm:text-base">
                  Adexto će na jednostavan način ponuditi prodaju i postavljanje
                  betonskih ograda.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary-800 sm:text-xl">
                  Naša vizija
                </h4>
                <p className="text-sm leading-relaxed text-primary-700 sm:text-base">
                  Želja nam je da vam približimo novine u betonskoj proizvodnji
                  kroz asortiman naših proizvoda i da budemo još bolji.
                </p>
              </div>
            </div>
          </div>

          {/* Medals */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="mb-2 text-xl font-bold text-primary-800 sm:text-2xl">
                  Naša priznanja
                </h3>
                <p className="text-sm text-primary-500">
                  Sertifikati kvaliteta i poverenja
                </p>
              </div>

              {medals ? (
                <div className="mx-auto grid max-w-40 grid-cols-3 gap-0.5 sm:max-w-xs sm:grid-cols-3 sm:gap-3 lg:mx-0">
                  {medals.map((medal, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="aspect-square w-full overflow-hidden rounded border border-primary-100 bg-white p-0 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-md group-hover:scale-105 sm:rounded-lg sm:p-2">
                        <img
                          src={medal.path}
                          alt={`medal-${index}`}
                          className="h-full w-full object-contain"
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
