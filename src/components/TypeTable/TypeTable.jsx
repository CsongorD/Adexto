import "./TypeTable.css";
import { forwardRef } from "react";
import TypeList from "../TypeList/TypeList";

const TypeTable = forwardRef((_props, ref) => {
  return (
    <div className="type-table" ref={ref}>
      <h1 className="title">PLOČE</h1>
      <TypeList />
    </div>
  );
});

export default TypeTable;
