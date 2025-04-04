import Image from "../Image/Image";
import styles from "./Medal.module.css";
const Medal = ({ medal: { path, small } }) => {
  return (
    <div className={styles["medal-container"]}>
      <Image src={path} small={small} alt="medal" priority={false} />
    </div>
  );
};
export default Medal;
