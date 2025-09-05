import { Eye } from "lucide-react";
import FenceModel from "../FenceModel/FenceModel";
import NavButton from "../NavButton/NavButton";

const Landing = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary-50/30"></div>
      <div className="absolute right-20 top-20 h-72 w-72 rounded-full bg-primary-100/40 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-primary-100/30 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="section-padding grid min-h-[70vh] items-center gap-8 sm:min-h-[80vh] lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="animate-fade-in space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl font-bold leading-tight text-primary-800 sm:text-4xl md:text-5xl lg:text-7xl">
                <span className="text-primary-800">ADEXTO</span>
                <span className="ml-2 text-lg font-light text-primary-500 sm:ml-3 sm:text-xl md:text-2xl lg:text-3xl">
                  d.o.o.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-primary-700 sm:text-lg lg:text-xl">
                Firma{" "}
                <span className="font-semibold text-primary-600">ADEXTO</span>{" "}
                nudi vam betonske ograde sa ugradnjom vrhunskog kvaliteta i
                velikim izborom dezena.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <NavButton
                className="btn-primary inline-flex items-center justify-center"
                to="/cenovnik"
                text="POGLEDAJ CENOVNIK"
              />
              <NavButton
                className="btn-secondary inline-flex items-center justify-center space-x-1 sm:space-x-2"
                to="/modeli"
                text={
                  <>
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>POGLEDAJ MODELE</span>
                  </>
                }
              />
            </div>
          </div>

          {/* 3D Model */}
          <div className="order-second flex animate-slide-up justify-center lg:order-last lg:justify-end">
            <FenceModel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
