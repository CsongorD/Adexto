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

    // <div className="landing">
    //   <div className="icons">
    //     <a href="tel:+381 66-8822 339">
    //       <BsTelephone className="icon" />
    //     </a>
    //     <a href="mailto:info@adexto.com">
    //       <MdMailOutline className="icon" />
    //     </a>
    //     <a
    //       href="https://www.youtube.com/channel/UCTaba6A16VpO8JnXnQfso1w"
    //       target="#"
    //     >
    //       <BsYoutube className="icon" />
    //     </a>
    //   </div>

    /* <div className="scroll-down">
        <a href="/">
          <i>
            <box-icon type="solid" name="down-arrow" color="white"></box-icon>
          </i>
        </a>
      </div> */
    // </div>
  );
};

export default Landing;
