"use client";

import useImages from "../../hooks/useImages";
import Characteristic from "../Characteristic/Characteristic";
import ImageLoading from "../ImageLoading/ImageLoading";

const CharacteristicList = () => {
  const [characteristics, error] = useImages("characteristic");

  if (error) throw error;

  return (
    <section className="section-padding bg-grey-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Zašto odabrati <span className="text-gradient">Adexto</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naše betonske ograde kombinuju funkcionalnost, estetiku i dugotrajnost
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {!characteristics ? (
            <div className="col-span-full flex justify-center">
              <ImageLoading />
            </div>
          ) : (
            characteristics?.map((characteristic, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <Characteristic characteristic={characteristic} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CharacteristicList;