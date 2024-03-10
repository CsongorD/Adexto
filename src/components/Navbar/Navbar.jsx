import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../Icons/MenuIcon";
import CloseIcon from "../Icons/CloseIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  let open = isOpen ? "open" : "";

  return (
    <div className="navbar">
      <div className="menu-icon-container" onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={"navbar-container " + open}>
        <li>
          <NavLink className="nav-btn" to="/" onClick={closeSidebar}>
            Naslovna
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/cenovnik" onClick={closeSidebar}>
            Cenovnik
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/modeli" onClick={closeSidebar}>
            Modeli
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/galerija" onClick={closeSidebar}>
            Galerija
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/kontakt" onClick={closeSidebar}>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
