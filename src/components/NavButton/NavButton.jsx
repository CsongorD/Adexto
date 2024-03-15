import "./NavButton.css";
import { NavLink } from "react-router-dom";

const NavButton = ({ to, text, onClick = () => {}, className }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    onClick();
  };

  return (
    <NavLink className={className} to={to} onClick={handleClick}>
      {text}
    </NavLink>
  );
};

export default NavButton;
