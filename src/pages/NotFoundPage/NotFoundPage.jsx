import "./NotFoundPage.css";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="error-container">
      <div className="icon-container">
        <LoadingIcon />
      </div>
      <h1>404</h1>
      <h2>NOT FOUND</h2>
      <div className="btn-cont">
        <NavLink className="nav-btn" to={"/"}>
          GO BACK
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
