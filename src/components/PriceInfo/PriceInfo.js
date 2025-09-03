import { forwardRef } from "react";

const PriceInfo = forwardRef((_props, ref) => {
  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dodatne <span className="text-gradient">Informacije</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Važne napomene o cenama i uslugama
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cene ugradnje:
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Ugradnja ograde (1.5m visine)</span>
                    <span className="font-bold text-primary-600">7€ / 1m</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Ugradnja ograde (2.0m visine)</span>
                    <span className="font-bold text-primary-600">9€ / 1m</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Napomene:
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="font-medium text-yellow-800">
                      * Sve cene su bez PDV-a.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="font-medium text-blue-800 mb-2">
                      ** Standardne cene važe za:
                    </p>
                    <p className="text-blue-700">
                      Ugradnju u zemlju na ravnoj površini. Ugradnja u beton, 
                      pored drveća (zbog korenja) i na kosine (kaskade) naplaćuje se po dogovoru.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="font-medium text-green-800 mb-2">
                      *** Transport:
                    </p>
                    <p className="text-green-700">
                      Cena za transport zavisi od poručene količine (ukupne težine robe) 
                      i Vaše destinacije.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

PriceInfo.displayName = "PriceInfo";
export default PriceInfo;