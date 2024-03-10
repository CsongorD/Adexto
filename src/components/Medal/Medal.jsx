import "./Medal.css";
import Image from "../Image/Image";
const Medal = ({ medal }) => {
  const { path, small } = medal;
  return (
    <div className="medal-container">
      <Image src={path} small={small} alt="medal" loading={"lazy"} />
    </div>
  );
};
export default Medal;
