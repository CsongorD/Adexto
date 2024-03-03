import "./ColumnTable.css";
import { forwardRef } from "react";
import ImageComponent from "../ImageComponent/ImageComponent";

const ColumnTable = forwardRef(({ columns }, ref) => {
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
    </div>
  );
});

export default ColumnTable;
