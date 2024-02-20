import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
};
export default Header;
