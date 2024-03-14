import "./NotFoundPage.css";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";
import NavButton from "../../components/NavButton/NavButton";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-header">
        <div className="loading-logo-container">
          <LoadingIcon />
        </div>
        <h1>ADEXTO</h1>
      </div>
      <div className="not-found-main">
        <p className="not-found-number">404</p>
        <p className="not-found-text">
          Sorry, we're not able to find what you were looking for.
        </p>

        <NavButton className={"nav-btn"} to={"/"} text={"Naslovna"} />
      </div>
      <div className="not-found-footer">
        <p>@2024 Adexto Error Page. All rights reserved</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
