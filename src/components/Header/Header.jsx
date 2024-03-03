import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

import logo from "../../data/logo_db.json";

const Header = () => {
  return (
    <header className="header">
      <Logo logo={logo} />
      <Navbar />
    </header>
  );
};
export default Header;
