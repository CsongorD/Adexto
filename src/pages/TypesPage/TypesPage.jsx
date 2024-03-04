import "./TypesPage.css";

import { useRef } from "react";

import columns from "../../data/column_db.json";
import types from "../../data/type_db.json";

import PriceInfo from "../../components/PriceInfo/PriceInfo";
import TypeTable from "../../components/TypeTable/TypeTable";
import ColumnTable from "../../components/ColumnTable/ColumnTable";

const TypesPage = () => {
  const typeSection = useRef();
  const columnSection = useRef();
  const infoSection = useRef();

  const handleClick = (elementRef) => {
    console.log(elementRef);
    window.scrollTo({
      top: elementRef.current?.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <div className="types-page">
      <div className="section-scroller">
        <div className="section-btn" onClick={() => handleClick(typeSection)}>
          <box-icon id="section-icon" name="building"></box-icon>
          <p className="section-text">Ploče</p>
        </div>
        <div className="section-btn" onClick={() => handleClick(columnSection)}>
          <box-icon
            id="section-icon"
            name="bar-chart-alt-2"
            type="solid"
          ></box-icon>
          <p className="section-text">Stubovi</p>
        </div>
        <div className="section-btn" onClick={() => handleClick(infoSection)}>
          <box-icon id="section-icon" name="info-circle"></box-icon>
          <p className="section-text">Info</p>
        </div>
      </div>
      <TypeTable types={types} ref={typeSection} />
      <ColumnTable columns={columns} ref={columnSection} />
      <PriceInfo ref={infoSection} />
    </div>
  );
};

export default TypesPage;
