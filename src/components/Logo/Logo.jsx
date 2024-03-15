import "./Logo.css";
import { NavLink } from "react-router-dom";
import useImages from "../../hooks/useImages";
import Image from "../Image/Image";
import ImageLoading from "../ImageLoading/ImageLoading";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import NavButton from "../NavButton/NavButton";
const Logo = () => {
  const [logo, error] = useImages("logo");

  if (error) {
    return <ErrorComponent error={error.message} />;
  }

  return (
    <div className="logo-container">
      <NavButton
        className="logo"
        to="/"
        text={
          <>
            <div className="logo-image">
              {!logo ? (
                <ImageLoading />
              ) : (
                <Image
                  src={logo[0]?.path}
                  small={logo[0]?.small}
                  alt="adexto-logo"
                  loading="eager"
                />
              )}
            </div>
            <h2>ADEXTO</h2>
          </>
        }
      />
    </div>
  );
};
export default Logo;
