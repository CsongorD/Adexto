import "./Type.css";
import Image from "../Image/Image";

const Type = ({ type, index }) => {
  const { number, weight, path, small, height, width, price } = type;
  const loadingType = index < 6 ? "eager" : "lazy";
  return (
    <div key={index} className="type-container">
      <h2 className="type-number">{number}</h2>
      <p className="type-weight">{`${weight}KG`}</p>
      <div className="type-image">
        <Image
          src={path}
          small={small}
          alt={`type-${number}`}
          loading={loadingType}
        />
      </div>
      <p className="type-height">{`${height}mm`}</p>
      <div className="height-sizer"></div>
      <div className="width-sizer"></div>
      <p className="type-width">{`${width}mm`}</p>
      <h2 className="type-price">{`${price}€`}</h2>
    </div>
  );
};
export default Type;
