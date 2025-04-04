import styles from "./MedalList.module.css";
import Medal from "../Medal/Medal";

const MedalList = ({ medals = [] }) => {
  return (
    <div className={styles["medal-list"]}>
      {medals.map((medal, index) => (
        <Medal medal={medal} key={index} />
      ))}
    </div>
  );
};
export default MedalList;
