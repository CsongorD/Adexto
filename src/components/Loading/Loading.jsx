import "./Loading.css";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-logo-container">
        <LoadingIcon />
      </div>
      <div className="logo-name">ADEXTO</div>
    </div>
  );
};
export default Loading;
