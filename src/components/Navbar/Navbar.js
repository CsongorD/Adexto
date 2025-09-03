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
          <div className="fixed right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Menu
                </h3>
              </div>
              <button
                onClick={closeSidebar}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-200 hover:text-gray-900"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="px-4 py-6">
              <nav className="space-y-2">
                {NAV_LINKS.map(({ to, text }, index) => (
                  <NavButton
                    key={to}
                    className="group flex w-full items-center rounded-xl px-4 py-3 text-left text-base font-medium text-gray-700 transition-all duration-200 hover:bg-primary-50 hover:text-primary-600"
                    to={to}
                    text={
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 transition-colors duration-200 group-hover:bg-primary-100">
                          <div className="h-2 w-2 rounded-full bg-gray-400 transition-colors duration-200 group-hover:bg-primary-500"></div>
                        </div>
                        <span>{text}</span>
                      </div>
                    }
                    onClick={closeSidebar}
                  />
                ))}
              </nav>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-gray-50 px-6 py-4">
              <div className="text-center">
                <p className="text-xs text-gray-500">ADEXTO D.O.O</p>
                <p className="text-xs text-gray-400">Betonske ograde</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
