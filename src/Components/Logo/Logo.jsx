// import { NavLink } from "react-router-dom";
import "boxicons";
import "./Logo.css";
import logo from "../../assets/db/icon_db.json";
import ImageComponent from "../ImageComponent/ImageComponent";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink className={"logo"} to={"/"}>
      <div className="logo-image">
        <ImageComponent src={logo[0]} alt="adexto-logo" loading={"lazy"} />
      </div>
      <h2>ADEXTO</h2>
    </NavLink>
  );
};
export default Logo;
