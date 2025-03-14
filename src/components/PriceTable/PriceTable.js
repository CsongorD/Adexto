"use client";

import React, { useRef } from "react";
import ColumnTable from "../ColumnTable/ColumnTable";
import ColumnIcon from "../Icons/ColumnIcon";
import InfoIcon from "../Icons/InfoIcon";
import PlateIcon from "../Icons/PlateIcon";
import PriceInfo from "../PriceInfo/PriceInfo";
import TypeTable from "../TypeTable/TypeTable";
import styles from "./PriceTable.module.css";

export default function TypesPage() {
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
    <div className="page-margin-top">
      <div className={styles["section-scroller-container"]}>
        <div
          className={styles["section-button"]}
          onClick={() => scrollToSection(typeSectionRef)}
        >
          <PlateIcon className={styles["plate-icon"]} />
          <h3 className={styles["section-text"]}>Ploče</h3>
        </div>
        <div
          className={styles["section-button"]}
          onClick={() => scrollToSection(columnSectionRef)}
        >
          <ColumnIcon className={styles["column-icon"]} />
          <h3 className={styles["section-text"]}>Stubovi</h3>
        </div>
        <div
          className={styles["section-button"]}
          onClick={() => scrollToSection(infoSectionRef)}
        >
          <InfoIcon className={styles["info-icon"]} />
          <h3 className={styles["section-text"]}>Info</h3>
        </div>
      </div>
      <TypeTable ref={typeSectionRef} />
      <ColumnTable ref={columnSectionRef} />
      <PriceInfo ref={infoSectionRef} />
    </div>
  );
}
