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
        
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {!characteristics ? (
            <div className="w-full flex justify-center">
              <ImageLoading />
            </div>
          ) : (
            characteristics?.map((characteristic, index) => (
              <div key={index} className="animate-fade-in w-full sm:w-auto sm:min-w-[280px] sm:max-w-[320px]" style={{animationDelay: `${index * 0.1}s`}}>
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