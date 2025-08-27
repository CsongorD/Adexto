import NavButton from "../components/NavButton/NavButton";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-gradient">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900">
            Stranica nije pronađena
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Izvinjavamo se, ali stranica koju tražite ne postoji ili je premeštena.
          </p>
        </div>
        
        <NavButton
          className="btn-primary inline-flex items-center justify-center"
          to="/"
          text="Vrati se na početnu"
        />
      </div>
    </div>
  );
};

export default NotFound;