import "./Footer.css";
import PhoneIcon from "../Icons/PhoneIcon";
import MailIcon from "../Icons/MailIcon";
import LocationIcon from "../Icons/LocationIcon";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-main-title">ADEXTO D.O.O</p>
      <div className="footer-container">
        <div className="info-container">
          <div className="icon-container">
            <LocationIcon />
          </div>
          <div className="info-text">
            <p className="footer-title">Lokacija</p>
            <p>Servo Mihalja BB, 23206 Zrenjanin (Mužlja)</p>
          </div>
        </div>

        <div className="info-container">
          <div className="icon-container">
            <PhoneIcon />
          </div>

          <div className="info-text">
            <p className="footer-title">Telefon</p>
            <p>+381 66 8822 339</p>
          </div>
        </div>

        <div className="info-container">
          <div className="icon-container">
            <MailIcon />
          </div>
          <div className="info-text">
            <p className="footer-title">Mail</p>
            <p>info@adexto.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
