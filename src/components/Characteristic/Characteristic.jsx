import "./Characteristic.css";
import Image from "../Image/Image";

const Characteristic = ({ characteristic }) => {
  const { path, text, small } = characteristic;
  return (
    <div className="characteristic-container">
      <div className="characteristic-image">
        <Image src={path} alt={text + "-logo"} small={small} loading={"lazy"} />
      </div>
      <h3>{text}</h3>
    </div>
  );
};

export default Characteristic;
