import LoadingIcon from "../components/LoadingIcon/LoadingIcon";
import NavButton from "../components/NavButton/NavButton";
import styles from "../styles/404.module.css";

const NotFound = () => {
  return (
    <div className={styles["not-found-page"]}>
      <div className={styles["not-found-header"]}>
        <div className={styles["loading-logo-container"]}>
          <LoadingIcon />
        </div>
        <h1>ADEXTO</h1>
      </div>
      <div className={styles["not-found-main"]}>
        <p className={styles["not-found-number"]}>404</p>
        <h3 className={styles["not-found-text"]}>
          Sorry, we're not able to find what you were looking for.
        </h3>

        <NavButton className={styles["nav-btn"]} to={"/"} text={"Naslovna"} />
      </div>
      <div className={styles["not-found-footer"]}>
        <p>©2025 Adexto. All rights reserved.</p>
      </div>
    </div>
  );
};

export default NotFound;
