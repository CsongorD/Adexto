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

  return (
    <Link
      href={to}
      className={`${className} ${
        isActive 
          ? "text-primary-400 after:scale-x-100" 
          : "after:scale-x-0 hover:after:scale-x-100"
      } relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-400 after:transition-transform after:duration-300 after:origin-left`}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

export default NavButton;