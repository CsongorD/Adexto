import "./Footer.css";
import "boxicons";
const Footer = function Footer() {
  return (
    <footer className="footer">
      <h3>ADEXTO D.O.O</h3>
      <div className="footer-container">
        <div className="info-container">
          <div className="icon-container">
            <box-icon id="icon" name="map"></box-icon>
          </div>
          <div className="info-text">
            <p className="footer-title">Lokacija</p>
            <p>Servo Mihalja BB, 23206 Zrenjanin (Mužlja)</p>
          </div>
        </div>

        <div className="info-container">
          <div className="icon-container">
            <box-icon id="icon" name="phone"></box-icon>
          </div>

          <div className="info-text">
            <p className="footer-title">Telefon</p>
            <p>+381 66 8822 339</p>
          </div>
        </div>

        <div className="info-container">
          <div className="icon-container">
            <box-icon id="icon" name="envelope"></box-icon>
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
