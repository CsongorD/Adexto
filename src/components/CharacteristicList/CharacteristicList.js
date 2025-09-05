"use client";

import useImages from "../../hooks/useImages";
import Link from "next/link";
import Characteristic from "../Characteristic/Characteristic";
import ImageLoading from "../ImageLoading/ImageLoading";

const CharacteristicList = () => {
  const [characteristics, error] = useImages("characteristic");

  if (error) throw error;

  return (
    <section className="section-padding bg-grey-50">
      <div className="container-custom">
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-primary-800 sm:text-3xl lg:text-4xl">
            Zašto odabrati <span className="text-gradient">Adexto</span>?
          </h2>
          <p className="mx-auto max-w-3xl px-4 text-base text-primary-600 sm:text-lg lg:text-xl">
            Naše betonske ograde kombinuju funkcionalnost, estetiku i
            dugotrajnost
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-5">
          {!characteristics ? (
            <div className="col-span-full flex justify-center py-8">
              <ImageLoading />
            </div>
          ) : (
            characteristics?.map((characteristic, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Characteristic characteristic={characteristic} />
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-primary-600 mb-4">
            Zainteresovani ste za naše betonske ograde?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/cenovnik"
              className="btn-primary inline-flex items-center justify-center"
              title="Pogledajte cene svih naših proizvoda"
            >
              Pogledajte Cenovnik
            </Link>
            <Link
              href="/modeli"
              className="btn-secondary inline-flex items-center justify-center"
              title="Istražite sve dostupne modele betonskih ograda"
            >
              Istražite Modele
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacteristicList;
