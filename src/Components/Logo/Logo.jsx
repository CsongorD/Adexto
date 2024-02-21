// import { NavLink } from "react-router-dom";
import "boxicons";
import "./Logo.css";
import logo from "../../assets/db/logo_db.json";
import ImageComponent from "../ImageComponent/ImageComponent";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink className={"logo"} to={"/"}>
      <div className="logo-image">
        <ImageComponent
          src={logo[0].path}
          alt="adexto-logo"
          loading={"lazy"}
          small={logo[0].small}
        />
      </div>
      <h2>ADEXTO</h2>
    </NavLink>
  );
};
export default Logo;
