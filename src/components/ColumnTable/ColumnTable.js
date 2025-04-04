import { forwardRef } from "react";
import ColumnList from "../ColumnList/ColumnList";
import styles from "./ColumnTable.module.css";

const ColumnTable = forwardRef((_props, ref) => {
  return (
    <div className={styles["column-table"]} ref={ref}>
      <h1 className="title">STUBOVI</h1>
      <ColumnList />
    </div>
  );
});
ColumnTable.displayName = "ColumnTable";
export default ColumnTable;
