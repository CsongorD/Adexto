import "./Characteristics.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const Characteristics = ({ characteristics }) => {
  if (!characteristics) {
    return <ErrorComponent text={"characteristics"} />;
  }
  return (
    <div className="characteristic-container">
      {characteristics.map((characteristic, index) => (
        <div className="characteristic" key={index}>
          <div className="characteristic-image">
            <ImageComponent
              src={characteristic.path}
              alt={characteristic.text + "-logo"}
              small={characteristic.small}
              loading={"lazy"}
            />
          </div>
          <p>{characteristic.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Characteristics;
