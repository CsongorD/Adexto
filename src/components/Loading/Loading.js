import LoadingIcon from "../LoadingIcon/LoadingIcon";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles["loading"]} role="status" aria-live="polite">
      <div className={styles["loading-logo-container"]}>
        <LoadingIcon />
      </div>
      <div className={styles["logo-name"]}>ADEXTO</div>
    </div>
  );
};
export default Loading;
