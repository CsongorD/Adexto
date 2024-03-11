import "./TypesPage.css";
import { useRef } from "react";
import TypeTable from "../../components/TypeTable/TypeTable";
import ColumnTable from "../../components/ColumnTable/ColumnTable";
import PriceInfo from "../../components/PriceInfo/PriceInfo";

import PlateIcon from "../../components/Icons/PlateIcon";
import ColumnIcon from "../../components/Icons/ColumnIcon";
import InfoIcon from "../../components/Icons/InfoIcon";

const TypesPage = () => {
  const typeSectionRef = useRef();
  const columnSectionRef = useRef();
  const infoSectionRef = useRef();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop - 80,
      behavior: "smooth",
    });
  };
  return (
    <div className="types-page page-margin-top">
      <div className="section-scroller-container">
        <div
          className="section-button"
          onClick={() => scrollToSection(typeSectionRef)}
        >
          <PlateIcon />
          <p className="section-text">Ploče</p>
        </div>
        <div
          className="section-button"
          onClick={() => scrollToSection(columnSectionRef)}
        >
          <ColumnIcon />
          <p className="section-text">Stubovi</p>
        </div>
        <div
          className="section-button"
          onClick={() => scrollToSection(infoSectionRef)}
        >
          <InfoIcon />
          <p className="section-text">Info</p>
        </div>
      </div>
      <TypeTable ref={typeSectionRef} />
      <ColumnTable ref={columnSectionRef} />
      <PriceInfo ref={infoSectionRef} />
    </div>
  );
};
export default TypesPage;
