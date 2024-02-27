import "boxicons";
import "./Logo.css";
import logo from "../../assets/db/logo_db.json";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink className={"logo"} to={"/"}>
      <div className="logo-image">
        <img src={logo[0].path} alt="adexto-logo" />
      </div>
      <h2>ADEXTO</h2>
    </NavLink>
  );
};
export default Logo;
