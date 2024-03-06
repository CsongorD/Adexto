import "./TypesPage.css";

import { useRef } from "react";

import columns from "../../data/column_db.json";
import types from "../../data/type_db.json";

import PriceInfo from "../../components/PriceInfo/PriceInfo";
import TypeTable from "../../components/TypeTable/TypeTable";
import ColumnTable from "../../components/ColumnTable/ColumnTable";

import PlateIcon from "../../components/Icons/PlateIcon";
import ColumnIcon from "../../components/Icons/ColumnIcon";
import InfoIcon from "../../components/Icons/InfoIcon";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>Cenovnik</title>
        <meta
          name="description"
          content="Cenovnik..........................................."
        />
        <link rel="canonical" href="/cenovnik" />
      </Helmet>
      <div className="types-page">
        <div className="section-scroller">
          <div className="section-btn" onClick={() => handleClick(typeSection)}>
            <PlateIcon />
            <p className="section-text">Ploče</p>
          </div>
          <div
            className="section-btn"
            onClick={() => handleClick(columnSection)}
          >
            <ColumnIcon />
            <p className="section-text">Stubovi</p>
          </div>
          <div className="section-btn" onClick={() => handleClick(infoSection)}>
            <InfoIcon />
            <p className="section-text">Info</p>
          </div>
        </div>
        <TypeTable types={types} ref={typeSection} />
        <ColumnTable columns={columns} ref={columnSection} />
        <PriceInfo ref={infoSection} />
      </div>
    </>
  );
};

export default TypesPage;
