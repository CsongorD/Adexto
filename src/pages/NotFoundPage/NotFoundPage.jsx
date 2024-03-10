import "./NotFoundPage.css";
import { NavLink } from "react-router-dom";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="loading-logo-container">
        <LoadingIcon />
      </div>
      <h1>404</h1>
      <h2>NOT FOUND</h2>
      <div className="redirect-button-container">
        <NavLink className="nav-btn" to="/" reloadDocument="true">
          GO BACK
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
