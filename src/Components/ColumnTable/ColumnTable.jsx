import ImageComponent from "../ImageComponent/ImageComponent";
import "./ColumnTable.css";
import { forwardRef } from "react";

const columns = require("../../assets/db/column_db.json");
// eslint-disable-next-line no-empty-pattern
const ColumnTable = ({}, ref) => {
  return (
    <div className="column-table" ref={ref}>
      <h1 className="title">STUBOVI</h1>
      <div className="column-list">
        {columns.map((column, index) => {
          return (
            <div key={index} className="column-container">
              <h2 className="column-title">{column.name}</h2>
              <div className="column-img">
                <ImageComponent
                  src={column.path}
                  alt={column.name}
                  small={column.small}
                  loading="lazy"
                />
              </div>
              <div className="column-lengths">
                <h3>DUŽINE:</h3>
                {column.options.map((opt, index) => (
                  <div key={index} className="lengths">
                    <h3>
                      {opt.length.toFixed(1) +
                        " m ( ukupna dužina: " +
                        opt.full_length +
                        " m ) => " +
                        opt.price +
                        "€"}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="column-list">
        <h3>Stub na 1.5m</h3>
        <h4>Ukupna duzina 2.1m</h4>
        <h2>12€</h2>
        <br />
        <h3>Stub na 2.0m</h3>
        <h4>Ukupna duzina 2.8m</h4>
        <h2>14€</h2>
        <br />
        <h3>Stub na 2.5m</h3>
        <h4>Ukupna duzina 3.3m</h4>
        <h2>28€</h2>
        <br />
        <br />
        <h3>Stub zaversni 1.5m</h3>
        <h2>14€</h2>
        <br />
        <h3>Stub zaversni 2.0m</h3>
        <h2>16€</h2>
        <br />
        <br />

        <h4>Stub ukrasni sa kapom na 1.5m visine</h4>
        <h2>18€</h2>
        <br />

        <h4>Stub ukrasni sa kapom na 2.0m visine</h4>
        <h2>23€</h2>
      </div> */}
    </div>
  );
};

export default forwardRef(ColumnTable);
