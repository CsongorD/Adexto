import Image from "../Image/Image";
import styles from "./Characteristic.module.css";

const Characteristic = ({ characteristic }) => {
  const { path, text, small } = characteristic;
  return (
    <div className={styles["characteristic-container"]}>
      <div className={styles["characteristic-image"]}>
        <Image src={path} alt={text + "-logo"} small={small} loading={"lazy"} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Characteristic;
