"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Updated for Next.js App Router
import styles from "../Navbar/Navbar.module.css";

const NavButton = ({ to, text, onClick = () => {}, className = "" }) => {
  const pathname = usePathname(); // Replaces useRouter() for Next.js App Router
  let isActive = false;

  if (pathname === "/") {
    isActive = pathname === to;
  } else {
    isActive = pathname.slice(0, -1) === to;
  }
  const handleClick = (event) => {
    if (pathname === to) {
      event.preventDefault(); // Prevents reloading the same page
    }
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling
    onClick();
  };

  return (
    <Link
      href={to}
      className={`${className} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

export default NavButton;
