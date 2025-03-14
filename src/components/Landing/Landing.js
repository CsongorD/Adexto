import FenceModel from "../FenceModel/FenceModel";
import PlayIcon from "../Icons/PlayIcon";
import NavButton from "../NavButton/NavButton";
import styles from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={styles["landing-container"]}>
      <div className={styles["landing-text-container"]}>
        <h1 className={styles["landing-title"]}>ADEXTO D.O.O</h1>
        <p className={styles["landing-text"]}>
          Firma <b>ADEXTO</b> nudi vam betonske ograde sa ugradnjom vrhunskog
          kvaliteta i velikim izborom dezena.
        </p>
        <div className={styles["landing-buttons"]}>
          <NavButton
            className={styles["nav-btn"]}
            to="/cenovnik"
            text={"CENOVNIK"}
          />
          <NavButton
            className={styles["nav-btn"] + " " + styles["btn-transparent"]}
            to="/modeli"
            text={
              <>
                <PlayIcon className={styles["play-icon"]} />
                MODELI
              </>
            }
          />
        </div>
      </div>
      <FenceModel />
    </div>
  );
};

export default Landing;
