import "./Logo.css";
import { NavLink } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <NavLink className="logo" to="/">
      <div className="logo-image">
        <img src={logo[0].path} alt="adexto-logo" />
      </div>
      <h2>ADEXTO</h2>
    </NavLink>
  );
};
export default Logo;
