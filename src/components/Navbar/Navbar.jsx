import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../Icons/MenuIcon";
import CloseIcon from "../Icons/CloseIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  if (isOpen) {
    document.body.classList.add("sidebar-open");
  } else {
    document.body.classList.remove("sidebar-open");
  }
  let c = isOpen ? "open" : "";

  return (
    <div className="navbar-container">
      <div className="menu-icon-container" onClick={() => toggleSidebar()}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={"navbar " + c}>
        <li>
          <NavLink className="nav-btn" to="/" onClick={() => closeSidebar()}>
            Naslovna
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-btn"
            to="/cenovnik"
            onClick={() => closeSidebar()}
          >
            Cenovnik
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-btn"
            to="/betonske-ograde"
            onClick={() => closeSidebar()}
          >
            Modeli
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-btn"
            to="/galerija"
            onClick={() => closeSidebar()}
          >
            Galerija
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-btn"
            to="/kontakt"
            onClick={() => closeSidebar()}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
