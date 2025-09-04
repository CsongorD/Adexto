"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
        <div className="fixed inset-0 z-50 h-screen w-screen animate-fade-in md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 h-screen w-screen bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeSidebar}
          />

          {/* Menu Panel */}
          <div className="fixed inset-0 flex h-screen w-screen flex-col bg-black transition-all duration-300 ease-out">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-primary-800 bg-primary-800 px-6 py-5">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  ADEXTO
                </h2>
              </div>
              <button
                onClick={closeSidebar}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-1 h-full items-center justify-center bg-black">
              <nav className="space-y-8 text-center">
                {NAV_LINKS.map(({ to, text }, index) => (
                  <NavButton
                    key={to}
                    className={`animate-fade-in block rounded-lg px-8 py-4 text-xl font-medium transition-all duration-200 hover:bg-primary-800 hover:text-white ${
                      pathname === to
                        ? "bg-primary-800 text-white"
                        : "text-primary-300"
                    }`}
                    to={to}
                    text={text}
                    onClick={closeSidebar}
                    style={{ animationDelay: `${index * 0.1}s` }}
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
