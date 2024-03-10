import "./ColumnTable.css";
import { forwardRef } from "react";
import ColumnList from "../ColumnList/ColumnList";

const ColumnTable = forwardRef((_props, ref) => {
  return (
    <div className="column-table" ref={ref}>
      <h1 className="title">STUBOVI</h1>
      <ColumnList />
    </div>
  );
});

export default ColumnTable;
