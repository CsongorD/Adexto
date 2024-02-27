import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  if (isOpen) {
    document.body.classList.add("sidebar-open");
  } else {
    document.body.classList.remove("sidebar-open");
  }
  let c = isOpen ? "open" : "";

  return (
    <div>
      <div className="menu-icon-container" onClick={() => toggleSidebar()}>
        {isOpen ? (
          <box-icon id="menu-icon" name="x"></box-icon>
        ) : (
          <box-icon id="menu-icon" name="menu"></box-icon>
        )}
      </div>
      <ul className={"navbar " + c}>
        <li>
          <NavLink className="nav-btn" to="/">
            Naslovna
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/cenovnik">
            Cenovnik
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/betonske-ograde">
            Modeli
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/galerija">
            Galerija
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/kontakt">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
