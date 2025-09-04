"use client";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeSidebar}
          />

          {/* Menu Panel */}
          <div className="fixed inset-0 transform bg-primary-900 transition-transform duration-300 ease-out">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-primary-700 bg-primary-800 px-6 py-5">
              <div className="flex items-center space-x-3">
                <div className="relative h-8 w-8">
                  <div className="h-full w-full rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">ADEXTO</h3>
                </div>
              </div>
              <button
                onClick={closeSidebar}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white shadow-sm transition-all duration-200 hover:bg-white/30"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex h-full flex-col items-center justify-center px-8">
              <nav className="space-y-4 text-center">
                {NAV_LINKS.map(({ to, text }, index) => (
                  <div key={to} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <NavButton
                    className={`block rounded-xl px-8 py-4 text-xl font-medium transition-all duration-300 hover:bg-primary-700 hover:text-white ${
                      pathname === to
                        ? "bg-primary-700 text-white"
                        : "text-primary-200"
                    }`}
                    to={to}
                    text={text}
                    onClick={closeSidebar}
                  />
                  </div>
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
