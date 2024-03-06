import "./Loading.css";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-page">
        <div className="icon-container">
          <LoadingIcon />
        </div>
        <div className="name-container">
          <div className="logo-name">ADEXTO</div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
