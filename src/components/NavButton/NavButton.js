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
      className={className}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

export default NavButton;