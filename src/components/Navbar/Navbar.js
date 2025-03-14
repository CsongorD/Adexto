"use client";
import { useEffect, useState } from "react";
import CloseIcon from "../Icons/CloseIcon";
import MenuIcon from "../Icons/MenuIcon";
import NavButton from "../NavButton/NavButton";
import styles from "./Navbar.module.css";

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
    document.body.classList.toggle("sidebar-open", isOpen);
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <button className={styles["menu-icon-container"]} onClick={toggleSidebar}>
        {isOpen ? (
          <CloseIcon className={styles["close-icon"]} />
        ) : (
          <MenuIcon className={styles["menu-icon"]} />
        )}
      </button>
      <div
        className={`${styles["navbar-container"]} ${isOpen ? styles.open : ""}`}
      >
        {NAV_LINKS.map(({ to, text }) => (
          <NavButton
            key={to}
            className={styles["nav-btn"]}
            to={to}
            text={text}
            onClick={closeSidebar}
          />
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
