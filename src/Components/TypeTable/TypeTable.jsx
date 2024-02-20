import ImageComponent from "../ImageComponent/ImageComponent";
import "./TypeTable.css";
import { forwardRef } from "react";
const types = require("../../assets/db/type_db.json");

// eslint-disable-next-line no-empty-pattern
const TypeTable = ({}, ref) => {
  return (
    <div className="type-table" ref={ref}>
      <h1 className="title">PLOČE</h1>
      <div className="type-list">
        {types.map((type, index) => {
          return (
            <div key={index} className="type">
              <h2 className="type-number">{type.number}</h2>
              <p className="type-weight">{type.weight + "KG"}</p>

              <div className="type-img">
                <ImageComponent
                  src={type.path}
                  small={type.small}
                  alt={"type-" + type.number}
                  loading="lazy"
                />
              </div>
              <p className="type-height">{type.height + "mm"}</p>
              <div className="height-sizer"></div>
              <div className="width-sizer"></div>
              <p className="type-width">{type.width + "mm"}</p>
              <h2 className="type-price">{type.price + "€"}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default forwardRef(TypeTable);
