import { forwardRef } from "react";
import TypeList from "../TypeList/TypeList";
import styles from "./TypeTable.module.css";

const TypeTable = forwardRef((props, ref) => {
  return (
    <div className={styles["type-table"]} ref={ref}>
      <h1 className="title">PLOČE</h1>
      <TypeList />
    </div>
  );
});

export default TypeTable;
