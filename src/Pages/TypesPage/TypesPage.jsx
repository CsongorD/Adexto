import { useRef } from "react";

import "./TypesPage.css";

import Header from "../../Components/Header/Header";
import TypeTable from "../../Components/TypeTable/TypeTable";
import ColumnTable from "../../Components/ColumnTable/ColumnTable";
import PriceInfo from "../../Components/PriceInfo/PriceInfo";
import Footer from "../../Components/Footer/Footer";

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
      <Header />
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

      <TypeTable ref={typeSection} />
      <ColumnTable ref={columnSection} />
      <PriceInfo ref={infoSection} />

      <Footer />
    </div>
  );
};

export default TypesPage;
