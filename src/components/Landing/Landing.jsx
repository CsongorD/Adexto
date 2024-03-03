import "./Landing.css";
import "boxicons";

import FenceModel from "../FenceModel/FenceModel";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-text-container">
        <div className="landing-text">
          <h1>ADEXTO D.O.O</h1>
          <p>
            Firma <b>ADEXTO</b> nudi vam betonske ograde sa ugradjnom vrhunskog
            kvaliteta i velikim izborom dezena.
          </p>

          <NavLink className="nav-btn" to="/cenovnik">
            Cenovnik
          </NavLink>
          <NavLink className="nav-btn btn-transparent" to="/betonske-ograde">
            <box-icon name="play" id="play-icon"></box-icon>
            Modeli
          </NavLink>
        </div>
      </div>
      <FenceModel />
    </div>
  );
};

export default Landing;
