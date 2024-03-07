import "./Landing.css";
import { NavLink } from "react-router-dom";

import FenceModel from "../FenceModel/FenceModel";
import PlayIcon from "../Icons/PlayIcon";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-text-container">
        <h1 className="landing-title">ADEXTO D.O.O</h1>
        <p className="landing-text">
          Firma <b>ADEXTO</b> nudi vam betonske ograde sa ugradnjom vrhunskog
          kvaliteta i velikim izborom dezena.
        </p>
        <div className="landing-buttons">
          <NavLink className="nav-btn" to="/cenovnik">
            Cenovnik
          </NavLink>
          <NavLink className="nav-btn btn-transparent" to="/modeli">
            <PlayIcon />
            Modeli
          </NavLink>
        </div>
      </div>
      <FenceModel />
    </div>
  );
};

export default Landing;
