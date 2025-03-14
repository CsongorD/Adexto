import { forwardRef } from "react";
import ColumnList from "../ColumnList/ColumnList";
import styles from "./ColumnTable.module.css";

const ColumnTable = forwardRef((_props, ref) => {
  return (
    <div className={styles["column-table"]} ref={ref}>
      <h1 className={styles.title}>STUBOVI</h1>
      <ColumnList />
    </div>
  );
});

export default ColumnTable;
