import FenceModel from "../FenceModel/FenceModel";
import PlayIcon from "../Icons/PlayIcon";
import NavButton from "../NavButton/NavButton";

const Landing = () => {
  return (
    <section className="min-h-screen gradient-bg flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] section-padding">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="text-gradient">ADEXTO</span>
                <br />
                <span className="text-3xl lg:text-4xl font-medium text-gray-300">
                  D.O.O
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Firma <span className="text-primary-400 font-semibold">ADEXTO</span> nudi vam 
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
                    <PlayIcon className="w-5 h-5" />
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