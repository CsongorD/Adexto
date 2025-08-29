import FenceModel from "../FenceModel/FenceModel";
import { Eye } from "lucide-react";
import NavButton from "../NavButton/NavButton";

const Landing = () => {
  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gray-50/30"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gray-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-100/30 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] section-padding">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="text-gray-800">ADEXTO</span>
                <span className="text-2xl lg:text-3xl font-light text-gray-500 ml-3">
                  d.o.o.
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Firma <span className="text-primary-600 font-semibold">ADEXTO</span> nudi vam 
                betonske ograde sa ugradnjom vrhunskog kvaliteta i velikim izborom dezena.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <NavButton
                className="btn-primary inline-flex items-center justify-center"
                to="/cenovnik"
                text="POGLEDAJ CENOVNIK"
              />
              <NavButton
                className="btn-secondary inline-flex items-center justify-center space-x-2"
                to="/modeli"
                text={
                  <>
                    <Eye className="w-5 h-5" />
                    <span>POGLEDAJ MODELE</span>
                  </>
                }
              />
            </div>
          </div>
          
          {/* 3D Model */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <FenceModel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;