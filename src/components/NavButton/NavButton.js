"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavButton = ({ to, text, onClick = () => {}, className = "" }) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  const handleClick = (event) => {
    if (pathname === to) {
      event.preventDefault();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    onClick();
  };

  // Check if this is a header navigation button by looking for nav-specific classes
  const isHeaderNav = className.includes('text-gray-300') || className.includes('hover:text-primary-400');

  return (
    <Link
      href={to}
      className={`${className} ${
        isHeaderNav && isActive 
          ? "text-primary-400 after:scale-x-100" 
          : isHeaderNav 
          ? "after:scale-x-0 hover:after:scale-x-100"
          : ""
      } ${isHeaderNav ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-400 after:transition-transform after:duration-300 after:origin-left" : ""}`}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

export default NavButton;