import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="gradient-bg fixed left-0 right-0 top-0 z-50 border-b border-gray-800/20 backdrop-blur-md">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
