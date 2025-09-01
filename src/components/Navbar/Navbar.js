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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden items-center space-x-4 md:flex lg:space-x-8">
        {NAV_LINKS.map(({ to, text }) => (
          <NavButton
            key={to}
            className="group relative text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-primary-400 lg:text-base"
            to={to}
            text={text}
            onClick={closeSidebar}
          />
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="p-2 text-white transition-colors duration-300 hover:text-primary-400 md:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <CloseIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <MenuIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeSidebar}
          />
          <div className="gradient-bg fixed right-0 top-0 h-full w-72 max-w-full shadow-2xl sm:w-80">
            <div className="flex items-center justify-between border-b border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Menu
              </h3>
              <button
                onClick={closeSidebar}
                className="p-2 text-gray-300 transition-colors duration-300 hover:text-white"
              >
                <CloseIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-3 p-4 sm:space-y-4 sm:p-6">
              {NAV_LINKS.map(({ to, text }) => (
                <NavButton
                  key={to}
                  className="rounded-lg px-3 py-2 text-base font-medium text-gray-300 transition-all duration-300 hover:bg-gray-800/50 hover:text-primary-400 sm:px-4 sm:py-3 sm:text-lg"
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
