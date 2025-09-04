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
            className="group relative text-sm font-medium text-primary-200 transition-colors duration-300 hover:text-primary-400 lg:text-base"
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
          {/* Backdrop */}
          {/* <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeSidebar}
          /> */}

          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-80 max-w-full transform bg-white shadow-2xl transition-transform duration-300 ease-out">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-primary-200 bg-gradient-to-r from-primary-50 to-primary-100 px-6 py-5">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 shadow-sm">
                  <MenuIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-800">Menu</h3>
                  <p className="text-xs text-primary-600">Navigacija</p>
                </div>
              </div>
              <button
                onClick={closeSidebar}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-primary-600 shadow-sm transition-all duration-200 hover:bg-white hover:text-primary-800 hover:shadow-md"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto bg-white px-4 py-6">
              <nav className="space-y-1">
                {NAV_LINKS.map(({ to, text }, index) => (
                  <NavButton
                    key={to}
                    className="group flex w-full items-center rounded-xl px-4 py-4 text-left transition-all duration-200 hover:bg-primary-50 hover:shadow-sm active:scale-[0.98]"
                    to={to}
                    text={
                      <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 transition-all duration-200 group-hover:scale-110 group-hover:bg-primary-100">
                          <div className="h-2.5 w-2.5 rounded-full bg-primary-500 transition-colors duration-200 group-hover:bg-primary-600"></div>
                        </div>
                        <div className="flex-1">
                          <span className="text-base font-medium text-primary-800 transition-colors duration-200 group-hover:text-primary-700">
                            {text}
                          </span>
                        </div>
                      </div>
                    }
                    onClick={closeSidebar}
                  />
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
