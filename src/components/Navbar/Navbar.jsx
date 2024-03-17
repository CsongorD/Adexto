import "./Navbar.css";
import { useState, useEffect } from "react";
import MenuIcon from "../Icons/MenuIcon";
import CloseIcon from "../Icons/CloseIcon";
import NavButton from "../NavButton/NavButton";
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

  let open = isOpen ? " open" : "";

  return (
    <div className="navbar">
      <div className="menu-icon-container" onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className={"navbar-container" + open}>
        <NavButton
          className={"nav-btn"}
          to="/"
          text={"Naslovna"}
          onClick={closeSidebar}
        />
        <NavButton
          className={"nav-btn"}
          to="/cenovnik"
          text={"Cenovnik"}
          onClick={closeSidebar}
        />
        <NavButton
          className={"nav-btn"}
          to="/modeli"
          text={"Modeli"}
          onClick={closeSidebar}
        />
        <NavButton
          className={"nav-btn"}
          to="/galerija"
          text={"Galerija"}
          onClick={closeSidebar}
        />
        <NavButton
          className={"nav-btn"}
          to="/kontakt"
          text={"Kontakt"}
          onClick={closeSidebar}
        />
      </div>
    </div>
  );
};
export default Navbar;
