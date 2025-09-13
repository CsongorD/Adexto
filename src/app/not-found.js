import NavButton from "../components/NavButton/NavButton";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-50">
      <div className="mx-auto max-w-md space-y-8 px-4 text-center">
        <div className="space-y-4">
          <h1 className="text-gradient text-9xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold text-primary-800">
            Stranica nije pronađena
          </h2>
          <p className="leading-relaxed text-primary-600">
            Izvinjavamo se, ali stranica koju tražite ne postoji ili je
            premeštena.
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
