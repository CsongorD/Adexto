import "./Landing.css";
import { NavLink } from "react-router-dom";

import FenceModel from "../FenceModel/FenceModel";
import PlayIcon from "../Icons/PlayIcon";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-text-container">
        <div className="landing-text">
          <h1>ADEXTO D.O.O</h1>
          <p>
            Firma <b>ADEXTO</b> nudi vam betonske ograde sa ugradnjom vrhunskog
            kvaliteta i velikim izborom dezena.
          </p>

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
