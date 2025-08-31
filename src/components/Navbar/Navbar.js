"use client";
import { useEffect, useState } from "react";
import CloseIcon from "../Icons/CloseIcon";
import MenuIcon from "../Icons/MenuIcon";
import NavButton from "../NavButton/NavButton";

const NAV_LINKS = [
  { to: "/", text: "Naslovna" },
  { to: "/cenovnik", text: "Cenovnik" },
  { to: "/modeli", text: "Modeli" },
  { to: "/galerija", text: "Galerija" },
  { to: "/kontakt", text: "Kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        {NAV_LINKS.map(({ to, text }) => (
          <NavButton
            key={to}
            className="text-gray-300 hover:text-white font-medium transition-colors duration-300 relative group"
            to={to}
            text={text}
            onClick={closeSidebar}
          />
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <CloseIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeSidebar} />
          <div className="fixed top-0 right-0 h-full w-80 max-w-full gradient-bg shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">Menu</h3>
              <button
                onClick={closeSidebar}
                className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-6">
              {NAV_LINKS.map(({ to, text }) => (
                <NavButton
                  key={to}
                  className="text-gray-300 hover:text-primary-400 font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                  to={to}
                  text={text}
                  onClick={closeSidebar}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;