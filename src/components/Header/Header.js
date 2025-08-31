import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 gradient-bg backdrop-blur-md border-b border-gray-800/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;