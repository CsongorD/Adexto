import NavButton from "../components/NavButton/NavButton";
import styles from "../styles/404.module.css";

const NotFound = () => {
  return (
    <div className={styles["not-found-page"]}>
      <p className={styles["not-found-number"]}>404</p>
      <h3 className={styles["not-found-text"]}>
        Sorry, we&apos;re not able to find what you were looking for.
      </h3>
      <NavButton className={styles["nav-btn"]} to={"/"} text={"Naslovna"} />
    </div>
  );
};

export default NotFound;
