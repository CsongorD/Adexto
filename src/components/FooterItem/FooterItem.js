// import { memo } from "react";
import styles from "./FooterItem.module.css";

const FooterItem = ({ icon, title, info }) => {
  return (
    <div className={styles["info-container"]}>
      <div className={styles["icon-container"]} aria-label={title}>
        {icon}
      </div>
      <div className={styles["info-text"]}>
        <p className={styles["footer-info-title"]}>{title}</p>
        <p className={styles["footer-info"]}>{info}</p>
      </div>
    </div>
  );
};

export default FooterItem;
