import { forwardRef } from "react";

const PriceInfo = forwardRef((_props, ref) => {
  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Dodatne <span className="text-gradient">Informacije</span>
          </h1>
          <p className="mx-auto max-w-3xl px-4 text-base text-gray-600 sm:text-lg lg:text-xl">
            Važne napomene o cenama i uslugama
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="card space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:mb-4 sm:text-xl">
                  Cene ugradnje:
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col space-y-1 rounded-lg bg-gray-50 p-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:p-3">
                    <span className="text-sm text-gray-700 sm:text-base">
                      Ugradnja ograde (1.5m visine)
                    </span>
                    <span className="text-sm font-bold text-primary-600 sm:text-base">
                      7€ / 1m
                    </span>
                  </div>
                  <div className="flex flex-col space-y-1 rounded-lg bg-gray-50 p-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:p-3">
                    <span className="text-sm text-gray-700 sm:text-base">
                      Ugradnja ograde (2.0m visine)
                    </span>
                    <span className="text-sm font-bold text-primary-600 sm:text-base">
                      9€ / 1m
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:mb-4 sm:text-xl">
                  Napomene:
                </h3>
                <div className="space-y-2 text-xs text-gray-600 sm:space-y-3 sm:text-sm">
                  <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-2 sm:p-3">
                    <p className="text-xs font-medium text-yellow-800 sm:text-sm">
                      * Sve cene su bez PDV-a.
                    </p>
                  </div>

                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-2 sm:p-3">
                    <p className="mb-1 text-xs font-medium text-blue-800 sm:mb-2 sm:text-sm">
                      ** Standardne cene važe za:
                    </p>
                    <p className="text-xs text-blue-700 sm:text-sm">
                      Ugradnju u zemlju na ravnoj površini. Ugradnja u beton,
                      pored drveća (zbog korenja) i na kosine (kaskade)
                      naplaćuje se po dogovoru.
                    </p>
                  </div>

                  <div className="rounded-lg border border-green-200 bg-green-50 p-2 sm:p-3">
                    <p className="mb-1 text-xs font-medium text-green-800 sm:mb-2 sm:text-sm">
                      *** Transport:
                    </p>
                    <p className="text-xs text-green-700 sm:text-sm">
                      Cena za transport zavisi od poručene količine (ukupne
                      težine robe) i Vaše destinacije.
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
